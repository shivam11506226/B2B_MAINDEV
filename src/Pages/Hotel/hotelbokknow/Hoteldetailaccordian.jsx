import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import map from "../../../Images/map.png";
import picture from "../../../Images/picture.png";
import file from "../../../Images/file.png";
import Box from "@mui/material/Box";
import jacuzzii from "../../../Images/jacuzzii.jpg";
import jacuzzy from "../../../Images/jacuzzy.jpg";
import bed from "../../../Images/bed.png";
import { Grid, Button } from "@mui/material";
import Link from "@mui/material/Link";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Checkbox from "@mui/material/Checkbox";

import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";

import { hotelBlockRoomAction } from "../../../Redux/Hotel/hotel";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "white" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("State Data", reducerState);

  const ResultIndex = sessionStorage.getItem("ResultIndex");
  const HotelCode = sessionStorage.getItem("HotelCode");

  const [expanded, setExpanded] = useState("panel1");
  const [ratingOption, setRatingOption] = useState("");
  console.log(ratingOption);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const hotelInfo = reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult;
  const hotelRoom =
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult;

  const handleClick = () => {
    sessionStorage.setItem("HotelIndex", ratingOption);
    const smoking =
      hotelRoom?.HotelRoomsDetails[ratingOption]?.SmokingPreference;
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
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.NoOfRooms,
      ClientReferenceNo: 0,
      IsVoucherBooking: true,
      HotelRoomsDetails: [
        {
          RoomIndex: hotelRoom?.HotelRoomsDetails[ratingOption]?.RoomIndex,
          RoomTypeCode:
            hotelRoom?.HotelRoomsDetails[ratingOption]?.RoomTypeCode,
          RoomTypeName:
            hotelRoom?.HotelRoomsDetails[ratingOption]?.RoomTypeName,
          RatePlanCode:
            hotelRoom?.HotelRoomsDetails[ratingOption]?.RatePlanCode,
          BedTypeCode: null,
          SmokingPreference: SmokingPreference,
          Supplements: null,
          Price: {
            CurrencyCode:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.CurrencyCode,
            RoomPrice:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.RoomPrice,
            Tax: hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.Tax,
            ExtraGuestCharge:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price
                ?.ExtraGuestCharge,
            ChildCharge:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.ChildCharge,
            OtherCharges:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.OtherCharges,
            Discount:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.Discount,
            PublishedPrice:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.PublishedPrice,
            PublishedPriceRoundedOff:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price
                ?.PublishedPriceRoundedOff,
            OfferedPrice:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.OfferedPrice,
            OfferedPriceRoundedOff:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price
                ?.OfferedPriceRoundedOff,
            AgentCommission:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price
                ?.AgentCommission,
            AgentMarkUp:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.AgentMarkUp,
            ServiceTax:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.ServiceTax,
            TCS: hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.TCS,
            TDS: hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.TDS,
            ServiceCharge:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.ServiceCharge,
            TotalGSTAmount:
              hotelRoom?.HotelRoomsDetails[ratingOption]?.Price?.TotalGSTAmount,
            GST: {
              CGSTAmount:
                hotelRoom?.HotelRoomsDetails[ratingOption]?.GST?.CGSTAmount,
              CGSTRate:
                hotelRoom?.HotelRoomsDetails[ratingOption]?.GST?.CGSTRate,
              CessAmount:
                hotelRoom?.HotelRoomsDetails[ratingOption]?.GST?.CessAmount,
              CessRate:
                hotelRoom?.HotelRoomsDetails[ratingOption]?.GST?.CessRate,
              IGSTAmount:
                hotelRoom?.HotelRoomsDetails[ratingOption]?.GST?.IGSTAmount,
              IGSTRate:
                hotelRoom?.HotelRoomsDetails[ratingOption]?.GST?.IGSTRate,
              SGSTAmount:
                hotelRoom?.HotelRoomsDetails[ratingOption]?.GST?.SGSTAmount,
              SGSTRate:
                hotelRoom?.HotelRoomsDetails[ratingOption]?.GST?.SGSTRate,
              TaxableAmount:
                hotelRoom?.HotelRoomsDetails[ratingOption]?.GST?.TaxableAmount,
            },
          },
        },
      ],
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId:
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.TraceId,
    };
    dispatch(hotelBlockRoomAction(payload));
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ border: "none", marginY: "20px" }}
      >
        <AccordionSummary
          sx={{ borderRadius: "20px", boxShadow: "0px 3px 6px #00000029" }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Grid container>
            <Grid md={6}>
              <Box display="flex" alignItems="center">
                <Box sx={{ width: "5%" }} ml={5}>
                  <img src={bed} style={{ width: "100%" }} />
                </Box>
                <Typography
                  ml={2}
                  color="#252525"
                  fontSize="14px"
                  fontWeight="bold"
                >
                  Available Room(s)
                </Typography>
              </Box>
            </Grid>
            <Grid md={6}>
              <Box display="flex" justifyContent="end"></Box>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            borderRadius: "20px",
            boxShadow: "0px 3px 6px #00000029",
            marginTop: "20px",
          }}
        >
          <Grid container my={2} p={3}>
            <Grid md={8}>
              <Box display="flex" alignItems="center">
                <Typography color="#252525" fontSize="14px" fontWeight="bold">
                  Rooms Categories
                </Typography>
              </Box>
            </Grid>
            <Grid md={4}></Grid>
          </Grid>

          {hotelRoom?.HotelRoomsDetails.map((res, key) => {
            const dateString = res?.LastCancellationDate;
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
            return (
              <Box className="offer_area" p={2}>
                <Grid container>
                  <Grid md={3}>
                    <Box display="grid" justifyContent="left" textAlign="left">
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        {res?.RoomTypeName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                      >
                        {res?.RoomPromotion}
                      </Typography>
                      <Typography>
                        <Link
                          sx={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#FF8900",
                          }}
                        >
                          Show Room Description
                        </Link>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid md={3} alignItems="center" display="flex">
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#666666",
                          alignItems: "center",
                        }}
                      >
                        {res?.RatePlanName}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid md={3} alignItems="center" display="flex">
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#FF0000",
                          alignItems: "center",
                        }}
                      >
                        Last Cancellation till:{formattedDate}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    md={3}
                    alignItems="center"
                    display="flex"
                    justifyContent="end"
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        mr={2}
                      >
                        ₹{res?.Price?.PublishedPriceRoundedOff}
                      </Typography>
                    </Box>
                    <Box>
                      <input
                        className="radio"
                        type="checkbox"
                        style={{ width: "25px", height: "25px" }}
                        value={`${key}`}
                        checked={ratingOption === `${key}`}
                        onClick={(e) => setRatingOption(`${key}`)}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          })}

          <Box></Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ border: "none" }}
      >
        <AccordionSummary
          sx={{ borderRadius: "20px", boxShadow: "0px 3px 6px #00000029" }}
          aria-controls="panel2d-content"
          id="paneld-header"
        >
          <img src={picture} style={{ width: "2%", marginRight: "10px" }} />
          <Typography sx={{ fontsize: "14px", color: "#252525" }}>
            Hotel Image
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            borderRadius: "20px",
            boxShadow: "0px 3px 6px #00000029",
            margin: " 20px 0px",
          }}
        >
          <Box display="flex" justifyContent="left">
            <img
              src={file}
              style={{ width: "2%", height: "auto", marginRight: "10px" }}
            />
            <Typography
              sx={{ fontsize: "14px", color: "#252525", textAlign: "left" }}
              mb={1}
            >
              Hotel Details
            </Typography>
          </Box>
          <Typography className="acc_para">
            <div
              dangerouslySetInnerHTML={{
                __html: hotelInfo?.HotelDetails?.Description,
              }}
            />
          </Typography>
          <Box my={3} overflow="scroll" height="270px">
            <Grid container spacing={3} px={10}>
              {hotelInfo?.HotelDetails?.Images?.map((img, key) => {
                return (
                  <Grid item sm={12} lg={4}>
                    <Box>
                      <img src={img} className="jacuzzy_img" />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ border: "none", marginY: "20px" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          sx={{ borderRadius: "20px", boxShadow: "0px 3px 6px #00000029" }}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <img src={map} style={{ width: "2%", marginRight: "10px" }} />
          <Typography sx={{ fontsize: "14px", color: "#252525" }}>
            Hotel Map
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            borderRadius: "20px",
            boxShadow: "0px 3px 6px #00000029",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{ fontsize: "14px", color: "#252525", textAlign: "left" }}
            mb={1}
          >
            Hotel Map Details
          </Typography>
          <Typography className="acc_para">
            <Alert severity="error">
              {" "}
              Currently Map Details is Not Available !!!
            </Alert>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box className="accordian_area">
        <Button
          className="continue_btn"
          type="submit"
          variant="contained"
          onClick={() => {
            handleClick();
          }}
        >
          Continue
        </Button>
      </Box>
    </div>
  );
}
