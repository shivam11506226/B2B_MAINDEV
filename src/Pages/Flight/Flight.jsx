import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

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
    if (
      reducerState?.oneWay?.isLoading ||
      reducerState?.return?.isLoading === true
    ) {
      setLoader(true);
    }
  }, [reducerState?.oneWay?.isLoading || reducerState?.return?.isLoading]);
  // useEffect(() => {
  //   if (reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results||reducerState?.return?.returnData?.data?.data?.Response?.Results) {
  //     navigate("/Flightresult");
  //     setLoader(false);
  //   }
  // }, [reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results||reducerState?.return?.returnData?.data?.data?.Response?.Results]);

  useEffect(() => {
    const oneWayResults =
      reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;
    const returnResults =
      reducerState?.return?.returnData?.data?.data?.Response?.Results;

    if (oneWayResults) {
      navigate("/Flightresult");
    } else if (returnResults) {
      // navigate("/FlightresultReturn");
      if (returnResults[1] !== undefined) {
        navigate("/FlightresultReturn");
      } else {
        navigate("/FlightResultInternational");
      }
    }

    if (oneWayResults || returnResults) {
      setLoader(false);
    }
  }, [
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results,
    reducerState?.return?.returnData?.data?.data?.Response?.Results,
    navigate,
  ]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignSelf={"center"}
          alignItems={"center"}
        >
          <Box

            position="fixed"
            width={"88%"}
            display="flex"
            justifyContent={"space-around"}
            boxShadow="base"

           height="80px"
            top={300}
             background="#21325D"
            zIndex={4}
            border={"2px solid red"}


          >
            {/* step by step updating part */}
            <Box
              position="sticky"
              // width={"94%"}
              display="flex"
              justifyContent={"space-around"}
              boxShadow="base"
              height="80px"
              top={270}
              background="#21325D"
              zIndex={8}
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

                <Box color="white" fontWeight="bold">
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

                <Box fontWeight="normal" color="white">
                  Flight Result
                </Box>
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

                <Box fontWeight="normal" color="white">
                  Passenger Details
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
                  <Text>4</Text>
                </Box>

                <Box fontWeight="normal" color="white">
                  Review Booking
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
                  <Text>5</Text>
                </Box>

                <Box fontWeight="normal" color="white">
                  Booking Confirmation
                </Box>
              </HStack>
            </Box>
            <Box className="flightNavBar">{/* <FlightNavBar /> */}</Box>
            <Box className="flightNavBarContainer">
              <FlightAllRoute />
            </Box>

            {/* 👍Tabs of flight */}
            <StyledTabs />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Flight;
