import React, { useEffect, useState, useRef } from "react";
import interchange from "../../../Images/interchange.png";
import FlightIcon from "@mui/icons-material/Flight";
import { useDispatch, useSelector, useReducer } from "react-redux";
import {
  clearOneWayReducer,
  oneWayAction,
} from "../../../Redux/FlightSearch/OneWay/oneWay";
import {
  clearOneWayEMTReducer,
  oneWayEMTAction,
} from "../../../Redux/FlightSearch/OneWayEMT/oneWayEMT";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../../../Constants/constant";
import { clearPassengersReducer } from "../../../Redux/Passengers/passenger";
import "./OneWay.css";
import { motion, useAnimation } from "framer-motion";



const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};


const OneWay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const inputRef = useRef(null);
  const [validationError, setValidationError] = useState("");

  // console.log("reducerState", reducerState);

  // multiselect conditions
  const [isLoading, setIsLoading] = useState(false);
  const [fromSearchResults, setFromSearchResults] = useState([]);
  const [toSearchResults, setToSearchResults] = useState([]);
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [from, setFrom] = useState("");
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [to, setTO] = useState("");
  const [selectedTo, setSelectedTo] = useState(null);
  const [displayFrom, setdisplayFrom] = useState(true);
  const [displayTo, setdisplayTo] = useState(true);

  // error show

  const [fromError, setFromError] = useState("");
  const [toError, setToError] = useState("");
  const [dateError, setDateError] = useState("");

  useEffect(() => {
    clearPassengersReducer();
    let mounted = true;

    const fetchSearchResults = async () => {
      setIsLoading(true);

      // make an API call to get search results

      const results = await axios.get(
        `${apiURL.baseURL}/skyTrails/city/searchCityData?keyword=${fromQuery}`
      );
      if (mounted) {
        setFromSearchResults(results?.data?.data);
        setIsLoading(false);
      }
    };

    if (fromQuery.length >= 2) {
      fetchSearchResults();
    }
    return () => {
      mounted = false;
    };
  }, [fromQuery]);

  useEffect(() => {
    let mounted = true;

    const fetchSearchResults = async () => {
      setIsLoading(true);

      // make an API call to get search results

      const results = await axios.get(
        `${apiURL.baseURL}/skyTrails/city/searchCityData?keyword=${toQuery}`
      );
      if (mounted) {
        setToSearchResults(results?.data?.data);
        setIsLoading(false);
      }
    };

    if (toQuery.length >= 2) {
      fetchSearchResults();
    }
    return () => {
      mounted = false;
    };
  }, [toQuery]);

  // Get the current date in the format "YYYY-MM-DD"
  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    const today = new Date().toISOString().split("T")[0];
    inputRef.current.value = today;
    inputRef.current.min = currentDate;
  }, []);

  useEffect(() => {
    dispatch(clearOneWayReducer());
    // dispatch(clearOneWayEMTReducer());
  }, [dispatch]);

  const handleFromClick = (result) => {
    setFrom(result.AirportCode);
    setSelectedFrom(result);
    setdisplayFrom(false);
  };

  const handleToClick = (result) => {
    setTO(result.AirportCode);
    setSelectedTo(result);
    setdisplayTo(false);
  };

  const handleClick = () => {
    // console.log("Button CLicked");
    inputRef.current.click();
    setDateError("");
  };

  // end

  const handleFromInputChange = (event) => {
    setFrom(event.target.value);
    setSelectedFrom(null);
    setFromError("");
  };

  const handleFromSearch = (e) => {
    setFromQuery(e);
  };

  const handleToInputChange = (event) => {
    setTO(event.target.value);
    setSelectedTo(null);
    setToError("");
  };

  const handleToSearch = (e) => {
    setToQuery(e);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const adultCount = formData.get("adult");
    const infantCount = formData.get("infant");
    const childCount = formData.get("child");
    console.log(+adultCount + +infantCount + +childCount, "check")
    if (+adultCount + +infantCount + +childCount > 9) {
      setValidationError("Total Number of passenger should be less then 9");
      return;
    }
    if (adultCount < infantCount) {
      setValidationError("Infant count should be less than adult count");
      return;
    }

    if (!formData.get("from")) {
      setFromError("Enter Destination City");
      return;
    }
    if (!formData.get("to")) {
      setToError("Enter Arrival City");
      return;
    }
    if (!formData.get("departure")) {
      setDateError("Select Date");
      return;
    }

    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      AdultCount: formData.get("adult"),
      ChildCount: formData.get("child"),
      InfantCount: formData.get("infant"),
      DirectFlight: "false",
      OneStopFlight: "false",
      JourneyType: "1",
      PreferredAirlines: null,
      Segments: [
        {
          Origin: formData.get("from"),
          Destination: formData.get("to"),
          FlightCabinClass: formData.get("class"),
          PreferredDepartureTime: formData.get("departure"),
          PreferredArrivalTime: formData.get("departure"),
        },
      ],
      Sources: null,
    };
    const emtPayload = {
      Adults: formData.get("adult"),
      Authentication: {
        Password: "EMT@uytrFYTREt",
        UserName: "EMTB2B",
        IpAddress: reducerState?.ip?.ipData,
      },
      Cabin: 0,
      Childs: formData.get("child"),
      FlightSearchDetails: [
        {
          BeginDate: formData.get("departure"),
          Origin: formData.get("from"),
          Destination: formData.get("to"),
        },
      ],
      Infants: formData.get("infant"),
      TraceId: "EMTB2B73fd0ca9fcf4436cbe8b59fded57e616",
      TripType: 0,
    };
    sessionStorage.setItem("adults", formData.get("adult"));
    sessionStorage.setItem("childs", formData.get("child"));
    sessionStorage.setItem("infants", formData.get("infant"));
    // console.log(payload, emtPayload);
    dispatch(oneWayAction(payload));
    // dispatch(oneWayEMTAction(emtPayload));
  }
  // style={{ width: "305px", height: "56px", position: "relative" }}
  // style={{ width: "305px", height: "56px" }}

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="formFlightSearchOneWay" >
        <div className="container">

          <motion.div className="row rowcon" variants={variants} initial="initial"
            whileInView="animate">
            <motion.div variants={variants} className="col-xs-12 col-md-3 ps-0 mb-3 ">
              <div className="form_input " >

                <label className="form_lable">Departure</label>
                <input
                  name="from"
                  placeholder="Enter city or airport"
                  value={from}
                  onClick={() => (setdisplayFrom(true), setdisplayTo(false))}
                  onChange={(event) => {
                    handleFromInputChange(event);
                    handleFromSearch(event.target.value);
                    console.warn(fromSearchResults,"fromSearchResults")
                  }}
                  autoComplete="off"
                />
                {fromError !== "" && <span className="error">{fromError}</span>}
                {/* {isLoading && <div>Loading...</div>} */}
                {fromSearchResults &&
                  fromSearchResults.length > 0 &&
                  fromQuery.length >= 2 && (
                    <div
                      className="chooseAbsBox"
                      style={{ display: displayFrom ? "block" : "none" }}
                    >
                      <ul>
                        <div className="chooseAbs">
                          {fromSearchResults.map((result) => (
                            <li
                              key={result._id}
                              onClick={() => handleFromClick(result)}
                            >
                              <strong>{result.AirportCode}</strong>{" "}
                              {result.name} {result.code}
                            </li>
                          ))}
                        </div>
                      </ul>
                    </div>
                  )}
              </div>
            </motion.div>
            <motion.div variants={variants} className="col-md-1 d-flex justify-content-center interchange ps-0 ">
              <img src={interchange} alt="name" className="align-self-center" />

            </motion.div>
            <motion.div variants={variants} className="col-xs-12 col-md-4 ps-0 mb-3">
              <div className="form_input " style={{ zIndex: 10, position: "relative" }}>

                <label className="form_lable">Arrival</label>
                <input
                  name="to"
                  placeholder="Enter city or airport"
                  value={to}
                  onClick={() => (setdisplayFrom(false), setdisplayTo(true))}
                  // onMouseLeave={() => (
                  //   setdisplayFrom(false),
                  //   setdisplayTo(false)
                  // )}
                  onChange={(event) => {
                    handleToInputChange(event);
                    handleToSearch(event.target.value);
                  }}
                  autoComplete="off"
                  style={{ border: "2px solid red" }}
                />
                {toError !== "" && <span className="error">{toError}</span>}
                {/* {isLoading && <div>Loading...</div>} */}
                {toSearchResults &&
                  toSearchResults.length > 0 &&
                  toQuery.length >= 2 && (
                    <div
                      className="chooseAbsBox"
                      style={{ display: displayTo ? "block" : "none" }}
                    >
                      <ul>
                        <div className="chooseAbs">
                          {toSearchResults.map((result) => (
                            <li
                              key={result._id}
                              onClick={() => handleToClick(result)}
                            >
                              <strong>{result.AirportCode}</strong>{" "}
                              {result.name} {result.code}
                            </li>
                          ))}
                        </div>
                      </ul>
                    </div>
                  )}
              </div>
            </motion.div>

            <motion.div variants={variants} className="col-xs-12 col-md-4 ps-0 mb-3">
              <div className="form_input" onClick={handleClick}>
                <label className="form_lable">Departure Date</label>
                <input
                  type="date"
                  name="departure"
                  id="departure"
                  ref={inputRef}
                  className="deaprture_input"
                />
                {dateError !== "" && <span className="error">{dateError}</span>}
              </div>
            </motion.div>
          </motion.div>


          <motion.div className="row" variants={variants} initial="initial"
            whileInView="animate">
            <motion.div variants={variants} className=" col-md-3 col-lg-3 col-sm-12 col-12 mb-3 ps-0">
              <div className="form_input">
                <label className="form_lable">Adult(12+ Yrs)</label>
                <select name="adult" id="" className="form_input_select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
            </motion.div>

            <motion.div variants={variants} className=" col-md-3 col-lg-3 col-sm-12 col-12 mb-3 ps-0">
              <div className="form_input">
                <label className="form_lable">Child(2-12 Yrs)</label>
                <select name="child" id="" className="form_input_select">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
            </motion.div>
            <motion.div variants={variants} className=" col-md-3 col-lg-3 col-sm-12 col-12 mb-3 ps-0">
              <div className="form_input">
                <label className="form_lable">Infant({"<"} 2 Yrs)</label>
                <select name="infant" id="" className="form_input_select">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </motion.div>

            <motion.div variants={variants} className=" col-md-3 col-lg-3 col-sm-12 col-12 mb-3 ps-0">
              <div className="form_input">
                <label className="form_lable">Class</label>
                <select name="class" id="" className="form_input_select">
                  {/* <option value="1">All</option> */}
                  <option value="2">Ecomomy</option>
                  <option value="3">Premimum Economy</option>
                  <option value="4">Business</option>
                  <option value="5">Premimum Business</option>
                  <option value="6">First</option>
                </select>
              </div>
            </motion.div>



            <div className="col-xs-12">
              <div className="row bottom-row">
                <div variants={variants} className="col-md-6 col-lg-6 col-12 col-sm-12 mb-3 ps-0">
                  <div className="form_input mb-0">
                    <label className="form_lable">Preferred Airline</label>
                    <select name="adult" id="" className="form_input_select1">
                      <option value="1">Select Airline </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                  </div>
                </div>


                <div variants={variants} className="col-md-6 col-lg-6 col-12 col-sm-12 mb-3 ps-0">
                  <button
                    type="submit"
                    className="flightFormSubmit">Search Flight <FlightIcon /></button>

                </div>
              </div>
            </div>
            <p class="validationError">{validationError}</p>
          </motion.div>


          {/* <label
      style={{
        fontSize: "20px",
        fontWeight: "400",
        marginBottom: '15px',
        border: '1px solid grey',
        padding: '10px',
        display: 'inline-block',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      Restrict my Search to:{" "}
      <span style={{ color: "#00BDC4" }}>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAllChange}
          style={{ marginRight: "5px", width: '18px', height: '18px' }}
        />
        Select All / Unselect All
      </span>
    </label>

        <Box >
          <div>
            <div className="grid-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
              {options.map(({ label, value }) => (
                <label key={value} style={{width:'190px',height:'30px',gap:'10px',display:'flex'}}>
                  <input
                    type="checkbox"
                    value={label}
                    checked={selectAll ? true : selected.includes(label)}
                    onChange={handleCheckboxChange}
                    disabled={selectAll}
                    className="me-1"
                    style={{ width: '18px', height: '18px' }}
                  />
                   <p style={{marginTop:'-2px'}}>{label} </p>  
                </label>
              ))}
            </div>
          </div>
        </Box> */}

          {/* <Box className="row">
          <Flex direction="row" justifyContent="center">
            <button type="submit" id="cssbuttons-io-button">
              {" "}
              Search Flight
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
          </Flex>
        </Box> */}
        </div>
      </form>
    </div>
  );
};

export default OneWay;
