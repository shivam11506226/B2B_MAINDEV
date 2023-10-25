import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../SingleData.css";
import Nonrefundable from "../Nonrefundable";
import { useDispatch, useSelector, useReducer } from "react-redux";
import Luggage from "../Luggage";
import { PropagateLoader } from "react-spinners";

function SingleDataReturn(props) {
  // console.log("Props", props);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const flight = props.flight;
  const wholeFlight=props.wholeFlight
  const IsLCC = props.IsLCC;


  // console.log("flight single", flight);

  const results =
    reducerState?.return?.returnData?.data?.data?.Response?.Results;
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

  const handleClick = (allDetails, ResultIndex) => {
    const slicedResultIndex = ResultIndex.slice(0, 2);
    console.log("Handel Click Index Key", slicedResultIndex);
    console.log("hghfdsjgdsjsfd", props.flight);

    if (slicedResultIndex == "OB") {
      sessionStorage.setItem("flightDetailsONGo", JSON.stringify(allDetails));
    }
    if (slicedResultIndex == "IB") {
      sessionStorage.setItem("flightDetailsIncome", JSON.stringify(allDetails));
    }
  };

  return (
    <div
      onClick={() => {
        props.onSelect(props.index);
       handleClick(props.wholeFlight, props.index);
      }}
    >
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          border={props.isSelected ? "2px solid red" : ""}
        >
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
        </Box>
      </Box>
    </div>
  );
}

export default SingleDataReturn;
