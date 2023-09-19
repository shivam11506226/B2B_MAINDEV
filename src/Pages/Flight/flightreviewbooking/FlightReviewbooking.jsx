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
        <form>
          <Flex w="19%" h="90%">
            <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
              <Text ml="6px">5</Text>
            </Box>
            <Text ml="10" fontWeight="bold">
              Booking Confirmation
            </Text>
          </Flex>
        </form>
      </Flex>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
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
      )}
    </div>
  );
};

export default FlightReviewbooking;
