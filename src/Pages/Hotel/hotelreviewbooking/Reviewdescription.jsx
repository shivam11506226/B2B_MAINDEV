import * as React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
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

const Flightdetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("State Data", reducerState);
  const TotalGuest = sessionStorage.getItem("totalGuest");
  const HotelIndex = sessionStorage.getItem("HotelIndex");

  const OpenNewpage = () => {
    navigate("booknow");
  };
  // radio Butoon
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
              {" "}
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
        <Box display="flex">
          <Typography
            sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
          >
            Enter Passenger Details
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography
            sx={{ fontSize: "16px", color: "#FF8900", fontWeight: "bold" }}
          >
            Corporate Booking (In case of corporate booking. Please enter the
            pan no. of corporate) For corporate Bookings, Only a Corporate PAN
            card with indemnity Bond on the corporate letterhead is mandatory to
            issue the booking. (Travel agent's PAN card is not valid for any
            booking) In absence of the correct details, the Booking may be
            cancelled.
          </Typography>
        </Box>

        <Divider sx={{ backgroundColor: "gray", marginY: "5px" }} />

        <Box>
          <Box display="flex">
            <Typography
              sx={{ fontSize: "16px", color: "#006FFF", fontWeight: "bold" }}
            >
              Room 1 Guest 1 (Adult) - Lead Passenger
            </Typography>
          </Box>
          <Box mt={2} display="flex">
            <Typography
              sx={{
                fontSize: "16px",
                color: "#252525",
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Name:-*
            </Typography>
            <Box
              sx={{
                width: "100px",
                height: "30px",
                boxShadow: " 0px 3px 6px #00000029",
                borderRadius: "10px",
                textAlign: "center",
              }}
              mx={2}
            >
              <FormControl>
                <NativeSelect
                  defaultValue={0}
                  inputProps={{
                    name: "price",
                  }}
                >
                  <option value={10}>Mr.</option>
                  <option value={20}>Miss.</option>
                  <option value={30}>Mrs.</option>
                </NativeSelect>
              </FormControl>
            </Box>
            <Box
              sx={{
                width: "270px",
                height: "30px",
                boxShadow: " 0px 3px 6px #00000029",
                borderRadius: "10px",
                textAlign: "center",
              }}
              mx={2}
            >
              <Input
                type="text"
                placeholder="Traveller First Name"
                border="none"
              ></Input>
            </Box>
            <Box
              sx={{
                width: "270px",
                height: "30px",
                boxShadow: " 0px 3px 6px #00000029",
                borderRadius: "10px",
                textAlign: "center",
              }}
              mx={2}
            >
              <Input
                type="text"
                placeholder="Traveller Last Name"
                border="none"
              ></Input>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "gray", marginY: "15px" }} />
        <Box>
          <Box display="flex">
            <Typography
              sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
            >
              Package Details
            </Typography>
          </Box>
          {/* Arrival Details*/}
          <Box px={2}>
            <Typography
              sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
            >
              Arrival Details:
            </Typography>
            <Box mt={1} display="flex">
              <div>
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                Arriving by Flight
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                Arriving by Surface
              </div>
            </Box>
            <Box mt={2} display="flex">
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Flight No.:-*
              </Typography>

              <Box className="input_area" mx={3}>
                <Input
                  type="text"
                  placeholder="Enter Flight No."
                  border="none"
                ></Input>
              </Box>

              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Date & Time:-*
              </Typography>
              <Box
                sx={{
                  width: "160px",
                  height: "30px",
                  boxShadow: " 0px 3px 6px #00000029",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
                mx={3}
              >
                <Input
                  type="date"
                  name="departure"
                  id="departure"
                  className="deaprture_input"
                  placeholder="Enter city or airport"
                  style={{ textDecoration: "none", border: "none" }}
                />
              </Box>
              <Box
                sx={{
                  width: "120px",
                  height: "30px",
                  boxShadow: " 0px 3px 6px #00000029",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
                mx={3}
              >
                <FormControl>
                  <NativeSelect
                    defaultValue={0}
                    inputProps={{
                      name: "price",
                    }}
                  >
                    <option value={10}>Hours</option>
                    <option value={20}>1</option>
                    <option value={30}>2</option>
                  </NativeSelect>
                </FormControl>
              </Box>
              <Box
                sx={{
                  width: "120px",
                  height: "30px",
                  boxShadow: " 0px 3px 6px #00000029",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
                mx={1}
              >
                <FormControl>
                  <NativeSelect
                    defaultValue={0}
                    inputProps={{
                      name: "price",
                    }}
                  >
                    <option value={10}>Minutes</option>
                    <option value={20}>1</option>
                    <option value={30}>2</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Box>
          </Box>

          {/* Departure detail */}

          <Box px={2} mt={2}>
            <Typography
              sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
            >
              Departure Details:
            </Typography>
            <Box mt={1} display="flex">
              <div>
                <Radio
                  checked={Value === "c"}
                  onChange={handleClick}
                  value="c"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                Departure by Flight
                <Radio
                  checked={Value === "e"}
                  onChange={handleClick}
                  value="p"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                Arriving by Surface
              </div>
            </Box>
            <Box mt={2} display="flex">
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Flight No.:-*
              </Typography>

              <Box className="input_area" mx={3}>
                <Input
                  type="text"
                  placeholder="Enter Flight No."
                  border="none"
                ></Input>
              </Box>

              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Date & Time:-*
              </Typography>
              <Box
                sx={{
                  width: "160px",
                  height: "30px",
                  boxShadow: " 0px 3px 6px #00000029",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
                mx={3}
              >
                <Input
                  type="date"
                  name="departure"
                  id="departure"
                  className="deaprture_input"
                  placeholder="Enter city or airport"
                  style={{ textDecoration: "none", border: "none" }}
                />
              </Box>
              <Box
                sx={{
                  width: "120px",
                  height: "30px",
                  boxShadow: " 0px 3px 6px #00000029",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
                mx={3}
              >
                <FormControl>
                  <NativeSelect
                    defaultValue={0}
                    inputProps={{
                      name: "price",
                    }}
                  >
                    <option value={10}>Hours</option>
                    <option value={20}>1</option>
                    <option value={30}>2</option>
                  </NativeSelect>
                </FormControl>
              </Box>
              <Box
                sx={{
                  width: "120px",
                  height: "30px",
                  boxShadow: " 0px 3px 6px #00000029",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
                mx={1}
              >
                <FormControl>
                  <NativeSelect
                    defaultValue={0}
                    inputProps={{
                      name: "price",
                    }}
                  >
                    <option value={10}>Minutes</option>
                    <option value={20}>1</option>
                    <option value={30}>2</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Box>
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

        <form action="/Guestdetail">
          <Box textAlign="center" mt={2}>
            <Button className="continue_btn" type="submit" variant="contained">
              Proceed to Booking Review
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Flightdetail;
