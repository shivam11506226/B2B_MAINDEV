import * as React from "react";
import moment from "moment";
import { useState, useRef } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Modal,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "../hotelresult/Rating";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Input from "@mui/material/Input";
import Radio from "@mui/material/Radio";
import Link from "@mui/material/Link";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import "./review.css";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PassengersAction } from "../../../Redux/Passengers/passenger";
import Custombutton from "../../../Custombuttom/Button";
import { useEffect } from "react";
const styleLoader = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  display: "flex",
  justifyContent: "center",
};

const Flightdetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const noOfRooms =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
      ?.RoomGuests;
  let bookingStatus =
    reducerState?.hotelSearchResult?.bookRoom?.BookResult?.Status || false;
  const HotelIndex = sessionStorage.getItem("HotelIndex");
  console.log(noOfRooms, "noOfRooms");
  const ResultIndex = sessionStorage.getItem("ResultIndex");
  const HotelCode = sessionStorage.getItem("HotelCode");
  console.log(bookingStatus);
  const [bookingSuccess, setBookingSuccess] = useState(bookingStatus);
  const [passengerData, setPassengerData] = useState([]);
  console.log("State Data", reducerState);

  useEffect(() => {
    if (bookingStatus == 1) {
      setBookingSuccess(false);
      navigate("/Guestdetail");
    }
  }, [bookingStatus]);

  useEffect(() => {
    //  console.log(handleSettingPassengerArr(noOfRooms))
    const allPassengerData = handleSettingPassengerArr(noOfRooms);
    console.log("allPassengerData", allPassengerData);
    setPassengerData(allPassengerData);
    console.log(passengerData, "passengerData");
  }, []);

  const handleSettingPassengerArr = (roomCombination) => {
    const passengerData = [];
    const adultTempelate = {
      Title: "mr",
      FirstName: "",
      MiddleName: null,
      LastName: "",
      Phoneno: null,
      Email: null,
      PaxType: "",
      LeadPassenger: Boolean(),
      Age: "",
      PassportNo: null,
      PassportIssueDate: "0001-01-01T00: 00: 00",
      PassportExpDate: "0001-01-01T00: 00: 00",
      PAN: "",
      roomIndex: "",
    };

    const childTempelate = {
      Title: "mr",
      FirstName: "",
      MiddleName: null,
      LastName: "",
      Phoneno: null,
      Email: null,
      PaxType: "",
      LeadPassenger: Boolean(),
      Age: "",
      PassportNo: null,
      PassportIssueDate: "0001-01-01T00: 00: 00",
      PassportExpDate: "0001-01-01T00: 00: 00",
      PAN: "",
      roomIndex: "",
    };
    console.log(roomCombination);
    roomCombination.map((item, indexRoom) => {
      const adultCount = item?.NoOfAdults;
      const childCount = item?.NoOfChild;
      if (adultCount > 0) {
        Array.from({ length: adultCount }, (value, index) => {
          if (index == 0) {
            passengerData.push({
              ...adultTempelate,
              roomIndex: indexRoom,
              PaxType: 1,
              adultIndex: index,
              LeadPassenger: true,
            });
          } else {
            passengerData.push({
              ...adultTempelate,
              roomIndex: indexRoom,
              PaxType: 1,
              adultIndex: index,
              LeadPassenger: false,
            });
          }
        });
      }
      if (childCount > 0) {
        Array.from({ length: childCount }, (value, index) => {
          passengerData.push({
            ...childTempelate,
            roomIndex: indexRoom,
            Age: item?.ChildAge[index],
            PaxType: 2,
            childIndex: index,
            LeadPassenger: false,
          });
        });
      }
    });
    return passengerData;
  };

  const emailRef = useRef();
  const phoneRef = useRef();

  const [accordionExpanded, setAccordionExpanded] = React.useState(false);
  const handleAccordionChange = (index) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? index : false);
  };

  const hotelInfo = reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult;
  const hotelRoom =
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult;
  const hotelCancellationPolicies =
    reducerState?.hotelSearchResult?.blockRoom?.BlockRoomResult
      ?.HotelRoomsDetails[0];
  const cancellationStartingDate =
    hotelCancellationPolicies?.CancellationPolicies[0]?.FromDate;
  const cancellationFormattedStartingDate = moment(
    cancellationStartingDate
  ).format("MMMM DD, YYYY");
  const cancellationEndingDate =
    hotelCancellationPolicies?.CancellationPolicies[0]?.ToDate;
  const cancellationFormattedEndingDate = moment(cancellationEndingDate).format(
    "MMMM DD, YYYY"
  );

  const cancellationCharge =
    hotelCancellationPolicies?.CancellationPolicies[0]?.Charge;

  const hotelData = hotelRoom?.HotelRoomsDetails[HotelIndex];
  const bookingId =
    reducerState?.hotelSearchResult?.bookRoom?.BookResult?.BookingId;
  console.log(hotelCancellationPolicies?.CancellationPolicies[0]);
  const star = (data) => {
    const stars = [];
    for (let i = 0; i < data; i++) {
      stars.push(<StarIcon key={i} style={{ color: "#FF8900" }} />);
    }
    return stars;
  };

  const dateString = hotelData?.LastCancellationDate;
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

  const handleServiceChange = (e, roomIndex, knowIndex) => {
    console.log(roomIndex, knowIndex, "roomIndex", "knowIndex");
    console.log(passengerData);
    const { name, value } = e.target;
    const filteredPassenger = passengerData.filter((item, index) => {
      return (
        item.roomIndex == roomIndex && item?.adultIndex == knowIndex?.adultIndex
      );
    });
    console.log("filteredPassenger", filteredPassenger);
    const newFilteredPassenger = { ...filteredPassenger[0] };
    newFilteredPassenger[name] = value;
    const indexFind = passengerData.indexOf(filteredPassenger[0]);
    if (indexFind !== -1) {
      passengerData[indexFind] = newFilteredPassenger;
    }
    console.log("passengerDataNew", passengerData);
  };

  const handleClickSavePassenger = () => {
    dispatch(PassengersAction(passengerData));
    navigate("/Guestdetail");
  };

  // const handleClickBooking = async () => {

  //   // sessionStorage.setItem("HotelIndex", HotelIndex);

  //   const email = emailRef.current.value;
  //   const phoneno = phoneRef.current.value;
  //   const smoking = hotelRoom?.HotelRoomsDetails[HotelIndex]?.SmokingPreference;
  //   var SmokingPreference;
  //   if (smoking == "NoPreference") {
  //     SmokingPreference = 0;
  //   }
  //   if (smoking == "Smoking") {
  //     SmokingPreference = 1;
  //   }
  //   if (smoking == "NonSmoking") {
  //     SmokingPreference = 2;
  //   }
  //   if (smoking == "Either") {
  //     SmokingPreference = 3;
  //   }
  //   const payload = {
  //     ResultIndex: ResultIndex,
  //     HotelCode: HotelCode,
  //     HotelName: hotelInfo?.HotelDetails?.HotelName,
  //     GuestNationality: "IN",
  //     NoOfRooms:
  //       reducerState?.hotelSearchResult?.ticketData?.data?.data
  //         ?.HotelSearchResult?.NoOfRooms,
  //     ClientReferenceNo: 0,
  //     IsVoucherBooking: true,
  //     HotelRoomsDetails: [
  //       {
  //         RoomIndex: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RoomIndex,
  //         RoomTypeCode: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RoomTypeCode,
  //         RoomTypeName: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RoomTypeName,
  //         RatePlanCode: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RatePlanCode,
  //         BedTypeCode: null,
  //         SmokingPreference: SmokingPreference,
  //         Supplements: null,
  //         Price: {
  //           CurrencyCode:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.CurrencyCode,
  //           RoomPrice:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.RoomPrice,
  //           Tax: hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.Tax,
  //           ExtraGuestCharge:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.ExtraGuestCharge,
  //           ChildCharge:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.ChildCharge,
  //           OtherCharges:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.OtherCharges,
  //           Discount: hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.Discount,
  //           PublishedPrice:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.PublishedPrice,
  //           PublishedPriceRoundedOff:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price
  //               ?.PublishedPriceRoundedOff,
  //           OfferedPrice:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.OfferedPrice,
  //           OfferedPriceRoundedOff:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price
  //               ?.OfferedPriceRoundedOff,
  //           AgentCommission:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.AgentCommission,
  //           AgentMarkUp:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.AgentMarkUp,
  //           ServiceTax:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.ServiceTax,
  //           TCS: hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.TCS,
  //           TDS: hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.TDS,
  //           ServiceCharge:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.ServiceCharge,
  //           TotalGSTAmount:
  //             hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.TotalGSTAmount,
  //           GST: {
  //             CGSTAmount:
  //               hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.CGSTAmount,
  //             CGSTRate: hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.CGSTRate,
  //             CessAmount:
  //               hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.CessAmount,
  //             CessRate: hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.CessRate,
  //             IGSTAmount:
  //               hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.IGSTAmount,
  //             IGSTRate: hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.IGSTRate,
  //             SGSTAmount:
  //               hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.SGSTAmount,
  //             SGSTRate: hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.SGSTRate,
  //             TaxableAmount:
  //               hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.TaxableAmount,
  //           },
  //         },
  //         HotelPassenger: passengerData,
  //       },
  //     ],
  //     EndUserIp: reducerState?.ip?.ipData,
  //     TokenId: reducerState?.ip?.tokenData,
  //     TraceId:
  //       reducerState?.hotelSearchResult?.ticketData?.data?.data
  //         ?.HotelSearchResult?.TraceId,
  //   };

  //   const hotelDetailsPayload = {
  //     BookingId: await bookingId,
  //     EndUserIp: reducerState?.ip?.ipData,
  //     TokenId: reducerState?.ip?.tokenData,
  //   };
  //   console.log("hotelDetailsPayload", hotelDetailsPayload);
  //   // Dispatch the hotelBookRoomAction
  //   //  bookingStatus = true;
  //   setBookingSuccess(true);
  //   dispatch(hotelBookRoomAction([payload, hotelDetailsPayload]));
  // };

  return (
    <Box borderRadius="10px">
      <Box
        sx={{
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "2px 2px 8px gray",
          backgroundColor: "white",
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography className="mainn-txt">
              {hotelInfo?.HotelDetails?.HotelName}
            </Typography>
          </Box>
          <Box></Box>
        </Box>

        <Box alignItems="left">
          <Box>{star(hotelInfo?.HotelDetails?.StarRating)}</Box>
        </Box>
        <Box>
          <Typography className="checkk-txt">
            <Typography
              className="checkk-txt"
              color="#006FFF !important"
              pr={1}
            >
              {" "}
              Check In:{" "}
            </Typography>{" "}
            {
              reducerState?.hotelSearchResult?.ticketData?.data?.data
                ?.HotelSearchResult?.CheckInDate
            }
            <Typography className="check-txt" px={1} color="#006FFF !important">
              Check Out:
            </Typography>{" "}
            {
              reducerState?.hotelSearchResult?.ticketData?.data?.data
                ?.HotelSearchResult?.CheckOutDate
            }
          </Typography>
        </Box>
        <Box>
          <Typography className="thirdd-txt">
            {hotelInfo?.HotelDetails?.Address}
          </Typography>
        </Box>
        <Box>
          <Typography className="thirdd-txt">
            Contact No-:
            <Typography
              className="thirdd-txt"
              color="#006FFF !important"
              fontWeight="bold"
              px={1}
            >
              +{hotelInfo?.HotelDetails?.HotelContactNo}
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box
        mt={3}
        sx={{
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "2px 2px 8px gray",
          marginTop: "15px",
          backgroundColor: "white",
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <Typography
              sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
            >
              No. of Rooms
            </Typography>
            <Typography
              ml={5}
              sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
            >
              Rooms Type
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
            >
              No. of Guest
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "gray", marginY: "5px" }} />

        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <Typography
              ml={5}
              sx={{ fontSize: "16px", color: "#666666", fontWeight: "bold" }}
            >
              {
                reducerState?.hotelSearchResult?.ticketData?.data?.data
                  ?.HotelSearchResult?.NoOfRooms
              }
            </Typography>
            <Typography
              ml={11}
              sx={{ fontSize: "16px", color: "#666666", fontWeight: "bold" }}
            >
              {hotelData?.RoomTypeName}
            </Typography>
          </Box>
          <Box>
            <Typography
              mr={5}
              sx={{ fontSize: "16px", color: "#666666", fontWeight: "bold" }}
            >
              {noOfRooms.length}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            ml={17}
            sx={{
              fontSize: "16px",
              color: "#006FFF",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Incl:{" "}
            {hotelData?.Inclusion.map((data) => {
              return <span>{data}</span>;
            })}
          </Typography>
          <Typography
            mt={2}
            sx={{ fontSize: "16px", color: "#FF8900", fontWeight: "bold" }}
          >
            Last Cancellation Date: {formattedDate}
          </Typography>
        </Box>
      </Box>

      <Box
        mt={5}
        sx={{
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "2px 2px 8px gray",
          marginTop: "15px",
          backgroundColor: "white",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
          >
            Enter Guest Details
          </Typography>
          <Box>
            <Box>
              {noOfRooms.length > 0 &&
                Array.from({ length: noOfRooms.length }, (_, roomIndex) => (
                  <Box>
                    <div mb={2} key={roomIndex} className="services" py={1}>
                      <Accordion
                        expanded={accordionExpanded === roomIndex}
                        onChange={handleAccordionChange(roomIndex)}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>Room {roomIndex + 1}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {noOfRooms[roomIndex]?.NoOfAdults > 0 &&
                            Array.from(
                              { length: noOfRooms[roomIndex]?.NoOfAdults },
                              (_, adultIndex) => (
                                <Box>
                                  Adult {adultIndex + 1}
                                  {adultIndex == 0 ? "(Lead Guest)" : ""}
                                  <Grid container spacing={3} my={1}>
                                    <Grid item xs={12} sm={12} md={4}>
                                      <Box>
                                        <div className="form_input">
                                          <label
                                            hotel_form_input
                                            className="form_lable"
                                          >
                                            First name*
                                          </label>
                                          <input
                                            name="FirstName"
                                            placeholder="Enter your name"
                                            // value={passengerData.FirstName}
                                            onChange={(e) =>
                                              setTimeout(() => {
                                                handleServiceChange(
                                                  e,
                                                  roomIndex,
                                                  { adultIndex: adultIndex }
                                                );
                                              }, 500)
                                            }
                                          />
                                        </div>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} py={1}>
                                      <Box>
                                        <div className="form_input">
                                          <label
                                            hotel_form_input
                                            className="form_lable"
                                          >
                                            Last name*
                                          </label>
                                          <input
                                            name="LastName"
                                            placeholder="Enter your last name"
                                            // value={passengerData.LastName}
                                            onChange={(e) =>
                                              setTimeout(() => {
                                                handleServiceChange(
                                                  e,
                                                  roomIndex,
                                                  { adultIndex: adultIndex }
                                                );
                                              }, 300)
                                            }
                                          />
                                        </div>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} py={1}>
                                      <Box>
                                        <div className="form_input">
                                          <label
                                            hotel_form_input
                                            className="form_lable"
                                          >
                                            age*
                                          </label>
                                          <input
                                            name="Age"
                                            type="text"
                                            placeholder="Enter Age"
                                            // value={passengerData.Age}
                                            onChange={(e) =>
                                              setTimeout(() => {
                                                handleServiceChange(
                                                  e,
                                                  roomIndex,
                                                  { adultIndex: adultIndex }
                                                );
                                              }, 300)
                                            }
                                          />
                                        </div>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} py={1}>
                                      <Box>
                                        <div className="form_input">
                                          <label
                                            hotel_form_input
                                            className="form_lable"
                                          >
                                            PanNo*
                                          </label>
                                          <input
                                            name="PAN"
                                            type="text"
                                            placeholder="Enter PanNo"
                                            // value={passengerData.PAN}
                                            onChange={(e) =>
                                              setTimeout(() => {
                                                handleServiceChange(
                                                  e,
                                                  roomIndex,
                                                  { adultIndex: adultIndex }
                                                );
                                              }, 300)
                                            }
                                          />
                                        </div>
                                      </Box>
                                    </Grid>
                                  </Grid>
                                </Box>
                              )
                            )}
                          {noOfRooms[roomIndex]?.NoOfChild > 0 &&
                            Array.from(
                              {
                                length: noOfRooms[roomIndex]?.NoOfChild,
                              },
                              (_, childIndex) => (
                                <Box>
                                  Child {childIndex + 1}
                                  <Grid container spacing={3} my={1}>
                                    <Grid item xs={12} sm={12} md={4}>
                                      <Box>
                                        <div className="form_input">
                                          <label
                                            hotel_form_input
                                            className="form_lable"
                                          >
                                            First name*
                                          </label>
                                          <input
                                            name="FirstName"
                                            placeholder="Enter your name"
                                            // value={passengerData.FirstName}
                                            onChange={(e) =>
                                              setTimeout(() => {
                                                handleServiceChange(
                                                  e,
                                                  roomIndex,
                                                  { childIndex: childIndex }
                                                );
                                              })
                                            }
                                          />
                                        </div>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} py={1}>
                                      <Box>
                                        <div className="form_input">
                                          <label
                                            hotel_form_input
                                            className="form_lable"
                                          >
                                            Last name*
                                          </label>
                                          <input
                                            name="LastName"
                                            placeholder="Enter your last name"
                                            // value={passengerData.LastName}
                                            onChange={(e) =>
                                              setTimeout(() => {
                                                handleServiceChange(
                                                  e,
                                                  roomIndex,
                                                  { childIndex: childIndex }
                                                );
                                              })
                                            }
                                          />
                                        </div>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} py={1}>
                                      <Box>
                                        <div className="form_input">
                                          <label
                                            hotel_form_input
                                            className="form_lable"
                                          >
                                            age*
                                          </label>
                                          <input
                                            name="Age"
                                            type="text"
                                            placeholder="Enter Age"
                                            value={
                                              noOfRooms[roomIndex]?.ChildAge[
                                                childIndex
                                              ]
                                            }
                                            // onChange={(e) =>
                                            //   handleServiceChange(
                                            //     e,
                                            //     roomIndex,
                                            //     { childIndex: childIndex }
                                            //   )
                                            // }
                                          />
                                        </div>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} py={1}>
                                      <Box>
                                        <div className="form_input">
                                          <label
                                            hotel_form_input
                                            className="form_lable"
                                          >
                                            PanNo*
                                          </label>
                                          <input
                                            name="PAN"
                                            type="text"
                                            placeholder="Enter PanNo"
                                            // value={passengerData.PAN}
                                            onChange={(e) =>
                                              setTimeout(() => {
                                                handleServiceChange(
                                                  e,
                                                  roomIndex,
                                                  { childIndex: childIndex }
                                                );
                                              })
                                            }
                                          />
                                        </div>
                                      </Box>
                                    </Grid>
                                  </Grid>
                                </Box>
                              )
                            )}
                        </AccordionDetails>
                      </Accordion>

                      {/* Form end */}
                    </div>
                  </Box>
                ))}
            </Box>

            <Grid container spacing={3} my={1}>
              <Grid item xs={12} sm={12} md={4}>
                <Box>
                  <div className="form_input">
                    <label hotel_form_input className="form_lable">
                      Email*
                    </label>
                    <input
                      name="Email"
                      ref={emailRef}
                      placeholder="Enter your Email"
                      // value={passengerData.Email}
                      onChange={(e) => handleServiceChange(e, 0)}
                    />
                  </div>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Box>
                  <div className="form_input">
                    <label hotel_form_input className="form_lable">
                      Phone No*
                    </label>
                    <input
                      name="Phoneno"
                      ref={phoneRef}
                      placeholder="Enter your name"
                      // value={passengerData.Phoneno}
                      onChange={(e) => handleServiceChange(e, 0)}
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>

            <Box
              mt={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            ></Box>
          </Box>
        </Box>

        {/* textarea */}

        {/* <Box
          className="input_area"
          height="120px"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            width: "100%",
          }}
          mt={2}
        >
          <textarea
            placeholder="Special Service Request:"
            class="form-control"
            id="review"
            rows="3"
            width="100%"
          ></textarea>
        </Box> */}
        <Typography
          sx={{
            fontSize: "13px",
            color: "#FF8900",
            fontWeight: "bold",
            marginTop: "13px",
          }}
        >
          Note: For any additional services, Applicable Charges will be paid
          directly at Hotel.
        </Typography>
        {/* <Box
          className="input_area"
          height="120px"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            width: "100%",
          }}
          mt={2}
        >
          <textarea
            placeholder="Enter Remark:"
            class="form-control"
            id="review"
            rows="3"
          ></textarea>
        </Box> */}
        <Box
          sx={{
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "2px 2px 8px gray",
            marginTop: "15px",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
          >
            Cancellation & Charges:
          </Typography>
          <Typography
            sx={{ fontSize: "13px", color: "#252525", fontWeight: "bold" }}
          >
            Room : {hotelData?.RoomTypeName}
          </Typography>
          <Grid container spacing={3} p={1}>
            <Grid item xs={12} md={5}>
              <Typography
                sx={{ fontSize: "13px", color: "#252525", fontWeight: "bold" }}
              >
                Cancelled from
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#006FFF",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                {cancellationFormattedStartingDate}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{ fontSize: "13px", color: "#252525", fontWeight: "bold" }}
              >
                Cancelled before
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#006FFF",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                {cancellationFormattedEndingDate}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#252525",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Cancellation Charges
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#FF8900",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {cancellationCharge}%
              </Typography>
            </Grid>
            <Typography
              sx={{
                fontSize: "13px",
                color: "#FF8900",
                fontWeight: "bold",
                marginTop: "13px",
              }}
              ml={2}
            >
              Note:{hotelCancellationPolicies?.CancellationPolicy}
            </Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "2px 2px 8px gray",
            marginTop: "15px",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
          >
            Hotel Norms
          </Typography>
        </Box>

        {/* <form> */}
        <Box display={"flex"} justifyContent={"center"} mt={2}>
          <Custombutton
            title={"Proceed to Booking Review"}
            type={"submit"}
            onClick={handleClickSavePassenger}
          />
        </Box>
        {/* </form> */}
      </Box>
      <Modal open={bookingSuccess}>
        <Box sx={styleLoader}>
          <CircularProgress size={70} thickness={4} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Flightdetail;
