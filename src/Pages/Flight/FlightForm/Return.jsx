import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "./Return.css";
import transfer from "../../../Images/transfer.png";
import interchange from '../../../Images/interchange.png'
// import { fontWeight } from '@mui/system'
import { Button } from "react-bootstrap";
import { Grid, GridItem, Flex, Box } from "@chakra-ui/react";
import "./OneWay.css";
import { useDispatch, useSelector, useReducer } from "react-redux";
import {
  clearReturnReducer,
  returnAction,
} from "../../../Redux/FlightSearch/Return/return";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../../../Constants/constant";
import { Stack } from "react-bootstrap";
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
const Return = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
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
  const [departureDate, setDepartureDate] = useState(""); // To store the selected departure date
  const [returnDate, setReturnDate] = useState(""); // To store the selected return date
  const [minReturnDate, setMinReturnDate] = useState(""); // To store the minimum return date
  const [displayFrom, setdisplayFrom] = useState(true);
  const [displayTo, setdisplayTo] = useState(true);


  // error show

  const [fromError, setFromError] = useState("");
  const [toError, setToError] = useState("");
  const [dateError, setDateError] = useState("");
  const [sub, setSub] = useState(false);

  useEffect(() => {
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

  useEffect(() => {
    dispatch(clearReturnReducer());
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
  const handleDepartureDateChange = (event) => {
    const selectedDepartureDate = event.target.value;
    setDepartureDate(selectedDepartureDate);

    // Calculate the minimum return date (1 day after the selected departure date)
    const newMinReturnDate = new Date(selectedDepartureDate);
    newMinReturnDate.setDate(newMinReturnDate.getDate() + 1);
    setMinReturnDate(newMinReturnDate.toISOString().split("T")[0]);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setSub(true)
    const formData = new FormData(event.target);
    if (!formData.get("from")) {
      setFromError("Enter Destination City");
      return;
    }
    // if (!formData.get("to")) {
    //   setToError("Enter Arrival City");
    //   return;
    // }
    // if (!formData.get("departure")) {
    //   setDateError("Select Date");
    //   return;
    // }
    // if (!formData.get("return")) {
    //   setDateError("Select Date");
    //   return;
    // }
    if (formData.get("from") === "" || formData.get("to") === "" || formData.get("departure") === "" || formData.get("return") === "") {
      return
    }


    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      AdultCount: formData.get("adult"),
      ChildCount: formData.get("child"),
      InfantCount: formData.get("infant"),
      DirectFlight: "false",
      OneStopFlight: "false",
      JourneyType: "2",
      PreferredAirlines: null,
      Segments: [
        {
          Origin: formData.get("from"),
          Destination: formData.get("to"),
          FlightCabinClass: formData.get("class"),
          PreferredDepartureTime: formData.get("departure"),
          PreferredArrivalTime: formData.get("departure"),
        },
        {
          Origin: formData.get("to"),
          Destination: formData.get("from"),
          FlightCabinClass: formData.get("class"),
          PreferredDepartureTime: formData.get("departure1"),
          PreferredArrivalTime: formData.get("departure1"),
        },
      ],
      Sources: null,
    };

    sessionStorage.setItem("adults", formData.get("adult"));
    sessionStorage.setItem("childs", formData.get("child"));
    sessionStorage.setItem("infants", formData.get("infant"));
    dispatch(returnAction(payload));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formFlightSearch" >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-3 col-lg-3 ps-0 mb-3">
              <div className="form_input">
                <label for="from" className="form_lable"> FROM</label>
                <input
                  name="from"
                  placeholder="Enter city or airport"
                  value={from}

                  onClick={() => (setdisplayFrom(true), setdisplayTo(false))}

                  onChange={(event) => {
                    handleFromInputChange(event);
                    handleFromSearch(event.target.value);

                  }}

                />
                {sub === true && from === "" && <p id="error1">Enter city or airport </p>}
                {isLoading && <div>Loading...</div>}
                {fromSearchResults && fromSearchResults.length > 0 && (
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "10px",

                      width: "100%",
                      boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                      textAlign: "left",
                      cursor: "pointer",
                      display: displayFrom ? "block" : "none",
                      position: "absolute", zIndex: "10"
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
            <div className="col-xs-12 col-md-1 col-lg-1 d-flex interchange justify-content-center ps-0">
              <img src={interchange} alt="name" className="align-self-center" />
            </div>

            <div className="col-xs-12 col-md-2 col-lg-2 ps-0 mb-3">
              <div className="form_input">

                <label for="to" className="form_lable">
                  TO
                </label>
                <input
                  name="to"
                  placeholder="Enter city or airport"
                  value={to}

                  onClick={() => (setdisplayFrom(false), setdisplayTo(true))}

                  onChange={(event) => {
                    handleToInputChange(event);
                    handleToSearch(event.target.value);
                  }}
                />
                {sub === true && to === "" && <p id="error1">Enter city or airport </p>}
                {isLoading && <div>Loading...</div>}
                {toSearchResults && toSearchResults.length > 0 && (
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      position: "absolute",
                      zIndex: "10",
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

            <div className="col-xs-12 col-md-3 col-lg-3 ps-0 mb-3">
              <div className="form_input">
                <label for="departure" className="form_lable">
                  DEPARTURE
                </label>

                <input
                  type="date"
                  name="departure"
                  id="departure"
                  className="deaprture_input"
                  placeholder="Enter city or airport"
                  min={new Date().toISOString().split("T")[0]}
                  value={departureDate}
                  onChange={handleDepartureDateChange}

                />
                {sub === true && departureDate === "" && <p id="error1">Enter date</p>}
              </div>
            </div>
            <div className="col-xs-12 col-md-3 col-lg-3 ps-0 mb-3" >
              <div className="form_input">
                <label for="departure" className="form_lable">
                  RETURN
                </label>

                <input
                  type="date"
                  name="departure1"
                  id="departure1"
                  className="deaprture_input"
                  placeholder="Enter city or airport"
                  min={minReturnDate}
                  value={returnDate}
                  onChange={(event) => setReturnDate(event.target.value)}
                ></input>
              {sub === true && returnDate === "" && <p id="error1">Enter date</p>}
              </div>
            </div>

            {/* <div className="col-xs-12 col-md-2">
          <div className="form_input">
            <label className="form_lable"></label>
            <select name="" id="" className="form_input_select">
              <option mx={5}>Any Time</option>
              <option px={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>
                Morning
              </option>

              <option px={5}>Evening</option>
              <option px={5}>Afternoon</option>
              <option mx={5}>Night</option>
            </select>
          </div>
        </div> */}
          </div>

          {/* <div
        className="d-flex mt-3  p-1 align-items-center gap-2"
        style={{ width: "100%" }}
      >
        <div className="col-xs-3 col-md-3 pe-0">
          <Typography mt={1} variant="h6" paddingRight={0}>
            Select A Fair Of Type:
          </Typography>
        </div>
        <div className="d-flex gap-3 ">
          <div className="d-flex align-items-center gap-1 bg-info p-2 rounded">
            <input type="radio" name="fareType"></input>
            <label className="text-white">Regular Fares</label>
          </div>
          {/* <div className=" d-flex align-items-center gap-1 bg-secondary rounded p-2">
            <input type="radio" name="fareType"></input>
            <label className="text-white">Student Fares</label>
          </div> 
        </div>
      </div> */}

          <div className="row">
            <div className="col-xs-9">
              <div className="row">

                <div className="col-12 col-md-6 col-lg-3 mb-3 ps-0 mb-3">
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


                <div className="col-12 col-md-6 col-lg-3 mb-3 ps-0 mb-3">
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
                <div className="col-3 col-md-6 col-lg-3 mb-3 ps-0 mb-3" style={{ position: "relative" }}>
                  <div className="form_input" style={{ position: "absolute", zIndex: "1" }} >
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

                <div className="col-12 col-md-6 col-lg-3 mb-3 ps-0 mb-3">
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

          {/* <div className="row" style={{ width: "100%" }}>
        <label className="form_lable1">-More options: Airline prefrence</label>
      </div> */}
          {/* <div className="row" style={{ width: "100%" }}>
        <div className="col-12 col-md-3 col-lg-3 mb-3">
          <div className="showDirectFligthDiv">
            <input name="direct" type="checkbox" />{" "}
            <span>Show direct flights</span>
          </div>
        </div>
      </div> */}

          {/* <label
        style={{
          fontSize: "20px",
          fontWeight: "400",
          marginBottom: "15px",
          border: "1px solid grey",
          padding: "10px",
          display: "inline-block",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Restrict my Search to:{" "}
        <span style={{ color: "#00BDC4" }}>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAllChange}
            style={{ marginRight: "5px", width: "18px", height: "18px" }}
          />
          Select All / Unselect All
        </span>
      </label> */}

          {/* <Box>
        <div>
          <div
            className="grid-container"
            style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}
          >
            {options.map(({ label, value }) => (
              <label
                key={value}
                style={{
                  width: "190px",
                  height: "30px",
                  gap: "10px",
                  display: "flex",
                }}
              >
                <input
                  type="checkbox"
                  value={label}
                  checked={selectAll ? true : selected.includes(label)}
                  onChange={handleCheckboxChange}
                  disabled={selectAll}
                  className="me-1"
                  style={{ width: "18px", height: "18px" }}
                />
                <p style={{ marginTop: "-2px" }}>{label} </p>
              </label>
            ))}
          </div>
        </div>
      </Box> */}
          <div className="col-xs-12">
            <div className="row bottom-row">
              <div className="col-md-6 col-lg-6 col-12 col-sm-12 mb-3 ps-0" >
                <div className="form_input" >
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

              <div className="col-md-6 col-lg-6 col-12 col-sm-12 mb-3 ps-0">
                <button
                  type="submit"
                  id="cssbuttons-io-button"
                  style={{ backgroundColor: "#21325D", borderRadius: "8px" }}
                >
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
              </div>
            </div>
          </div>
          {/* <Box className="row">
        <Flex direction="row" justifyContent="center" marginLeft="330px">
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
    </div >
  );
};

export default Return;
