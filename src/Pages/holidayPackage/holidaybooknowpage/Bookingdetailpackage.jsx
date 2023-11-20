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
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import "./holidaybooknowdetail.css";
import { textAlign } from "@mui/system";
import { Divider } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import color from "../../../color/color";
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



  const savedDataString = sessionStorage.getItem("searchPackageData");
  const savedData = JSON.parse(savedDataString);
  const savedDestination = savedData.destination;
  const savedDays = savedData.days;

  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="col-lg-12">
              <div className="outerFilterBox">
                <div className="filterBox">
                  <p className="searchDestination">Seach Destination{' '}: <b>{savedDestination}</b></p>
                  <p className="searchDestination">Days {' '} <b>{savedDays}</b></p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="packageName">
                <p>Dubai - Travel Solo not Alone, Group trips for Solo Travellers</p>
                <span>5D/4N</span>
              </div>
            </div>
            <div className="col-lg-12 d-flex">
              <div className="packageLocation">
                <FmdGoodIcon />

              </div>
              <div>
                <p>Dubai</p>
                <span>(Dubai)</span>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="TripHighlight">
                <p>Trip Highlights</p>

                <div className="col-lg-10">
                  <div className="icon-boxHighlight">
                    <div className="singleIcon">
                      <span><CommitIcon /></span>
                      <p>Flexibility</p>
                    </div>
                    <div className="singleIcon">
                      <span><TramIcon /></span>
                      <p>Train</p>
                    </div>
                    <div className="singleIcon">
                      <span><DirectionsBusIcon /></span>
                      <p>Bus</p>
                    </div>
                    <div className="singleIcon">
                      <span><DirectionsCarIcon /></span>
                      <p>Cab</p>
                    </div>
                    <div className="singleIcon">
                      <span><TwoWheelerIcon /></span>
                      <p>Moterbike</p>
                    </div>
                    <div className="singleIcon">
                      <span><ApartmentIcon /></span>
                      <p>Hotel</p>
                    </div>
                    <div className="singleIcon">
                      <span><HolidayVillageIcon /></span>
                      <p>Homestays</p>
                    </div>
                    <div className="singleIcon">
                      <span><LocationCityIcon /></span>
                      <p>Guesthouse</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="tripOverview">
                <div className="col-lg-10">
                  <div className="overviewBox">
                    <span>Overview</span>
                    <p>Welcome to Dubai the land of amazing and modern skyscrapers, the Arabian desert, adrenalin rush experiences, shopping at the Dubai Mall, the Palm Jumeria, Burj Al Arab and of course, the Burj Khalifa. We take you to an enthralling tour giving you an experience of sand dunes, cultural shows, underwater encounters, musical fountains and last but not the least view of the majectic Dubai skyline from the 24th floor of Burj Khalifa, an experience of a lifetime.  </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Box className="header_top" border="1px solid gray" mt={1}>
        <Box mt={1} alignItems="center">
          <Grid container alignItems="center">
            <Grid md={7} sm={6}>
              <Box display="flex" alignItems="center">
                <Box sx={{ width: "25%", height: "22%" }}>
                  <img
                    src={onePackage?.pakage_img}
                    className="flight_img"
                    style={{ borderRadius: "8px" }}
                  />
                </Box>
                <Box px={1}>
                  <Typography className="hotel_name" >
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
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            Domestic
                          </Typography>
                        )}
                        {tag?.international == true && (
                          <Typography
                            color="#666666"
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            International
                          </Typography>
                        )}
                        {tag?.budget == true && (
                          <Typography
                            color="#666666"
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            Budget
                          </Typography>
                        )}
                        {tag?.holiday == true && (
                          <Typography
                            color="#666666"
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            Holiday
                          </Typography>
                        )}
                        {tag?.mid_range == true && (
                          <Typography
                            color="#666666"
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            Mid Range
                          </Typography>
                        )}
                        {tag?.luxury == true && (
                          <Typography
                            color="#666666"
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            Luxury
                          </Typography>
                        )}
                        {tag?.honeymoon == true && (
                          <Typography
                            color="#666666"
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            Honeymoon
                          </Typography>
                        )}
                        {tag?.anniversary == true && (
                          <Typography
                            color="#666666"
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            Anniversary
                          </Typography>
                        )}
                        {tag?.weekend_gateway == true && (
                          <Typography
                            color="#666666"
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            Weekend Gateway
                          </Typography>
                        )}
                        {tag?.couples == true && (
                          <Typography
                            color="#666666"
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            Couples
                          </Typography>
                        )}
                        {tag?.family == true && (
                          <Typography
                            color="#666666"
                            fontSize="15px"
                            fontWeight="bold"
                          >
                            Family
                          </Typography>
                        )}
                        {tag?.solo == true && (
                          <Typography
                            color="#666666"
                            fontSize="15px"
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

              >
                <Box
                  display="flex"
                  justifyContent="space-around"
                  width="50%"
                  mt="16px"
                  marginLeft="-28%"
                >
                  {onePackage?.insclusions?.map((item, index) => {
                    return (
                      <>
                        {item?.flexibility && (
                          <span>
                            {" "}
                            <CommitIcon style={{ fontSize: "50px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.train && (
                          <span>
                            {" "}
                            <TramIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.bus && (
                          <span>
                            {" "}
                            <DirectionsBusIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.cab && (
                          <span>
                            {" "}
                            <DirectionsCarIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.hotel && (
                          <span>
                            {" "}
                            <ApartmentIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.homeStays && (
                          <span>
                            {" "}
                            <HolidayVillageIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.guestHouse && (
                          <span>
                            {" "}
                            <LocationCityIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.cruise && (
                          <span>
                            {" "}
                            <BlurOnIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.sightSeeing && (
                          <span>
                            {" "}
                            <DeckIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.guide && (
                          <span>
                            {" "}
                            <EngineeringIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.meals && (
                          <span>
                            {" "}
                            <FastfoodIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.breakfast && (
                          <span>
                            {" "}
                            <DinnerDiningIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.drink && (
                          <span>
                            {" "}
                            <LiquorIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.visa && (
                          <span>
                            {" "}
                            <ArticleIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.moterBike && (
                          <span>
                            {" "}
                            <TwoWheelerIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.travelInsurance && (
                          <span>
                            {" "}
                            <AccountBalanceIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.safeTravel && (
                          <span>
                            {" "}
                            <ParaglidingIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.wildlife && (
                          <span>
                            {" "}
                            <NaturePeopleIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.heritage && (
                          <span>
                            {" "}
                            <LandslideIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.adventure && (
                          <span>
                            {" "}
                            <KitesurfingIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.beach && (
                          <span>
                            {" "}
                            <PoolIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.hillStation && (
                          <span>
                            {" "}
                            <DownhillSkiingIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
                          </span>
                        )}
                        {item?.nature && (
                          <span>
                            {" "}
                            <ForestIcon style={{ fontSize: "40px", color: color.bluedark }} />{" "}
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
                  <Typography style={{ color: color.bluedark }} fontSize="24px" fontWeight="bold">
                    ₹{onePackage?.pakage_amount?.amount}
                  </Typography>
                  <Typography

                    fontSize="10px"
                    fontWeight="bold"
                    marginTop={-1}
                    style={{ color: color.red1 }}
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
            sx={{ color: color.bluedark, fontSize: "16px", fontWeight: "bold" }}
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
                color: color.bluedark,
                fontSize: "16px",
                fontWeight: "bold",
                alignItems: "left",

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
                color: color.bluedark,
                fontSize: "16px",
                fontWeight: "bold",
                alignItems: "left",

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
                color: color.bluedark,
                fontSize: "16px",
                fontWeight: "bold",
                alignItems: "left",

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
                color: color.bluedark,
                fontSize: "16px",
                fontWeight: "bold",
                alignItems: "left",

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
                style={{ backgroundColor: color.bluedark, color: "white" }}
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
