import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Flex, Spacer, Text, HStack, Box } from "@chakra-ui/react";
import HolidayPackagedetail from "../holidaypackageresult/HolidayPackagedetail";
import HolidatLeftPackage from "../holidaypackageresult/HolidatLeftPackage";
import Holidayreviewbookingdetail from "./Holidayreviewbookingdetail";
import Holidayreviewsalesummary from "./Holidayreviewsalesummary";
import { styled } from "@mui/material/styles";
import { Box as MuiBox } from "@mui/material";
import Paper from "@mui/material/Paper";

import Divider from "@mui/material/Divider";
import { Grid, Radio, Typography, Button } from "@mui/material";
// import {Holidaysalesummary} from "../holidayguestdetail/Holidaysalesummary"

const HolidayGuestDetail = () => {
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
            <Grid sm={12} xs={12} md={9} item>
              <MuiBox>
                <Holidayreviewbookingdetail />
              </MuiBox>
            </Grid>
            <Grid sm={12} xs={12} md={3} item>
              <MuiBox>
                <Holidayreviewsalesummary />
              </MuiBox>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HolidayGuestDetail;
