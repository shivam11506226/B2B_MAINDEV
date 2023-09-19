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
import {
  quoteAction,
  ruleAction,
} from "../../../Redux/FlightFareQuoteRule/actionFlightQuote";
import { useNavigate } from "react-router-dom";

const Flight = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("Props", props);
  const ResultIndex = sessionStorage.getItem("ResultIndex");
  console.log("reducerState", reducerState);
  console.log("resultIndex", ResultIndex);

  const payload = {
    EndUserIp: reducerState?.ip?.ipData,
    TokenId: reducerState?.ip?.tokenData,
    TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
    ResultIndex: ResultIndex,
  };

  useEffect(() => {
    dispatch(ruleAction(payload));
    dispatch(quoteAction(payload));
  }, []);

  return (
    <div className="flightContainer">
      {/* step by step updating part */}

      <Flex
        w="100%"
        h="50"
        mb="20"
        borderRadius="20px"
        m="auto"
        className="shadow-sm p-3 mb-5 bg-white rounded "
      >
        <Flex w="19%" h="90%">
          <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
            <Text ml="6px">1</Text>
          </Box>
          <Text ml="10" fontWeight="bold">
            Flight Search
          </Text>
        </Flex>
        <Spacer />
        <Flex w="19%" h="90%">
          <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
            <Text ml="6px">2</Text>
          </Box>
          <Text ml="10" fontWeight="bold">
            Flight Result
          </Text>
        </Flex>
        <Spacer />

        <Flex w="19%" h="90%">
          <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
            <Text ml="6px">3</Text>
          </Box>
          <Text ml="10" fontWeight="bold">
            Passenger Details
          </Text>
        </Flex>
        <Spacer />
        <Flex w="19%" h="90%">
          <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
            <Text ml="6px">4</Text>
          </Box>
          <Text ml="10" fontWeight="bold">
            Review Booking
          </Text>
        </Flex>
        <Spacer />
        <Flex w="19%" h="90%">
          <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
            <Text ml="6px">5</Text>
          </Box>
          <Text ml="10" fontWeight="bold">
            Booking Confirmation
          </Text>
        </Flex>
      </Flex>

      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Box>
            <Leftdetail />
          </Box>
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
