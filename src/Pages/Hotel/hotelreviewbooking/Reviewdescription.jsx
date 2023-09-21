import * as React from "react";
import { useState,useRef } from "react";
import { Grid, Box, Typography, Button,Accordion,AccordionDetails,AccordionSummary} from "@mui/material";
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
import {
  hotelBookRoomAction,
  fetchBookRoomHotel,
} from "../../../Redux/Hotel/hotel";
import Custombutton from "../../../Custombuttom/Button";
const Flightdetail = () => {
  const emailRef = useRef();
  const phoneRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("State Data", reducerState);
  const TotalGuest = sessionStorage.getItem("totalGuest");
  const HotelIndex = sessionStorage.getItem("HotelIndex");
  const ResultIndex = sessionStorage.getItem("ResultIndex");
  const HotelCode = sessionStorage.getItem("HotelCode");
  const OpenNewpage = () => {
    navigate("booknow");
  };
  // radio Butoon
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const passengerTemplate = {
    Title: "mr",
    FirstName: "",
    MiddleName: null,
    LastName: "",
    Phoneno: "9878656453",
    Email: "testing@gmail.com",
    PaxType: 1,
    LeadPassenger: true,
    Age: parseInt(30),
    PassportNo: null,
    PassportIssueDate: null,
    PassportExpDate: null,
    PAN: "DNIPS1199Q",
  };

  const childPassenger = {
    Title: "mr",
    FirstName: "",
    MiddleName: null,
    LastName: "",
    Phoneno: "",
    Email: "",
    PaxType: 2,
    LeadPassenger: true,
    Age: parseInt(0),
    PassportNo: null,
    PassportIssueDate: null,
    PassportExpDate: null,
  };

  const [accordionExpanded, setAccordionExpanded] = React.useState(false);
  const handleAccordionChange = (index) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? index : false);
  };

  const passengerLists = [];
  for (let i = 0; i < TotalGuest; i++) {
    passengerLists.push({
      ...passengerTemplate,
      // IsLeadPax: i === 0, // Set the first passenger as the lead passenger
    });
  }

  // const passengerChildLists = [];
  // for (let i = 0; i < childCount; i++) {
  //   passengerChildLists.push({
  //     ...childPassenger,
  //     IsLeadPax: false, // Set the first passenger as the lead passenger
  //   });
  // }

  const [passengerList, setPassengerList] = useState(passengerLists);
  const allPassenger = [passengerLists];
  const [passengerData, setPassengerData] = useState(allPassenger.flat());
  const [Value, setValue] = React.useState("c");
  const handleClick = (event) => {
    setValue(event.target.value);
  };
  const hotelInfo = reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult;
  const hotelRoom =
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult;

  const hotelData = hotelRoom?.HotelRoomsDetails[HotelIndex];

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
const handleServiceChange = (e, index) => {
  const { name, value } = e.target;
  const list = [...passengerData];
  list[index][name] = value;
  setPassengerData(list);
};





