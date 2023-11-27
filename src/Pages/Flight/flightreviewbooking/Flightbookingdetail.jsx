import Divider from "@mui/material/Divider";
import { Typography, Box, Grid, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  bookAction,
  bookActionGDS,
  bookTicketGDS,
  bookActionReturn,
  bookActionGDSReturn,
  bookTicketGDSReturn,
} from "../../../Redux/FlightBook/actionFlightBook";
import axios from "axios";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Swal from "sweetalert2";
import { balanceSubtractRequest } from "../../../Redux/Auth/balaceSubtract/actionBalnceSubtract";
import { clearPassengersReducer } from "../../../Redux/Passengers/passenger";
import { clearOneWayReducer } from "../../../Redux/FlightSearch/OneWay/oneWay";
import FlightLoader from "../FlightLoader/FlightLoader";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Flightbookingdetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState(null);
  const [passengerAgreement, setPassengerAgreement] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const reducerState = useSelector((state) => state);
  const markUpamount =
    reducerState?.userData?.userData?.data?.data?.markup?.flight;

  // console.log(userBalance,"hdhdhd")
  const isPassportRequired =
    reducerState?.flightFare?.flightQuoteData?.Results
      ?.IsPassportRequiredAtTicket;
  const ResultIndex =
    sessionStorage.getItem("ResultIndex") ||
    JSON.parse(sessionStorage.getItem("flightDetailsONGo")).ResultIndex;
  const ResultIndexReturn =
    sessionStorage.getItem("ResultIndex") ||
    JSON.parse(sessionStorage.getItem("flightDetailsIncome")).ResultIndex;
  // console.log(
  //   "passengerAgreement",
  //   passengerAgreement,
  //   "paymentOption",
  //   paymentOption,
  //   ResultIndex
  // );
  // console.log("reducerState", reducerState);
  const fareQuote =
    reducerState?.flightFare?.flightQuoteData?.Results?.Segments;
  // const flightReviewDetails =
  //   reducerState?.flightBook?.flightBookDataGDS?.Response;
  const fareRules = reducerState?.flightFare?.flightRuleData?.FareRules;
  const fareValue = reducerState?.flightFare?.flightQuoteData?.Results;
  const fareValueReturn =
    reducerState?.flightFare?.flightQuoteDataReturn?.Results;
  // console.log(fareValue, "😍Fare value", fareValueReturn);
  const Passengers = reducerState?.passengers?.passengersData;
  const PassengersReturn = reducerState?.passengers?.passengerDataReturn;
  const userId = reducerState?.logIn?.loginData?.data?.data?.id;
  const currentBalance = reducerState?.userData?.userData?.data?.data?.balance;

  useEffect(() => {
    if (reducerState?.flightBook?.flightBookDataGDS?.Response) {
      getTicketForNonLCC();
    } else if (reducerState?.flightBook?.flightBookDataGDS?.Error) {
      setLoading(false);
      alert(reducerState?.flightBook?.flightBookDataGDS?.Error?.ErrorMessage);
    }
  }, [reducerState?.flightBook?.flightBookDataGDS]);

  //Balance Substraction useEffect implemented below
  useEffect(() => {
    if (
      reducerState?.flightBook?.flightTicketDataGDS?.data?.data?.Response?.Error
        ?.ErrorMessage == ""
    ) {
      // balanceSubtractOneWay();
      if (fareValue && fareValueReturn) {
        // console.log("hhdjgdj")
        balanceSubtractOneWay();
      } else {
        balanceSubtractOneWay();
        setLoading(false);
        navigate("/Flightbookingconfirmation");
      }
    }
  }, [reducerState?.flightBook?.flightTicketDataGDS]);

  useEffect(() => {
    if (
      reducerState?.flightBook?.flightBookData?.Error?.ErrorMessage == "" &&
      reducerState?.flightBook?.flightBookData?.Response
    ) {
      if (fareValue && fareValueReturn) {
        balanceSubtractOneWay();
      } else {
        balanceSubtractOneWay();
        setLoading(false);
        navigate("/Flightbookingconfirmation");
      }
    }
  }, [reducerState?.flightBook?.flightBookData]);

  useEffect(() => {
    if (reducerState?.flightBook?.flightBookDataGDSReturn?.Response) {
      setLoading(false);
      getTicketForNonLCCReturn();
      // navigate("/Flightbookingconfirmation");
    } else if (reducerState?.flightBook?.flightBookDataGDSReturn?.Error) {
      setLoading(false);
      let error =
        reducerState?.flightBook?.flightBookDataGDSReturn?.Error?.ErrorMessage;
      alert(error);
    } else {
    }
  }, [reducerState?.flightBook?.flightBookDataGDSReturn]);

  function createMarkup(data) {
    return { __html: data };
  }

  // Handling return booking here(flow Here is LCC to LCC  OR LCC to Non-LCC)
  useEffect(() => {
    // console.log("bookingLCC");
    if (fareValueReturn?.IsLCC) {
      if (
        reducerState?.flightBook?.flightBookData?.Response &&
        reducerState?.flightBook?.flightBookData?.Error?.ErrorMessage == ""
      ) {
        getTicketForLCCReturn();
      }
    } else if (fareValueReturn?.IsLCC === false) {
      if (
        reducerState?.flightBook?.flightBookData?.Response &&
        reducerState?.flightBook?.flightBookData?.Error?.ErrorMessage == ""
      ) {
        //  getTicketForLCCReturn();
        const payloadGDSReturn = {
          ResultIndex: ResultIndexReturn,
          EndUserIp: reducerState?.ip?.ipData,
          TokenId: reducerState?.ip?.tokenData,
          TraceId:
            reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId ||
            reducerState?.return?.returnData?.data?.data?.Response?.TraceId,
          Passengers: PassengersReturn,
        };
        dispatch(bookActionGDSReturn(payloadGDSReturn));
      }
    }
  }, [reducerState?.flightBook?.flightBookData?.Response]);

  useEffect(() => {
    if (
      reducerState?.flightBook?.flightBookDataReturn?.Error?.ErrorMessage == ""
    ) {
      balanceSubtractReturn();

      setLoading(false);
      navigate("/Flightbookingconfirmation");
    }
  }, [reducerState?.flightBook?.flightBookDataReturn?.Response]);

  useEffect(() => {
    if (
      reducerState?.flightBook?.flightTicketDataGDSReturn?.data?.data?.Response
        ?.Error?.ErrorMessage == ""
    ) {
      balanceSubtractReturn();
      setLoading(false);
      navigate("/Flightbookingconfirmation");
    }
  }, [reducerState?.flightBook?.flightTicketDataGDSReturn]);

  //Handling return booking here(flow Here is Non-Lcc to Non-Lcc OR Non-Lcc to Lcc)

  useEffect(() => {
    if (fareValueReturn?.IsLCC) {
      if (
        reducerState?.flightBook?.flightBookDataGDS?.Response &&
        reducerState?.flightBook?.flightBookDataGDS?.Error?.ErrorMessage == ""
      ) {
        getTicketForLCCReturn();
      }
    } else if (fareValueReturn?.IsLCC === false) {
      if (
        reducerState?.flightBook?.flightBookDataGDS?.Response &&
        reducerState?.flightBook?.flightBookDataGDS?.Error?.ErrorMessage == ""
      ) {
        // getTicketForLCC();
        const payloadGDSReturn = {
          ResultIndex: ResultIndexReturn,
          EndUserIp: reducerState?.ip?.ipData,
          TokenId: reducerState?.ip?.tokenData,
          TraceId:
            reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId ||
            reducerState?.return?.returnData?.data?.data?.Response?.TraceId,
          Passengers: PassengersReturn,
        };
        dispatch(bookActionGDSReturn(payloadGDSReturn));
      }
    }
  }, [reducerState?.flightBook?.flightBookDataGDS?.Response]);

  const handleSubmit = (e) => {
    if (fareValue && fareValueReturn) {
      if (
        fareValue?.Fare?.BaseFare +
        fareValue?.Fare?.Tax +
        fareValue?.Fare?.OtherCharges +
        markUpamount +
        fareValueReturn?.Fare?.BaseFare +
        fareValueReturn?.Fare?.Tax +
        fareValueReturn?.Fare?.OtherCharges +
        markUpamount <=
        currentBalance
      ) {
        e.preventDefault();
        const payloadGDS = {
          ResultIndex: ResultIndex,
          EndUserIp: reducerState?.ip?.ipData,
          TokenId: reducerState?.ip?.tokenData,
          TraceId:
            reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId ||
            reducerState?.return?.returnData?.data?.data?.Response?.TraceId,
          Passengers: Passengers,
        };

        if (fareValue?.IsLCC === false) {
          dispatch(bookActionGDS(payloadGDS));
          setLoading(true);
        }
        if (fareValue?.IsLCC === true) {
          // console.log("lccExecutedOneWay");
          getTicketForLCC();

          setLoading(true);
        }
      } else {
        alert("Insufficeint balance!! Please Recharge your Wallet");
        navigate("/flights");
      }
    } else {
      if (
        fareValue?.Fare?.BaseFare +
        fareValue?.Fare?.Tax +
        fareValue?.Fare?.OtherCharges +
        markUpamount <=
        currentBalance
      ) {
        e.preventDefault();
        const payloadGDS = {
          ResultIndex: ResultIndex,
          EndUserIp: reducerState?.ip?.ipData,
          TokenId: reducerState?.ip?.tokenData,
          TraceId:
            reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId ||
            reducerState?.return?.returnData?.data?.data?.Response?.TraceId,
          Passengers: Passengers,
        };

        if (fareValue?.IsLCC === false) {
          dispatch(bookActionGDS(payloadGDS));
          setLoading(true);
        }
        if (fareValue?.IsLCC === true) {
          // console.log("lccExecutedOneWay");
          getTicketForLCC();
          setLoading(true);
        }
      } else {
        alert("Insufficeint balance!! Please Recharge your Wallet");
        navigate("/flights");
      }
    }
  };

  const getTicketForNonLCC = () => {
    const payLoadDomestic = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
      PNR: reducerState?.flightBook?.flightBookDataGDS?.Response?.PNR,
      BookingId:
        reducerState?.flightBook?.flightBookDataGDS?.Response?.BookingId,
    };
    const payLoadInternational = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
      PNR: reducerState?.flightBook?.flightBookDataGDS?.Response?.PNR,
      BookingId:
        reducerState?.flightBook?.flightBookDataGDS?.Response?.BookingId,
      Passport: [...Passengers],
    };
    if (isPassportRequired) {
      dispatch(bookTicketGDS(payLoadInternational));
    } else {
      dispatch(bookTicketGDS(payLoadDomestic));
    }
  };
  const getTicketForNonLCCReturn = () => {
    const payLoadDomestic = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
      PNR: reducerState?.flightBook?.flightBookDataGDSReturn?.Response?.PNR,
      BookingId:
        reducerState?.flightBook?.flightBookDataGDSReturn?.Response?.BookingId,
    };
    const payLoadInternational = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
      PNR: reducerState?.flightBook?.flightBookDataGDSReturn?.Response?.PNR,
      BookingId:
        reducerState?.flightBook?.flightBookDataGDSReturn?.Response?.BookingId,
      Passport: [...Passengers],
    };
    if (isPassportRequired) {
      dispatch(bookTicketGDSReturn(payLoadInternational));
    } else {
      dispatch(bookTicketGDSReturn(payLoadDomestic));
    }
  };

  const getTicketForLCC = () => {
    const payloadLcc = {
      ResultIndex: ResultIndex,
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId:
        reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId ||
        reducerState?.return?.returnData?.data?.data?.Response?.TraceId,
      Passengers: [...Passengers],
    };
    dispatch(bookAction(payloadLcc));
  };
  const getTicketForLCCReturn = () => {
    const payloadLccReturn = {
      ResultIndex: ResultIndexReturn,
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId: reducerState?.return?.returnData?.data?.data?.Response?.TraceId,
      Passengers: [...PassengersReturn],
    };
    dispatch(bookActionReturn(payloadLccReturn));
  };
  //Balance Subtract function implemented below
  const balanceSubtractOneWay = (onewayBooking, returnBooking) => {
    if (userId) {
      const balancePayload = {
        _id: userId,
        amount:
          fareValue?.Fare?.BaseFare +
          fareValue?.Fare?.Tax +
          fareValue?.Fare?.OtherCharges +
          markUpamount,
      };

      dispatch(balanceSubtractRequest(balancePayload));
    }
  };

  const balanceSubtractReturn = () => {
    if (userId) {
      const balancePayload = {
        _id: userId,
        amount:
          fareValueReturn?.Fare?.BaseFare +
          fareValueReturn?.Fare?.Tax +
          fareValueReturn?.Fare?.OtherCharges +
          markUpamount,
      };

      dispatch(balanceSubtractRequest(balancePayload));
    }
  };


  if (loading) {
    <FlightLoader />
  }

  return (
    <Box style={{ width: "920px" }}>
      <div
        style={{
          width: 822,
          height: 49,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          background: "#DFE6F7",
          borderRadius: 4,
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "black",
            fontSize: 24,
            fontFamily: "Montserrat",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          Review Booking
        </div>
      </div>
      <Box
        py={2}
        my={2}
        style={{ background: "#D8DFF2", borderRadius: 4.04, width: "822px" }}
      >
        {fareQuote?.map((data) => {
          return data?.map((data1) => {
            const dateString = data1?.Origin?.DepTime;
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
            const desiredFormat = `${day}-${month}-${year} ${time} ${ampm}`;

            const dateString1 = data1?.Destination?.ArrTime;
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
            const desiredFormat1 = `${day1}-${month1}-${year1} ${time1} ${ampm1}`;
            return (
              <Grid sx={{ display: "flex" }}>
                <Grid item md={2}>
                  <Box>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        textAlign: "center",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                        wordWrap: "break-word",
                      }}
                    >
                      Flight No.
                    </Typography>

                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        textAlign: "center",
                        fontWeight: "400",
                      }}
                      pt={1}
                    >
                      {data1?.Airline?.AirlineCode}-
                      {data1?.Airline?.FlightNumber}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={2}>
                  <Box>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        textAlign: "center",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                        wordWrap: "break-word",
                      }}
                    >
                      Origin
                    </Typography>

                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        textAlign: "center",
                        fontWeight: "400",
                      }}
                      pt={1}
                    >
                      {data1?.Origin?.Airport?.AirportCode}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={2}>
                  <Box>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        textAlign: "center",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                        wordWrap: "break-word",
                      }}
                    >
                      Destination
                    </Typography>

                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        textAlign: "center",
                        fontWeight: "400",
                      }}
                      pt={1}
                    >
                      {data1?.Destination?.Airport?.AirportCode}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        textAlign: "center",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                        wordWrap: "break-word",
                      }}
                    >
                      Departure Date Time
                    </Typography>

                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        textAlign: "center",
                        fontWeight: "400",
                      }}
                      pt={1}
                    >
                      {desiredFormat}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        textAlign: "center",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                        wordWrap: "break-word",
                      }}
                    >
                      Arrival Date Time
                    </Typography>

                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        textAlign: "center",
                        fontWeight: "400",
                      }}
                      pt={1}
                    >
                      {desiredFormat1}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={2}>
                  <Box>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        textAlign: "center",
                        fontWeight: "600",
                        fontFamily: "Montserrat",
                        wordWrap: "break-word",
                      }}
                    >
                      Class
                    </Typography>

                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        textAlign: "center",
                        fontWeight: "400",
                      }}
                      pt={1}
                    >
                      {data1?.Airline?.FareClass}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            );
          });
        })}
      </Box>
      <div
        style={{
          width: 822,

          borderRadius: 4,
          justifyContent: "flex-start",
          alignItems: "center",

          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Accordion
          style={{
            width: 822,
            // height: 49,

            background: "#DFE6F7",
            borderRadius: 4,
            // position:"relative"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              width: 822,
              // height: 49,

              background: "#DFE6F7",
              borderRadius: 4,
              // position:"absolute",
              // zIndex:15
            }}
          >
            <Typography
              style={{
                color: "black",
                fontSize: 24,
                fontFamily: "Montserrat",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Passenger Details{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ background: "#DFE6F7", height: "auto" }}>
            <Box
              className="mid-headers"
              style={{ padding: "18px", width: "100%" }}
            >
              {Passengers?.map((passenger, key) => {
                // console.log("Value", passenger);
                return (
                  <div className="mid_header" key={key} px={5} py={2}>
                    <Box style={{ background: "#DFE6F7" }}>
                      <Typography
                        color="#0048FF"
                        fontWeight="bold"
                        fontSize="16px"
                        mb="2px"
                        fontFamily="Montserrat"
                      >
                        Passenger {key + 1}{" "}
                        <span
                          style={{
                            color: "black",
                            fontSize: 16,
                            fontFamily: "Montserrat",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          (
                          {passenger.PaxType === 1
                            ? "Adult"
                            : passenger.PaxType === 2
                              ? "Child"
                              : "Infant"}
                          )
                        </span>
                      </Typography>
                    </Box>
                    <Grid container>
                      <Grid item md={3} style={{ background: "#DFE6F7" }}>
                        <Typography
                          color="#3D7AD9"
                          fontWeight="bold"
                          fontSize="16px"
                          style={{
                            color: "black",
                            fontSize: 16.14,
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            wordWrap: "break-word",
                          }}
                        >
                          Name:
                        </Typography>
                        <Typography
                          color="#3D7AD9"
                          fontWeight="bold"
                          fontSize="16px"
                          style={{
                            color: "black",
                            fontSize: 16.14,
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            wordWrap: "break-word",
                          }}
                        >
                          Gender:
                        </Typography>
                        {passenger.AddressLine1 && (
                          <Typography
                            color="#3D7AD9"
                            fontWeight="bold"
                            fontSize="16px"
                            style={{
                              color: "black",
                              fontSize: 16.14,
                              fontFamily: "Montserrat",
                              fontWeight: "600",
                              wordWrap: "break-word",
                            }}
                          >
                            Address:
                          </Typography>
                        )}
                        <Typography
                          color="#3D7AD9"
                          fontWeight="bold"
                          fontSize="16px"
                          style={{
                            color: "black",
                            fontSize: 16.14,
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            wordWrap: "break-word",
                          }}
                        >
                          Seat Preferences:
                        </Typography>
                      </Grid>
                      <Grid item md={9} style={{ background: "#DFE6F7" }}>
                        <Typography
                          color="#FF8900"
                          fontWeight="bold"
                          fontSize="16px"
                          style={{
                            color: "black",
                            fontSize: 16.14,
                            fontFamily: "Montserrat",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {passenger.Title} {passenger.FirstName}{" "}
                          {passenger.LastName}
                        </Typography>
                        <Typography
                          color="#FF8900"
                          fontWeight="bold"
                          fontSize="16px"
                          style={{
                            color: "black",
                            fontSize: 16.14,
                            fontFamily: "Montserrat",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {passenger.Gender === 1
                            ? "Female"
                            : passenger.Gender === 2
                              ? "Male"
                              : "Transgender"}
                        </Typography>
                        {passenger.AddressLine1 && (
                          <Typography
                            style={{
                              color: "black",
                              fontSize: 16.14,
                              fontFamily: "Montserrat",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            {passenger.AddressLine1}, {passenger.City},{" "}
                            {passenger.Nationality}
                          </Typography>
                        )}
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 16.14,
                            fontFamily: "Montserrat",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          8D
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{
            width: 822,

            background: "#DFE6F7",
            borderRadius: 4,
            // position:"relative"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              width: 822,
              height: 49,

              background: "#DFE6F7",
              borderRadius: 4,
            }}
          >
            <Typography
              style={{
                color: "black",
                fontSize: 24,
                fontFamily: "Montserrat",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Fare Rules{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ height: "auto" }}>
            <Box className="Top_header" p={5} width={822}>
              {fareRules.map((rule) => (
                <Box>
                  <div
                    style={{
                      color: "black",
                      fontSize: 16.14,
                      fontFamily: "Montserrat",
                      fontWeight: "600",
                      wordWrap: "break-word",
                    }}
                  >
                    QP: {rule.Origin} - {rule.Destination}
                  </div>
                  <div
                    dangerouslySetInnerHTML={createMarkup(rule.FareRuleDetail)}
                    style={{ padding: "20px" }}
                  />
                  {/* <Grid container spacing={1} mt={1}>
              <Grid item xs={6} md={6}>
                <Box textAlign="center">
                  <Typography
                    color="#707070"
                    fontSize="14px"
                    fontWeight="bold"
                    textAlign="left"
                    mb={1}
                  >
                    Cancellation
                  </Typography>
                  <Typography
                    color="#008FCC"
                    fontSize="14px"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    INR 3500 from 0 To 3 Days before dept
                  </Typography>
                  <Typography
                    color="#008FCC"
                    fontSize="14px"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    INR 3000 from 4 Days & above before dept
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box textAlign="center">
                  <Typography
                    color="#707070"
                    fontSize="14px"
                    fontWeight="bold"
                    textAlign="left"
                    mb={1}
                  >
                    Reissue
                  </Typography>
                  <Typography
                    color="#008FCC"
                    fontSize="14px"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    INR 3250 from 0 To 3 Days before dept
                  </Typography>
                  <Typography
                    color="#008FCC"
                    fontSize="14px"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    INR 2750 from 4 Days & above before dept
                  </Typography>
                </Box>
              </Grid>
            </Grid> */}
                </Box>
              ))}
              {/* <Box>
          <Typography
            color="#008FCC"
            fontSize="16px"
            fontWeight="bold"
            textAlign="center"
          >
            Fare Rule
          </Typography>
          <Typography
            color="#707070"
            fontSize="12px"
            fontWeight="bold"
            textAlign="center"
          >
            DEL - BOM
          </Typography>
          <Grid container spacing={1} mt={1}>
            <Grid item xs={6} md={6}>
              <Box textAlign="center">
                <Typography
                  color="#707070"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                  mb={1}
                >
                  Cancellation
                </Typography>
                <Typography
                  color="#008FCC"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                >
                  INR 3500 from 0 To 3 Days before dept
                </Typography>
                <Typography
                  color="#008FCC"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                >
                  INR 3000 from 4 Days & above before dept
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box textAlign="center">
                <Typography
                  color="#707070"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                  mb={1}
                >
                  Reissue
                </Typography>
                <Typography
                  color="#008FCC"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                >
                  INR 3250 from 0 To 3 Days before dept
                </Typography>
                <Typography
                  color="#008FCC"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                >
                  INR 2750 from 4 Days & above before dept
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box> */}
              {/* <Box py={3}>
          <ul>
            <li
              style={{ color: "#FF0000", fontSize: "14px", fontWeight: "bold" }}
            >
              {" "}
              Mentioned Fee are per PAX and per sector
            </li>
            <li
              style={{ color: "#FF0000", fontSize: "14px", fontWeight: "bold" }}
            >
              {" "}
              Apart from airline charges, GST + RAF + applicable charges if any,
              will be charged
            </li>
          </ul>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={6} md={8}>
              <Typography
                color="#707070"
                fontSize="14px"
                fontWeight="bold"
                textAlign="left"
                mb={1}
              >
                6E:BOM - DEL
              </Typography>
              <Typography
                color="#707070"
                fontSize="14px"
                textAlign="left"
                mb={1}
              >
                The Fare Basis Code is: R015AP These are Fare Rules for Domestic
                Flights. Meal: Chargeable Seat: Chargeable Hand Bag: 1 Bag Upto
                7 Kg. Check-in Baggage: 15 Kg. Check-in Baggage (Student Fare):
                25 Kg.L
              </Typography>
              <Typography
                color="#008FCC "
                fontSize="14px"
                textAlign="left"
                fontWeight="bold"
              >
                {" "}
                Subject to change without prior notice.{" "}
              </Typography>
              <Typography
                color="#008FCC "
                fontSize="14px"
                textAlign="left"
                fontWeight="bold"
              >
                {" "}
                Note : We should receive the request at least four hours prior
                to Airline Fare Rules Policy.{" "}
              </Typography>
            </Grid>
          </Grid>
        </Box> */}
            </Box>
          </AccordionDetails>
        </Accordion>
        <div
          style={{
            width: 822,
            height: 49,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            background: "#DFE6F7",
            borderRadius: 4,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: 24,
              fontFamily: "Montserrat",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Terms & Conditions{" "}
          </div>
        </div>
      </div>

      {/* <div
        style={{
          width: 822,
          height: 49,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          background: "#DFE6F7",
          borderRadius: 4,
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          display: "flex",
          marginTop: "10px",
        }}
      >
        <Box display="flex" alignItems="center">
          <input
            className="inputSelect"
            type="checkbox"
            value={passengerAgreement}
            onChange={() => setPassengerAgreement(!passengerAgreement)}
          />{" "}
        </Box>
        <Box display="flex" alignItems="center">
          <input
            className="inputSelect"
            type="checkbox"
            value={paymentOption}
            onChange={() => setPaymentOption(!paymentOption)}
          />
        </Box>
      </div> */}

      <div
        style={{
          color: "#E73C33",
          fontSize: 16.14,
          fontFamily: "Montserrat",
          fontWeight: "500",
          wordWrap: "break-word",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        Note: You can earn more commission if you checked Travel Insurance
      </div>
      <div
        style={{
          width: 728,
          height: 44,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 12,
          paddingBottom: 12,
          border: "1px #BBBBBB solid",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 5,
          display: "inline-flex",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          className="inputSelect"
          type="checkbox"
          value={paymentOption}
          onChange={() => {
            setPaymentOption(!paymentOption);
            setPassengerAgreement(!passengerAgreement);
          }}
        />
        <div
          style={{
            color: "black",
            fontSize: 16.14,
            fontFamily: "Montserrat",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          I have reviewed and agreed on the fare and commission offered on this
          booking.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          marginBottom: "10px",
          gap: "40px",
        }}
      >
        {/* <div
          style={{
            color: "#000080",
            fontSize: 16.14,
            fontFamily: "Montserrat",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          You have 2,000,000 as your Cash balance
        </div> */}
        <form
          // action="/Flightbookingconfirmation"
          className="formFlightSearch"
          textAlign="center"
          onSubmit={handleSubmit}
        >
          <button
            style={{
              width: 241,
              height: 63,
              paddingLeft: 63.63,
              paddingRight: 63.63,
              paddingTop: 21.21,
              paddingBottom: 21.21,
              background: "#21325D",
              borderRadius: 5.3,
              justifyContent: "center",
              alignItems: "center",
              gap: 15.91,
              display: "inline-flex",
              border: "1px solid #21325D",
              color: "white",
              cursor: "pointer",
              marginTop: "-35px",
            }}
            type="submit"
            disabled={
              !passengerAgreement || !paymentOption
                ? true
                : loading
                  ? true
                  : false
            }
          >
            {" "}
            {loading ? "Loading..." : "Ticket"}{" "}
          </button>
        </form>
      </div>
      <Modal
        open={loading}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <CircularProgress />
        </Box>
      </Modal>
    </Box>
  );
};

export default Flightbookingdetail;
