import React, { useEffect, useState } from "react";
import "./passenger.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import OneWay from "../FlightForm/OneWay";
import { NavLink, Routes, Route } from "react-router-dom";
import Leftdetail from "./Leftdetail";
import Rightdetail from "./Rightdetail";
import { useDispatch, useSelector, useReducer } from "react-redux";

import { useNavigate } from "react-router-dom";
import Flightnavbar from "../Flightnavbar";
const Flight = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("Props", props);
  const ResultIndex = sessionStorage.getItem("ResultIndex");
  console.log("reducerStateDemount", reducerState);
  console.log("resultIndex", ResultIndex);
  function backRoute(){
    navigate("/FlightResult")
  }
  return (
    <div className="flightContainer">
      {/* step by step updating part */}

      <Flightnavbar/>

      <Grid container spacing={1} style={{border:"2px solid red",margin:"auto"}}>
        <Grid item xs={12} md={8}>
          <Button onClick={backRoute} variant="Contained">Go Back</Button>
         
            <Leftdetail />
        
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <Rightdetail />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Flight;
