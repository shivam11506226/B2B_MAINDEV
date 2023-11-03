import React from "react";
import "./holidaystepper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Flex, Spacer, Text,HStack } from "@chakra-ui/react";
import HolidayForm from "../holidayform/HolidayForm";
import color from "../../../color/color"
import Holidaynavbar from "./Holidaynavbar"
const Holidaystepper = () => {
  return (
    <div>
      {/* <Holidaynavbar/> */}
        <div style={{backgroundColor:"#F8F3F3",marginTop:"20px",width:"90%",margin:"auto",borderRadius:"12px"}}>
      {/* <Box
        w="100%"
        display="flex"
        justifyContent={"space-around"}
        boxShadow="base"
        border="1px solid gray"
      
        flexWrap="wrap"
      >
        <HStack p="5px">
          <Box
            display="flex"
            justifyContent="center"
            w="25px"
            h="25px"
            borderRadius="50%"
            style={{backgroundColor: color.bluedark}}
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
            style={{backgroundColor: color.bluedark}}
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
            style={{backgroundColor: color.bluedark}}
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
            style={{backgroundColor: color.bluedark}}
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
            style={{backgroundColor: color.bluedark}}
            color="white"
          >
            <Text>5</Text>
          </Box>

          <Box fontWeight="normal">Booking Confirmation</Box>
        </HStack>
      </Box> */}

   



      
      <div >
        <HolidayForm />
      </div>
      {/* <div className='flightNavBarContainer'>
  <HotelAllRoute  />
  </div> */}
    </div>
    </div>
  
  );
};

export default Holidaystepper;
