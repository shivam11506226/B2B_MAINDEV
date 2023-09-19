import { Typography } from "@material-ui/core";
import { apiURL } from "../../../Constants/constant";
import { Grid, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/material/Link";
import moment from "moment";
import axios from "axios";
import "./hotelstepper.css";
import { clearHotelReducer, hotelAction } from "../../../Redux/Hotel/hotel";
import Loader from "../../Loader/Loader";

const HotelForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const[cityid,setCityid]=useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const [error, setError] = React.useState(false);
  const [date, setDate] = React.useState("");
  const [oldDate, setOldDate] = React.useState("");
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
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (
      values.City.length < 1 ||
      values.nationality.length < 1 ||
      values.room.length < 1 ||
      values.adult.length < 1
    ) {
      setError(true);
    }
    const formData = new FormData(event.target);
    // Convert input date to desired format
    const date = new Date(formData.get("departure"));
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
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
          NoOfChild: formData.get("child"),
          ChildAge: formData.get("age"),
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
      parseInt(formData.get("adult")) + parseInt(formData.get("child"))
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

  function disablePastDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }

  function disablePastDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }
  const disableNexttDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  // checkin checkout function

  const handlechnage = (e) => {
    const time = e.target.value;
    console.log("time is", time);
    setDate(time);
    // setOldDate(time)
  };

  const handlechnageone = (e) => {
    const time = e.target.value;
    console.log("time is", time);
    setOldDate(time);
  };

  // const[year,month,day]=oldDate.split('-');
  const currentDate = new Date(date);
  const toDate = new Date(oldDate);
  const list = toDate - currentDate;
  const nightdays = list / 86400000;

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} py={2} alignItems="center">
            <Grid item md={6} sm={12} xs={12}>
              <Box>
                <div className="nhotel_form_input">
                  <label className="form_lable">City</label>
                  {/* <select
                    name="City"
                    value={values.City}
                    onChange={handleInputChange}
                    id=""
                    className="nhotel_input_select"
                  >
                    <option value="130443">Delhi</option>
                    <option value="101204">Kochi</option>
                  </select> */}
                  <input
                    name="City"
                    id=""
                    type="text"
                    placeholder="Search for a city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  
                  {loading && <div>Loading...</div>}
                  {results.length > 0 && (
                    <ul>
                      {results.map((city,index) => (
                        <li
                          key={index}
                          onClick={() => handleResultClick(city)}
                        >
                          {city.Destination}
                        </li>
                      ))}
                    </ul>
                  )}
                  {error && values.City.length < 1 ? (
                    <label
                      style={{
                        color: "red",
                        fontSize: "12px",
                        textAlign: "left",
                      }}
                    >
                      Please Select City{" "}
                    </label>
                  ) : (
                    ""
                  )}
                </div>
              </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              {/* <Box display="flex">
                <Box mx={1}>
                  <Typography className="or">OR</Typography>
                </Box>
                <PinDropIcon style={{ color: "#00BDC4" }} />
                <Box mx={0}>
                  <Typography className="search_map">
                    <Link
                      href="https://www.google.co.in/maps/@27.2219713,92.0887287,7z"
                      underline="none"
                    >
                      Search On Map
                    </Link>
                  </Typography>
                </Box>
              </Box> */}
            </Grid>
          </Grid>
          <Grid container spacing={5} py={2} display="inline-block">
            <Grid item md={6} sm={12} xs={12} display="flex">
              <Box paddingRight={1}>
                <div className="hotel_form_input">
                  <label className="form_lable">Check In</label>
                  <input
                    type="Date"
                    name="departure"
                    id="departure"
                    className="deaprture_input"
                    value={values.departure}
                    onChange={handlechnage}
                    min={disablePastDate()}
                  />
                </div>
              </Box>

              <Box px={1}>
                <div className="hotel_form_input">
                  <label className="form_lable">Check-Out</label>
                  <input
                    type="date"
                    name="checkOutDeparture"
                    id="departure"
                    className="deaprture_input"
                    value={oldDate}
                    onChange={handlechnageone}
                    min={disableNexttDate()}
                    placeholder="Night"
                  />
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
          <Grid container spacing={5} py={2}>
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
                  <label className="form_lable">Adult*</label>
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
              <Box px={1}>
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
              </Box>
              {isVisible ? (
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
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={5} py={2}>
            <Grid item md={6} sm={12} xs={12} display="flex">
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              color="primary"
              sx={{ background: "#00BDC4", borderRadius: "10px" }}
              variant="contained"
            >
              Hotel Search
            </Button>
          </div>
        </form>
      )}
      {/* {errorCode == 2 && errorCode == 3 ? (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={errorMsg}
          action={action}
        />
      ) : (
        ""
      )} */}
    </>
  );
};

export default HotelForm;
