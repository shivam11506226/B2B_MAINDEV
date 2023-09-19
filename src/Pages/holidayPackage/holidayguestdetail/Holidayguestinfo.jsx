import React, { useState } from "react";
import {
  useNavigate,
} from "react-router-dom";
import {  Typography, Grid, TextField,Modal,Box as MuiBox } from "@mui/material";
import { VStack, Input, Select, HStack, Text,Button,Box} from "@chakra-ui/react";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import EngineeringIcon from "@mui/icons-material/Engineering";
import mainImage from "../../../Images/mainImage.png";
import HolidayRating from "../holidaypackageresult/HolidayRating";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { MdDeleteForever } from "react-icons/md";
import "./holidayguestdetail.css";
import { useDispatch, useSelector } from "react-redux";
import { getPackageBookingAction } from "../../../Redux/getHolidayBooking/packageBookingAction";
import { packageBookingAction } from "../../../Redux/HolidayBookingRequest/actionBooking";
import { deleteFormEntry } from "../../../Redux/HolidayPackageTravellerDetails/HolidayPackageTravellerDetailsAction";
import { addFormEntry } from "../../../Redux/HolidayPackageTravellerDetails/HolidayPackageTravellerDetailsAction";
import { FaPlus } from "react-icons/fa";
import Custombutton from "../../../Custombuttom/Button";
import successGif from "../../../Images/successGif.png";

