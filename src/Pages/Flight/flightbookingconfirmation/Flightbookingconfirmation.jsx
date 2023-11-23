import React, { useEffect, useState } from "react";
import "./flightbookingconfirmation.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import OneWay from "../FlightForm/OneWay";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import Fairsummary from "../flightreviewbooking/Fairsummary";
import Rightdetail from "../passengerdetail/Rightdetail";
import Flightconfirmationdetail from "./Flightconfirmationdetail";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataAction } from "../../../Redux/Auth/UserDataById/actionUserData";

// import Leftdetail from './Leftdetail';
// import Rightdetail from './Rightdetail';

const FlightReviewbooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("reducerState", reducerState);
  const TicketDetails =
    reducerState?.flightBook?.flightBookDataGDS?.Response ||
    reducerState?.flightBook?.flightBookData?.Response;
  const userId = reducerState?.logIn?.loginData?.data?.data?.id;
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    updateBalance();
    return () => {
      setTimeout(() => {
        setAlert(false);
      }, 1000);
    };
  }, []);

  const updateBalance = () => {
    if (userId) {
      const payload = userId;
      dispatch(getUserDataAction(payload));
    }
  };

  return (
    <div className="flightContainer">
      {/* step by step updating part */}

      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Box>
            <Flightconfirmationdetail ticket={TicketDetails} />
          </Box>
        </Grid>
      </Grid>

    </div>
  );
};

export default FlightReviewbooking;
