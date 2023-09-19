import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Flex, Spacer, Text,HStack } from "@chakra-ui/react";

// import HotelNavBar from './HotelNavbar/HotelNavBar';
// import OneWay from './HotelForm/OneWay';
// import { NavLink, Routes,Route } from 'react-router-dom';
// import HotelAllRoute from './HotelAllRoute/HotelAllRought';
import Hotelresult from "../hotelresult/Hotelresult";

const HotelSearch = () => {
  return (
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
            Hotel Search
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

          <Box fontWeight="normal">Hotel Result</Box>
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
        <Hotelresult />
      </div>
      {/* <div className='flightNavBarContainer'>
  <HotelAllRoute  />
  </div> */}
    </div>
  );
};

export default HotelSearch;
