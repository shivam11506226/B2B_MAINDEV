import { apiURL } from "../../../Constants/constant";
import { Grid, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector, useRef } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import "./hotelstepper.css";
import { clearHotelReducer, hotelAction } from "../../../Redux/Hotel/hotel";
import Loader from "../../Loader/Loader";
import Custombutton from "../../../Custombuttom/Button";
import color from "../../../../src/color/color.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaTrash } from "react-icons/fa";
const HotelForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cityid, setCityid] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // error manage
  const [cityError, setCityError] = useState("");
  const [checkInError, setCheckInError] = useState("");
  const [checkOutError, setCheckOutError] = useState("");
  const [condition, setCondition] = useState(1);
  const [formDataDynamic, setFormData] = useState([
    {
      NoOfAdults: 1,
      NoOfChild: 0,
      ChildAge: [],
    },
  ]);

  const reducerState = useSelector((state) => state);
  // console.log("State Data", reducerState);

  const errorCode =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
      ?.Error?.ErrorCode;
  const errorMsg =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
      ?.Error?.ErrorMessage;

  const initialvalue = {
    City: "",
    nationality: "IN",
  };
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [values, setValues] = useState(initialvalue);
  const [error, setError] = useState({
    nationality: false,
  });
  const [sub, setSub] = useState(false)

  const [isVisible, setIsVisible] = useState(false);
  const changeHandler = (e) => {
    if (e.target.value === "number") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    dispatch(clearHotelReducer());
  }, [dispatch]);

  useEffect(() => {
    if (reducerState?.hotelSearchResult?.isLoading == true) {
      setLoader(true);
    }
  }, [reducerState?.hotelSearchResult?.isLoading]);

  useEffect(() => {
    if (
      reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
        ?.HotelResults?.length >= 0
    ) {
      setLoader(false);
      navigate("/hotel/hotelsearch");
    }
  }, [
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
      ?.HotelResults,
  ]);
  //fetch city Logic implemented below
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm) {
        fetchCities();
      } else {
        setResults([]);
      }
    }, 300); // Adjust the debounce delay as needed (e.g., 300ms)

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  const fetchCities = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${apiURL.baseURL}/skyTrails/city/hotelCitySearch?keyword=${searchTerm} `
      );
      setResults(response.data.data);
      // console.log("cities", response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setLoading(false);
    }
  };
  const handleConditionChange = (event) => {
    const newCondition = parseInt(event.target.value);
    setCondition(newCondition);
    const newFormData = Array.from({ length: newCondition }, () => ({
      NoOfAdults: 1,
      NoOfChild: 0,
      ChildAge: [],
    }));
    setFormData(newFormData);
  };

  const handleFormChange = (index, key, value) => {
    const updatedFormData = [...formDataDynamic];
    if (key === "NoOfAdults" && value > 8) {
      value = 8; // Limit the number of adults to a maximum of 8
    }
    updatedFormData[index][key] = value;

    // Set ChildAge to null when NoOfChild is 0
    if (key === "NoOfChild" && value === 0) {
      updatedFormData[index]["ChildAge"] = null;
    }

    setFormData(updatedFormData);
  };



  const handleChildAgeChange = (index, childIndex, value) => {
    const updatedFormData = [...formDataDynamic];
    updatedFormData[index].ChildAge[childIndex] = value;
    setFormData(updatedFormData);
  };




  const handleDeleteRoom = () => {
    if (condition > 1) {
      setCondition(condition - 1);
      setFormData(formDataDynamic.slice(0, condition - 1));
    }
  };

  const handleResultClick = (city) => {
    setSearchTerm(city.Destination); // Set the input field's value to the selected city
    //Below is cityId to send in payload
    setCityid(city.cityid);
    setResults([]); // Clear the results
    setCityError("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setError({
      nationality: false,
    });
  };

  const handleStartDateChange = (date) => {
    setValues({ ...values, departure: date }); // Update the departure date
    // setCheckInError("");
  };

  const handleEndDateChange = (date) => {
    setValues({ ...values, checkOutDeparture: date }); // Update the checkOutDeparture date
    // setCheckOutError("");
  };

  function handleSubmit(event) {
    event.preventDefault();
    setSub(true)
    console.warn(values.departure, values.checkOutDeparture, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    if (values.departure === ("" || undefined)) {
      return
    }
    if (values.checkOutDeparture === ("" || undefined)) {
      return
    }

    const formData = new FormData(event.target);


    const date = new Date(formData.get("departure"));

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;


    // saving in session storage

    const sessionData = new FormData(event.target);

    // Extract specific fields
    const city = sessionData.get('City');
    const checkIn = sessionData.get('checkIn');
    const checkOut = sessionData.get('checkOut');
    const room = sessionData.get('room');
    const star = sessionData.get('star');
    const night = sessionData.get('night');
    const nationality = sessionData.get('nationality');

    // Extract data from dynamic form fields
    const dynamicFormData = formDataDynamic.map((data) => ({
      NoOfAdults: data.NoOfAdults || 0,
      NoOfChild: data.NoOfChild || 0,
      ChildAge: data.ChildAge || [],
    }));

    // Combine all data into a single object
    const formFields = {
      city,
      checkIn,
      checkOut,
      room,
      star,
      night,
      nationality,
      dynamicFormData,
    };

    // Save the extracted form data to sessionStorage
    sessionStorage.setItem('hotelFormData', JSON.stringify(formFields));

    // saving in session storage 


    // validate Error

    if (!cityid) {
      setCityError("city is Required");
    } else {
      const newErrors = {
        nationality: false,
      };

      if (values.nationality.length < 1) {
        newErrors.nationality = true;
      }

      setError(true);
      if (Object.values(newErrors).some((error) => error)) {
        return;
      }

      const departureDate = new Date(values.departure);
      const day = departureDate.getDate().toString().padStart(2, "0");
      const month = (departureDate.getMonth() + 1).toString().padStart(2, "0");
      const year = departureDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      const payload = {
        CheckInDate: formattedDate,
        NoOfNights: formData.get("night"),
        CountryCode: "IN",
        CityId: cityid,
        ResultCount: null,
        PreferredCurrency: "INR",
        // GuestNationality: formData.get("nationality"),
        GuestNationality: "IN",
        NoOfRooms: condition,
        RoomGuests: [...formDataDynamic],
        MaxRating: formData.get("star"),
        MinRating: 0,
        ReviewScore: null,
        IsNearBySearchAllowed: false,
        EndUserIp: reducerState?.ip?.ipData,
        TokenId: reducerState?.ip?.tokenData,
      };
      // console.log(payload)

      // const totalGuest = `${parseInt(formData.get("adult")) + parseInt("0")}`;
      // sessionStorage.setItem("totalGuest", totalGuest);
      dispatch(hotelAction(payload));
      if (
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.ticketData?.data?.data
      ) {
        setOpen(false);
      }
      setOpen(true);
    }
  }

  const currentDate = new Date(values.departure);
  const toDate = new Date(values.checkOutDeparture);
  const timeDifference = toDate.getTime() - currentDate.getTime();
  const nightdays = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="container hotelContainer">
          <form onSubmit={handleSubmit} className="formFlightSearch">
            <div className="container">
              <div className="row rowcon g-2 gx-3">
                <div className=" col-md-12 col-lg-12 col-xs-12 ps-0 mb-3">
                  <div className="hotel_form_input">
                    <label className="form_label">City</label>
                    <input
                      name="City"
                      id="CitySearchID"
                      type="text"
                      placeholder="Search for a city..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{ position: "relative" }}
                    />
                    {cityError !== "" && (
                      <span className="error">{cityError}</span>
                    )}
                    {/* { citciError !== "" && (
                      <span className="error">{cityError}</span>
                    )} */}

                    {loading && <div>Loading...</div>}
                    {results.length > 0 && (
                      <ul id="citySearchId">
                        {results.map((city, index) => (
                          <li key={index} onClick={() => handleResultClick(city)}>
                            {city.Destination}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-xs-12 ps-0 mb-3">
                  <div className="hotel_form_input">
                    <label className="form_label">Check In</label>
                    <DatePicker
                      selected={values.departure}
                      onChange={handleStartDateChange}
                      name="checkIn"
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select Check-In Date"
                      isClearable
                      // id="datepic"
                      minDate={new Date()}
                    />
                    {sub && values.departure === ("" || undefined) && (
                      <span className="error">Enter Check-In Date </span>
                    )}
                  </div>
                </div>


                <div className="col-lg-4 col-md-4 col-xs-12 ps-0 mb-3">
                  <div className="hotel_form_input">
                    <label className="form_label">Check-Out</label>
                    <DatePicker
                      selected={values.checkOutDeparture}
                      onChange={handleEndDateChange}
                      name="checkOut"
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select Check-Out Date"
                      minDate={values.departure || new Date()} // Disable dates before Check-In date
                      isClearable
                    // id="datepic"
                    />
                    {sub && values.checkOutDeparture === ("" || undefined) && (
                      <span className="error">Enter Check-Out Date </span>
                    )}
                  </div>
                </div>


                <div className="col-lg-4 col-md-4 col-xs-12 ps-0 mb-3">
                  <div className="hotel_form_input">
                    <label className="form_label">Room*</label>
                    <select
                      name="room"
                      value={condition}
                      onChange={handleConditionChange}
                      className="hotel_input_select"
                    >

                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                    {/* Add validation error message if needed */}
                  </div>
                </div>



                {/* <Box> */}
                <div className="col-lg-12 col-md-12 col-xs-12 ps-0 mb-3">
                  {condition > 0 &&
                    Array.from({ length: condition }).map((_, index) => (
                      <div key={index} className="room-container">
                        <div className="row">
                          <div className={`col-lg-4 col-md-4 col-xs-4 ps-0 mb-3 d-flex justify-content-center ${formDataDynamic[index]?.NoOfChild > 0 ? "align-items-start" : "align-items-center"}`}>
                            <h5>ROOM {index + 1}</h5>
                          </div>
                          <div className="col-lg-4 col-md-4 col-xs-4 ps-0 mb-3 d-flex justify-content-center">
                            <div className="hotel_form_input">
                              <label className="form_label">No of Adults:</label>
                              <select
                                value={formDataDynamic[index]?.NoOfAdults || 1}
                                className="hotel_input_select"
                                onChange={(e) =>
                                  handleFormChange(
                                    index,
                                    "NoOfAdults",
                                    parseInt(e.target.value)
                                  )
                                }
                              >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                  <option key={num} value={num}>
                                    {num}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-xs-4 ps-0 mb-3 d-flex justify-content-center">
                            <div className="hotel_form_input">
                              <label className="form_label">No of Child:</label>
                              <select
                                value={formDataDynamic[index]?.NoOfChild || 0}
                                className="hotel_input_select"
                                name="noOfChild"
                                onChange={(e) =>
                                  handleFormChange(
                                    index,
                                    "NoOfChild",
                                    parseInt(e.target.value)
                                  )
                                }
                              >
                                {[0, 1, 2, 3, 4].map((childCount) => (
                                  <option key={childCount} value={childCount}>
                                    {childCount}
                                  </option>
                                ))}
                              </select>
                              {formDataDynamic[index]?.NoOfChild > 0 && (
                                <div className="child-age-container">
                                  <label>Child Age:</label>
                                  {Array.from({
                                    length: formDataDynamic[index]?.NoOfChild || 0,
                                  }).map((_, childIndex) => (
                                    <div key={childIndex} className="child-age-input">
                                      <select
                                        value={formDataDynamic[index]?.ChildAge?.[childIndex] || ""}
                                        className="hotel_input_select"
                                        onChange={(e) =>
                                          handleChildAgeChange(index, childIndex, e.target.value)
                                        }
                                      >
                                        {/* Assuming the age range is from 1 to 12 */}
                                        {Array.from({ length: 12 }, (_, i) => (
                                          <option key={i} value={i + 1}>
                                            {i + 1}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  ))}
                                </div>
                              )}

                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  {condition > 1 && (
                    <button onClick={handleDeleteRoom} className="delete-button">
                      <FaTrash />
                    </button>
                  )}

                </div>


                <div className="col-lg-4 col-md-4 col-xs-12 ps-0 mb-3">
                  <div className="hotel_form_input">
                    <label className="form_label">Star Rating*</label>
                    <select
                      name="star"
                      value={values.star || 5}
                      onChange={handleInputChange}
                      className="hotel_input_select"
                    >
                      <option value="1">1 Star</option>
                      <option value="2">2 Star</option>
                      <option value="3">3 Star</option>
                      <option value="4">4 Star</option>
                      <option value="5">5 Star</option>
                    </select>
                    {error && values.star === "" && (
                      <label className="error_label">
                        Please Select a Star Rating{" "}
                      </label>
                    )}
                  </div>
                </div>


                <div className="col-lg-4 col-md-4 col-xs-12 ps-0 mb-3">
                  <div className="hotel_form_input">
                    <label className="form_label">Nights</label>
                    <input
                      type="number"
                      min="0"
                      name="night"
                      value={nightdays}
                      className="hotel_input_select"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-xs-12 ps-0 mb-3">
                  <div className="hotel_form_input">
                    <label className="form_label">
                      Nationality*
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={values.nationality}
                      onChange={handleInputChange}
                      placeholder="IN"
                      disabled
                    />
                    {error && values.nationality.length < 1 ? (
                      <label
                        style={{
                          color: "red",
                          fontSize: "12px",
                          textAlign: "left",
                        }}
                      >
                        Please Enter this Field{" "}
                      </label>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {/* <button className="searchButton" type="submit">
                  Search Hotel
                </button> */}

                <div className="row button-row">
                  <div className="col-lg-6 col-md-6 col-md-12 col-xs-12 pe-0 mb-3 d-flex justify-content-center align-items-center">

                    <button
                      type="submit"
                      id="cssbuttons-io-button"
                      style={{ backgroundColor: "#21325D", borderRadius: "8px" }}
                    >
                      {" "}
                      Search Hotel
                      <div id="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </button>

                  </div>
                </div>

              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default HotelForm;






{/* <Box px={1}>
                <div className="hotel_form_input">
                  <label className="form_lable">Child (2-12)*</label>
                  <select
                    name="child"
                    value={values.child}
                    onChange={changeHandler}
                    className="hotel_input_select"
                  >
                    <option>0</option>
                    <option value="number">1</option>
                    <option value="number">2</option>
                    <option value="number">3</option>
                    <option value="number">4</option>
                  </select>
                </div>
              </Box> */}
{/* {isVisible ? (
                <Box px={1}>
                  <div className="hotel_form_input">
                    <label className="form_lable">Child Age</label>

                    <input
                      name="age"
                      placeholder="Enter your Child Age"
                      type="text"
                    />
                  </div>
                </Box>
              ) : null} */}