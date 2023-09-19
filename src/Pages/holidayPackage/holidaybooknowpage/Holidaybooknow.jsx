import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {  Flex, Spacer, Text,HStack,Box } from "@chakra-ui/react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import HolidayPackagedetail from "../holidaypackageresult/HolidayPackagedetail";
import HolidatLeftPackage from "../holidaypackageresult/HolidatLeftPackage";
import { Box as MuiBox, Typography, Button } from "@mui/material";
import Bookingdetailpackage from './Bookingdetailpackage';
import { useSelector } from 'react-redux';

const Holidaybooknow = () => {
  const reducerState = useSelector((state) => state);
  console.log("package Req",reducerState);

  const packageId = reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data?._id

  const userId = reducerState?.logIn?.loginData?.data?.data?.id

  console.log("package Id",packageId);
  console.log("user Id",userId);


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
              bg="#0096FF"
              color="white"
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
              bg="#0096FF"
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
              bg="#0096FF"
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
              bg="#0096FF"
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
              bg="#0096FF"
              color="white"
            >
              <Text>5</Text>
            </Box>

            <Box fontWeight="normal">Booking Confirmation</Box>
          </HStack>
        </Box>
        <div>
          <Grid container spacing={3}>
            <Grid sm={12} xs={12} md={"full"} item>
              <MuiBox>
                <Bookingdetailpackage />
              </MuiBox>
            </Grid>
            <Grid sm={12} xs={12} md={4} item>
              <MuiBox>
                {/* <HolidayPackagedetail /> */}
                {/* <HolidatLeftPackage packageId={packageId} userId={userId} /> */}
              </MuiBox>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Holidaybooknow;
