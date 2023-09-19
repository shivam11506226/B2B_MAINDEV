import React, { useEffect, useState, useRef } from "react";
import transfer from "../../../Images/transfer.png";
import "./OneWay.css";
import { Button } from "react-bootstrap";
import { Box, Grid, GridItem, Checkbox, Flex } from "@chakra-ui/react";
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
import { Typography } from "@mui/material";
import { apiURL } from "../../../Constants/constant";

const OneWay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const [checked, setChecked] = useState(false);
  const [checkedd, setCheckedd] = useState(false);
  const inputRef = useRef(null);

  console.log("reducerState", reducerState);

  // multiselect conditions
  const options = [
    { label: "GPS", value: "1" },
    { label: "Fly Dubai", value: "2" },
    { label: "Air Arobia", value: "3" },
    { label: "Zoom Air", value: "4" },
    { label: "Other untl LCC", value: "5" },
    { label: "Air Asia", value: "6" },
    { label: "Air India Express", value: "7" },
    { label: "Air Cost", value: "8" },
    { label: "NokScoot", value: "9" },
    { label: "Salman Air", value: "10" },
    { label: "Inter Sky", value: "11" },
    { label: "Triger Airways", value: "12" },
    { label: "SpiceJet", value: "13" },
    { label: "GOFIRTS", value: "14" },
    { label: "Alliance Air", value: "15" },
    { label: "Akasa Air", value: "16" },
    { label: "Fly Scoot", value: "17" },
    { label: "Indigo", value: "18" },
    { label: "Bhutan Airlines", value: "19" },
    { label: "TruJet", value: "20" },
    { label: "Mega Maldives", value: "21" },
  ];
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");
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

  useEffect(() => {
    let mounted = true;

    const fetchSearchResults = async () => {
      setIsLoading(true);

      // make an API call to get search results

      const results = await axios.get(
        `${apiURL.baseURL}/travvolt/city/searchCityData?keyword=${fromQuery}`
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
        `${apiURL.baseURL}/travvolt/city/searchCityData?keyword=${toQuery}`
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

  useEffect(() => {
    dispatch(clearOneWayReducer());
    dispatch(clearOneWayEMTReducer());
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
    console.log("Button CLicked");
    inputRef.current.click();
  };

  function handleCheckboxChange(event) {
    const { value } = event.target;
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  }

  function handleSelectAllChange(event) {
    const { checked } = event.target;
    setSelectAll(checked);
    if (checked) {
      setSelected(options.map((item) => item.label));
    } else {
      setSelected([]);
    }
  }
  // end

  const handleFromInputChange = (event) => {
    setFrom(event.target.value);
    setSelectedFrom(null);
  };

  const handleFromSearch = (e) => {
    setFromQuery(e);
  };

  const handleToInputChange = (event) => {
    setTO(event.target.value);
    setSelectedTo(null);
  };

  const handleToSearch = (e) => {
    setToQuery(e);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
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
    console.log(payload, emtPayload);
    dispatch(oneWayAction(payload));
    dispatch(oneWayEMTAction(emtPayload));
  }

  return (
    <form onSubmit={handleSubmit} className="formFlightSearch">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-3 pe-0">
            <div className="form_input">
              <label className="form_lable">FROM</label>
              <input
                name="from"
                placeholder="Enter city or airport"
                value={from}
                onChange={(event) => {
                  handleFromInputChange(event);
                  handleFromSearch(event.target.value);
                }}
              />
              {isLoading && <div>Loading...</div>}
              {fromSearchResults && fromSearchResults.length > 0 && (
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    zIndex: 1,
                    width: "100%",
                    boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                    textAlign: "left",
                    cursor: "pointer",
                    display: displayFrom ? "block" : "none",
                  }}
                >
                  <ul>
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        flexDirection: "column",
                        maxHeight: 150,
                        overflow: "hidden",
                        overflowY: "scroll",
                      }}
                    >
                      {fromSearchResults.map((result) => (
                        <li
                          key={result._id}
                          onClick={() => handleFromClick(result)}
                        >
                          <strong>{result.AirportCode}</strong> {result.name}{" "}
                          {result.code}
                        </li>
                      ))}
                    </Box>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-1 d-flex justify-content-center">
            <img src={transfer} alt="name" className="align-self-center" />
          </div>
          <div className="col-xs-12 col-md-3 ps-0">
            <div className="form_input">
              <label className="form_lable">TO</label>
              <input
                name="to"
                placeholder="Enter city or airport"
                value={to}
                onChange={(event) => {
                  handleToInputChange(event);
                  handleToSearch(event.target.value);
                }}
              />
              {isLoading && <div>Loading...</div>}
              {toSearchResults && toSearchResults.length > 0 && (
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    zIndex: 1,
                    width: "100%",
                    boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                    textAlign: "left",
                    cursor: "pointer",
                    display: displayTo ? "block" : "none",
                  }}
                >
                  <ul>
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        flexDirection: "column",
                        maxHeight: 150,
                        overflow: "hidden",
                        overflowY: "scroll",
                      }}
                    >
                      {toSearchResults.map((result) => (
                        <li
                          key={result._id}
                          onClick={() => handleToClick(result)}
                        >
                          <strong>{result.AirportCode}</strong> {result.name}{" "}
                          {result.code}
                        </li>
                      ))}
                    </Box>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="col-xs-12 col-md-3">
            <div className="form_input" onClick={handleClick}>
              <label className="form_lable">DEPARTURE</label>

              <input
                type="date"
                name="departure"
                id="departure"
                ref={inputRef}
                className="deaprture_input"
              ></input>
            </div>
          </div>

          <div className="col-xs-12 col-md-2">
            <div className="form_input">
              <label className="form_lable"></label>
              <select name="time" id="" className="form_input_select">
                <option mx={5}>Any Time</option>
                <option px={5}>Morning</option>
                <option px={5}>Evening</option>
                <option px={5}>Afternoon</option>
                <option mx={5}>Night</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "32px" }}>
          <div className="col-xs-3 col-md-3  pe-0">
            <Typography mt={1} variant="h6" paddingRight={0}>
              Select A Fair of Type:
            </Typography>
          </div>
          <div className="col-xs-3 col-md-8">
            <div style={{ display: "flex" }}>
              <span
                style={{
                  width: "30%",
                  height: "50%",
                  display: "flex",
                  padding: "10px",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  borderRadius: "10px",
                  color: "white",

                  opacity: 1,
                  backgroundColor:
                    selectedOption === "option1" ? "#00BDC4" : "#8D8985",
                  border: "none",
                }}
                onClick={(e) => setSelectedOption("option1")}
              >
                <input
                  type="radio"
                  value="2"
                  checked={selectedOption === "option1"}
                />
                Regular Fares
              </span>
              <button
                style={{
                  width: "30%",
                  height: "50%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  borderRadius: "10px",
                  color: "white",
                  opacity: 1,
                  marginLeft: "8px",
                  backgroundColor:
                    selectedOption === "option2" ? "#00BDC4" : "#8D8985",
                  border: "none",
                }}
                onClick={(e) => setSelectedOption("option2")}
              >
                <input
                  type="radio"
                  value="3"
                  checked={selectedOption === "option2"}
                />
                Student Fares
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-9">
            <div className="row">
              <div className="col-3 col-md-3 col-lg-2 mb-3">
                <div className="form_input">
                  <label className="form_lable">Adult(12+)</label>

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
              </div>

              <div className="col-3 col-md-3 col-lg-2 mb-3">
                <div className="form_input">
                  <label className="form_lable">Child(2-11)</label>
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
              </div>
              <div className="col-3 col-md-3 col-lg-3 mb-3">
                <div className="form_input">
                  <label className="form_lable">Infant(Under 2 Yrs)</label>
                  <select name="infant" id="" className="form_input_select">
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
              </div>

              <div className="col-3 col-md-3 col-lg-2 mb-3">
                <div className="form_input">
                  <label className="form_lable">Class</label>
                  <select name="class" id="" className="form_input_select">
                    <option value="1">All</option>
                    <option value="2">Ecomomy</option>
                    <option value="3">Premimum Economy</option>
                    <option value="4">Business</option>
                    <option value="5">Premimum Business</option>
                    <option value="6">First</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <label className="form_lable1">
            -More options: Airline prefrence
          </label>
        </div>
        <div className="row">
          <div className="col-12 col-md-3 col-lg-3 mb-3">
            <div className="showDirectFligthDiv">
              <input name="direct" type="checkbox" />{" "}
              <span>Show direct flights</span>
            </div>
          </div>
        </div>

        <label style={{ fontSize: "20px", fontWeight: "400" }}>
          Restrict my Search to:{" "}
          <span style={{ color: "#00BDC4" }}>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAllChange}
              style={{ marginRight: "5px" }}
            />
            Select All / Unselect All
          </span>
        </label>

        <Box>
          {/* <MultiSelect/> */}

          <div>
            {/* <label>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
              Select All
            </label> */}
            <div className="grid-container">
              {options.map(({ label, value }) => (
                <label key={value}>
                  <input
                    type="checkbox"
                    value={label}
                    checked={selectAll ? true : selected.includes(label)}
                    onChange={handleCheckboxChange}
                    disabled={selectAll}
                    className="me-1"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </Box>

        <Box className="row">
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
        </Box>
      </div>
    </form>
  );
};

export default OneWay;
