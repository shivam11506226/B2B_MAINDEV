import React, { useEffect, useState } from "react";
import "./Flight.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import Loader from "../Loader/Loader";

import FlightNavBar from "./FlightNavbar/FlightNavBar";
import OneWay from "./FlightForm/OneWay";
import { NavLink, Routes, Route } from "react-router-dom";
import FlightAllRoute from "./FlightAllRoute/FlightAllRought";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StyledTabs from "./FlightFormContainer";

const Flight = () => {
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const [loader, setLoader] = useState(false);

  console.log("reducerState", reducerState);
  useEffect(() => {
    if (reducerState?.oneWay?.isLoading == true) {
      setLoader(true);
    }
  }, [reducerState?.oneWay?.isLoading]);
  useEffect(() => {
    if (reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results) {
      navigate("/Flightresult");
      setLoader(false);
    }
  }, [reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="flightContainer" style={{border:'2px solid red'}}>
          {/* step by step updating part */}
          <Box
            w="100%"
            display="flex"
            justifyContent={"space-around"}
            boxShadow="base"
            border="1px solid gray"
            borderRadius="10px"
          >
            <HStack p="5px">
              <Box
                display="flex"
                justifyContent="center"
                w="25px"
                h="25px"
                borderRadius="50%"
                bg="#0096FF"
                color="white"
              >
                <Text>1</Text>
              </Box>

              <Box color="#FDDA0D" fontWeight="bold">
                Flight Search
              </Box>
            </HStack>
            <HStack p="5px">
              <Box
                display="flex"
                justifyContent="center"
                // align="center"
                w="25px"
                h="25px"
                borderRadius="50%"
                bg="#0096FF"
                color="white"
              >
                <Text>2</Text>
              </Box>

              <Box fontWeight="normal">Flight Result</Box>
            </HStack>
            <HStack p="5px">
              <Box
                display="flex"
                justifyContent="center"
                w="25px"
                h="25px"
                borderRadius="50%"
                bg="#0096FF"
                color="white"
              >
                <Text>3</Text>
              </Box>

              <Box fontWeight="normal">Passenger Details</Box>
            </HStack>
            <HStack p="5px">
              <Box
                display="flex"
                justifyContent="center"
                // align="center"
                w="25px"
                h="25px"
                borderRadius="50%"
                bg="#0096FF"
                color="white"
              >
                <Text>4</Text>
              </Box>

              <Box fontWeight="normal">Review Booking</Box>
            </HStack>
            <HStack p="5px">
              <Box
                display="flex"
                justifyContent="center"
                // align="center"
                w="25px"
                h="25px"
                borderRadius="50%"
                bg="#0096FF"
                color="white"
              >
                <Text>5</Text>
              </Box>

              <Box fontWeight="normal">Booking Confirmation</Box>
            </HStack>
          </Box>
          <div className="flightNavBar">{/* <FlightNavBar /> */}</div>
          <div className="flightNavBarContainer">
            <FlightAllRoute />
          </div>

          {/* 👍Tabs of flight */}
          <StyledTabs />
        </div>
      )}
    </>
  );
};

export default Flight;
