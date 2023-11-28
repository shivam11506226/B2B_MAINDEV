import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import Loader from "../Loader/Loader";
import FlightLoader from "./FlightLoader/FlightLoader";

import FlightNavBar from "./FlightNavbar/FlightNavBar";
import OneWay from "./FlightForm/OneWay";
import { NavLink, Routes, Route } from "react-router-dom";
import FlightAllRoute from "./FlightAllRoute/FlightAllRought";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StyledTabs from "./FlightFormContainer";
import Flightnavbar from "./Flightnavbar";
import "./Flight.css"

const Flight = () => {
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const [loader, setLoader] = useState(false);

  // console.log("reducerState", reducerState);
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

  if (loader) {
    return <FlightLoader />;
  }

  return (
    // <>
    //   {loader ? (
    //     <FlightLoader />
    //   ) : (
    //     <div>
    //       <Box
    //         display={"flex"}
    //         justifyContent={"center"}
    //         alignSelf={"center"}
    //         alignItems={"center"}
    //       >
    //         {/* <Flightnavbar/> */}

    //       </Box>
    //       <StyledTabs />
    //     </div>

    //   )}
    // </>
    // <>
    //   <FlightLoader />
    // </>

    <div className="container-xxl margin-pecentage-large">
      <StyledTabs />
    </div>
  );
};

export default Flight;
