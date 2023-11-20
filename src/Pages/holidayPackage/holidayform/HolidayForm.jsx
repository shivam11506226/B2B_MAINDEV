import { Typography } from "@material-ui/core";
import { Grid, Box, TextField } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
// import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import PinDropIcon from "@mui/icons-material/PinDrop";
import "./holidayform.css";
import { useDispatch, useSelector } from "react-redux";
import { searchPackageAction } from "../../../Redux/SearchPackage/actionSearchPackage";
import { clearHolidayReducer } from "../../../Redux/OnePackageSearchResult/actionOneSearchPackage";
import color from "../../../../src/color/color.js"
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
  }, [filteredPackage, navigate]);
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
      sessionStorage.setItem("searchPackageData", JSON.stringify(payload));
    } else {
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
      <div className="packageFirstPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="holidayFirstPage">

                <div class="form-floating mb-3">
                  <input type="text" name="destination" placeholder="Search From Destination" class="form-control" id="filled-basic" onChange={handleDestinationChange} required />
                  <label for="floatingInput">Search From Destination</label>
                </div>
                {error.destination && (
                  <Typography color="error">{error.destination}</Typography>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div class="form-floating mb-3">
                <input type="number" name="destination" placeholder="Days" class="form-control" id="filled-basic" onChange={handleDaysSearchChange} required />
                <label for="floatingInput">Days</label>
              </div>
              {error.daysSearch && (
                <Typography color="error">{error.daysSearch}</Typography>
              )}
            </div>

            <div className="buttonBoxHoliday">
              <button
                className="holiday_submit"
                onClick={clickUs}
                variant="contained"
                style={{ backgroundColor: color.bluedark }}
              >
                Search Holiday Package
              </button>
            </div>
          </div>
        </div>
      </div>


    </React.Fragment>
  );
};

export default HolidayForm;
