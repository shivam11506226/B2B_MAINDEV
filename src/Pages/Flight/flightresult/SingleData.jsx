import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fairrule from "./Fairrule";
import "./SingleData.css";
import Nonrefundable from "./Nonrefundable";
import LuggageIcon from "@mui/icons-material/Luggage";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { tokenAction } from "../../../Redux/ResultIndex/resultIndex";
import Luggage from "./Luggage";
import { filterProps } from "framer-motion";

function SingleData(props) {
  // console.log("Props", props);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const flight = props.flight;
  const IsLCC = props.IsLCC;
  // console.log("flight single", flight);

  const results =
  reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results|| reducerState?.return?.returnData?.data?.data?.Response?.Results;
// console.log("Redux State", results);

  const indexKey = props.index;
  const fare =
    reducerState?.logIn?.loginData.length > 0
      ? `${Math.round(
          Number(props.fare) +
            Number(reducerState?.logIn?.loginData?.data?.data?.markup?.flight)
        )}`
      : Math.round(Number(props.fare));

  console.log(fare);
  const img = flight?.Airline?.AirlineCode;
  

 


  const time = `${Math.floor(flight?.Duration / 60)}hr ${
    flight.Duration % 60
  }min`;
  // console.log(
  //   flight?.Duration,
  //   "Hours:",
  //   Math.floor(flight?.Duration / 60),
  //   "Minutes:",
  //   flight.Duration % 60,
  //   "Index Key",
  //   indexKey
  // );

  const dateString = flight?.Origin?.DepTime;
  const date1 = new Date(dateString);
  const time1 = date1.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const day = date1.getDate();
  const month = date1.toLocaleString("default", {
    month: "short",
  });
  const year = date1.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  const dateString1 = flight?.Destination?.ArrTime;
  const date2 = new Date(dateString1);
  const time2 = date2.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const day1 = date2.getDate();
  const month1 = date2.toLocaleString("default", {
    month: "short",
  });
  const year1 = date2.getFullYear();
  const formattedDate1 = `${day1} ${month1} ${year1}`;


  const handleClick = (ResultIndex) => {
    console.log("Handel Click Index Key", ResultIndex);
    navigate("passengerdetail");
    sessionStorage.setItem("ResultIndex", ResultIndex);
  };


  
 

  return (
    <div>
      <Box
        p={2}
        mb={2}
        backgroundColor="#F5F5F5"
        boxShadow="1px 1px 8px gray"
        borderRadius="10px"
      >
        <Box display="flex" justifyContent="space-between">
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid md={2} sm={2} py={3}>
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
                    src={`${process.env.PUBLIC_URL}/FlightImages/${img}.png`}
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
                    {flight?.Airline?.AirlineName}
                  </Typography>
                  <Typography className="flight_class">
                    {flight?.Airline?.AirlineCode}{" "}
                    {flight?.Airline?.FlightNumber}
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
            <Grid md={2} sm={1} py={3} display="flex" justifyContent="center">
              <Box px={1}>
                <Typography className="flight_name">
                  <span style={{ fontSize: "11px" }}>{formattedDate}</span>
                  <p style={{ paddingBottom: "5px", margin: 0 }}>{time1}</p>
                </Typography>
                <Typography className="flight_class">
                  {flight?.Origin?.Airport?.CityName}
                </Typography>
              </Box>
            </Grid>
            <Grid md={2} sm={2} py={4}>
              <Box display="flex" justifyContent="center">
                <Box>
                  <Box px={1} textAlign="center">
                    <Typography className="flight_class">{time}</Typography>
                  </Box>
                  <Box px={1} textAlign="center">
                    <Typography className="flight_class">
                      Direct Flight
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid md={2} sm={1} py={3} display="flex" justifyContent="center">
              <Box px={1}>
                <Typography className="flight_name">
                  {" "}
                  <Typography className="flight_name">
                    <span style={{ fontSize: "11px" }}>{formattedDate1}</span>
                    <p style={{ paddingBottom: "5px", margin: 0 }}>{time2}</p>
                  </Typography>
                </Typography>
                <Typography className="flight_class">
                  {flight?.Destination?.Airport?.CityName}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            md={2}
            sm={2}
            py={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box px={1}>
              <Typography className="flight_price">₹{fare}</Typography>
            </Box>
          </Grid>
          <Grid
            md={2}
            sm={2}
            py={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box px={1}>
              <Typography className="flight_price">₹{fare}</Typography>
            </Box>
          </Grid>
        </Box>
        {reducerState?.return?.returnData?.data?.data?.Response?.Results[1]?(
          
          
          
        <Box display="flex" justifyContent="space-between">
        {
         

         (()=>{
          //return data

         const imgReturn=results[1][0]?.AirlineCode;

         const timeReturn = `${Math.floor(results[1][0]?.Segments[0][0]?.Duration / 60)}hr ${
results[1][0]?.Segments[0][0]?.Duration % 60
}min`;

console.log("data return flight array", results[1][0]?.Segments[0][0]?.Airline)

//return flight dateFormate
const dateStringReturn = results[1][0]?.Segments[0][0]?.Origin?.DepTime;
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

const formattedDateReturn=`${dayReturn} ${monthReturn} ${yearReturn}`;

// arrival
const dateStringReturn1 = results[1][0]?.Segments[0][0]?.Destination?.ArrTime;
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

const formattedDateReturn1=`${dayReturn1} ${monthReturn1} ${yearReturn1}`;
const fareReturn=Math.round(results[1][0]?.Fare?.PublishedFare);


 return (
  <>
  <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid md={2} sm={2} py={3}>
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
                  {results[1][0]?.Segments[0][0]?.Airline?.AirlineName}
                </Typography>
                <Typography className="flight_class">
                  {results[1][0]?.Segments[0][0]?.Airline?.AirlineCode}{" "}
                  {results[1][0]?.Segments[0][0]?.Airline?.FlightNumber}
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
          <Grid md={2} sm={1} py={3} display="flex" justifyContent="center">
            <Box px={1}>
              <Typography className="flight_name">
                <span style={{ fontSize: "11px" }}>{formattedDateReturn}</span>
                <p style={{ paddingBottom: "5px", margin: 0 }}>{timeReturn1}</p>
              </Typography>
              <Typography className="flight_class">
                {results[1][0]?.Segments[0][0]?.Origin?.Airport?.CityName}
              </Typography>
            </Box>
          </Grid>
          <Grid md={2} sm={2} py={4}>
            <Box display="flex" justifyContent="center">
              <Box>
                <Box px={1} textAlign="center">
                  <Typography className="flight_class">{timeReturn}</Typography>
                </Box>
                <Box px={1} textAlign="center">
                  <Typography className="flight_class">
                    Direct Flight
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid md={2} sm={1} py={3} display="flex" justifyContent="center">
            <Box px={1}>
              <Typography className="flight_name">
                {" "}
                <Typography className="flight_name">
                  <span style={{ fontSize: "11px" }}>{formattedDateReturn1}</span>
                  <p style={{ paddingBottom: "5px", margin: 0 }}>{timeReturn2}</p>
                </Typography>
              </Typography>
              <Typography className="flight_class">
                {results[1][0]?.Segments[0][0]?.Destination?.Airport?.CityName}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          md={2}
          sm={2}
          py={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box px={1}>
            <Typography className="flight_price">₹{fareReturn}</Typography>
          </Box>
        </Grid>
        <Grid
          md={2}
          sm={2}
          py={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box px={1}>
            <Typography className="flight_price">₹{fareReturn}</Typography>
          </Box>
        </Grid>
  </>
 )

    })()
          }

          
        </Box>):""}
        <Box display="flex" justifyContent="space-between" alignItems="center">
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
            {/* <Fairrule /> */}
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
        </Box>
      </Box>
    </div>
  );
}

export default SingleData;
