import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import "./hotelbooknow.css";
import { Divider, Grid, Typography } from "@mui/material";
import bed from "../../../Images/bed.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Link from "@mui/material/Link";
import Rating from "../hotelresult/Rating";
import Hoteldetailaccordian from "./Hoteldetailaccordian";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Loader from "../../Loader/Loader";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  hotelBlockRoomAction,
  hotelRoomAction,
  hotelSearchInfoAction,
} from "../../../Redux/Hotel/hotel";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const HotelBooknow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("State Data", reducerState);
  const [loader, setLoader] = useState(false);

  const ResultIndex = sessionStorage.getItem("ResultIndex");
  const HotelCode = sessionStorage.getItem("HotelCode");

  useEffect(() => {
    const payload = {
      ResultIndex: ResultIndex,
      HotelCode: HotelCode,
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId:
        reducerState?.hotelSearchResult?.ticketData?.data?.data
          ?.HotelSearchResult?.TraceId,
    };

    dispatch(hotelSearchInfoAction(payload));
    dispatch(hotelRoomAction(payload));
  }, []);

  useEffect(() => {
    if (reducerState?.hotelSearchResult?.isLoadingHotelRoom == true) {
      setLoader(true);
    }
  }, [reducerState?.hotelSearchResult?.isLoadingHotelRoom]);

  useEffect(() => {
    if (
      reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult
        ?.HotelRoomsDetails.length >= 0
    ) {
      setLoader(false);
    }
  }, [
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult
      ?.HotelRoomsDetails,
  ]);

  useEffect(() => {
    if (reducerState?.hotelSearchResult?.blockRoom?.BlockRoomResult) {
      navigate("Reviewbooking");
    }
  });

  const hotelInfo = reducerState?.hotelSearchResult?.hotelInfo?.HotelInfoResult;
  const hotelRoom =
    reducerState?.hotelSearchResult?.hotelRoom?.GetHotelRoomResult;

  const star = (data) => {
    const stars = [];
    for (let i = 0; i < data; i++) {
      stars.push(<StarIcon key={i} style={{ color: "#FF8900" }} />);
    }
    return stars;
  };
  const hotelContactNo = hotelInfo?.HotelDetails?.HotelContactNo;

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="flightContainer">
          {/* step by step updating part */}

          {/* <Flex
            w="100%"
            h="50"
            mb="20"
            borderRadius="20px"
            m="auto"
            className="shadow-sm p-3 mb-5 bg-white rounded "
          >
            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">1</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Hotel Search
              </Text>
            </Flex>
            <Spacer />
            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">2</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Hotel Result
              </Text>
            </Flex>
            <Spacer />

            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
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
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
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
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">5</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Booking Confirmation
              </Text>
            </Flex>
          </Flex> */}
          {/* <Box className="book_content" py={2}>
            <Box>
              <Box alignItems="center">
                <Typography className="main-txt">
                  {hotelInfo?.HotelDetails?.HotelName}
                </Typography>
              </Box>
              <Box alignItems="center" display="flex" justifyContent="center">
                {star(hotelInfo?.HotelDetails?.StarRating)}
              </Box>
              <Box>
                <Typography className="check-txt">
                  <Typography
                    className="check-txt"
                    color="#006FFF !important"
                    pr={1}
                  >
                    {" "}
                    Check In:{" "}
                  </Typography>{" "}
                  {
                    reducerState?.hotelSearchResult?.ticketData?.data?.data
                      ?.HotelSearchResult?.CheckInDate
                  }
                  <Typography
                    className="check-txt"
                    px={1}
                    color="#006FFF !important"
                  >
                    Check Out:
                  </Typography>{" "}
                  {
                    reducerState?.hotelSearchResult?.ticketData?.data?.data
                      ?.HotelSearchResult?.CheckOutDate
                  }
                </Typography>
              </Box>
              <Box>
                <Typography className="third-txt">
                  {hotelInfo?.HotelDetails?.Address}
                </Typography>
              </Box>
              <Box>
                <Typography className="third-txt">
                  Contact No.:
                  <Typography
                    className="third-txt"
                    color="#006FFF !important"
                    fontWeight="bold"
                    px={1}
                  >
                    {" "}
                    {hotelInfo?.HotelDetails?.HotelContactNo}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box> */}
      <Box
      className="book_content"
      display="flex"
      alignItems="center"
      borderRadius={8}
      bgcolor="#FFF"
      p={10}
      boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.16)"
     
      
    >
      <Typography className="main-txt" color="#21325D" >
        {hotelInfo?.HotelDetails?.HotelName}
      </Typography>
      <Box display="flex" alignItems="center" style={{marginLeft:"5px"}}>
        {star(hotelInfo?.HotelDetails?.StarRating)}
      </Box>

      <Typography
        className="check-txt"
        variant="subtitle1"
        color="textSecondary"
        display="flex"
        alignItems="center"
        
       
      >
        <span
          style={{
            color: "#21325D",
            fontSize: "16px",
            fontFamily: "Montserrat",
            fontWeight: 600,
             whiteSpace: 'nowrap',
             marginLeft:"5px"
          }}
        >
          Check In:
        </span>{" "}
        {
          reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult?.CheckInDate
        }
        <span
          style={{
            color: "#21325D",
            fontSize: "16px",
            fontFamily: "Montserrat",
            fontWeight: 600,
            whiteSpace: 'nowrap',
            marginLeft:"5px"
          }}
        >
          Check Out:
        </span>{" "}
        {
          reducerState?.hotelSearchResult?.ticketData?.data?.data?.HotelSearchResult?.CheckOutDate
        }
      </Typography>
      <Typography className="third-txt" variant="body1" color="textPrimary" marginLeft="10px">
        {hotelInfo?.HotelDetails?.Address}
      </Typography>
      <Typography
        variant="body1"
        color="textPrimary"
        display="flex"
        alignItems="center"
        marginLeft="6px"
     
      >
        Contact No:{" "}
        <span style={{ color: "#006FFF", fontWeight: "bold" }}>
          {hotelContactNo ? hotelContactNo :(
            <span style={{ color: "red", fontWeight: "bold" }}>
              not available hotel contact no
            </span>
          )}
        </span>
      </Typography>
    </Box>


          <Box className="book_content" mt={3}>
            <Box py={1}>
              <Box className="accordian_area">
                <Hoteldetailaccordian />
              </Box>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default HotelBooknow;
