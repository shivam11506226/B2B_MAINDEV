import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import mainImage from "../../../Images/mainImage.png";
import FlightIcon from "@mui/icons-material/Flight";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import RowingIcon from "@mui/icons-material/Rowing";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import HolidayRating from "../holidaypackageresult/HolidayRating";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import information from "../../../Images/information.png";

import CommitIcon from "@mui/icons-material/Commit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CancelIcon from "@mui/icons-material/Cancel";
import TramIcon from "@mui/icons-material/Tram";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import CabinIcon from "@mui/icons-material/Cabin";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import DeckIcon from "@mui/icons-material/Deck";
import EngineeringIcon from "@mui/icons-material/Engineering";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LiquorIcon from "@mui/icons-material/Liquor";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import LandslideIcon from "@mui/icons-material/Landslide";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import PoolIcon from "@mui/icons-material/Pool";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import ForestIcon from "@mui/icons-material/Forest";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import KayakingIcon from "@mui/icons-material/Kayaking";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import "./holidaybooknowdetail.css";
import { textAlign } from "@mui/system";
import { Divider } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";

const Bookingdetailpackage = () => {
  const reducerState = useSelector((state) => state);
  const onePackage =
    reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data;
  console.log("One Package", onePackage);
  const [daysDetailsValues, setDaysDetails] = useState([]);
  const handleDaysDetail = (index, e) => {
    const newValues = [...daysDetailsValues];
    newValues[index] = e.target.value;
    setDaysDetails(newValues);
  };
  return (
    <>
      <Box className="header_top" border="1px solid gray" mt={1}>
        <Box mt={1} alignItems="center">
          <Grid container alignItems="center">
            <Grid md={7} sm={6}>
              <Box display="flex" alignItems="center">
                <Box sx={{ width: "20%", height: "20%" }}>
                  <img
                    src={onePackage?.pakage_img}
                    className="flight_img"
                    style={{ borderRadius: "8px" }}
                  />
                </Box>
                <Box px={1}>
                  <Typography className="hotel_name">
                    {onePackage?.pakage_title}
                  </Typography>
                  <Typography color="#FF8900" fontSize="10px" fontWeight="bold">
                    3N/4D (Goa)
                  </Typography>

                  {onePackage?.select_tags?.map((tag, index) => {
                    return (
                      <>
                        {tag?.domestic == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Domestic
                          </Typography>
                        )}
                        {tag?.international == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            International
                          </Typography>
                        )}
                        {tag?.budget == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Budget
                          </Typography>
                        )}
                        {tag?.holiday == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Holiday
                          </Typography>
                        )}
                        {tag?.mid_range == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Mid Range
                          </Typography>
                        )}
                        {tag?.luxury == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Luxury
                          </Typography>
                        )}
                        {tag?.honeymoon == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Honeymoon
                          </Typography>
                        )}
                        {tag?.anniversary == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Anniversary
                          </Typography>
                        )}
                        {tag?.weekend_gateway == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Weekend Gateway
                          </Typography>
                        )}
                        {tag?.couples == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Couples
                          </Typography>
                        )}
                        {tag?.family == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Family
                          </Typography>
                        )}
                        {tag?.solo == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Solo
                          </Typography>
                        )}
                        {tag?.group == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Group
                          </Typography>
                        )}
                        {tag?.girl_only == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Girl Only
                          </Typography>
                        )}
                        {tag?.boy_only == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Boy Only
                          </Typography>
                        )}
                        {tag?.family_with_children == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Family with children
                          </Typography>
                        )}
                        {tag?.bagpacker == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Bagpacker
                          </Typography>
                        )}
                        {tag?.nature == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Nature
                          </Typography>
                        )}
                        {tag?.wildlife == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Wildlife
                          </Typography>
                        )}
                        {tag?.historical == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Historical
                          </Typography>
                        )}
                        {tag?.piligrimage == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Piligrimage
                          </Typography>
                        )}
                        {tag?.offbeat == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Offbeat
                          </Typography>
                        )}
                        {tag?.sightseeing == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Sightseeing
                          </Typography>
                        )}
                        {tag?.recreation == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Recreation
                          </Typography>
                        )}
                        {tag?.adventure == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Adventure
                          </Typography>
                        )}
                        {tag?.dining == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Dining
                          </Typography>
                        )}
                        {tag?.shopping == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Shopping
                          </Typography>
                        )}
                        {tag?.nightlife == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Nightlife
                          </Typography>
                        )}
                        {tag?.relaxation == true && (
                          <Typography
                            color="#666666"
                            fontSize="10px"
                            fontWeight="bold"
                          >
                            Relaxation
                          </Typography>
                        )}
                      </>
                    );
                  })}
                  <Typography
                    color="#666666"
                    fontSize="10px"
                    fontWeight="bold"
                  ></Typography>
                  {/* <Typography color="#666666" fontSize="10px" fontWeight="bold">
                    {" "}
                    o Dinner Cruise
                  </Typography> */}
                </Box>
              </Box>
            </Grid>
            <Grid md={5} sm={6} justifyContent="space-between">
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                // border="1px solid red"
              >
                <Box
                  display="flex"
                  justifyContent="space-around"
                  width="50%"
                  mt="16%"
                  marginLeft="-38%"
                >
                  {onePackage?.insclusions?.map((item, index) => {
                    return (
                      <>
                        {item?.flexibility && (
                          <span>
                            {" "}
                            <CommitIcon />{" "}
                          </span>
                        )}
                        {item?.train && (
                          <span>
                            {" "}
                            <TramIcon />{" "}
                          </span>
                        )}
                        {item?.bus && (
                          <span>
                            {" "}
                            <DirectionsBusIcon />{" "}
                          </span>
                        )}
                        {item?.cab && (
                          <span>
                            {" "}
                            <DirectionsCarIcon />{" "}
                          </span>
                        )}
                        {item?.hotel && (
                          <span>
                            {" "}
                            <ApartmentIcon />{" "}
                          </span>
                        )}
                        {item?.homeStays && (
                          <span>
                            {" "}
                            <HolidayVillageIcon />{" "}
                          </span>
                        )}
                        {item?.guestHouse && (
                          <span>
                            {" "}
                            <LocationCityIcon />{" "}
                          </span>
                        )}
                        {item?.cruise && (
                          <span>
                            {" "}
                            <BlurOnIcon />{" "}
                          </span>
                        )}
                        {item?.sightSeeing && (
                          <span>
                            {" "}
                            <DeckIcon />{" "}
                          </span>
                        )}
                        {item?.guide && (
                          <span>
                            {" "}
                            <EngineeringIcon />{" "}
                          </span>
                        )}
                        {item?.meals && (
                          <span>
                            {" "}
                            <FastfoodIcon />{" "}
                          </span>
                        )}
                        {item?.breakfast && (
                          <span>
                            {" "}
                            <DinnerDiningIcon />{" "}
                          </span>
                        )}
                        {item?.drink && (
                          <span>
                            {" "}
                            <LiquorIcon />{" "}
                          </span>
                        )}
                        {item?.visa && (
                          <span>
                            {" "}
                            <ArticleIcon />{" "}
                          </span>
                        )}
                        {item?.moterBike && (
                          <span>
                            {" "}
                            <TwoWheelerIcon />{" "}
                          </span>
                        )}
                        {item?.travelInsurance && (
                          <span>
                            {" "}
                            <AccountBalanceIcon />{" "}
                          </span>
                        )}
                        {item?.safeTravel && (
                          <span>
                            {" "}
                            <ParaglidingIcon />{" "}
                          </span>
                        )}
                        {item?.wildlife && (
                          <span>
                            {" "}
                            <NaturePeopleIcon />{" "}
                          </span>
                        )}
                        {item?.heritage && (
                          <span>
                            {" "}
                            <LandslideIcon />{" "}
                          </span>
                        )}
                        {item?.adventure && (
                          <span>
                            {" "}
                            <KitesurfingIcon />{" "}
                          </span>
                        )}
                        {item?.beach && (
                          <span>
                            {" "}
                            <PoolIcon />{" "}
                          </span>
                        )}
                        {item?.hillStation && (
                          <span>
                            {" "}
                            <DownhillSkiingIcon />{" "}
                          </span>
                        )}
                        {item?.nature && (
                          <span>
                            {" "}
                            <ForestIcon />{" "}
                          </span>
                        )}
                      </>
                    );
                  })}
                  {/* <Box textAlign="center">
                    <FlightIcon />
                    <Typography
                      color="#006FFF"
                      fontSize="8px"
                      fontWeight="bold"
                    >
                      2 Flights
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <LocationCityIcon />
                    <Typography
                      color="#006FFF"
                      fontSize="8px"
                      fontWeight="bold"
                    >
                      1 Hotel
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <RowingIcon />
                    <Typography
                      color="#006FFF"
                      fontSize="8px"
                      fontWeight="bold"
                    >
                      1 Activity
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <TransferWithinAStationIcon />
                    <Typography
                      color="#006FFF"
                      fontSize="8px"
                      fontWeight="bold"
                    >
                      1 Transfer
                    </Typography>
                  </Box> */}
                </Box>
                <Box display="block" textAlign="end" alignSelf="center">
                  <Typography color="#0096FF" fontSize="24px" fontWeight="bold">
                    ₹{onePackage?.pakage_amount?.amount}
                  </Typography>
                  <Typography
                    color="#FF8900"
                    fontSize="10px"
                    fontWeight="bold"
                    marginTop={-1}
                  >
                    per person
                  </Typography>
                  {/* <form action="/HolidayGuestDetail">
                    <Box textAlign="right">
                      <Button
                        variant="contained"
                        textAlign="center"
                        display="flex"
                        justifyContent="center"
                        type="submit"
                      >
                        Book Now
                      </Button>
                    </Box>
                  </form> */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography
            sx={{ color: "#006FFF", fontSize: "16px", fontWeight: "bold" }}
            py={2}
          >
            Overview
          </Typography>
          <Typography
            sx={{ color: "#666666", fontSize: "14px", fontWeight: "bold" }}
          >
            {onePackage?.overview}
          </Typography>
        </Box>
        <Box className="header_top" my={3}>
          <Box>
            <Typography
              sx={{
                color: "#006FFF",
                fontSize: "16px",
                fontWeight: "bold",
                alignItems: "left",
                textDecoration: "underline",
              }}
            >
              Day Plan
            </Typography>
          </Box>
          <Box>
            {onePackage?.detailed_ltinerary?.map((item, index) => {
              return (
                <>
                  <Box>
                    <Box py={1}> </Box>
                    <Accordion style={{ width: "100%" }}>
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>
                          <Typography
                            color="Black"
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            Day {index + 1}
                          </Typography>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Typography
                            sx={{
                              color: "#666666",
                              fontSize: "14px",
                              fontWeight: "bold",
                            }}
                          >
                            {item}
                          </Typography>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Box>
                </>
              );
            })}
          </Box>

          <Box></Box>
          {/* end */}
          {/* <form action="/HolidayGuestDetail">
            <Box textAlign="center" mt={3}>
              <Button
                variant="contained"
                textAlign="center"
                display="flex"
                justifyContent="center"
                type="submit"
              >
                Book Now
              </Button>
            </Box>
          </form> */}
        </Box>
        <Box className="header_top" my={3}>
          <Box>
            <Typography
              sx={{
                color: "#006FFF",
                fontSize: "16px",
                fontWeight: "bold",
                alignItems: "left",
                textDecoration: "underline",
              }}
            >
              Inclusions
            </Typography>
          </Box>
          <Box py={1}>
            <ul>
              <li>
                <Typography
                  sx={{
                    color: "#666666",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {onePackage?.insclusion_note}
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
        <Box className="header_top" my={3}>
          <Box>
            <Typography
              sx={{
                color: "#006FFF",
                fontSize: "16px",
                fontWeight: "bold",
                alignItems: "left",
                textDecoration: "underline",
              }}
            >
              Exclusions
            </Typography>
          </Box>
          <Box py={1}>
            <ul>
              <li>
                <Typography
                  sx={{
                    color: "#666666",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {onePackage?.exclusion_note}
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    color: "#666666",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  Any other expenses besides those mentioned in the inclusions.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
        <Box className="header_top" my={3}>
          <Box>
            <Typography
              sx={{
                color: "#006FFF",
                fontSize: "16px",
                fontWeight: "bold",
                alignItems: "left",
                textDecoration: "underline",
              }}
            >
              Day Plan
            </Typography>
          </Box>
          <Box>
            <Grid container px={2}>
              <Grid md={6}>
                <Box display="flex" justifyContent="space-around"></Box>
              </Grid>
              <Grid md={6}>
                <Box display="flex" ml={2}></Box>
              </Grid>
            </Grid>

            <Box>
              <Box py={1}></Box>
              <Accordion style={{ width: "100%" }} defaultActiveKey={null}>
                <Accordion.Item>
                  <Accordion.Header>
                    <Typography color="Black" fontSize="15px" fontWeight="bold">
                      Terms and Conditions
                    </Typography>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Typography
                      sx={{
                        color: "#666666",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {onePackage?.term_Conditions}
                    </Typography>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Box>
            <Box>
              <Box py={1}></Box>
              <Accordion style={{ width: "100%" }} defaultActiveKey={null}>
                <Accordion.Item>
                  <Accordion.Header>
                    <Typography color="Black" fontSize="15px" fontWeight="bold">
                      Cancellation Policy
                    </Typography>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Typography
                      sx={{
                        color: "#666666",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {onePackage?.cancellation_Policy}
                    </Typography>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Box>
          </Box>

          <Box></Box>
          {/* end */}
          <form action="/HolidayGuestDetail">
            <Box textAlign="center" mt={3}>
              <Button
                variant="contained"
                textAlign="center"
                display="flex"
                justifyContent="center"
                type="submit"
              >
                Continue
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Bookingdetailpackage;
