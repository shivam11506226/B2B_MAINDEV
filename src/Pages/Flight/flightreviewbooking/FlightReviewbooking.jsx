import React, { useEffect, useState } from "react";
import "./flightreviewbooking.css";
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
import Fairsummary from "./Fairsummary";
import Flightbookingdetail from "./Flightbookingdetail";
import Rightdetail from "../passengerdetail/Rightdetail";
import { useDispatch, useSelector } from "react-redux";
import Flightnavbar from "../Flightnavbar";
const FlightReviewbooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const adults = sessionStorage.getItem("adults");
  const childs = sessionStorage.getItem("childs");
  const infants = sessionStorage.getItem("infants");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(
      "reducerState?.flightBook?.flightBookDataGDS",
      reducerState?.passengers?.passengersData
    );
    if (reducerState?.passengers?.passengersData) {
      setLoading(false);
    }
  }, [reducerState]);
  return (
    <div className="flightContainer" style={{marginTop:"-20px"}}>
    

     
      {/* {loading ? (
        <div>Loading...</div>
      ) : ( */}
         {/* <Flightnavbar/> */}
        <Grid container style={{margin:"auto",display:"flex",gap:"30px",width:"95%"}}>
          <Grid item xs={12} md={8}>
            <Box>
              <Flightbookingdetail />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              {/* <Fairsummary /> */}
              <Rightdetail />
            </Box>
          </Grid>
        </Grid>
      {/* )} */}
    </div>
  );
};

export default FlightReviewbooking;
