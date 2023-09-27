import React, { useEffect, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./busform.css";
import { Button,Box } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { busSearchAction, clearBusSearchReducer } from '../../../Redux/busSearch/busSearchAction';
import color from "../../../color/color.js"
const BusForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log(reducerState);
  const [isLoading, setIsLoading] = useState(false);
  const [fromSearchResults, setFromSearchResults] = useState([]);
  const [toSearchResults, setToSearchResults] = useState([]);
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [from, setFrom] = useState({
    cityId: "",
    cityName:""
  });
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [to, setTO] = useState("");
  const [selectedTo, setSelectedTo] = useState(null);
  const [displayFrom, setdisplayFrom] = useState(true);
  const [displayTo, setdisplayTo] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const inputRef = useRef(null);
  const fromInputRef=useRef(null);
  const toInputRef=useRef(null)
  const [fromData,setFromData] = useState([]);
  const [origin,setOrigin] = useState([]);
  const [errors, setErrors] = useState({
    from: "",
    to: "",
    date: ""
  });


  useEffect(() => {
    dispatch(clearBusSearchReducer());
  }, [dispatch]);
 
  //============== copied -----=======//

  useEffect(() => {
    let mounted = true;

    const fetchSearchResults = async () => {
      setIsLoading(true);

      // make an API call to get search results

      const results = await axios.get(
        `http://localhost:8000/travvolt/city/searchCityBusData?keyword=${fromQuery}`
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
        `http://localhost:8000/travvolt/city/searchCityBusData?keyword=${toQuery}`
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

  console.log("from result",fromSearchResults)
  console.log("to result",toSearchResults)

  const handleFromInputChange = (event) => {
    setErrors({ ...errors, from: "" }); 
    setFrom(event.target.value);
    setSelectedFrom(null);
  };

  const handleFromClick = (result) => {
    console.log("result",result);
    // setFrom(result?.CityId);
   
    setFrom(prevState => ({
      ...prevState,
      cityId: result?.CityId,
      cityName: result?.CityId
    }));

    setSelectedFrom(result?.CityId);
    setdisplayFrom(false);
  };

  const handleToClick = (result) => {
    setTO(result.CityId);
    setSelectedTo(result.CityId);
    setdisplayTo(false);
  };


  const handleFromSearch = (e) => {
    setFromQuery(e);
  };

  const handleToInputChange = (event) => {
    setErrors({ ...errors, to: "" });
    setTO(event.target.value);
    setSelectedTo(null);
  };

  const handleToSearch = (e) => {
    setToQuery(e);
  };

  const handleDateInputChange = () => {
    setErrors({ ...errors, date: "" });  // Clear the error when the user selects a date
  };
  
  // Form validation function
  const validateForm = () => {
    let valid = true;
    const newErrors = { from: "", to: "", date: "" };

    if (!from.cityId) {
      newErrors.from = "Please select a city or airport for 'FROM'";
      valid = false;
    }

    if (!to) {
      newErrors.to = "Please select a city or airport for 'TO'";
      valid = false;
    }

    if (!startDate) {
      newErrors.date = "Please select a departure date";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };



  // form submit data
  function handleSubmit(event) {
    event.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      const formData = new FormData(event.target);
        // Format the selected date as "MM/dd/yyyy"
    const selectedDate = startDate;
    let formattedDate = "";
    if (selectedDate) {
      const month = selectedDate.getMonth() + 1;
      const day = selectedDate.getDate();
      const year = selectedDate.getFullYear();
      formattedDate = `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
    }
      const payload = {
        EndUserIp: reducerState?.ip?.ipData,
        TokenId: reducerState?.ip?.tokenData,
        DateOfJourney: formattedDate,
        DestinationId: formData.get("to"),
        OriginId : formData.get("from"),
      };
      console.log("payload",payload);
      dispatch(busSearchAction(payload));
      navigate("/BusResult")
    }else{
      // Focus on the first empty field
      if (!from) {
        fromInputRef.current.focus();
      } else if (!to) {
        toInputRef.current.focus();
      } else if (!inputRef.current.value) {
        inputRef.current.focus();
      }
  }
  }

  // /BusResult

  

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} >
      <div className='row'>
      <div className="col-xs-12 col-md-3">
          {/* <div className="form_input">
            <label className="form_lable">From City</label>
            <input
                name="from"
                placeholder="From City"
                value={from}
                onChange={(event) => {
                  handleFromInputChange(event);
                  handleFromSearch(event.target.value);
                }}
              />
          </div> */}
          <div className="form_input">
              <label className="form_lable">FROM</label>
              <input
                name="from"
                placeholder="Enter city or airport"
                value={from.cityId}
                onChange={(event) => {
                  handleFromInputChange(event);
                  handleFromSearch(event.target.value);
                }}
                ref={fromInputRef}
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
                          <strong>{result.CityId}</strong> {result.CityName}{" "}
                          {/* {result.CityId} */}
                        </li>
                      ))}
                    </Box>
                  </ul>
                </div>
              )}
              {errors.from && <div className="error">{errors.from}</div>}
            </div>
        </div>
      <div className="col-xs-12 col-md-3">
          {/* <div className="form_input">
            <label className="form_lable">To City</label>
            <input
                name="to"
                placeholder="Enter destination"
                value={to}
                onChange={(event) => {
                  handleToInputChange(event);
                  handleToSearch(event.target.value);
                }}
              />
          </div> */}
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
                ref={toInputRef}
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
                          <strong>{result.CityId}</strong> {result.CityName}{" "}
                          {result.CityId}
                        </li>
                      ))}
                    </Box>
                  </ul>
                </div>
              )}
              {errors.to && <div className="error">{errors.to}</div>}
            </div>
        </div>
        <div className="col-xs-12 col-md-3">
          <div className="form_input">
            <label className="form_lable">DEPARTURE</label>
            

            <DatePicker
             selected={startDate}
              name="departure"
              id="departure"
              ref={inputRef}
              placeholderText='Select Date'
              className="deaprture_input"
              onChange={date => {
                setStartDate(date);
                handleDateInputChange();
              }}
              minDate={new Date()}
            />
          </div>
          {errors.date && <div className="error">{errors.date}</div>}
        </div>
      </div>
   
      <div className='row' >
      <div className="col-xs-12">
          
            <Box display='flex'>
            <Button
            variant='contained'
              my={4}
              colorScheme="teal"
              type="submit"
              
              sx={{borderRadius:'20px'}}
              style={{backgroundColor:color.bluedark}}
            >
              Bus Search
            </Button>
            </Box>
         
        </div>
         
      </div>
      </form>
    </div>
  )
}

export default BusForm
