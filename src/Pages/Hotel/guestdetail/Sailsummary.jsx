import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Link from "@mui/icons-material/Link";

import Divider from "@mui/material/Divider";
import { Grid, Radio, Typography, Button } from "@mui/material";

import "./guestdetail.css";
import { Spacer } from "@chakra-ui/react";
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
  console.log("State Data", reducerState);

  const TotalGuest = sessionStorage.getItem("totalGuest");
  const HotelIndex = sessionStorage.getItem("HotelIndex");

  const hotelInfo = reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult;
  const hotelRoom =
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult;

  const hotelData = hotelRoom?.HotelRoomsDetails[HotelIndex];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        backgroundColor="white"
        boxShadow="1px 1px 8px gray"
        borderRadius="10px"
      >
        <Typography justifyContent="center" display="flex" pt={3}>
          Sale Summary
        </Typography>
        <Typography
          pt={1}
          paddingLeft="22px"
          justifyContent="start"
          display="flex"
          sx={{ fontSize: "12px", fontWeight: "bold" }}
        >
          {hotelData?.RoomTypeName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginY: "5px",
            marginX: "20px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#252525", fontWeight: "bold" }}
            >
              Rate
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#FF8900", fontWeight: "bold" }}
            >
              Rs. {hotelData?.Price?.RoomPrice}{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginY: "5px",
            marginX: "20px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#252525", fontWeight: "bold" }}
            >
              No. of Rooms
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#FF8900", fontWeight: "bold" }}
            >
              {
                reducerState?.hotelSearchResult?.ticketData?.data?.data
                  ?.HotelSearchResult?.NoOfRooms
              }
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{ backgroundColor: "gray", marginY: "2px", marginX: "15px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginY: "5px",
            marginX: "20px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#252525", fontWeight: "bold" }}
            >
              Total
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#FF8900", fontWeight: "bold" }}
            >
              ₹ {hotelData?.Price?.OfferedPriceRoundedOff}
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{ backgroundColor: "gray", marginY: "2px", marginX: "15px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginY: "5px",
            marginX: "20px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#252525", fontWeight: "bold" }}
            >
              Total GST
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#FF8900", fontWeight: "bold" }}
            >
              ₹ {hotelData?.Price?.TotalGSTAmount}
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{ backgroundColor: "gray", marginY: "2px", marginX: "15px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginY: "5px",
            marginX: "20px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#252525", fontWeight: "bold" }}
            >
              Grand Total
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#FF8900", fontWeight: "bold" }}
            >
              ₹ {hotelData?.Price?.PublishedPriceRoundedOff}
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{ backgroundColor: "gray", marginY: "2px", marginX: "15px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginY: "5px",
            marginX: "20px",
          }}
          pb={3}
        >
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#252525", fontWeight: "bold" }}
            >
              Agent Mark Up
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "12px", color: "#FF8900", fontWeight: "bold" }}
            >
              ₹ 0.00
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
