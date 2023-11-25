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
  // console.log(noOfRooms, "noOfRooms");
  const ResultIndex = sessionStorage.getItem("ResultIndex");
  const HotelCode = sessionStorage.getItem("HotelCode");
  // console.log(bookingStatus);
  const [bookingSuccess, setBookingSuccess] = useState(bookingStatus);
  const [passengerData, setPassengerData] = useState([]);
  const [sub, setSub] = useState(false);

  // console.log("State Data", reducerState);

  useEffect(() => {
    if (bookingStatus == 1) {
      setBookingSuccess(false);
      navigate("/Guestdetail");
    }
  }, [bookingStatus]);

  useEffect(() => {
    //  console.log(handleSettingPassengerArr(noOfRooms))
    const allPassengerData = handleSettingPassengerArr(noOfRooms);
    // console.log("allPassengerData", allPassengerData);
    setPassengerData(allPassengerData);
    console.log(passengerData, "passengerDataUseEffect");
  }, []);

  const handleSettingPassengerArr = (roomCombination) => {
    const passengerData = [];
    const adultTempelate = {
      Title: "mr",
      FirstName: "",
      MiddleName: null,
      LastName: "",
      Phoneno: "",
      Email: "",
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
    // console.log(roomCombination);
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
  const [emailVal, setEmail] = useState(false);
  const [contactVal, setContact] = useState(false);

  const [accordionExpanded, setAccordionExpanded] = React.useState(false);
  const handleAccordionChange = (index) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? index : false);
  };

  const hotelInfo = reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult;

  // console.log("Hotel information", hotelInfo);

  const hotelRoom =
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult;

  const hotelRoomName =
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult
      ?.HotelRoomsDetails[0]?.RoomTypeName;
  // console.log("hotel Room Name", hotelRoomName)
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
  // console.log("hotel Data", hotelData);
  const bookingId =
    reducerState?.hotelSearchResult?.bookRoom?.BookResult?.BookingId;
  // console.log(hotelCancellationPolicies?.CancellationPolicies[0]);
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
    // console.log(passengerData);
   
    if (
      roomIndex!==undefined &&roomIndex!==null &&
      knowIndex?.adultIndex !== undefined &&
      knowIndex?.adultIndex !== null
    ) {
      console.log("adult");
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
    } else if (
      roomIndex !== undefined &&
      roomIndex !== null &&
      knowIndex?.childIndex !== undefined &&
      knowIndex?.childIndex !== null
    ) {
      console.log("child");
      const { name, value } = e.target;
      const filteredPassenger = passengerData.filter((item, index) => {
        return (
          item.roomIndex == roomIndex &&
          item?.childIndex == knowIndex?.childIndex
        );
      });
      console.log("filteredPassenger", filteredPassenger);
      const newFilteredPassenger = { ...filteredPassenger[0] };
      newFilteredPassenger[name] = value;
      const indexFind = passengerData.indexOf(filteredPassenger[0]);
      if (indexFind !== -1) {
        passengerData[indexFind] = newFilteredPassenger;
      }
    }

    console.log("passengerDataNew", passengerData);
     const eml = document.getElementById("Email1").value;
     const con = document.getElementById("phoneNumber1").value;
     const val = validateEmail(eml);
     const valCon = validatePhoneNumber(con);
     setEmail(() => val);
     setContact(() => valCon);
     console.warn(val, "email validationjfnjkdfnjdfjfddddddddddddddddddn");
  };

  const handleClickSavePassenger = () => {
    console.warn("emailrefffffffffffff", emailRef.current.value);
    setSub(true);
    if (!validation()) {
      return;
    }
    dispatch(PassengersAction(passengerData));

    // console.log("passengerData", passengerData);

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
  const result =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult;
  let totalAdults = 0;
  let totalChildren = 0;

  result?.RoomGuests?.forEach((room) => {
    totalAdults += room?.NoOfAdults || 0;
    totalChildren += room?.NoOfChild || 0;
  });

  // Retrieve data from sessionStorage
  const storedFormData = JSON.parse(sessionStorage.getItem("hotelFormData"));
  const data = storedFormData.dynamicFormData[0]; // Assuming dynamicFormData is an array with at least one element

  // // Calculate total number of guests
  // const totalAdult = data.NoOfAdults || 0;
  // const totalChild = data.NoOfChild || 0;

  const [expandedOther, setExpandedOther] = React.useState(false);

  const handleOtherChange = (panel) => (event, notexpanted) => {
    setExpandedOther(notexpanted ? panel : false);
  };
  function validatePAN(panNumber) {
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return regex.test(panNumber);
  }
  function validatePhoneNumber(phoneNumber) {
    // Define the regular expression pattern for a valid phone number
    var phonePattern = /^\d{10}$/;

    // Test the phone number against the pattern
    return phonePattern.test(phoneNumber);
  }
  function validateEmail(email) {
    // Define the regular expression pattern for a valid phone number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the phone number against the pattern
    return emailRegex.test(email);
  }

  function validation() {
    const email = document.getElementById("Email1").value;
    const contact = document.getElementById("phoneNumber1").value;
    const em = validateEmail(email);
    const con = validatePhoneNumber(contact);
    const other = passengerData.filter(
      (item) =>
        toString(item.Age) === "" ||
        item.FirstName === "" ||
        item.LastName === "" ||
        validatePAN(item.PAN) === false
    );
    console.warn("dataddddddddd", other);
    const result = em && con && other.length === 0;
    console.warn(result, "result");
    return result;
  }
  // console.warn("passengerDataNew", emailRef,"sss");
  return (
    <>
      <div className="container-fluid rmv-margin">
        {/* <div className="row">
          <div className="col-lg-12"> */}
        <div className="row">
          {/* hotel details area  */}

          <div className="col-lg-12">
            <div className="hotelDetails">
              <div>
                <p className="hotelName">
                  {hotelInfo?.HotelDetails?.HotelName}
                </p>
                <Box alignItems="right">
                  <Box>{star(hotelInfo?.HotelDetails?.StarRating)}</Box>
                </Box>
              </div>
              <div>
                <p className="text-start w-50">
                  {" "}
                  <b>Address:</b> {hotelInfo?.HotelDetails?.Address}
                </p>
                <div>
                  <p className="text-end">
                    {" "}
                    <b>Check In:</b>
                    {
                      reducerState?.hotelSearchResult?.ticketData?.data?.data
                        ?.HotelSearchResult?.CheckInDate
                    }
                  </p>
                  <p className="text-end">
                    <b>Check Out:</b>
                    {
                      reducerState?.hotelSearchResult?.ticketData?.data?.data
                        ?.HotelSearchResult?.CheckOutDate
                    }
                  </p>
                </div>
              </div>
              <div>
                <div className="contact">
                  <p>{storedFormData?.city}, India</p>
                  <p>
                    <b>Contact: </b>
                    {hotelInfo?.HotelDetails?.HotelContactNo
                      ? hotelInfo.HotelDetails.HotelContactNo
                      : "Not Available"}
                  </p>
                </div>
                <p>
                  <b>Night(s) </b>
                  {storedFormData?.night}
                </p>
              </div>
            </div>
            {/* </div>
            </div> */}
          </div>

          {/* room details area  */}

          <div className="col-lg-12">
            <div className="roomDetails">
              <div className="row">
                <div className="col-lg-9 mb-md-3">
                  <p className="title ">{hotelData?.RoomTypeName}</p>
                  <p>{hotelData?.RoomPromotion}</p>
                  <p>{hotelData?.RatePlanName}</p>
                  <p className="text-hotelName"> {hotelRoomName}</p>
                </div>
                <div className="col-lg-3 adultss ">
                  <p>{totalAdults} Adult(s)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* guest details section  */}

        <div className="row">
          <div className="col-lg-12">
            <div className="headText">
              <h2>Guest Details</h2>
            </div>
          </div>

          <div className="headForm">
            <div className="row">
              <div className="col-lg-12">
                <div className="row padd g-3">
                  <div className="col-lg-4 col-md-6">
                    <div className="form_input">
                      <label className="form_lable">Email*</label>
                      <input
                        name="Email"
                        id="Email1"
                        ref={emailRef}
                        placeholder="Enter your Email"
                        // value={passengerData.Email}
                        onChange={(e) =>
                          handleServiceChange(e, 0, { adultIndex: 0 })
                        }
                      />
                      {sub && !emailVal && (
                        <span id="error1">Enter a Valid Email</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="form_input">
                      <label className="form_lable">Phone No*</label>
                      <input
                        name="Phoneno"
                        id="phoneNumber1"
                        ref={phoneRef}
                        placeholder="Enter your name"
                        // value={passengerData.Phoneno}
                        onChange={(e) =>
                          handleServiceChange(e, 0, { adultIndex: 0 })
                        }
                      />
                      {sub && !contactVal && (
                        <span id="error1">Enter a Valid Number</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="accordianSection">
              {noOfRooms.length > 0 &&
                Array.from({ length: noOfRooms.length }, (_, roomIndex) => (
                  <Box sx={{ marginBottom: "15px" }}>
                    <div mb={2} key={roomIndex} className="services" py={1}>
                      <Accordion
                        expanded={accordionExpanded === roomIndex}
                        onChange={handleAccordionChange(roomIndex)}
                        sx={{
                          marginBottom: "15px",
                          backgroundColor: "rgba(187, 187, 187, 0.30)",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <label>Room {roomIndex + 1}</label>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            {noOfRooms[roomIndex]?.NoOfAdults > 0 &&
                              Array.from(
                                { length: noOfRooms[roomIndex]?.NoOfAdults },
                                (_, adultIndex) => (
                                  <div className="guestDetailsForm">
                                    <p>
                                      Adult {adultIndex + 1}
                                      {adultIndex == 0 ? "(Lead Guest)" : ""}
                                    </p>
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
                                            {sub &&
                                              passengerData[roomIndex]
                                                .FirstName === "" && (
                                                <span className="error">
                                                  {
                                                    passengerData[roomIndex]
                                                      .FirstName
                                                  }
                                                </span>
                                              )}
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
                                              type="number"
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
                                              Pan Number*
                                            </label>
                                            <input
                                              name="PAN"
                                              type="text"
                                              placeholder="Write in Capital"
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
                                  </div>
                                )
                              )}
                            {noOfRooms[roomIndex]?.NoOfChild > 0 &&
                              Array.from(
                                {
                                  length: noOfRooms[roomIndex]?.NoOfChild,
                                },
                                (_, childIndex) => (
                                  <div className="guestDetailsForm">
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
                                  </div>
                                )
                              )}
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </Box>
                ))}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="headText">
              <h2>Other Details</h2>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="services">
              <Accordion
                expanded={expandedOther === "panel1"}
                onChange={handleOtherChange("panel1")}
                sx={{
                  marginBottom: "15px",
                  backgroundColor: "rgba(187, 187, 187, 0.30)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <label>Add Note</label>
                </AccordionSummary>
                <AccordionDetails>
                  <div>No data</div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expandedOther === "panel2"}
                onChange={handleOtherChange("panel2")}
                sx={{
                  marginBottom: "15px",
                  backgroundColor: "rgba(187, 187, 187, 0.30)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <label>Cancellation and Charges</label>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="hotelNameAccord">
                    <p>{hotelRoomName}</p>
                  </div>
                  <div className="otherDetailsData">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="cancelAccord">
                          <span>Cancelled on or After</span>
                          <p>{cancellationFormattedStartingDate}</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cancelAccord">
                          <span>Cancelled on or Before</span>
                          <p>{cancellationFormattedEndingDate}</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cancelAccord">
                          <span>Cancellation Charges</span>
                          <p>{cancellationCharge}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expandedOther === "panel3"}
                onChange={handleOtherChange("panel3")}
                sx={{
                  marginBottom: "15px",
                  backgroundColor: "rgba(187, 187, 187, 0.30)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <label>Amenities</label>
                </AccordionSummary>
                <AccordionDetails>
                  <div>No data</div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expandedOther === "panel4"}
                onChange={handleOtherChange("panel4")}
                sx={{
                  marginBottom: "15px",
                  backgroundColor: "rgba(187, 187, 187, 0.30)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <label>Hotel Norms</label>
                </AccordionSummary>
                <AccordionDetails>
                  <div>No data</div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="reviewDescriptionButton">
              {/* <Custombutton
                  title={"Proceed to Booking Review"}
                  type={"submit"}
                  onClick={handleClickSavePassenger}
                /> */}
              <button type="submit" onClick={handleClickSavePassenger}>
                Proceed to Book
              </button>
            </div>
          </div>

          <Modal open={bookingSuccess}>
            <Box sx={styleLoader}>
              <CircularProgress size={70} thickness={4} />
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Flightdetail;
