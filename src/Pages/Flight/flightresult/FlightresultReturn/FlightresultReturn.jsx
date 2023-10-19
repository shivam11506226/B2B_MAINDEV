import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { Grid, Box, Typography, Button } from "@mui/material";
import FlightresultOne from "./FlightresultOne";
import FlightReturn from "./FlightReturn";
import SingleDataReturn from "./SingleDataReturn";
import MultipleDataReturn from "./MultipleDataReturn";
import { Wrap } from "@chakra-ui/react";
const FlightresultReturn = () => {
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
    const onnGoingFlight = JSON.parse(
      sessionStorage.getItem("flightDetailsONGo")
    );
    const incomingFlight = JSON.parse(
      sessionStorage.getItem("flightDetailsIncome")
    );
    if (data) {
      setIncomeFlight(incomingFlight);
      setOngoFlight(onnGoingFlight);
    }
  };
  console.log("ongoFlight", ongoFlight);
  console.log("incomeGlight", incomeGlight);

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-around"}>
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
        <Button variant="contained">Book Now</Button>
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
