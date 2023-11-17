import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import hotelNotFound from "../../../Images/hotelNotFound.jpg"
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

  const handleClick = (resultIndex, hotelCode) => {
    console.log("Handel Click Index Key", resultIndex, hotelCode);
    navigate("HotelBooknow");
    sessionStorage.setItem("ResultIndex", resultIndex);
    sessionStorage.setItem("HotelCode", hotelCode);
  };
  const handleModifySearchClick = () => {
    navigate("/hotel");
  };




  const [sortOption, setSortOption] = useState("lowToHigh");
  const [filterRating, setFilterRating] = useState(null);


  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterRating(event.target.value);
  };

  const sortedAndFilteredResults =
    result?.HotelResults
      ?.filter(
        (hotel) =>
          !filterRating || hotel?.StarRating === parseInt(filterRating)
      )
      ?.sort(
        (a, b) =>
          sortOption === "lowToHigh"
            ? a?.Price?.RoomPrice - b?.Price?.RoomPrice
            : b?.Price?.RoomPrice - a?.Price?.RoomPrice
      );


  let totalAdults = 0;
  let totalChildren = 0;

  result?.RoomGuests?.forEach((room) => {
    totalAdults += room?.NoOfAdults || 0;
    totalChildren += room?.NoOfChild || 0;
  });


  // Retrieve data from sessionStorage
  const storedFormData = JSON.parse(sessionStorage.getItem('hotelFormData'));
  const data = storedFormData.dynamicFormData[0]; // Assuming dynamicFormData is an array with at least one element

  // Calculate total number of guests
  const totalAdult = data.NoOfAdults || 0;
  const totalChild = data.NoOfChild || 0;

  console.log("shaan", sortedAndFilteredResults)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box className="ModifySearch">
            <Box
              backgroundColor="white"
              border="1px solid #5C85A4"
              borderRadius="10px"
            >
              <Typography justifyContent="center" display="flex" pt={3} color="#21325D" fontWeight="bold">
                Your Search Query
              </Typography>
              <Divider sx={{ backgroundColor: "gray", marginY: "5px" }} />
              {/* <Typography
              pt={1}
              paddingLeft="22px"
              justifyContent="start"
              display="flex"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Popular Filter
            </Typography> */}
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={building} />
                <Typography className="list_text">{storedFormData.city}</Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={night} style={{ width: "8%", height: "20%" }} />
                <Typography className="list_text">
                  {result?.CheckInDate} to {result?.CheckOutDate}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={beds} />
                <Typography className="list_text">{result?.NoOfRooms} Room(s)</Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={unitednations} />
                <Typography className="list_text">Indian</Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={addgroup} />
                <Typography className="list_text">{totalAdults} Adult(s) {totalChildren} Child(s)</Typography>
              </Box>
              <Box sx={{ display: "flex", marginY: "15px", marginX: "20px" }}>
                <img src={review} />
                <Typography className="list_text">{storedFormData.star} {' '}Star</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginY: "15px",
                  marginX: "20px",
                }}
              >
                <Button
                  variant="contained"
                  className="btn_mod"
                  onClick={handleModifySearchClick}
                  sx={{ background: "#21325D", color: "white", fontWeight: "700", borderRadius: "10px" }}
                >
                  Modify Search
                </Button>
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


              <Divider sx={{ backgroundColor: "gray" }} />

            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>


          <div className="outerFilterBox">
            <div className="filterBox">
              <p>Showing {' '}{sortedAndFilteredResults?.length} {' '} Results</p>
              <div>
                <label>Sort By:</label>
                <select value={sortOption} onChange={handleSortChange}>
                  <option value="lowToHigh">Low to High</option>
                  <option value="highToLow">High to Low</option>
                </select>
              </div>

              <div>
                <label>Rating:</label>
                <select value={filterRating} onChange={handleFilterChange}>
                  <option value="">All Ratings</option>
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>

            </div>
          </div>

          {sortedAndFilteredResults?.map((result, index) => {
            const resultIndex = result?.ResultIndex;
            const hotelCode = result?.HotelCode;
            return (
              <Box key={index} className="hotelResultBox" background="#FFF">
                <Box
                  p={2}
                  borderRadius="8px"
                  border="1.41px solid #BBB"
                  style={{ background: "#f1f1f1" }}
                >
                  <Box display="flex">
                    <Grid md={7} sm={6}>
                      <Box display="flex">
                        <Box
                          sx={{
                            width: "20%",
                            height: "30%",
                            borderRadius: "5px",
                          }}
                        >

                          <img
                            src={result?.HotelPicture}
                            className="flight_img"
                            alt="hotelImage"
                            onError={(e) => {
                              e.target.onerror = null; // Prevent infinite loop
                              e.target.src = hotelNotFound; // Replace with your dummy image path
                            }}
                            style={{ borderRadius: "5px" }}
                          />
                        </Box>
                        <Box>
                          <div
                            style={{
                              color: "#071C2C",
                              fontSize: "20px",
                              fontFamily: "Montserrat",
                              fontWeight: 700,
                              wordWrap: "break-word",
                              marginLeft: "20px",
                            }}
                          >
                            {result?.HotelName}
                          </div>
                          <div
                            style={{
                              color: "#071C2C",
                              fontSize: "14.10px",
                              fontFamily: "Montserrat",
                              fontWeight: 500,
                              wordWrap: "break-word",
                              marginLeft: "20px",
                            }}
                          >
                            {result?.HotelAddress}
                          </div>

                          <Typography p={0}>
                            <Link sx={{ fontSize: "13px", marginLeft: "20px" }}>
                              More Details
                            </Link>
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid md={5} sm={6}>
                      <Typography display="flex" gap="15px" justifyContent="right">
                        <div
                          style={{
                            color: "black",
                            fontSize: "14.10px",
                            fontFamily: "Montserrat",
                            fontWeight: 600,
                            wordWrap: "break-word",
                            marginLeft: "-30px"
                          }}
                        >
                          Offer Price:
                        </div>
                        <div
                          style={{
                            color: "black",
                            fontSize: "14.10px",
                            fontFamily: "Montserrat",
                            fontWeight: 400,
                            wordWrap: "break-word",
                          }}
                        >
                          ₹{result?.Price?.OfferedPrice}
                        </div>
                      </Typography>
                      <Typography display="flex" gap="15px" justifyContent="right">
                        <div
                          style={{
                            color: "black",
                            fontSize: "14.10px",
                            fontFamily: "Montserrat",
                            fontWeight: 600,
                            wordWrap: "break-word",
                            marginLeft: "50px"
                          }}
                        >
                          Public Price:
                        </div>
                        <div
                          style={{
                            color: "black",
                            fontSize: "14.10px",
                            fontFamily: "Montserrat",
                            fontWeight: 400,
                            wordWrap: "break-word",
                          }}
                        >
                          ₹{result?.Price?.PublishedPrice}
                        </div>
                      </Typography>

                      <Box display="flex" justifyContent="right" mt={2}>
                        <Button
                          type="submit"
                          onClick={() => {
                            console.log(
                              "resultIndex, hotelCode",
                              resultIndex,
                              hotelCode
                            );
                            handleClick(resultIndex, hotelCode);
                          }}
                          style={{ backgroundColor: "#21325D", color: "white", padding: "8px 13px" }}

                        >
                          Book Now
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
    </Box >
  );
}
