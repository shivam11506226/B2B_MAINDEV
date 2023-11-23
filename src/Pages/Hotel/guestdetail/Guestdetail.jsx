import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Typography, Modal } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { Flex, Spacer, Text } from "@chakra-ui/react";
// import Popularfilter from '../flightresult/Popularfilter';
import Sailsummary from "./Sailsummary";
import { useDispatch, useSelector, useReducer } from "react-redux";
import Hoteldescription from "./Hoteldescription";
import successGif from "../../../Images/successGif.png";
import { balanceSubtractRequest } from "../../../Redux/Auth/balaceSubtract/actionBalnceSubtract";

import "./guestdetail.css";
const Guestdetail = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #89CFF0",
    boxShadow: 24,
    borderRadius: 8,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let bookingStatus =
    reducerState?.hotelSearchResult?.bookRoom?.BookResult?.Status || false;
  // const getBookingDetails =
  //   reducerState?.hotelSearchResult?.hotelDetails?.data?.data
  //     ?.GetBookingDetailResult?.HotelRoomsDetails;
  // console.log("getBookingDetails", getBookingDetails);

  const getBookingDetails = reducerState?.hotelSearchResult;
  // console.log("get booking details", getBookingDetails)

  // const totalAmount = getBookingDetails?.reduce((accumulator, item) => {
  //   return accumulator + item?.Price?.PublishedPriceRoundedOff;
  // }, 0);
  // console.log("totalAmount", totalAmount);



  const userId = reducerState?.logIn?.loginData?.data?.data?.id;
  const markUpamount =
    reducerState?.userData?.userData?.data?.data?.markup?.hotel;
  const userBalance = reducerState?.userData?.userData?.data?.data?.balance;

  // useEffect(() => {
  //   if (bookingStatus == 1) {
  //     if (userBalance >= markUpamount + totalAmount) {
  //       if (userId) {
  //         const balancePayload = {
  //           _id: userId,
  //           amount: markUpamount + totalAmount,
  //         };

  //         dispatch(balanceSubtractRequest(balancePayload));
  //       }
  //     }
  //     setTimeout(() => {
  //       bookingStatus = false
  //       navigate("/Login");
  //     }, 2000);
  //   }
  // }, [bookingStatus]);
  return (
    <React.Fragment>
      <div className="flightContainer">
        {/* step by step updating part */}

        <Box>

          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={9}>
                  <Box
                  >
                    <Hoteldescription />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Sailsummary />
                </Grid>
              </Grid>
            </Box>
          </div>
          <Modal
            open={bookingStatus == 1 ? true : false}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style, width: 350 }}>
              <img
                src={successGif}
                alt="sucess gif"
                style={{ width: "100%" }}
              />
              <Typography
                textAlign="center"
                paddingLeft={3}
                paddingTop={2}
                fontWeight="bold"
              >
                Thanku!!Your booking is done..
              </Typography>
            </Box>
          </Modal>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Guestdetail;
