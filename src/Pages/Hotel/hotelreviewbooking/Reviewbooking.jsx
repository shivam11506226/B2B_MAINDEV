import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Flex, Spacer, Text } from "@chakra-ui/react";
// import Popularfilter from '../flightresult/Popularfilter';
import Sailsummary from "../guestdetail/Sailsummary";
import Reviewdescription from "./Reviewdescription";
import "./review.css";
import { useSelector } from "react-redux";




const Guestdetail = () => {
  const reducerState = useSelector((state) => state);
  const result =
    reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult;

  let totalAdults = 0;
  let totalChildren = 0;

  result?.RoomGuests?.forEach((room) => {
    totalAdults += room?.NoOfAdults || 0;
    totalChildren += room?.NoOfChild || 0;
  });

  const storedFormData = JSON.parse(sessionStorage.getItem('hotelFormData'));
  const data = storedFormData.dynamicFormData[0];
  console.log(storedFormData)
  return (
    <React.Fragment>
      <div className="flightContainer">
        {/* step by step updating part */}

        <Box>
          {/* <Flex
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
          </Flex> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                <div className="hotelBookNowOuter">
                  <div className="hotelBookNowHeader">
                    <p>Your Search criteria:{storedFormData?.city},{' '} India</p>
                    <p>Duration: {storedFormData?.night}{' '}Nights</p>
                    <p>{storedFormData?.checkIn}- {storedFormData?.checkOut}</p>
                    <p>Guest(s): {totalAdults}Adult(s) </p>
                    <p>Room(s): {storedFormData.room}</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={9}>
                  <Reviewdescription />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Sailsummary />
                </Grid>
              </Grid>
            </Box>
          </div> */}

          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-lg-9 order-lg-1 order-md-2 order-sm-2">
                <Reviewdescription />
              </div>
              <div className="col-lg-3 order-lg-2 order-md-1 order-sm-1">
                <Sailsummary />
                {/* <Guestdetail /> */}

              </div>
            </div>
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Guestdetail;
