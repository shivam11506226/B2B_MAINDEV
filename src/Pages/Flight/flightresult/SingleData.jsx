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
import flightdir from "../../../Images/flgihtdir.png";
import {
  quoteAction,
  ruleAction,
  setLoading,
} from "../../../Redux/FlightFareQuoteRule/actionFlightQuote";
import FlightLoader from "../FlightLoader/FlightLoader";
import Swal from "sweetalert2";
function SingleData(props) {
  // console.log("Props", props);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  let statusRule = reducerState?.flightFare?.isLoadingRuleDone || false;
  let statusQuote = reducerState?.flightFare?.isLoadingQuoteDone || false;
  // console.log("isLoadingRuleDone", statusRule);
  // console.log("isLoadingQuoteDone", statusQuote);
  const flight = props.flight;
  const IsLCC = props.IsLCC;
  // console.log("flight single", flight);
  const results =
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results ||
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

  // console.log(fare);
  const img = flight?.Airline?.AirlineCode;


  const duration = `${Math.floor(flight?.Duration / 60)}hr ${flight.Duration % 60
    }min`;



  const dateString = flight?.Origin?.DepTime;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = date.toLocaleString("en-US", options);

  const [month, day, year, time, ampm] = formattedDate.split(" ");
  const desiredFormat = `${day}${month}-${year} ${time} ${ampm}`;

  const dateString1 = flight?.Destination?.ArrTime;
  const date1 = new Date(dateString1);
  const options1 = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate1 = date1.toLocaleString("en-US", options1);
  const [month1, day1, year1, time1, ampm1] =
    formattedDate1.split(" ");
  const desiredFormat1 = `${day1}${month1}-${year1} ${time1} ${ampm1}`;



  const handleClick = (ResultIndex) => {
    setLoader(true);
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

  // console.log("reducerrState", reducerState);

  useEffect(() => {
    if (statusQuote && statusRule) {
      if (
        reducerState?.flightFare?.flightQuoteData?.Error?.ErrorCode == 0 &&
        reducerState?.flightFare?.flightRuleData?.Error?.ErrorCode == 0
      ) {
        // navigate("/Flightresult/passengerdetail");
        navigate("/passengerdetail");

      
        dispatch(setLoading("hjbb"));
        setLoader(false);
      }
      else if(
        reducerState?.flightFare?.flightQuoteData?.Error?.ErrorCode !== 0 &&
          reducerState?.flightFare?.flightRuleData?.Error?.ErrorCode !== 0
      )
      { 
        Swal.fire({
          title: "Hii Encountered an Error",
          text: `${reducerState?.flightFare?.flightQuoteData?.Error?.ErrorMessage}`,
          icon: "question",
          timer:5000,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        navigate("/flights")
      }
    }
  }, [statusQuote, statusRule]);
  // console.log("reducerStateDemount", reducerState);

  if (loader) {
    return <FlightLoader />;
  }
  return (
    <div className="singleFlightBox">
      <div className="singleFlightBoxOne">
        <div>
          <img src={`${process.env.PUBLIC_URL}/FlightImages/${img}.png`} />{" "}
        </div>
        <span>{flight?.Airline?.AirlineName}</span>
        <p>
          {flight?.Airline?.AirlineCode} {flight?.Airline?.FlightNumber}
        </p>
      </div>
      <div className="singleFlightBoxTwo">
        <span>{flight?.Origin?.Airport?.CityName}</span>
        {/* <p>{time1.substr(0, 5)}</p> */}
        <p>{desiredFormat.slice(0, 12)}</p>
        <p style={{ fontSize: "14px" }}>{desiredFormat.slice(13)}</p>
      </div>
      <div className="singleFlightBoxThree">

        <h4>{duration}</h4>
        <div><img src={flightdir} /></div>

        <p>Direct Flight</p>
        <span>{flight?.NoOfSeatAvailable} Seats Left</span>
      </div>
      <div className="singleFlightBoxFour">
        <span>{flight?.Destination?.Airport?.CityName}</span>
        {/* <p>{time2.substr(0, 5)}</p> */}
        <p>{desiredFormat1.slice(0, 12)}</p>
        <p style={{ fontSize: "14px" }}>{desiredFormat1.slice(13)}</p>
      </div>
      <div className="singleFlightBoxFive">
        <span>₹{fare}</span>
        <p>Publish</p>
      </div>
      <div className="singleFlightBoxSix">
        <Luggage
          destination={flight?.Destination?.Airport?.AirportCode}
          origin={flight?.Origin?.Airport?.AirportCode}
          cabin={flight?.CabinBaggage}
          checkin={flight?.Baggage}
          fareClass={flight?.Airline?.FareClass}
        />
        <Nonrefundable />
      </div>
      <div className="singleFlightBoxSeven">
        <button
          onClick={() => {
            handleClick(indexKey);
          }}
        >
          Book
        </button>
      </div>

      {reducerState?.return?.returnData?.data?.data?.Response?.Results[1] ? (
        <Box
          display="flex"
          justifyContent="space-between"
          style={{ backgroundColor: "blue", pending: "10px" }}
        >
          {(() => {
            const imgReturn = results[1][0]?.AirlineCode;
            const timeReturn = `${Math.floor(
              results[1][0]?.Segments[0][0]?.Duration / 60
            )}hr ${results[1][0]?.Segments[0][0]?.Duration % 60}min`;
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
    </div>
  );
}

export default SingleData;
