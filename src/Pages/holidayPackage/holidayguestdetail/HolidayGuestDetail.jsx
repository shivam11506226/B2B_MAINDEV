import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Box as MuiBox} from "@mui/material/";
import Modal from "@mui/material/Modal";
import {
  Flex,
  Spacer,
  Text,
  HStack,
  Box,
  
} from "@chakra-ui/react";
import HolidayPackagedetail from "../holidaypackageresult/HolidayPackagedetail";
import HolidatLeftPackage from "../holidaypackageresult/HolidatLeftPackage";
import Holidayguestinfo from "./Holidayguestinfo";
import Holidaysalesummary from "./Holidaysalesummary";
import "./holidayguestdetail.css";
import { styled } from "@mui/material/styles";
import { Box as MuiBox } from "@mui/material";
import Paper from "@mui/material/Paper";
// import  {successGIF} from "../../../Images";

import successGif from "../../../Images/successGif.png"

import Divider from "@mui/material/Divider";
import { Grid, Radio, Typography, Button } from "@mui/material";

const HolidayGuestDetail = () => {
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
  const [childCount, setchildCount] = useState(0);
  const [adultCount, setadultCount] = useState(0);
  const reducerState = useSelector((state) => state);
  const requestSuccess =
    reducerState?.packageBookingRequest?.showSuccessMessage;
  const [showSuccess, setShowsuccess] = useState(requestSuccess);
  

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
        <Modal
          open={showSuccess}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <MuiBox sx={{ ...style, width: 200 }}>
            <img
              src={successGif}
              alt="sucess gif"
              style={{ width: "100%" }}
            />
            <Button>Close Child Modal</Button>
          </MuiBox>
        </Modal>
        <div>
          <Grid container spacing={3}>
            <Grid sm={12} xs={12} md={9} item>
              <MuiBox>
                <Holidayguestinfo />
              </MuiBox>
            </Grid>
            <Grid sm={12} xs={12} md={3} item>
              <MuiBox>
                <Holidaysalesummary
                  childCount={childCount}
                  adultCount={adultCount}
                />
              </MuiBox>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HolidayGuestDetail;
