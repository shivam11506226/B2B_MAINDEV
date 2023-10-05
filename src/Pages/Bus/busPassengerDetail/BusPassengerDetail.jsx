import Stepper from "../../../Components/Stepper";
import React,{useState} from "react";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Input from "@mui/material/Input";
import "./buspassengerdetail.css";
import BusSaleSummary from "./BusSaleSummary";
import BusStepper from "../../../Components/BusStepper";

const BusPassengerDetail = () => {
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const seatData = sessionStorage.getItem("seatData");
  const parsedSeatData=JSON.parse(seatData)
  console.log(parsedSeatData);
  const passengerCount = parsedSeatData?.blockedSeatArray.length
  console.log(passengerCount)
  const passengerTemplate = {
    LeadPassenger: true,
    PassengerId: 0,
    Title: "mr",
    Address: "",
    Age: parseInt(),
    Email: "",
    FirstName: "",
    Gender:"",
    IdNumber:null,
    IdType:null,
    LastName: "",
    Phoneno: "",
  };
  const handleAccordionChange = (index) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? index : false);
  };

  return (
    <div className="flightContainer">
      <BusStepper />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Box className="Bus_box">
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                    }}
                  >
                    Travel:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#006FFF",
                    }}
                    ml={2}
                  >
                    Ashok Travels Mandsaur Group
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                      textAlign: "left",
                    }}
                  >
                    From:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#006FFF",
                      textAlign: "left",
                    }}
                    ml={2}
                  >
                    Delhi
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                    }}
                  >
                    Travel:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#006FFF",
                    }}
                    ml={2}
                  >
                    Ashok Travels Mandsaur Group
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                    }}
                  >
                    Bus Type:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#006FFF",
                    }}
                    ml={2}
                  >
                    NON Ac Seater / Sleeper 2+1
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                      textAlign: "left",
                    }}
                  >
                    Depart:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#006FFF",
                      textAlign: "left",
                    }}
                    ml={2}
                  >
                    11 Jan 2023, 19:00
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                    }}
                  >
                    Bus Type:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#006FFF",
                    }}
                    ml={2}
                  >
                    NON Ac Seater / Sleeper 2+1
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="Bus_box" my={3}>
              <Box
                className="Bussmal_box"
                display="flex"
                justifyContent="space-between"
                p={1}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#252525",
                  }}
                >
                  Enter Passenger Details
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#FF8900",
                  }}
                >
                  Enter Passenger Details
                </Typography>
              </Box>
              <Box padding="15px">
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                    }}
                  >
                    Passanger 1
                  </Typography>
                  <Box mt={2}>
                    <Box>
                      <Box mt={2} display="flex">
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#666666",
                            fontWeight: "bold",
                            
                            cursor: "pointer",
                          }}
                        >
                          Name:-*
                        </Typography>
                        <Box className="input_area" ml={2}>
                          <FormControl>
                            <NativeSelect
                              defaultValue={0}
                              inputProps={{
                                name: "price",
                              }}
                            >
                              <option value={10}>Mr.</option>
                              <option value={20}>Miss.</option>
                              <option value={30}>Mrs.</option>
                            </NativeSelect>
                          </FormControl>
                        </Box>
                        <Box className="input_area" ml={1}>
                          <Input
                            type="text"
                            placeholder="Traveller First Name"
                            border="none"
                            name="traveller first name"
                          ></Input>
                        </Box>
                        <Box className="input_area" ml={1}>
                          <Input
                            type="text"
                            placeholder="Traveller Last Name"
                            border="none"
                            name="traveller last  name"
                          ></Input>
                        </Box>
                      </Box>
                      <Box mt={2} display="flex">
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#666666",
                            fontWeight: "bold",
                            
                            cursor: "pointer",
                          }}
                        >
                          Age:-*
                        </Typography>
                        <Box className="input_area" mx={2}>
                         <input type="number" placeholder="age"/>
                        </Box>
                        <Box className="input_area" mx={1}>
                          <FormControl>
                            <NativeSelect
                              defaultValue={0}
                              inputProps={{
                                name: "price",
                              }}
                            >
                              <option value={10}>Gender: *</option>
                              <option value={20}>Female</option>
                              <option value={30}>Male</option>
                            </NativeSelect>
                          </FormControl>
                        </Box>
                      </Box>
                      <Box mt={2} display="flex">
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#666666",
                            fontWeight: "bold",
                            
                            cursor: "pointer",
                          }}
                        >
                          Mobile No.*
                        </Typography>
                        <Box className="input_area" mx={1}>
                          <Input
                            type="number"
                            placeholder=" 91+ 8724563587"
                            border="none"
                            name="number"
                          ></Input>
                        </Box>

                        <Box className="input_area" mx={1}>
                          <Input
                            type="email"
                            placeholder=" travvolt@gmail.com"
                            border="none"
                            name="email"
                          ></Input>
                        </Box>
                      </Box>
                      <Box mt={2} display="flex">
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#666666",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                        >
                          Address.*
                        </Typography>
                        <Input type="text"></Input>
                      </Box>
                      <form action="/BusReviewBooking">
                        <Box
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Button
                            variant="contained"
                            type="submit"
                            style={{
                              backgroundColor: "#006FFF",
                              borderRadius: "10px",
                            }}
                          >
                            Proceed to Booking Review
                          </Button>
                        </Box>
                      </form>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
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
