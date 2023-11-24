import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
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
import userApi from "../../../Redux/API/api";
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
  const oneWayCheck = reducerState?.flightFare?.flightQuoteData?.Results;
  const returnCheck = reducerState?.flightFare?.flightQuoteDataReturn?.Results;
  const bookingDataLcc = reducerState?.flightBook?.flightBookData?.Response;
  const bookingDataNonLcc =reducerState?.flightBook?.flightBookDataGDS?.Response;
  const bookingDataLccReturn=""
  const bookingDataNonLccReturn=""

  const addBookingDetailsReturn=()=>{
    
  }

 const addBookingDetails = () => {
     if (bookingDataLcc) {
       console.log("lccCheck");
       const payloadLCC = {
         userId: reducerState?.logIn?.loginData?.data?.data?.id,
         bookingId: `${bookingDataLcc?.BookingId}`,
         oneWay: true,
         pnr: bookingDataLcc?.PNR,
         origin: bookingDataLcc?.FlightItinerary?.Origin,
         destination: bookingDataLcc?.FlightItinerary?.Destination,
         paymentStatus: "success",
         dateOfJourney: bookingDataLcc?.FlightItinerary?.InvoiceCreatedOn,
         amount: bookingDataLcc?.FlightItinerary?.InvoiceAmount,
         airlineDetails: {
           AirlineName: bookingDataLcc?.FlightItinerary?.ValidatingAirlineCode,
           DepTime: "ggtglt",
         },
         passengerDetails: bookingDataLcc?.FlightItinerary?.Passenger?.map(
           (item) => {
             return {
               firstName: item?.FirstName,
               lastName: item?.LastName,
               gender: item?.Title,
               ContactNo: item?.ContactNo,
               DateOfBirth: item?.DateOfBirth,
               email: item?.Email,
               addressLine1: item?.AddressLine1,
               city: item?.City,
             };
           }
         ),
       };
       userApi.flightBookingDataSave(payloadLCC);
     } else {
       console.log("nonlccCheck");
       const payloadNonLcc = {
         userId: reducerState?.logIn?.loginData?.data?.data?.id,
         bookingId: `${bookingDataNonLcc?.BookingId}`,
         oneWay: true,
         pnr: bookingDataNonLcc?.PNR,
         origin: bookingDataNonLcc?.FlightItinerary?.Origin,
         destination: bookingDataNonLcc?.FlightItinerary?.Destination,
         paymentStatus: "success",
         dateOfJourney: bookingDataNonLcc?.FlightItinerary?.LastTicketDate,
         amount: bookingDataNonLcc?.FlightItinerary?.Fare?.PublishedFare,
         airlineDetails: {
           AirlineName:
             bookingDataNonLcc?.FlightItinerary?.ValidatingAirlineCode,
           DepTime: "jgtr",
         },
         passengerDetails: bookingDataNonLcc?.FlightItinerary?.Passenger?.map(
           (item) => {
             return {
               firstName: item?.FirstName,
               lastName: item?.LastName,
               gender: item?.Title,
               ContactNo: item?.ContactNo,
               DateOfBirth: item?.DateOfBirth,
               email: item?.Email,
               addressLine1: item?.AddressLine1,
               city: item?.City,
             };
           }
         ),
       };
       userApi.flightBookingDataSave(payloadNonLcc);
     }
   
 };
 const debouncedAddBookingDetails = debounce(addBookingDetails, 500);
  useEffect(() => {
    updateBalance();
     debouncedAddBookingDetails();
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