const Holidayguestinfo = ({ setadultCount, setchildCount }) => {
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
  
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "male",
  });
  const [requestData, setrequestData] = useState({
    email: "",
    countryCode: "",
    mobile: "",
    departureCity:""
  });
   const navigate = useNavigate();
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const requestSuccess =
    reducerState?.packageBookingRequest?.showSuccessMessage;
  const [showSuccess, setShowsuccess] = useState(requestSuccess);
  const onePackage =
    reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data;
  const reducerForm = reducerState?.form?.formEntries;
  console.log("package Req", reducerState);
  console.log("onePackageee", onePackage);
  console.log("reducerForm", reducerForm);

  const packageId =
    reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data?._id;
  const userId = reducerState?.logIn?.loginData?.data?.data?.id;

  const handlePersonChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleRequestChange = (e) => {
    const { name, value } = e.target;
    setrequestData({
      ...requestData,
      [name]: value,
    });
    console.log("======================", requestData);
  };
  const handleSuccessandNavigate=()=>{
    setShowsuccess((prev)=>!prev)
    setTimeout(()=>{
      setShowsuccess((prev) =>prev);
      navigate("/Holidayreviewbooking");
    },2000)
  }

  const handlePersonRemove = (index) => {
    // Dispatch an action to delete the form entry from Redux
    dispatch(deleteFormEntry(index));
  };

  const handlePersonAdd = () => {
    dispatch(addFormEntry(formData));
    setFormData({
      name: "",
      dob: "",
      gender: "",
    });
  };

  const handleBookingPackage = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const payload = {
      pakageid: packageId,
      userId: userId,
      travellers: reducerForm.slice(1),
      email: requestData.email,
      fullName: "jhhkjds",
      contactNumber: {
        contryCode: requestData.countryCode,
        phone: requestData.mobile,
      },

      sale_summary: {
        price:
          (reducerForm.length - 1) * onePackage?.pakage_amount.amount * 0.05 +
          (reducerForm.length - 1) * onePackage?.pakage_amount.amount,
        fare_breakup:
          (reducerForm.length - 1) * onePackage?.pakage_amount.amount * 0.05 +
          (reducerForm.length - 1) * onePackage?.pakage_amount.amount,
        total_basic_cost:
          (reducerForm.length - 1) * onePackage?.pakage_amount.amount,
        coupon_discount: "-7382",
        fee_taxes:
          (reducerForm.length - 1) * onePackage?.pakage_amount.amount * 0.05,
        gst: (reducerForm.length - 1) * onePackage?.pakage_amount.amount * 0.05,
        total_gst:
          (reducerForm.length - 1) * onePackage?.pakage_amount.amount * 0.05,
      },
      departureCity: requestData.departureCity,
      adults: "2",
      child: "0",
    };

    console.log("payload", payload);
    const holidayData = new FormData();
    holidayData.append("data", JSON.stringify(payload));
    dispatch(packageBookingAction(payload));
    handleSuccessandNavigate();
  };

  return (
    <Box>
      <form action="/Holidayreviewbooking">
        <Box className="main-head" marginTop={2}>
          <Typography className="holiday_txt">
            {onePackage?.pakage_title}
          </Typography>
          {/* <Typography className="holiday_txt_b">
            Feb 28, 2023
            <Typography fontSize="10px" color="#FF8900" px={1}>
              4D/3N
            </Typography>
            Mar 3, 2023 / From New Delhi
          </Typography> */}
        </Box>
        <Box className="main-head" mt={2}>
          <Typography className="holiday_txt">Traveller Details</Typography>
          <Typography className="holiday_txt_b" py={1}>
            {reducerForm.length - 1} Travellers
            {/* <Typography
              fontSize="14px"
              fontWeight="bold"
              color="#006FFF"
              px={1}
            >
              {adultCount} Adults || {childCount} childrens
            </Typography> */}
          </Typography>

          <Typography className="Top_txt" marginBottom={1}>
            Add Guests
          </Typography>
          <HStack spacing={4}>
            <Box>
              <Input
                type="text"
                name="name"
                variant="filled"
                value={formData.name}
                onChange={handlePersonChange}
                placeholder="Enter Name"
              />
            </Box>
            <Box>
              <Input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handlePersonChange}
                placeholder="Date of Birth"
              />
            </Box>
            <Box>
              <Select
                name="gender"
                value={formData.gender}
                variant="Filled"
                onChange={handlePersonChange}
                placeholder="Select Gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </Box>
            <Button
              onClick={handlePersonAdd}
              colorScheme="teal"
              size="xs"
              variant="outline 3"
              borderRadius={4}
              paddingTop={3}
              paddingRight={5}
              paddingBottom={3}
              paddingLeft={5}
            >
              Add Guest
            </Button>
          </HStack>
          {reducerForm.slice(1).map((singleService, index) => {
            return (
              <>
                <Box
                  key={index}
                  marginBottom={2}
                  display="flex"
                  alignItems="center"
                  width="100%"
                  justifyContent="space-between"
                >
                  <Text>{singleService.name}</Text>
                  <Text>{singleService.dob}</Text>
                  <Text>{singleService.gender}</Text>

                  <MdDeleteForever
                    onClick={() => handlePersonRemove(index)}
                    cursor="pointer"
                    style={{
                      alignSelf: "start",
                      marginTop: "5px",
                    }}
                  />
                </Box>
              </>
            );
          })}

          <Box py={1}>
            <Typography fontSize="16px" fontWeight="bold" color="#006FFF">
              Please Enter Contact Details
            </Typography>
            <HStack spacing={4}>
              <Box>
                <Input
                  type="email"
                  name="email"
                  value={requestData.email}
                  onChange={handleRequestChange}
                  placeholder="email"
                />
              </Box>
              <Box>
                <Input
                  name="mobile"
                  type="text"
                  value={requestData.mobile}
                  onChange={handleRequestChange}
                  placeholder="Enter Number"
                ></Input>
              </Box>
              <Select
                name="countryCode"
                value={requestData.countryCode}
                onChange={handleRequestChange}
                placeholder="Select code"
              >
                <option value="+91">+91</option>
                <option value="+511">+511</option>
                <option value="other">Other</option>
              </Select>
              <Box>
                <Input
                  name="departureCity"
                  type="text"
                  value={requestData.departureCity}
                  onChange={handleRequestChange}
                  placeholder="Enter departure city"
                ></Input>
              </Box>
            </HStack>
          </Box>
        </Box>

        {/* <Box className="main-head" my={2}>
          <Typography fontSize="16px" color="black" fontWeight="bold" px={1}>
            Special Requests
          </Typography>
          <Box my={1}>
            <input
              className="input_decor"
              type="text"
              name="phone_number"
              placeholder="Mobile No. *"
              style={{
                textDecoration: "none",
                border: "1px solid #70707057",
                borderRadius: "20px",
                width: "100%",
              }}
            />
          </Box>
        </Box> */}

        <Box className="main-head" my={2}>
          <Typography className="holiday_txt" textDecoration="underline">
            Package Itinerary & Inclusions
          </Typography>
          {/* <Typography className="holiday_txt_b" py={1}>
            Itinerary
            <Typography
              fontSize="14px"
              fontWeight="bold"
              color="#006FFF"
              px={1}
            >
              / 2 Flight / 1 Hotel / 2 Transfers
            </Typography>
          </Typography> */}
          {/* <Box border="1px solid red">
            <Box display="flex" justifyContent="space-between">
              <Typography
                sx={{
                  color: "#FF8900",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                Day 1
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                23rd Feb, 2023
              </Typography>
            </Box>

            <Box>
              <Grid container py={2}>
                <Grid lg={6}>
                  <Typography className="holiday_txt_b" py={1}>
                    Onward Flight
                  </Typography>
                  <Box display="flex" justifyContent="space-around">
                    <Box>
                      <Typography className="h_time">04:55</Typography>
                      <Typography className="h_address">New Delhi</Typography>
                      <Typography className="h_address">Tue, 29 Feb</Typography>
                    </Box>
                    <Box>
                      <FlightTakeoffIcon sx={{ color: "#25B1CA" }} />
                    </Box>
                    <Box display="flex" justifyContent="space-around">
                      <Box>
                        <Typography className="r_address">09h 15m</Typography>
                        <Typography className="r_address">
                          1 Stop via Jaipur
                        </Typography>
                      </Box>
                    </Box>

                    <Box>
                      <FlightLandIcon sx={{ color: "#25B1CA" }} />
                    </Box>
                    <Box>
                      <Typography className="p_time">04:55</Typography>
                      <Typography className="p_address">New Delhi</Typography>
                      <Typography className="p_address">Tue, 29 Feb</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid lg={6}></Grid>
              </Grid>
            </Box>

            <Box>
              <Typography className="holiday_txt_b">Transfer</Typography>
              <Box
                sx={{ padding: "10px", display: "flex", alignItems: "center" }}
                ml={2}
              >
                <EngineeringIcon />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#252525",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Transfer:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FF8900",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Airport to hotel in Goa | 1 hrs
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="holiday_txt_b">Hotel Stay</Typography>

              <Grid container p={2}>
                <Grid item lg={6}>
                  <Box display="flex" ml={2}>
                    <Box sx={{ width: "20%", height: "30%" }}>
                      <img src={mainImage} className="flight_img" />
                    </Box>
                    <Box px={2}>
                      <Typography
                        color="#252525"
                        fontSize="12px"
                        fontWeight="bold"
                      >
                        WelcomHotel Dwarka - Member ITC Hotel Group
                      </Typography>
                      <HolidayRating />
                      <Typography
                        color="#252525"
                        fontSize="10px"
                        fontWeight="bold"
                      >
                        Check in - Tue, 28 Feb 2023 Check out - Fri, 3 Mar 2023
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box ml={2}>
                    <Typography
                      color="#252525"
                      fontSize="14px"
                      fontWeight="bold"
                    >
                      Room Type Deluxe Room Special x 1
                    </Typography>
                    <Typography
                      color="#252525"
                      fontSize="10px"
                      fontWeight="bold"
                    >
                      Room Type Deluxe Room Special x 1
                    </Typography>
                    <Box display="flex" textAlign="center">
                      <FileDownloadDoneIcon style={{ color: "#26A202" }} />
                      <Typography
                        color="#252525"
                        fontSize="14px"
                        fontWeight="bold"
                        ml={1}
                      >
                        Breakfast Included
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography
                sx={{
                  color: "#FF8900",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                Day 2
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                24rd Feb, 2023
              </Typography>
            </Box>
            <Box>
              <Typography className="holiday_txt_b">Day Meals</Typography>
              <Box
                sx={{ padding: "10px", display: "flex", alignItems: "center" }}
                ml={2}
              >
                <FastfoodIcon />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#252525",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Breakfast:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FF8900",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Included at Hotel
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  paddingX: "10px",
                  fontSize: "12px",
                  color: "#252525",
                  fontWeight: "bold",
                }}
                ml={2}
              >
                Day at Leisure
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography
                sx={{
                  color: "#FF8900",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                Day 3
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                24rd Feb, 2023
              </Typography>
            </Box>
            <Box>
              <Typography className="holiday_txt_b">Day Meals</Typography>
              <Box
                sx={{ padding: "10px", display: "flex", alignItems: "center" }}
                ml={2}
              >
                <FastfoodIcon />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#252525",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Breakfast:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FF8900",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Included at Hotel
                </Typography>
              </Box>
              <Typography
                sx={{
                  paddingX: "10px",
                  fontSize: "12px",
                  color: "#252525",
                  fontWeight: "bold",
                }}
                ml={1}
              >
                Checkout from Hotel in Goa
              </Typography>

              <Box
                sx={{ padding: "10px", display: "flex", alignItems: "center" }}
                ml={2}
              >
                <EngineeringIcon />

                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FF8900",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Included at Hotel | 1 hrs
                </Typography>
              </Box>
              <Box>
                <Grid container py={2}>
                  <Grid lg={6}>
                    <Typography className="holiday_txt_b" py={1}>
                      Return Flight
                    </Typography>
                    <Box display="flex" justifyContent="space-around">
                      <Box>
                        <Typography className="h_time">04:55</Typography>
                        <Typography className="h_address">New Delhi</Typography>
                        <Typography className="h_address">
                          Tue, 29 Feb
                        </Typography>
                      </Box>
                      <Box>
                        <FlightTakeoffIcon sx={{ color: "#25B1CA" }} />
                      </Box>
                      <Box display="flex" justifyContent="space-around">
                        <Box>
                          <Typography className="r_address">09h 15m</Typography>
                          <Typography className="r_address">
                            1 Stop via Jaipur
                          </Typography>
                        </Box>
                      </Box>

                      <Box>
                        <FlightLandIcon sx={{ color: "#25B1CA" }} />
                      </Box>
                      <Box>
                        <Typography className="p_time">04:55</Typography>
                        <Typography className="p_address">New Delhi</Typography>
                        <Typography className="p_address">
                          Tue, 29 Feb
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid lg={6}></Grid>
                </Grid>
              </Box>
              <Box>
                <Typography className="holiday_txt_b" py={1}>
                  Package Exclusions
                </Typography>
                <ul>
                  <li>Expenses of personal nature</li>
                  <li>Mentioned cost is not valid between 6 pm and 8 am</li>
                  <li>Anything not mentioned under inclusions</li>
                  <li>
                    Package price does not include Gala dinner charges
                    applicable on Christmas and New Year's Eve
                  </li>
                </ul>
              </Box>
            </Box>
          </Box> */}
          {onePackage?.detailed_ltinerary?.map((item, index) => {
            return (
              <>
                <Box key={index}>
                  <Typography sx={{ color: "orange", fontWeight: "bold" }}>
                    Day{index + 1}
                  </Typography>
                  <Typography>{item}</Typography>
                </Box>
              </>
            );
          })}
        </Box>
        <Box className="main-head" mt={2}>
          <Typography className="holiday_txt" textDecoration="underline">
            Cancellation & Date Change
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#666666", fontWeight: "bold" }}
          >
            Package Cancellation Policy
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
          >
            Cancellation & Charges:
          </Typography>
          <Box display="flex" justifyContent="space-between" my={1}>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                Cancellation Time
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#006FFF",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                Till 03 Feb 23
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#006FFF",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                After 03 Feb 23
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                Cancellation Charges
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#FF8900",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                ₹2,000 Cancellation Fee
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#FF8900",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                Non Refundable
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#666666",
              fontWeight: "300",
              textAlign: "left",
            }}
          >
            Note: These are non-refundable amounts as per the current components
            attached. In the case of component change/modifications, the policy
            will change accordingly.
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#666666", fontWeight: "bold" }}
          >
            Package Cancellation Policy
          </Typography>
          <Box display="flex" justifyContent="space-between" my={1}>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                Date Change Possible
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#006FFF",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                Till 03 Feb 23
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#006FFF",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                After 03 Feb 23
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                Date Change
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#FF8900",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                ₹0 Date Change Fee
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#FF8900",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                Date cannot be changed
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#666666",
              fontWeight: "300",
              textAlign: "left",
            }}
          >
            Note: These are non-refundable amounts as per the current components
            attached. In the case of component change/modifications, the policy
            will change accordingly. Date Change fees don't include any fare
            change in the components on the new date. Fare difference as
            applicable will be charged separately. Date Change will depend on
            the availability of the components on the new requested date.
          </Typography>
        </Box>
        {/* <form action="/Holidayreviewbooking" > */}
        <Box
          display="flex"
          justifyContent="center"
          width={"100%"}
          marginTop={12}
        >
          <Custombutton
            title={"Proceed to Booking Review"}
            type={"submit"}
            onClick={handleBookingPackage}
          />
        </Box>
        {/* </form> */}
      </form>
      <Modal
        open={showSuccess}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <MuiBox sx={{ ...style, width: 350 }}>
          <img src={successGif} alt="sucess gif" style={{ width: "100%" }} />
          <Typography textAlign="center" paddingLeft={3} paddingTop={2} fontWeight="bold">Thanku!!Your booking is done</Typography>
         
        </MuiBox>
      </Modal>
    </Box>
  );
};

export default Holidayguestinfo;
