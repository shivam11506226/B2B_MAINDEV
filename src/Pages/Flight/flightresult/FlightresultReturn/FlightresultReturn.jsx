import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { Grid, Box, Typography, Button } from "@mui/material";
import FlightresultOne from "./FlightresultOne";
import FlightReturn from "./FlightReturn";
import SingleDataReturn from "./SingleDataReturn";
import MultipleDataReturn from "./MultipleDataReturn";
import { useNavigate } from "react-router-dom";
import {
  quoteAction,
  ruleAction,
} from "../../../../Redux/FlightFareQuoteRule/actionFlightQuote";
import { Wrap } from "@chakra-ui/react";
const FlightresultReturn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);

  const result =
    reducerState?.return?.returnData?.data?.data?.Response?.Results;
  const initialGoFlight = result[0][0];
  const initialReturnFlight = result[1][0];
  const [ongoFlight, setOngoFlight] = useState(initialGoFlight);
  const [incomeGlight, setIncomeFlight] = useState(initialReturnFlight);

  useEffect(() => {
    setOngoFlight(initialGoFlight);
    setIncomeFlight(initialReturnFlight);
  }, [initialGoFlight, initialReturnFlight]);

  const receiveChildData = (data) => {
    console.log("callbackData", data);
    const onnGoingFlight =
      JSON.parse(sessionStorage.getItem("flightDetailsONGo")) ||
      initialGoFlight;
    const incomingFlight =
      JSON.parse(sessionStorage.getItem("flightDetailsIncome")) ||
      initialReturnFlight;
    if (data) {
      setOngoFlight(onnGoingFlight);
      setIncomeFlight(incomingFlight);
    }
  };

  const handleFareRuleAndQuote = () => {
    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId: reducerState?.return?.returnData?.data?.data?.Response?.TraceId,
      ResultIndex: `${ongoFlight?.ResultIndex},${incomeGlight?.ResultIndex}`,
    };
    console.log(payload);
    dispatch(ruleAction(payload));
    dispatch(quoteAction(payload));
    navigate("/FlightresultReturn/Passengerdetail");

    console.log("reducerrrState", reducerState);
  };
  console.log("ongoFlight", ongoFlight);
  console.log("incomeGlight", incomeGlight);
  console.log("reducerrrState", reducerState);

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-around"} >
        <Box
          sx={{
            border: "1px solid red",
          }}
        >
          {ongoFlight?.Segments[0].length == 1 ? (
            <SingleDataReturn
              flight={ongoFlight?.Segments[0][0]}
              wholeFlight={ongoFlight}
              index={ongoFlight?.ResultIndex}
              fare={ongoFlight?.Fare?.PublishedFare}
              IsLCC={ongoFlight.IsLCC}
            />
          ) : (
            <MultipleDataReturn
              flight={ongoFlight?.Segments[0]}
              wholeFlight={ongoFlight}
              index={ongoFlight?.ResultIndex}
              fare={ongoFlight?.Fare?.PublishedFare}
              IsLCC={ongoFlight.IsLCC}
            />
          )}
        </Box>
        <Box
          sx={{
            border: "1px solid red",
          }}
        >
          {incomeGlight?.Segments[0].length == 1 ? (
            <SingleDataReturn
              flight={incomeGlight?.Segments[0][0]}
              wholeFlight={incomeGlight}
              index={incomeGlight?.ResultIndex}
              fare={incomeGlight?.Fare?.PublishedFare}
              IsLCC={incomeGlight?.IsLCC}
            />
          ) : (
            <MultipleDataReturn
              flight={incomeGlight?.Segments[0]}
              wholeFlight={incomeGlight}
              index={incomeGlight?.ResultIndex}
              fare={incomeGlight?.Fare?.PublishedFare}
              IsLCC={incomeGlight?.IsLCC}
            />
          )}
        </Box>
        <Box 
        sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Button variant="contained" onClick={handleFareRuleAndQuote}>
          Book Nows
        </Button>
        </Box>
      </Box>

      <Box
        display={"flex"}
        gap={"10px"}
        border={"2px solid red"}
        justifyContent={"center"}
      >
        <Box>
          <FlightresultOne sendDataToParent={receiveChildData} />
        </Box>
        <Box>
          <FlightReturn sendDataToParent={receiveChildData} />
        </Box>
      </Box>
    </Box>
  );
};

export default FlightresultReturn;
