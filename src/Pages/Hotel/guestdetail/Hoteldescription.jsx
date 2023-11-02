import React, { useState } from "react";
import { Grid, Box, Typography, Button, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Rating from "../hotelresult/Rating";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector, useReducer } from "react-redux";
import moment from "moment";
import { hotelBookRoomAction } from "../../../Redux/Hotel/hotel";
import { async } from "q";

const Flightdetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const OpenNewpage = () => {
    navigate("booknow");
  };
  const reducerState = useSelector((state) => state);
  const bookingId =
    reducerState?.hotelSearchResult?.bookRoom?.BookResult?.BookingId;
  let bookingStatus =
    reducerState?.hotelSearchResult?.bookRoom?.BookResult?.Status || false;
  const passenger = reducerState?.passengers?.passengersData;
  const hotelBlockDetails =
    reducerState?.hotelSearchResult?.blockRoom?.BlockRoomResult;
  const hotelDetails = hotelBlockDetails?.HotelRoomsDetails;
  const resultIndex = sessionStorage.getItem("ResultIndex");
  const hotelCode = sessionStorage.getItem("HotelCode");
  const [bookingSuccess, setBookingSuccess] = useState(bookingStatus);
  console.log(resultIndex, hotelCode);

  console.log("hotelDetails", hotelDetails);
  console.log("passenger", passenger);

  const checkInDate = moment(hotelDetails?.CheckInDate).format("MMMM DD, YYYY");
  const checkOutDate = moment(hotelDetails?.CheckOutDate).format(
    "MMMM DD, YYYY"
  );
  const cancelDuedate = moment(hotelDetails?.LastCancellationDate).format(
    "MMMM DD, YYYY"
  );
  const handleClickBooking = async () => {
    const payload = {
      ResultIndex: resultIndex,
      HotelCode: hotelCode,
      HotelName: hotelBlockDetails?.HotelName,
      GuestNationality: "IN",
      NoOfRooms: hotelDetails?.length,
      ClientReferenceNo: 0,
      IsVoucherBooking: true,
      HotelRoomsDetails: hotelDetails?.map((item,hotelIndex) => {
        return {
          RoomIndex: item?.RoomIndex,
          RoomTypeCode: item?.RoomTypeCode,
          RoomTypeName: item?.RoomTypeName,
          RatePlanCode: item?.RatePlanCode,
          BedTypeCode: null,
          SmokingPreference:0,
          Supplements: null,
          Price: item?.Price,
          HotelPassenger:passenger.filter((itemPassenger,index)=>{
            if (itemPassenger?.roomIndex == hotelIndex) {
              return itemPassenger;
            }
          }),
        };
      }),

      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId:
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.TraceId,
    };
    console.log(payload)

    const hotelDetailsPayload = {
      BookingId: await bookingId,
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
    };
    // console.log("hotelDetailsPayload", hotelDetailsPayload);
    // Dispatch the hotelBookRoomAction
    //  bookingStatus = true;
    setBookingSuccess(true);
    dispatch(hotelBookRoomAction([payload, hotelDetailsPayload]));
    // dispatch(hotelBookRoomAction(payload));
  };

  return (
    <Box p={3} backgroundColor="#F5F5F5" borderRadius="10px">
      {passenger?.map((name, index) => {
        return (
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Box display="flex">
              <Typography
                sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
              >
                {name?.FirstName} {name?.LastName}
              </Typography>
            </Box>
          </Box>
        );
      })}
      <Divider sx={{ backgroundColor: "gray", marginY: "5px" }} />

      <Box textAlign="center" mt={2}>
        <Button
          className="continue_btn"
          type="submit"
          variant="contained"
          onClick={handleClickBooking}
        >
          Continue
        </Button>
      </Box>
      {/* </form> */}
    </Box>
  );
};

export default Flightdetail;
