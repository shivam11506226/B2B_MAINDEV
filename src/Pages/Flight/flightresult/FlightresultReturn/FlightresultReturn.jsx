import React from "react";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { Grid, Box, Typography, Button } from "@mui/material";
import SingleData from "../SingleData";
import MultipleData from "../MultipleData";
import FlightresultOne from "./FlightresultOne";
import FlightReturn from "./FlightReturn";
import { Wrap } from "@chakra-ui/react";
const FlightresultReturn = () => {
  const reducerState = useSelector((state) => state);
  const result =
    reducerState?.return?.returnData?.data?.data?.Response?.Results;
  console.log(result);

  return (
    <Box>
        <Box></Box>
      <Box
        display={"flex"}
        gap={"10px"}
        border={"2px solid red"}
        justifyContent={"center"}
        
      >
        <Box>
          <FlightresultOne />
        </Box>
        <Box>
          <FlightReturn />
        </Box>
      </Box>
    </Box>
  );
};

export default FlightresultReturn;