const handleClickBooking = () => {
  // sessionStorage.setItem("HotelIndex", HotelIndex);
  const email = emailRef.current.value;
  const phoneno = phoneRef.current.value; 
  const smoking = hotelRoom?.HotelRoomsDetails[HotelIndex]?.SmokingPreference;
  var SmokingPreference;
  if (smoking == "NoPreference") {
    SmokingPreference = 0;
  }
  if (smoking == "Smoking") {
    SmokingPreference = 1;
  }
  if (smoking == "NonSmoking") {
    SmokingPreference = 2;
  }
  if (smoking == "Either") {
    SmokingPreference = 3;
  }
  const payload = {
    ResultIndex: ResultIndex,
    HotelCode: HotelCode,
    HotelName: hotelInfo?.HotelDetails?.HotelName,
    GuestNationality: "IN",
    NoOfRooms:
      reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
        ?.NoOfRooms,
    ClientReferenceNo: 0,
    IsVoucherBooking: true,
    HotelRoomsDetails: [
      {
        RoomIndex: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RoomIndex,
        RoomTypeCode: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RoomTypeCode,
        RoomTypeName: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RoomTypeName,
        RatePlanCode: hotelRoom?.HotelRoomsDetails[HotelIndex]?.RatePlanCode,
        BedTypeCode: null,
        SmokingPreference: SmokingPreference,
        Supplements: null,
        Price: {
          CurrencyCode:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.CurrencyCode,
          RoomPrice: hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.RoomPrice,
          Tax: hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.Tax,
          ExtraGuestCharge:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.ExtraGuestCharge,
          ChildCharge:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.ChildCharge,
          OtherCharges:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.OtherCharges,
          Discount: hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.Discount,
          PublishedPrice:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.PublishedPrice,
          PublishedPriceRoundedOff:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price
              ?.PublishedPriceRoundedOff,
          OfferedPrice:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.OfferedPrice,
          OfferedPriceRoundedOff:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price
              ?.OfferedPriceRoundedOff,
          AgentCommission:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.AgentCommission,
          AgentMarkUp:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.AgentMarkUp,
          ServiceTax:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.ServiceTax,
          TCS: hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.TCS,
          TDS: hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.TDS,
          ServiceCharge:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.ServiceCharge,
          TotalGSTAmount:
            hotelRoom?.HotelRoomsDetails[HotelIndex]?.Price?.TotalGSTAmount,
          GST: {
            CGSTAmount:
              hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.CGSTAmount,
            CGSTRate: hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.CGSTRate,
            CessAmount:
              hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.CessAmount,
            CessRate: hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.CessRate,
            IGSTAmount:
              hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.IGSTAmount,
            IGSTRate: hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.IGSTRate,
            SGSTAmount:
              hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.SGSTAmount,
            SGSTRate: hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.SGSTRate,
            TaxableAmount:
              hotelRoom?.HotelRoomsDetails[HotelIndex]?.GST?.TaxableAmount,
          },
        },
        HotelPassenger: passengerData,
      },
    ],
    EndUserIp: reducerState?.ip?.ipData,
    TokenId: reducerState?.ip?.tokenData,
    TraceId:
      reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult
        ?.TraceId,
  };
  dispatch(hotelBookRoomAction(payload));
};





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
            Contact No.:
            <Typography
              className="thirdd-txt"
              color="#006FFF !important"
              fontWeight="bold"
              px={1}
            >
              {hotelInfo?.HotelDetails?.HotelContactNo}
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
              {TotalGuest}
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
              {TotalGuest > 0 &&
                Array.from({ length: TotalGuest }, (_, index) => (
                  <Box>
                    <div mb={2} key={index} className="services" py={1}>
                      <Accordion
                        expanded={accordionExpanded === index}
                        onChange={handleAccordionChange(index)}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>Guest {index + 1}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box>
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
                                      value={passengerData.FirstName}
                                      onChange={(e) =>
                                        handleServiceChange(e, index)
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
                                      value={passengerData.LastName}
                                      onChange={(e) =>
                                        handleServiceChange(e, index)
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
                                      value={passengerData.Age}
                                      onChange={(e) =>
                                        handleServiceChange(e, index)
                                      }
                                    />
                                  </div>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
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
                      value={passengerData.Email}
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
                      value={passengerData.Phoneno}
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

        <Box
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
        </Box>
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
        <Box
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
                Cancelled on or After
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "#006FFF", fontWeight: "bold" }}
              >
                07 Jan, 2023
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "#006FFF", fontWeight: "bold" }}
              >
                19 Jan, 2023
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{ fontSize: "13px", color: "#252525", fontWeight: "bold" }}
              >
                Cancelled on or After
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "#006FFF", fontWeight: "bold" }}
              >
                09 Jan, 2023
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "#006FFF", fontWeight: "bold" }}
              >
                23 Jan, 2023
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#252525",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                Cancellation Charges
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#FF8900",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                100%
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#FF8900",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                100%
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
              Note: Early check out will attract full cancellation charges
              unless otherwise specified.
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
          <ol>
            <li sx={{ fontSize: "14px", color: "#252525", fontWeight: "bold" }}>
              When people think of Goa, they're probably thinking about long,
              sandy beaches, but much of the state is also covered by forest.
            </li>
            <li sx={{ fontSize: "14px", color: "#252525", fontWeight: "bold" }}>
              Around 20% of the land in Goa falls into the beautiful Western
              Ghats of India, a vast mountain range and treasure house of
              biodiversity.
            </li>
            <li sx={{ fontSize: "14px", color: "#252525", fontWeight: "bold" }}>
              The forests here are teeming with exotic wildlife, including
              Indian giant squirrels, mongoose, Slender Loris, Indian macaques
              and sloth bears.
            </li>
            <li sx={{ fontSize: "14px", color: "#252525", fontWeight: "bold" }}>
              Goa is widely known as India's party district, and is visited by
              thousands of sun-seeking tourists each year.
            </li>
            <li sx={{ fontSize: "14px", color: "#252525", fontWeight: "bold" }}>
              The state has fulfilled popular demand, with close to 7,000 bars
              across the state to choose from – and plenty of cheap alcohol.
              North Goa is generally more lively, although South Goa has its
              fair share of beach parties too.
            </li>
          </ol>
        </Box>

        {/* <form> */}
        <Box display={"flex"} justifyContent={"center"} mt={2}>
          {/* <Button
              className="continue_btn"
              type="submit"
              variant="contained"
              onClick={handleClickBooking}
            >
              Proceed to Booking Review
            </Button> */}
          <Custombutton title={"Proceed to Booking Review"} type={"submit"} onClick={handleClickBooking}/>
        </Box>
        {/* </form> */}
      </Box>
    </Box>
  );
};

export default Flightdetail;
