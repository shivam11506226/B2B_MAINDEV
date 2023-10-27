import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fairrule from "./Fairrule";
import "./MultiData.css";
import Nonrefundable from "./Nonrefundable";
import { useDispatch, useSelector, useReducer } from "react-redux";
import LuggageIcon from "@mui/icons-material/Luggage";
import Luggage from "./Luggage";
import {
  quoteAction,
  ruleAction,
  setLoading,
} from "../../../Redux/FlightFareQuoteRule/actionFlightQuote";

const MultipleData = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  let statusRule = reducerState?.flightFare?.isLoadingRuleDone || false;
  let statusQuote = reducerState?.flightFare?.isLoadingQuoteDone || false;
  console.log("isLoadingRuleDone", statusRule);
  console.log("isLoadingQuoteDone", statusQuote);

  const flight = props.flight;
  const IsLCC = props.IsLCC;
  // console.log("flight single", flight);

  const results =
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results ||
    reducerState?.return?.returnData?.data?.data?.Response?.Results;
  const indexKey = props.index;
  const fare =
    reducerState?.logIn?.loginData.length > 0
      ? `${Math.round(
          Number(props.fare) +
            Number(reducerState?.logIn?.loginData?.data?.data?.markup?.flight)
        )}`
      : Math.round(Number(props.fare));
  // const fare = `${Math.round(
  //   props.fare + reducerState?.logIn?.loginData?.data?.data?.markup?.flight
  // )}`;
  const img = flight[0]?.Airline?.AirlineCode;
  const stop = props.stop;

  // console.log("Results", results);
  const handleClick = (ResultIndex) => {
    console.log("Handel Click Index Key", ResultIndex);
    // navigate("passengerdetail");
    sessionStorage.setItem("ResultIndex", ResultIndex);
    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
      ResultIndex: ResultIndex,
    };
    dispatch(ruleAction(payload));
    dispatch(quoteAction(payload));
  };
  useEffect(() => {
    if (statusQuote && statusRule) {
      navigate("/passengerdetail");
      dispatch(setLoading("hjbb"));
    }
  }, [statusQuote, statusRule]);

  const time = `${Math.floor(flight[0]?.Duration / 60)}hr ${
    flight[0].Duration % 60
  }min`;

  const dateString = flight[0]?.Origin?.DepTime;
  const date1 = new Date(dateString);
  const time1 = date1.toLocaleTimeString();

  const day1 = date1.getDate();
  const month1 = date1.toLocaleString("default", {
    month: "short",
  });
  const year1 = date1.getFullYear();
  const formattedDate1 = `${day1} ${month1} ${year1}`;

  const dateString1 = flight[1]?.Destination?.ArrTime;
  const date2 = new Date(dateString1);
  const time2 = date2.toLocaleTimeString();

  const day2 = date2.getDate();
  const month2 = date2.toLocaleString("default", {
    month: "short",
  });
  const year2 = date2.getFullYear();
  const formattedDate2 = `${day2} ${month2} ${year2}`;
  return (
    <div key={indexKey}>
      <Box
        className="container"
        border="1px solid #9E9E9E"
        background="#FFFBFB"
        borderRadius="10px"
        width="977px"
        height="143px"
        paddingTop="25px"
      >
        <Box display="flex" justifyContent="space-between">
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <Box
                  sx={{
                    width: "60px",
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/FlightImages/${img}.png`}
                    alt="flight"
                    style={{
                      width: "-webkit-fill-available",
                      // height: "40px",
                      // backgroundColor: "white",

                      height: "30px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography className="" sx={{ color: " #5C0FD9" }}>
                    {flight[0]?.Airline?.AirlineName}
                  </Typography>
                  <Typography className="flight_class_code">
                    {flight[0]?.Airline?.AirlineCode}{" "}
                    <span>{flight[0]?.Airline?.FlightNumber}</span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {/* <Grid display="flex" justifyContent="center">
      <Box px={1}>
        <Typography className="flight_name1">
          {flight?.Airline?.AirlineName}
        </Typography>
        <Typography className="flight_class">
          Economy
        </Typography>
      </Box>
    </Grid> */}
            <Grid display="flex" justifyContent="center">
              <Box px={1} className="time_container">
                <Typography className="flight_city">
                  {flight[0]?.Origin?.Airport?.CityName}
                  {/* <span style={{ fontSize: "11px" }}>{formattedDate}</span> */}
                </Typography>
                <Typography className="flight_city">
                  {time1.substr(0, 5)}
                </Typography>
                {/* <Typography className="terminal">
          Terminal 2
        </Typography> */}
              </Box>
            </Grid>
            <Grid>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box px={1} textAlign="center">
                    <Typography
                      style={{
                        // color: '#BBBBBB', fontSize: '12px',
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                      }}
                    >
                      {time}
                    </Typography>
                  </Box>
                  <Box
                    backgroundColor="#DFD049"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="77px"
                    height="2px"
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#D9D9D9",
                        borderRadius: "100%",
                      }}
                    >
                      <Box
                        backgroundColor="#5E5B5B"
                        width="4px"
                        height="4px"
                        borderRadius="8px"
                      />
                    </Box>
                  </Box>
                  <Box px={1} textAlign="center">
                    <Typography
                      style={{
                        color: "#BBBBBB",
                        fontSize: "12px",
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                      }}
                    >
                      {`1 stop via ${flight[0]?.Destination?.Airport?.CityName}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid display="flex" justifyContent="center">
              <Box px={1}>
                <Typography className="flight_city">
                  {flight[1]?.Destination?.Airport?.CityName}
                  {/* <span style={{ fontSize: "11px" }}>{formattedDate}</span> */}
                </Typography>
                <Typography className="flight_city">
                  {time2.substr(0, 5)}
                </Typography>
                {/* <Typography className="terminal">
          Terminal 2
        </Typography> */}
              </Box>
            </Grid>
            <Grid
              display="flex"
              // justifyContent="center"
              // alignItems="center"
              flexDirection="column"
              // gap={2}
            >
              <Box>
                <Typography className="flight_price1">₹{fare}</Typography>
              </Box>
              <Box className="publish">
                <Typography className="publish_text">Publish</Typography>
              </Box>
            </Grid>
          </Grid>
          {/* <Grid
  
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Box px={1}>
      <Typography className="flight_price">₹{fare}</Typography>
    </Box>
  </Grid> */}

          <Grid
            display="flex"
            marginTop="-5px"
           
            flexDirection="column"
            gap={2}
            px={2}
          >
            {/* <Box display="flex"> */}
            <Luggage
              destination={flight?.Destination?.Airport?.AirportCode}
              origin={flight?.Origin?.Airport?.AirportCode}
              cabin={flight?.CabinBaggage}
              checkin={flight?.Baggage}
              fareClass={flight?.Airline?.FareClass}
            />

            <Nonrefundable />
            {/* </Box> */}
          </Grid>
          {/* <Grid display="flex" justifyContent="center">
    <Box px={1}>
      <Typography className="flight_city">
        {flight?.Destination?.Airport?.CityName}
     
      </Typography>
      <Typography className="flight_city">
        {time2.substr(0, 5)}

      </Typography>
   
    </Box>
  </Grid> */}
          <Grid
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box px={1}>
              <Button
                variant="contained"
                id="button1"
                onClick={() => {
                  console.log("indexKey inside loop", indexKey);
                  handleClick(indexKey);
                }}
              >
                Book
              </Button>
            </Box>
            {/* <Box px={1}>


      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Share" />

      </FormGroup>
    </Box> */}
          </Grid>
        </Box>
        {reducerState?.return?.returnData?.data?.data?.Response?.Results[1] ? (
          <Box
            display="flex"
            justifyContent="space-between"
            style={{ backgroundColor: "blue", pending: "10px" }}
          >
            {(() => {
              //return data

              const imgReturn = results[1][0]?.AirlineCode;

              const timeReturn = `${Math.floor(
                results[1][0]?.Segments[0][0]?.Duration / 60
              )}hr ${results[1][0]?.Segments[0][0]?.Duration % 60}min`;

              console.log(
                "data return flight array",
                results[1][0]?.Segments[0][0]?.Airline
              );

              //return flight dateFormate
              const dateStringReturn =
                results[1][0]?.Segments[0][0]?.Origin?.DepTime;
              const dateReturn = new Date(dateStringReturn);
              const timeReturn1 = dateReturn.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });

              const dayReturn = dateReturn.getDate();
              const monthReturn = dateReturn.toLocaleString("default", {
                month: "short",
              });
              const yearReturn = dateReturn.getFullYear();

              const formattedDateReturn = `${dayReturn} ${monthReturn} ${yearReturn}`;

              // arrival
              const dateStringReturn1 =
                results[1][0]?.Segments[0][0]?.Destination?.ArrTime;
              const dateReturn1 = new Date(dateStringReturn1);
              const timeReturn2 = dateReturn1.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });

              const dayReturn1 = dateReturn1.getDate();
              const monthReturn1 = dateReturn1.toLocaleString("default", {
                month: "short",
              });
              const yearReturn1 = dateReturn1.getFullYear();

              const formattedDateReturn1 = `${dayReturn1} ${monthReturn1} ${yearReturn1}`;
              const fareReturn = Math.round(results[1][0]?.Fare?.PublishedFare);

              return (
                <>
                  <Grid
                    container
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid>
                      <Box
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                      >
                        <Box
                          sx={{
                            width: "auto",
                            height: "40px",
                            backgroundColor: "white",
                          }}
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/FlightImages/${imgReturn}.png`}
                            alt="flight"
                            style={{
                              width: "-webkit-fill-available",
                              height: "40px",
                              backgroundColor: "white",
                            }}
                          />
                        </Box>
                        <Box px={1}>
                          <Typography className="flight_name">
                            {
                              results[1][0]?.Segments[0][0]?.Airline
                                ?.AirlineName
                            }
                          </Typography>
                          <Typography className="flight_class">
                            {
                              results[1][0]?.Segments[0][0]?.Airline
                                ?.AirlineCode
                            }{" "}
                            {
                              results[1][0]?.Segments[0][0]?.Airline
                                ?.FlightNumber
                            }
                          </Typography>
                          <Typography className="mt-2">
                            {IsLCC ? (
                              <span
                                className="text-danger"
                                style={{ fontSize: "12px" }}
                              >
                                Not Available
                              </span>
                            ) : (
                              <span
                                className="text-success"
                                style={{ fontSize: "12px" }}
                              >
                                Available
                              </span>
                            )}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid
                      md={2}
                      sm={1}
                      py={3}
                      display="flex"
                      justifyContent="center"
                    >
                      <Box px={1}>
                        <Typography className="flight_name">
                          <span style={{ fontSize: "11px" }}>
                            {formattedDateReturn}
                          </span>
                          <p style={{ paddingBottom: "5px", margin: 0 }}>
                            {timeReturn1}
                          </p>
                        </Typography>
                        <Typography className="flight_class">
                          {
                            results[1][0]?.Segments[0][0]?.Origin?.Airport
                              ?.CityName
                          }
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid md={2} sm={2} py={4}>
                      <Box display="flex" justifyContent="center">
                        <Box>
                          <Box px={1} textAlign="center">
                            <Typography className="flight_class">
                              {timeReturn}
                            </Typography>
                          </Box>
                          <Box px={1} textAlign="center">
                            <Typography className="flight_class">
                              Direct Flight
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid display="flex" justifyContent="center">
                      <Box px={1}>
                        <Typography className="flight_name">
                          {" "}
                          <Typography className="flight_name">
                            <span style={{ fontSize: "11px" }}>
                              {formattedDateReturn1}
                            </span>
                            <p style={{ paddingBottom: "5px", margin: 0 }}>
                              {timeReturn2}
                            </p>
                          </Typography>
                        </Typography>
                        <Typography className="flight_class">
                          {
                            results[1][0]?.Segments[0][0]?.Destination?.Airport
                              ?.CityName
                          }
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>
                      <Typography className="flight_price">
                        ₹{fareReturn}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box px={1}>
                      <Typography className="flight_price">
                        ₹{fareReturn}
                      </Typography>
                    </Box>
                  </Grid>
                </>
              );
            })()}
          </Box>
        ) : (
          ""
        )}
        {/* <Box className="saverFare" p={2}>
            <Typography className="saverFareP" variant="p" >
              This is saver Fare. - e5170
            </Typography>
  
          </Box> */}

        {/* <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography className="seat_left" display="flex" alignItems="center">
              {flight?.NoOfSeatAvailable} Seats Left
            </Typography>
            <Box display="flex">
              <Luggage
                destination={flight?.Destination?.Airport?.AirportCode}
                origin={flight?.Origin?.Airport?.AirportCode}
                cabin={flight?.CabinBaggage}
                checkin={flight?.Baggage}
                fareClass={flight?.Airline?.FareClass}
              />
              
              <Nonrefundable />
            </Box>
            <Grid
              md={2}
              sm={2}
              py={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <button
                onClick={() => {
                  console.log("indexKey inside loop", indexKey);
                  handleClick(indexKey);
                }}
              >
                <div class="svg1-wrapper1-1">
                  <div class="svg1-wrapper1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      id="svg1"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span id="id2">Book Now</span>
              </button>
            </Grid>
          </Box> */}
      </Box>
    </div>
  );
};

export default MultipleData;
