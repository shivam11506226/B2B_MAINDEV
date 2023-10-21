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
import color from "../../../../src/color/color.js"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const HotelForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const[cityid,setCityid]=useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // error manage
  const [cityError, setCityError]=useState("");
  const [checkInError,setCheckInError]=useState("");
  const [checkOutError,setCheckOutError]=useState("");
  
  const reducerState = useSelector((state) => state);
  console.log("State Data", reducerState);

  const errorCode =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
      ?.Error?.ErrorCode;
  const errorMsg =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
      ?.Error?.ErrorMessage;

  const initialvalue = {
    City: "",
    nationality: "",
    room: "",
    adult: "",
  };
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [values, setValues] = React.useState(initialvalue);
  const [error, setError] = React.useState({
    nationality: false,
      room: false,
      adult: false,
  });
  
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
        ?.HotelResults.length >= 0
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
        `${apiURL.baseURL}/travvolt/city/hotelCitySearch?keyword=${searchTerm} `
      );
      setResults(response.data.data);
      console.log("cities", response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setLoading(false);
    }
  };

  const handleResultClick = (city) => {
    setSearchTerm(city.Destination); // Set the input field's value to the selected city
    //Below is cityId to send in payload
    setCityid(city.cityid)
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
        room: false,
        adult: false,
    })
  };

  const handleStartDateChange = (date) => {
    setValues({ ...values, departure: date }); // Update the departure date
    setCheckInError("");
  };

  const handleEndDateChange = (date) => {
    setValues({ ...values, checkOutDeparture: date }); // Update the checkOutDeparture date
    setCheckOutError("");
  };


  function handleSubmit(event) {
    event.preventDefault(); 

    
    const formData = new FormData(event.target);
    // Convert input date to desired format
    const date = new Date(formData.get("departure"));
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    console.log("formate date",formattedDate)


     // validate Error
     
      if(!cityid){
      setCityError("city is Required");
       }else{
    const newErrors  = {
      nationality: false,
      room: false,
      adult: false,
    };

    if (values.nationality.length < 1) {
      newErrors.nationality = true;
    }
    if (values.room.length < 1) {
      newErrors.room = true;
    }
    if (values.adult.length < 1) {
      newErrors.adult = true;
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
      GuestNationality: formData.get("nationality"),
      NoOfRooms: formData.get("room"),
      RoomGuests: [
        {
          NoOfAdults: formData.get("adult"),
          NoOfChild:"0",
          ChildAge:null,
        },
      ],
      MaxRating: formData.get("star"),
      MinRating: 0,
      ReviewScore: null,
      IsNearBySearchAllowed: false,
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
    };

    const totalGuest = `${
      parseInt(formData.get("adult")) + parseInt("0")
    }`;
    sessionStorage.setItem("totalGuest", totalGuest);
    dispatch(hotelAction(payload));
    if (
      reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
        ?.ticketData?.data?.data
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
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5} py={2} display="inline-block" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Grid item md={6} sm={12} xs={12} display="flex">
              <Box paddingRight={1}>
                <div className="hotel_form_input">
                  <label className="form_lable">City</label>
                  
                  <input
                    name="City"
                    id="CitySearchID"
                    type="text"
                    placeholder="Search for a city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {cityError!=="" && (<span className="error">{cityError}</span>) }

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
              </Box>

              <Box paddingRight={1}>
                <div className="hotel_form_input">
                  <label className="form_lable">Check In</label>
                  <DatePicker
                    selected={values.departure}
                    onChange={handleStartDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText='Select Date'
                    className="hotel_input_select"
                    isClearable
                    minDate={new Date()} // Disable past dates
                  />
                  {checkInError!=="" && (<span className="error">{checkInError}</span>) }
                </div>
              </Box>

              <Box paddingRight={1}>
                <div className="hotel_form_input">
                  <label className="form_lable">Check-Out</label>
                  <DatePicker
                    selected={values.checkOutDeparture}
                    onChange={handleEndDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText='Select Date'
                    className="hotel_input_select"
                    minDate={values.departure} // Disable dates before Check-in date
                    isClearable
                  />
                  {checkOutError!=="" && (<span className="error">{checkOutError}</span>) }
                </div>
              </Box>
              <Box px={1}>
                <div className="hotel_form_input">
                  <label for="departure" className="form_lable">
                    Nights
                  </label>
                  <input type="number" min="0" name="night" value={nightdays} />
                </div>
              </Box>
              <Box px={1}>
                <div className="hotel_form_input">
                  <label className="form_lable">
                    Nationality(Country Code)*
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={values.nationality}
                    onChange={handleInputChange}
                    placeholder="India"
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
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={5} py={2} style={{ display: 'flex', flexWrap: 'wrap' }} >
            <Grid item md={6} sm={12} xs={12} display="flex">
              <Box paddingRight={1}>
                <div className="hotel_form_input">
                  <label className="form_lable">Room*</label>
                  <select
                    name="room"
                    value={values.room}
                    onChange={handleInputChange}
                    className="hotel_input_select"
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                  {error && values.room.length < 1 ? (
                    <label
                      style={{
                        color: "red",
                        fontSize: "12px",
                        textAlign: "left",
                      }}
                    >
                      Please Select this Field{" "}
                    </label>
                  ) : (
                    ""
                  )}
                </div>
              </Box>
              <Box px={1}>
                <div className="hotel_form_input">
                  <label className="form_lable">Guest*</label>
                  <select
                    name="adult"
                    value={values.adult}
                    onChange={handleInputChange}
                    className="hotel_input_select"
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                  {error && values.adult.length < 1 ? (
                    <label
                      style={{
                        color: "red",
                        fontSize: "12px",
                        textAlign: "left",
                      }}
                    >
                      Please Select this Field{" "}
                    </label>
                  ) : (
                    ""
                  )}
                </div>
              </Box>
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
            
              <Box paddingRight={1}>
                <div className="hotel_form_input">
                  <label className="form_lable">Star Rating*</label>
                  <select
                    name="star"
                    value={values.star}
                    onChange={handleInputChange}
                    className="hotel_input_select"
                  >
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                  </select>
                  <div></div>
                </div>
              </Box>
            </Grid>
          </Grid>


          <div style={{ display: "flex",justifyContent:'center' }}>

            <Button
              type="submit"
              color="primary"
              sx={{ background:color.bluedark, borderRadius: "10px" }}
              variant="contained"
              
            >
              Hotel Search
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default HotelForm;