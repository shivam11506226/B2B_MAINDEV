import Stepper from "../../../Components/Stepper";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Input from "@mui/material/Input";
import "./buspassengerdetail.css";
import BusSaleSummary from "./BusSaleSummary";
import BusStepper from "../../../Components/BusStepper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { busSeatBlockAction } from "../../../Redux/busSearch/busSearchAction";

const BusPassengerDetail = () => {
  const navigate=useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("..................", reducerState);
  const dispatch = useDispatch();
  const busFullData =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult;
  console.log(busFullData);
  const passengerLists = [];
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const seatData = sessionStorage.getItem("seatData");
  const parsedSeatData = JSON.parse(seatData);
  console.log(parsedSeatData);
  const passengerCount = parsedSeatData?.blockedSeatArray.length;
  const resultIndex = parsedSeatData?.resultIndex;
  const boardingPoint = parsedSeatData?.selectedOrigin;
  const droppingPoint = parsedSeatData?.selectedDropPoint;
  console.log(passengerCount);
  const passengerTemplate = {
    LeadPassenger: true,
    PassengerId: 0,
    Title: "Mr.",
    Address: "",
    Age: 22,
    Email: "",
    FirstName: "",
    Gender: 1,
    IdNumber: null,
    IdType: null,
    LastName: "",
    Phoneno: "",
  };
  const handleAccordionChange = (index) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? index : false);
  };
  for (let i = 0; i < passengerCount; i++) {
    passengerLists.push({
      ...passengerTemplate,
      LeadPassenger: i === 0, // Set the first passenger as the lead passenger
    });
  }
  const [passengerList, setPassengerList] = useState(passengerLists);
  const allPassenger = [passengerLists];
  const [passengerData, setPassengerData] = useState(allPassenger.flat());
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedPassenger = [...passengerData];
    updatedPassenger[index] = {
      ...updatedPassenger[index],
      [name]: value,
    };
    // const list = [...passengerData];
    // list[index][name] = value;
    setPassengerData(updatedPassenger);
  };
  console.log(passengerData);
  function handleSeatBlock() {
    const payload = {
      Passenger:
        passengerData?.map((item, index) => {
          return { ...item, Seat: parsedSeatData?.blockedSeatArray[index] };
        }),
      
      EndUserIp: reducerState?.ip?.ipData,
      ResultIndex: JSON.stringify(resultIndex),
      TraceId: busFullData?.TraceId,
      TokenId: reducerState?.ip?.tokenData,
      BoardingPointId: boardingPoint,
      DroppingPointId: droppingPoint,
    };
    console.log(payload);
    dispatch(busSeatBlockAction(payload));
    navigate("/BusReviewBooking");
  }

  return (
    <div className="flightContainer" style={{paddingBottom:"50px"}}>
      <BusStepper />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
          <Box className="Bus_box" style={{  display: "flex", justifyContent: "space-between" }}>
      <Box display="flex">
        <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#252525" }}>
          Travel:
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#000" }} ml={2}>
          Ashok Travels Mandsaur Group
        </Typography>
      </Box>
      <Box display="flex">
        <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#252525", textAlign: "left" }}>
          From:
        </Typography>
        <Typography sx={{ fontSize: "14px",  color: "#000", textAlign: "left" }} ml={2}>
          Delhi
        </Typography>
      </Box>
      <Box display="flex">
        <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#252525" }}>
          Bus Type:
        </Typography>
        <Typography sx={{ fontSize: "14px",  color: "#000" }} ml={2}>
          NON Ac Seater / Sleeper 2+1
        </Typography>
      </Box>
      <Box display="flex">
        <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#252525", textAlign: "left" }}>
          Depart:
        </Typography>
        <Typography sx={{ fontSize: "14px",  color: "#000", textAlign: "left" }} ml={2}>
          11 Jan 2023, 19:00
        </Typography>
      </Box>
    </Box>
            <Box className="Bus_box" my={3}>
             
              <Box>
                {passengerCount > 0 &&
                  Array.from({ length: passengerCount }, (_, index) => (
                    <Box>
                      <div mb={2} key={index} className="services" py={1} style={{border:"border: 0.5px solid #000;",marginBottom:"10px"}}>
                        <Accordion
                          expanded={accordionExpanded === index}
                          onChange={handleAccordionChange(index)}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>Passenger {index + 1}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Box>
                              <Grid container spacing={3} my={1}>
                                <Grid item xs={12} sm={12} md={4}>
                                  <Box>
                                    <div className="form_input">
                                      <label
                                        hotel_form_input
                                        className="form_lable"
                                      >
                                        First name*
                                      </label>
                                      <input
                                        name="FirstName"
                                        placeholder="Enter your name"
                                        value={passengerData.FirstName}
                                        onChange={(e) =>
                                          handleServiceChange(e, index)
                                        }
                                      />
                                    </div>
                                  </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} py={1}>
                                  <Box>
                                    <div className="form_input">
                                      <label
                                        hotel_form_input
                                        className="form_lable"
                                      >
                                        Last name*
                                      </label>
                                      <input
                                        name="LastName"
                                        placeholder="Enter your last name"
                                        value={passengerData.LastName}
                                        onChange={(e) =>
                                          handleServiceChange(e, index)
                                        }
                                      />
                                    </div>
                                  </Box>
                                </Grid>
                                {/* <Grid item xs={12} sm={12} md={4} py={1}>
                                  <Box>
                                    <div className="form_input">
                                      <label
                                        hotel_form_input
                                        className="form_lable"
                                      >
                                        age*
                                      </label>
                                      <input
                                        name="Age"
                                        type="text"
                                        placeholder="Enter Age"
                                        value={passengerData.Age}
                                        onChange={(e) =>
                                          handleServiceChange(e, index)
                                        }
                                      />
                                    </div>
                                  </Box>
                                </Grid> */}
                                <Grid item xs={12} sm={12} md={4}>
                                  <Box>
                                    <div className="form_input">
                                      <label
                                        hotel_form_input
                                        className="form_lable"
                                      >
                                        Email*
                                      </label>
                                      <input
                                        name="Email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={passengerData.Email}
                                        onChange={(e) =>
                                          handleServiceChange(e, index)
                                        }
                                      />
                                    </div>
                                  </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                  <Box>
                                    <div className="form_input">
                                      <label
                                        hotel_form_input
                                        className="form_lable"
                                      >
                                        Address*
                                      </label>
                                      <input
                                        name="Address"
                                        type="text"
                                        placeholder="Enter your address"
                                        value={passengerData.Address}
                                        onChange={(e) =>
                                          handleServiceChange(e, index)
                                        }
                                      />
                                    </div>
                                  </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                  <Box>
                                    <div className="form_input">
                                      <label
                                        hotel_form_input
                                        className="form_lable"
                                      >
                                        Phone*
                                      </label>
                                      <input
                                        name="Phoneno"
                                        type="text"
                                        placeholder="Enter your Phoneno"
                                        value={passengerData.Phoneno}
                                        onChange={(e) =>
                                          handleServiceChange(e, index)
                                        }
                                      />
                                    </div>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </AccordionDetails>
                        </Accordion>

                        {/* Form end */}
                      </div>
                    </Box>
                  ))}
              </Box>
            </Box>
            <Button onClick={handleSeatBlock} style={{backgroundColor:"#21325D",color:"white",marginLeft:"19px",marginTop:"-25px"}}>Book Review</Button>
          </Grid>
          <Grid item xs={3}>
            <BusSaleSummary />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BusPassengerDetail;
