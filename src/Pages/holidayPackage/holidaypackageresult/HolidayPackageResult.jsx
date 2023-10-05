import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Flex, Spacer, Text, HStack, Box } from "@chakra-ui/react";
import HolidayPackagedetail from "../holidaypackageresult/HolidayPackagedetail";
import HolidatLeftPackage from "./HolidatLeftPackage";
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
import LocationCityIcon from "@mui/icons-material/LocationCity";
import RowingIcon from "@mui/icons-material/Rowing";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import HolidayRating from "../holidaypackageresult/HolidayRating";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import information from "../../../Images/information.png";

import { Grid, Box as MuiBox, Typography, Button } from "@mui/material";
import mainImage from "../../../Images/mainImage.png";
import FlightIcon from "@mui/icons-material/Flight";
import colors from "../../../color/color"; //color.js
import { useDispatch, useSelector } from "react-redux";
import {
  clearHolidayReducer,
  searchOnePackageAction,
} from "../../../Redux/OnePackageSearchResult/actionOneSearchPackage";
import { useEffect } from "react";

const HolidayPackageResult = () => {
  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log("holiday details",reducerState?.searchResult?.packageSearchResult?.data?.data?.pakage);
  const filteredPackage =
    reducerState?.searchResult?.packageSearchResult?.data?.data?.pakage;
  console.log("----------------------------");
  console.log("Flitered line 22", filteredPackage);

  const searchOneHoliday = (id) => {
    //  console.log("ID",id);
    const payload = {
      id,
    };
    console.log(payload);
    dispatch(searchOnePackageAction(payload));
  };

  return (
    <div>
      <div className="flightContainer">
        {/* step by step updating part */}

        <Box
          w="100%"
          display="flex"
          justifyContent={"space-around"}
          boxShadow="base"
          border="1px solid gray"
          borderRadius="10px"
        >
          <HStack p="5px">
            <Box
              display="flex"
              justifyContent="center"
              w="25px"
              h="25px"
              borderRadius="50%"
              color="white"
              style={{ backgroundColor: colors.bluedark }}
            >
              <Text>1</Text>
            </Box>

            <Box color="#FDDA0D" fontWeight="bold">
              Holiday Package Search
            </Box>
          </HStack>
          <HStack p="5px">
            <Box
              display="flex"
              justifyContent="center"
              // align="center"
              w="25px"
              h="25px"
              borderRadius="50%"
              style={{ backgroundColor: colors.bluedark }}
              color="white"
            >
              <Text>2</Text>
            </Box>

            <Box fontWeight="normal">Holiday package Result</Box>
          </HStack>
          <HStack p="5px">
            <Box
              display="flex"
              justifyContent="center"
              w="25px"
              h="25px"
              borderRadius="50%"
              style={{ backgroundColor: colors.bluedark }}
              color="white"
            >
              <Text>3</Text>
            </Box>

            <Box fontWeight="normal">Guest Details</Box>
          </HStack>
          <HStack p="5px">
            <Box
              display="flex"
              justifyContent="center"
              // align="center"
              w="25px"
              h="25px"
              borderRadius="50%"
              style={{ backgroundColor: colors.bluedark }}
              color="white"
            >
              <Text>4</Text>
            </Box>

            <Box fontWeight="normal">Review Booking</Box>
          </HStack>
          <HStack p="5px">
            <Box
              display="flex"
              justifyContent="center"
              // align="center"
              w="25px"
              h="25px"
              borderRadius="50%"
              style={{ backgroundColor: colors.bluedark }}
              color="white"
            >
              <Text>5</Text>
            </Box>

            <Box fontWeight="normal">Booking Confirmation</Box>
          </HStack>
        </Box>
        <div>
          <Grid container spacing={3}>
            <Grid sm={12} xs={12} md={12} item>
              <MuiBox
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                backgroundColor="#F5F5F5"
                boxShadow="1px 1px 8px gray"
                borderRadius="10px"
                paddingTop="6px"
                paddingBottom="6px"
                margin="15px 0px 15px 0px"
              >
                <MuiBox>
                  <Button sx={{ color: colors.bluedark }}>Sorting By :</Button>
                </MuiBox>

                <MuiBox>
                  <Button
                    sx={{
                      color: colors.bluedark,
                      border: "1px solid colors.bluedark",
                    }}
                  >
                    Price
                  </Button>
                </MuiBox>
              </MuiBox>
              <MuiBox>
                {/* HolidayPackagedetail  */}
                {filteredPackage?.map((item, index) => {
                  return (
                    <>
                      <MuiBox
                        p={4}
                        mt={3}
                        backgroundColor="#F5F5F5"
                        boxShadow="1px 1px 8px gray"
                        borderRadius="10px"
                        alignItems="center"
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Grid
                          container
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Grid key={index}>
                            <MuiBox
                              display="flex"
                              sx={{
                                justifyContent: "space-between",
                                width: "50%",
                              }}
                            >
                              <MuiBox>
                                <img
                                  src={item?.pakage_img}
                                  style={{
                                    width: "150px",
                                    border: "1px solid gray",
                                    borderRadius: "10px",
                                  }}
                                />
                              </MuiBox>
                              <MuiBox
                                px={1}
                                sx={{
                                  paddingRight: "35px",
                                  minWidth: "180px",
                                  marginLeft: "60px",
                                }}
                              >
                                <Typography
                                  className="hotel_name"
                                  style={{ color: colors.bluedark }}
                                >
                                  {item?.pakage_title}
                                </Typography>
                                <Typography
                                  color="#FF8900"
                                  fontSize="12px"
                                  fontWeight="bold"
                                >
                                  {/* 3N/4D (Goa) */}
                                  {`${item?.days - 1}N`} / {`${item?.days}D`}
                                </Typography>

                                <Typography
                                  color="#666666"
                                  fontSize="10px"
                                  fontWeight="bold"
                                >
                                  Details
                                </Typography>
                              </MuiBox>
                            </MuiBox>
                          </Grid>
                          <Grid>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "space-around",

                                width: "500px",
                              }}
                            >
                              {item?.insclusions?.map((ele, index) => {
                                return (
                                  <>
                                    {ele?.flexibility && (
                                      <span>
                                        {" "}
                                        <CommitIcon
                                          style={{
                                            fontSize: "60px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.train && (
                                      <span>
                                        {" "}
                                        <TramIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.bus && (
                                      <span>
                                        {" "}
                                        <DirectionsBusIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.cab && (
                                      <span>
                                        {" "}
                                        <DirectionsCarIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.hotel && (
                                      <span>
                                        {" "}
                                        <ApartmentIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.homeStays && (
                                      <span>
                                        {" "}
                                        <HolidayVillageIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.guestHouse && (
                                      <span>
                                        {" "}
                                        <LocationCityIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.cruise && (
                                      <span>
                                        {" "}
                                        <BlurOnIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.sightSeeing && (
                                      <span>
                                        {" "}
                                        <DeckIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.guide && (
                                      <span>
                                        {" "}
                                        <EngineeringIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.meals && (
                                      <span>
                                        {" "}
                                        <FastfoodIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.breakfast && (
                                      <span>
                                        {" "}
                                        <DinnerDiningIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.drink && (
                                      <span>
                                        {" "}
                                        <LiquorIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.visa && (
                                      <span>
                                        {" "}
                                        <ArticleIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.moterBike && (
                                      <span>
                                        {" "}
                                        <TwoWheelerIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.travelInsurance && (
                                      <span>
                                        {" "}
                                        <AccountBalanceIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.safeTravel && (
                                      <span>
                                        {" "}
                                        <ParaglidingIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.wildlife && (
                                      <span>
                                        {" "}
                                        <NaturePeopleIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.heritage && (
                                      <span>
                                        {" "}
                                        <LandslideIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.adventure && (
                                      <span>
                                        {" "}
                                        <KitesurfingIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.beach && (
                                      <span>
                                        {" "}
                                        <PoolIcon />{" "}
                                      </span>
                                    )}
                                    {ele?.hillStation && (
                                      <span>
                                        {" "}
                                        <DownhillSkiingIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                    {ele?.nature && (
                                      <span>
                                        {" "}
                                        <ForestIcon
                                          style={{
                                            fontSize: "50px",
                                            color: colors.bluedark,
                                          }}
                                        />{" "}
                                      </span>
                                    )}
                                  </>
                                );
                              })}
                            </div>
                          </Grid>
                          <Grid display="flex" justifyContent="space-between">
                            <MuiBox
                              display="flex"
                              justifyContent="space-between"
                              width="100%"
                            >
                              <MuiBox
                                display="block"
                                alignItems="center"
                                textAlign="center"
                              >
                                <Typography
                                  style={{ color: colors.bluedark }}
                                  fontSize="18px"
                                  fontWeight="bold"
                                >
                                  <span>&#8377;</span>
                                  {item?.pakage_amount?.amount}
                                </Typography>
                                <form action="./Holidaybooknow">
                                  <Button
                                    style={{ backgroundColor: colors.bluedark }}
                                    type="submit"
                                    onClick={(e) => searchOneHoliday(item?._id)}
                                  >
                                    <Typography color="white" fontSize="10px">
                                      Get Details
                                    </Typography>
                                  </Button>
                                </form>
                              </MuiBox>
                            </MuiBox>
                          </Grid>
                        </Grid>
                      </MuiBox>
                    </>
                  );
                })}
              </MuiBox>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HolidayPackageResult;
