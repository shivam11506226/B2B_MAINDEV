import { Typography } from "@material-ui/core";
import { Grid, Box, TextField } from "@mui/material";
import React, { useEffect, useState, useRef  } from "react";
// import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import PinDropIcon from "@mui/icons-material/PinDrop";
import "./holidayform.css";
import { useDispatch, useSelector } from "react-redux";
import { searchPackageAction } from "../../../Redux/SearchPackage/actionSearchPackage";
import { clearHolidayReducer } from "../../../Redux/OnePackageSearchResult/actionOneSearchPackage";

const HolidayForm = () => {
  const reducerState = useSelector((state) => state);
  console.log("holiday", reducerState?.searchResult);
  const [destination, setDestination] = useState("");
  const [daysSearch, setDaySearch] = useState(0);
  const [error, setError] = useState({
    destination: "",
    daysSearch: "",
  });
  const filteredPackage =
    reducerState?.searchResult?.packageSearchResult?.data?.data?.pakage;

  const dispatch = useDispatch();
  const destinationInputRef = useRef(null);
  const daysSearchInputRef = useRef(null);

  useEffect(() => {
    console.log('=====================');
    console.log("--------working--------")
    dispatch(clearHolidayReducer());
  }, [dispatch]);

  const navigate = useNavigate();
  useEffect(() => {
    if (filteredPackage) {
      navigate("HolidaypackageResult");
    }
  }, [filteredPackage,navigate]);
    const clickUs = () => {
    // Validate the form before submission
    const isValid = validateForm();

    if (isValid) {
      const payload = {
        destination,
        days: daysSearch,
      };
      console.log(payload);
      dispatch(searchPackageAction(payload));
    }else {
      // Focus on the first empty field
      if (!destination.trim()) {
        destinationInputRef.current.focus();
      } else if (isNaN(daysSearch) || daysSearch <= 0) {
        daysSearchInputRef.current.focus();
      }
    }
  };

  // Form validation function
  const validateForm = () => {
    let valid = true;
    const newErrors = { destination: "", daysSearch: "" };

    if (!destination.trim()) {
      newErrors.destination = "Destination is required";
      valid = false;
    }

    if (isNaN(daysSearch) || daysSearch <= 0) {
      newErrors.daysSearch = "Days must be a positive number";
      valid = false;
    }

    setError(newErrors);

    return valid;
  };
  
  const handleDestinationChange = (e) => {
    setError({ ...error, destination: "" }); // Clear the error when the user types in the destination field
    setDestination(e.target.value);
  };

  const handleDaysSearchChange = (e) => {
    setError({ ...error, daysSearch: "" }); // Clear the error when the user types in the days field
    setDaySearch(e.target.value);
  };
 

  return (
    <React.Fragment>
      <>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          display="flex"
          justifyContent="center"
        >
          <Box>
          <TextField
            className="search__Input"
            id="filled-basic"
            label="Search From Destination"
            variant="filled"
            name="destination"
            onChange={handleDestinationChange}
            inputRef={destinationInputRef}
          />
           {error.destination && (
            <Typography color="error">{error.destination}</Typography>
          )}
          </Box>
          <Box>
          <TextField
            className="search__Input"
            id="filled-basic"
            label="Days"
            variant="filled"
            name="days"
            type="number"
            onChange={handleDaysSearchChange}
            inputRef={daysSearchInputRef}
            required
          />
           {error.daysSearch && (
            <Typography color="error">{error.daysSearch}</Typography>
          )}
          </Box>
          <button
            className="holiday_submit"
            onClick={clickUs}
            variant="contained"
          >
            Search Holiday Package
          </button>
        </Grid>
      </>
    </React.Fragment>
  );
};

export default HolidayForm;
