import React, { useState,useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Button, Box, Typography, Input } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import color from "../../color/color";
import { useSelector } from "react-redux";
import axios from 'axios';


const FlightTicket= () =>{
    const reducerState = useSelector((state) => state);
    const [flightData, setFlightData]=useState([]);

    const userId = reducerState?.logIn?.loginData?.data?.data?.id;


  useEffect(() => {
    // Make a GET request to the API endpoint
    axios
      .get(`http://localhost:8000/skyTrails/flightBooking/getoneFlightsBooking/${userId}`)
      .then((response) => {
        // Handle the response data
        const user = response.data.data;
        setFlightData(user);
        console.log("flightData", response?.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle errors, e.g., display an error message
      });
  }, [userId]);

    return (
        <>
        FlightTicket Page
        </>
    )
}


export default FlightTicket;