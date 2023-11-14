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
  const getBookingDetails =
    reducerState?.hotelSearchResult?.hotelDetails?.data?.data
      ?.GetBookingDetailResult?.HotelRoomsDetails;
  console.log("getBookingDetails", getBookingDetails);

  const totalAmount = getBookingDetails.reduce((accumulator, item) => {
    return accumulator + item?.Price?.PublishedPriceRoundedOff;
  }, 0);
  console.log("totalAmount", totalAmount);

  const userId = reducerState?.logIn?.loginData?.data?.data?.id;
  const markUpamount =
    reducerState?.userData?.userData?.data?.data?.markup?.hotel;
  const userBalance = reducerState?.userData?.userData?.data?.data?.balance;
  useEffect(() => {
    if (bookingStatus == 1) {
      if (userBalance >= markUpamount + totalAmount) {
        if (userId) {
          const balancePayload = {
            _id: userId,
            amount: markUpamount + totalAmount,
          };

          dispatch(balanceSubtractRequest(balancePayload));
        }
      }
     setTimeout(() => {
        bookingStatus =false
         navigate("/Login");
      }, 2000);
    }
  }, [bookingStatus]);
  return (
    <React.Fragment>
      <div className="flightContainer">
        {/* step by step updating part */}

        <Box>
          <Flex
            w="100%"
            h="50"
            mb="20"
            borderRadius="20px"
            m="auto"
            className="shadow-sm p-3 mb-5  rounded "
          >
            <Flex w="19%" h="90%">
              <Box
                width="25px"
                height="25px"
                borderRadius="50%"
                backgroundColor="#1DBCF0"
                color="white"
                alignItems="center"
              >
                <Text ml="6px">1</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Flight Search
              </Text>
            </Flex>
            <Spacer />
            <Flex w="19%" h="90%">
              <Box
                width="25px"
                height="25px"
                borderRadius="50%"
                backgroundColor="#1DBCF0"
                color="white"
                alignItems="center"
              >
                <Text ml="6px">2</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Flight Result
              </Text>
            </Flex>
            <Spacer />

            <Flex w="19%" h="90%">
              <Box
                width="25px"
                height="25px"
                borderRadius="50%"
                backgroundColor="#1DBCF0"
                color="white"
                alignItems="center"
              >
                <Text ml="6px">3</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Guest Details
              </Text>
            </Flex>
            <Spacer />
            <Flex w="19%" h="90%">
              <Box
                width="25px"
                height="25px"
                borderRadius="50%"
                backgroundColor="#1DBCF0"
                color="white"
                alignItems="center"
              >
                <Text ml="6px">4</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Review Booking
              </Text>
            </Flex>
            <Spacer />
            <Flex w="19%" h="90%">
              <Box
                width="25px"
                height="25px"
                borderRadius="50%"
                backgroundColor="#1DBCF0"
                color="white"
                alignItems="center"
              >
                <Text ml="6px">5</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Booking Confirmation
              </Text>
            </Flex>
          </Flex>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={9}>
                  <Box
                    backgroundColor="#F5F5F5"
                    boxShadow="1px 1px 8px gray"
                    borderRadius="10px"
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
