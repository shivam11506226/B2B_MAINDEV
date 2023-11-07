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
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  clearHolidayReducer,
  searchOnePackageAction,
} from "../../../Redux/OnePackageSearchResult/actionOneSearchPackage";
import { useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';



const HolidayPackageResult = () => {
  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log("holiday details",reducerState?.searchResult?.packageSearchResult?.data?.data?.pakage);
  const filteredPackage =
    reducerState?.searchResult?.packageSearchResult?.data?.data?.pakage;
  console.log("----------------------------");
  console.warn("Flitered line 22", filteredPackage);

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

        
        <div >
          <Grid container spacing={3} display="flex" alignItems='center' justifyContent='center'>
            {/* <Grid sm={0} xs={0} md={3} item>
              <div style={{ width: 361, height: 642, background: 'white', borderRadius: 8, border: '1px #5C85A4 solid', padding: "10px" }} >
                <Accordion style={{ border: "none" }} border="none">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ width: '100%', border: "none" }}
                  >
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>

                      <Typography style={{
                        fontFamily: 'Montserrat',
                        fontSize: '14px',
                        fontWeight: '400',
                        textAlign: 'center'

                      }} ><FilterAltIcon fontSize="16px" /> Filter</Typography>
                      <Typography style={{ color: '#0048FF', textDecoration: 'underline' }}>clear all</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ fontWeight: "600", fontFamily: "Montserrat", fontSize: '16px' }}>
                      Themes
                    </Typography>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox style={{ fontWeight: "400", fontFamily: "Montserrat", fontSize: '14px' }} />} label="Adventure" />
                      <FormControlLabel control={<Checkbox style={{ fontWeight: "400", fontFamily: "Montserrat", fontSize: '14px' }} />} label="Wildlife" />
                      <FormControlLabel control={<Checkbox style={{ fontWeight: "400", fontFamily: "Montserrat", fontSize: '14px' }} />} label="Break from Work" />
                      <FormControlLabel control={<Checkbox style={{ fontWeight: "400", fontFamily: "Montserrat", fontSize: '14px' }} />} label="Cultural / Religous" />
                      <FormControlLabel control={<Checkbox style={{ fontWeight: "400", fontFamily: "Montserrat", fontSize: '14px' }} />} label="Honeymoon" />


                    </FormGroup>
                    <Typography style={{ fontWeight: "600", fontFamily: "Montserrat", fontSize: '16px' }}>
                      Duration
                    </Typography>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox style={{ fontWeight: "400", fontFamily: "Montserrat", fontSize: '14px' }} />} label="2N - 4N" />
                      <FormControlLabel control={<Checkbox style={{ fontWeight: "400", fontFamily: "Montserrat", fontSize: '14px' }} />} label="4N - 6N" />
                      <FormControlLabel control={<Checkbox style={{ fontWeight: "400", fontFamily: "Montserrat", fontSize: '14px' }} />} label="6N +" />



                    </FormGroup>
                    <Typography style={{ color: '#0048FF', textDecoration: 'underline' }}>more</Typography>
                  </AccordionDetails>
                </Accordion>

              </div>
            </Grid> */}
            <Grid sm={8} xs={8} md={8} item>
              {/* <MuiBox
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                backgroundColor="FFFBFB"
                // boxShadow="1px 1px 8px gray"
                borderRadius="10px"
                paddingTop="6px"
                paddingBottom="6px"
                margin="15px 0px 15px 0px"
                border='1px #9E9E9E solid'
              >
                <MuiBox>
                  <Button sx={{ color: "#000000", fontFamily: "Montserrat", fontSize: '12px', fontWeight: '500' }}>Sorting By :</Button>
                </MuiBox>
                <div style={{
                  width: 'full',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>


                  <div style={{ display: "flex", alignItems: 'center' }}>
                    <MuiBox>
                      <Button
                        sx={{
                          color: '#21325D',
                          fontSize: '12px', fontFamily: 'Montserrat', fontWeight: '400',

                        }}
                      >
                        <Typography sx={{
                          color: '#21325D',
                          fontSize: '12px', fontFamily: 'Montserrat', fontWeight: '400',

                        }}>
                          Price <FilterAltIcon fontSize="12px" /></Typography>

                      </Button>
                    </MuiBox>
                    <MuiBox>
                      <Button
                        sx={{
                          color: '#21325D',
                          fontSize: '12px', fontFamily: 'Montserrat', fontWeight: '400',

                        }}
                      >
                        <Typography sx={{
                          color: '#21325D',
                          fontSize: '12px', fontFamily: 'Montserrat', fontWeight: '400',

                        }}>
                          Star <FilterAltIcon fontSize="12px" /></Typography>
                      </Button>

                    </MuiBox>
                    <MuiBox>
                      <Button
                        sx={{
                          color: '#21325D',
                          fontSize: '12px', fontFamily: 'Montserrat', fontWeight: '400',

                        }}
                      >
                        Hot Deals(0)
                      </Button>
                    </MuiBox>
                  </div>
                  <div style={{ display: 'flex', justifyContent: "end", alignItems: 'center' }}>
                    <MuiBox>
                      <Button
                        sx={{
                          color: '#E73C33',
                          fontSize: '10px', fontFamily: 'Montserrat', fontWeight: '400',

                        }}
                      >
                        *TDS Extra
                      </Button>
                    </MuiBox>
                    <MuiBox>
                      <Button
                        sx={{
                          color: '#000000',
                          fontSize: '10px', fontFamily: 'Montserrat', fontWeight: '400',

                        }}
                      >
                        Share By:
                      </Button>
                    </MuiBox>
                    <MuiBox>
                      <Button
                        sx={{
                          color: '#000000',
                          fontSize: '10px', fontFamily: 'Montserrat', fontWeight: '400',

                        }}
                      >
                        <WhatsAppIcon sx={{ color: "#1FAF38", size: "small" }} />
                      </Button>
                    </MuiBox>
                    <MuiBox>
                      <Button
                        sx={{
                          color: '#000000',
                          fontSize: '10px', fontFamily: 'Montserrat', fontWeight: '400',

                        }}
                      >
                        <MailIcon sx={{ color: "#EA4335" }} />
                      </Button>
                    </MuiBox>

                  </div>
                </div>
              </MuiBox> */}
              <MuiBox style={{display:'flex',flexDirection:'column',gap:"15px"}}>
                {/* HolidayPackagedetail  */}
                {filteredPackage?.map((item, index) => {
                  console.log(item, "333333333333333333333333333333333333333333333333333333333333333")
                  return (
                    <>
                      <MuiBox
                        // p={4}
                        // mt={3}
                        padding='10px'
                        backgroundColor="#FFFBFB"

                        // boxShadow="1px 1px 8px gray"
                        borderRadius="10px"
                        border='2px #BBBBBB solid'
                        alignItems="center"
                        width="100%"
                        // height='247px'
                        // backgroundColor="red"
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          width:"100%"
                        }}
                      >
                        <Grid
                          container
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            columns: 3,
                            height:"100%"
                          
                          }}
                        >
                          <Grid key={index}>
                            <MuiBox
                              display="flex"
                              sx={{
                                justifyContent: "space-between",

                              }}
                            >
                              <MuiBox>
                                <img
                                  src={item?.pakage_img}
                                  style={{
                                    height: "210px",
                                    border: "1px solid gray",
                                    borderRadius: "4px",
                                  }}
                                />
                              </MuiBox>

                            </MuiBox>
                          </Grid>
                          <Grid display="flex"     flexDirection='column' justifyContent="space-between" alignItems='space-between'  height= "210px"  >
                            <MuiBox
                              px={1}
                              display="flex"     flexDirection='column'  alignItems='space-between' justifyContent='space-between'
                              sx={{
                              
                                // paddingRight: "35px",
                                // minWidth: "180px",
                                // marginLeft: "60px",
                                
                                
                              }}
                            >
                              <Typography
                                // className="hotel_name"
                                style={{
                                  color: '#071C2C',
                                  fontFamily: 'Montserrat',
                                  fontSize: '26px',
                                  fontWeight: '700'

                                }}
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

                              {/* <Typography
                                color="#666666"
                                fontSize="10px"
                                fontWeight="bold"
                              >
                                Details
                              </Typography> */}
                            </MuiBox>
                            <Grid>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  justifyContent: "space-around",

                                  width: "300px",
                                  flexWrap: 'wrap'
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
                                              fontSize: "26px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                                              fontSize: "24px",
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
                            <form action="./Holidaybooknow">
                              <Button

                                type="submit"
                                onClick={(e) => searchOneHoliday(item?._id)}
                              >
                                <Typography style={{ color: '#0048FF', fontSize: '16px', fontWeight: '400', fontFamily: 'Montserrat', textDecoration: 'underline' }}  >
                                  More Details
                                </Typography>
                              </Button>
                            </form>

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
                                    style={{ backgroundColor: colors.bluedark, width: '100x', height: "39px" }}
                                    type="submit"
                                    onClick={(e) => searchOneHoliday(item?._id)}
                                  >
                                    <Typography color="white" fontSize="10px">
                                      Book Now
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
    </div >
  );
};

export default HolidayPackageResult;
