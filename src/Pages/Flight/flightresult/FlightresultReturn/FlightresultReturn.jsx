import React from "react";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { Grid, Box, Typography, Button } from "@mui/material";
import SingleData from "../SingleData";
import MultipleData from "../MultipleData";
import FlightresultOne from "./FlightresultOne";
const FlightresultReturn = () => {
  const reducerState = useSelector((state) => state);
  const result =
    reducerState?.return?.returnData?.data?.data?.Response?.Results;
  console.log(result);

  return <Box >
  <FlightresultOne/>
  </Box>;
};

export default FlightresultReturn;
