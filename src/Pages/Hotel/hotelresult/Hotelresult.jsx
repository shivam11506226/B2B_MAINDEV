import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import Divider from "@mui/material/Divider";
import { Grid, Radio, Typography, Button } from "@mui/material";
import RangeSlider from "./RangeSlider";
import HotelDetails from "./HotelDetails";
import building from "../../../Images/building.png";
import night from "../../../Images/night.png";
import beds from "../../../Images/beds.png";
import unitednations from "../../../Images/unitednations.png";
import addgroup from "../../../Images/addgroup.png";
import review from "../../../Images/review.png";
import Rating from "./Rating";
import mainImage from "../../../Images/mainImage.png";
import Link from "@mui/material/Link";
import "./hotelresult.css";
import { Spacer } from "@chakra-ui/react";
import Loader from "../../Loader/Loader";

import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Popularfilter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("State Data", reducerState?.hotelSearchResult?.ticketData);

  const result =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult;
  console.log(
    'result',result)
  const handleClick = (resultIndex, hotelCode) => {
    console.log("Handel Click Index Key", resultIndex, hotelCode);
    navigate("HotelBooknow");
    sessionStorage.setItem("ResultIndex", resultIndex);
    sessionStorage.setItem("HotelCode", hotelCode);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box
            backgroundColor="#F5F5F5"
            boxShadow="1px 1px 8px gray"
            borderRadius="10px"
          >
            <Typography justifyContent="center" display="flex" pt={3}>
              Your Hotel Search
            </Typography>
            <Divider sx={{ backgroundColor: "gray", marginY: "5px" }} />
            <Typography
              pt={1}
              paddingLeft="22px"
              justifyContent="start"
              display="flex"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Popular Filter
            </Typography>
            <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
              <img src={building} />
              <Typography className="list_text">New Delhi</Typography>
            </Box>
            <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
              <img src={night} style={{ width: "8%", height: "20%" }} />
              <Typography className="list_text">
                3 Night(s)(05 Feb-08 Feb, 2023)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
              <img src={beds} />
              <Typography className="list_text">1 Room(s)</Typography>
            </Box>
            <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
              <img src={unitednations} />
              <Typography className="list_text">Indian</Typography>
            </Box>
            <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
              <img src={addgroup} />
              <Typography className="list_text">2 Adult(s)</Typography>
            </Box>
            <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
              <img src={review} />
              <Typography className="list_text">5 Star or more</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginY: "15px",
                marginX: "20px",
              }}
            >
              <Button variant="contained" className="btn_mod">
                Modify Search
              </Button>
            </Box>
            <Divider sx={{ backgroundColor: "gray", marginY: "5px" }} />
            <Typography
              pt={1}
              paddingLeft="22px"
              justifyContent="start"
              display="flex"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Hotel Name Contains:
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginY: "15px",
                marginX: "20px",
              }}
            >
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                className="Bton_filter"
                sx={{
                  background: "white",
                  color: "gray",
                  boxShadow: "2px 2px 8px gray",
                  borderRadius: "20px",
                  fontSize: "9px",
                  width: "100%",
                }}
                mt={5}
              >
                Enter Hotel Name
              </Button>
            </Box>

            <Divider sx={{ backgroundColor: "gray" }} />
            <Typography
              pt={1}
              paddingLeft="22px"
              justifyContent="start"
              display="flex"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Hot Deals
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginY: "15px",
                alignItems: "center",
              }}
            >
              <Checkbox
                {...label}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
              />
              <Typography className="list_text">Hot Deals</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginY: "15px",
                marginX: "20px",
              }}
            ></Box>
            <Divider sx={{ backgroundColor: "gray" }} />
            <Typography
              pt={1}
              paddingLeft="22px"
              justifyContent="start"
              display="flex"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Price In Rs.:
            </Typography>
            <Box display="flex" justifyContent="center">
              <RangeSlider />
            </Box>

            <Divider sx={{ backgroundColor: "gray" }} />
            <Typography
              pt={1}
              paddingLeft="22px"
              justifyContent="start"
              display="flex"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Star Rating
            </Typography>
            <Box textAlign="left" pb={3}>
              <form action="">
                <Box display="flex" alignItems="center">
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  <Rating />
                </Box>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box>
            <Box
              display="flex"
              px={2}
              backgroundColor="#F5F5F5"
              boxShadow="1px 1px 8px gray"
            >
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Sorting By:</Button>
              </Grid>
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Departure</Button>
              </Grid>
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Duration</Button>
              </Grid>
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Arrival</Button>
              </Grid>
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Pub Price</Button>
              </Grid>
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Offer Price</Button>
              </Grid>
            </Box>
          </Box>

          {result?.HotelResults?.map((result, index) => {
            const resultIndex = result?.ResultIndex;
            const hotelCode = result?.HotelCode;
            return (
              <Box mt={3} key={index}>
                <Box
                  p={2}
                  backgroundColor="#F5F5F5"
                  boxShadow="1px 1px 8px gray"
                  borderRadius="10px"
                >
                  <Box display="flex">
                    <Grid md={7} sm={6}>
                      <Box display="flex">
                        <Box sx={{ width: "20%", height: "30%" }}>
                          <img
                            src={result?.HotelPicture}
                            className="flight_img"
                            
                          />
                        </Box>
                        <Box px={1}>
                          <Typography className="hotel_name">
                            {result?.HotelName}
                          </Typography>
                          <Typography p={0}>
                            <Link sx={{ fontSize: "13px" }}>More Details</Link>
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid md={5} sm={6}>
                      <Typography
                        color="#006FFF"
                        fontSize="12px"
                        fontWeight="bold"
                        display="flex"
                        justifyContent="center"
                      >
                        Offer Price: ₹{result?.Price?.OfferedPrice}
                      </Typography>
                      <Typography
                        color="#FF8900"
                        fontSize="12px"
                        fontWeight="bold"
                        display="flex"
                        justifyContent="center"
                      >
                        Publisher Price: ₹{result?.Price?.PublishedPrice}
                      </Typography>
                      <Box display="flex" justifyContent="center" mt={2}>
                        <Button
                          variant="contained"
                          type="submit"
                          onClick={() => {
                            console.log(
                              "resultIndex, hotelCode",
                              resultIndex,
                              hotelCode
                            );
                            handleClick(resultIndex, hotelCode);
                          }}
                        >
                          <Typography
                            color="white"
                            fontSize="10px"
                            display="flex"
                            justifyContent="center"
                          >
                            Book Now
                          </Typography>
                        </Button>
                      </Box>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
