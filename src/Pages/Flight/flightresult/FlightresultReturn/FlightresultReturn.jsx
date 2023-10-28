import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { Grid, Box, Typography, Button, Card } from "@mui/material";
import FlightresultOne from "./FlightresultOne";
import FlightReturn from "./FlightReturn";
import SingleDataReturn from "./SingleDataReturn";
import MultipleDataReturn from "./MultipleDataReturn";
import { useNavigate } from "react-router-dom";
import {
  quoteAction,
  ruleAction,
} from "../../../../Redux/FlightFareQuoteRule/actionFlightQuote";
import { Center, Wrap } from "@chakra-ui/react";
import "./FlightresultReturn.css"
import Flightnavbar from "../../Flightnavbar";
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
  console.warn("ongoFlight@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", ongoFlight)

  return (
    <Box >
      {/* <Box style={{ width: 977, height: 61, background: '#FFFBFB', borderRadius: 4, border: '1px #9E9E9E solid', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
        <Box style={{
          backgroundColor: "red",
        }} >

        </Box>
      </Box> */}

<Flightnavbar/>

      <Box display={"flex"} justifyContent={"space-around"} style={{

        backgroundColor: "white",
        padding: "10px",
        gap: "5px",
       
        width:"100%",
        // borderRadius: "5px",
        // display: "none"
        // padding: "5px",
       marginTop:"40px",
       marign:"auto"






      }}>

        <Box
        
          sx={{
            // border: "1px solid blue",
            // backgroundColor: 'white',
            flex: 1,
            borderRadius: '10px',
            padding: "5px",
            maxWidth: "418px",


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
            // border: "1px solid red",
            // backgroundColor: 'white',
            flex: 1,
            borderRadius: '10px',
            padding: "5px",
            maxWidth: "418px",



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
        <Box style={{
          display: "flex",
          alignItems: "center",
          justifyContent: 'center',
          flexDirection: 'column',
          gap: "20px",



        }}>
          <Box style={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            flexDirection: 'column',
            gap: "20px",



          }} >
            <Typography className="flight_price_total" variant="h1" component="h2" style={{


            }}>
              Total Price
            </Typography>
            <Typography className="flight_price" variant="h1" component="h2" style={{
              color: "blue"

            }}>
              {` ₹ ${Number(ongoFlight?.Fare?.PublishedFare) + Number(incomeGlight?.Fare?.PublishedFare)}`}
            </Typography>
          </Box>




          <Button variant="contained" onClick={handleFareRuleAndQuote} style={
            {
              width: "100px",
              borderRadius: "10px",

              height: "50px",
              fontSize: "11px",

            }
          }>
            Book Now
          </Button>
        </Box>
      </Box>

      <Box
        display={"flex"}
        gap={"10px"}
        // border={"2px solid red"}
        justifyContent={"center"}
        
      >
        <Box backgroundColor="#BBBBBB" paddingX="8px" paddingY="8px" borderRadius="10px" width='-webkit-autofill' marginTop="10px" marginBottom="10px">
          <Box backgroundColor="#FFFFFF" height="104px" padding="24px" display='flex' width='442px' justifyContent='center' alignItems='center' flexDirection='column' gap={3} mt='5px' borderRadius="8px">
            <Box>

              <Typography className="flight_price_total" variant="h1" component="h2" style={{


              }}>
                {`${ongoFlight?.Origin?.Airport?.CityName}->Bengaluru Fri,20 Oct`}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" width='400px' alignItems='center' fontSize="10px" mt='8px' color='#071C2C'  >
              <Box border='1px solid #071C2C' flex={1} style={{
                fontWeight: '500',
                fontSize: "12px"
              }} textAlign='center' >Duration</Box>
              <Box border='1px solid #071C2C' flex={1} style={{
                fontWeight: '500',
                fontSize: "12px"
              }} textAlign='center' >Arrival</Box>
              <Box border='1px solid #071C2C' flex={1} style={{
                fontWeight: '500',
                fontSize: "12px"
              }} textAlign='center' >Price</Box>
              <Box border='1px solid #071C2C' flex={1} textAlign='center' style={{
                fontWeight: '500',
                fontSize: "12px"
              }}>Departure</Box>
            </Box>
          </Box>


          <FlightresultOne sendDataToParent={receiveChildData} />
        </Box>
        <Box backgroundColor="#BBBBBB" paddingX="8px" paddingY="8px" marginTop="10px" marginBottom="10px" borderRadius="10px">
          <Box backgroundColor="#FFFFFF" height="104px" padding="24px" display='flex' width='100%' justifyContent='center' alignItems='center' flexDirection='column' gap={3} mt='5px' borderRadius="8px">
            <Box>

              <Typography className="flight_price_total" variant="h1" component="h2" style={{


              }}>
                {`${ongoFlight?.Origin?.Airport?.CityName}->Bengaluru Fri,20 Oct`}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" flex={1} width='100%' alignItems='center' fontSize="10px" mt='8px' color='#071C2C'  >
              <Box border='1px solid #071C2C' flex={1} style={{
                fontWeight: '500',
                fontSize: "12px"
              }} textAlign='center' >Duration</Box>
              <Box border='1px solid #071C2C' flex={1} style={{
                fontWeight: '500',
                fontSize: "12px"
              }} textAlign='center' >Arrival</Box>
              <Box border='1px solid #071C2C' flex={1} style={{
                fontWeight: '500',
                fontSize: "12px"
              }} textAlign='center' >Price</Box>
              <Box border='1px solid #071C2C' flex={1} textAlign='center' style={{
                fontWeight: '500',
                fontSize: "12px"
              }}>Departure</Box>
            </Box>
          </Box>
          <FlightReturn sendDataToParent={receiveChildData} />
        </Box>
      </Box>
    </Box>
  );
};

export default FlightresultReturn;