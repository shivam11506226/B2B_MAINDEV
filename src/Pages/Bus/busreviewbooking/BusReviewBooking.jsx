import React,{useState} from 'react'
import Stepper from '../../../Components/Stepper';
import {Box,Grid, Typography,Link,Button} from '@mui/material';
import BusSaleSummary from '../busPassengerDetail/BusSaleSummary';
import Buscancellation from '../BusResult/Buscancellation';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { busBookAction } from '../../../Redux/busSearch/busSearchAction';
import { useEffect } from 'react';
const BusReviewBooking = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const reducerState = useSelector((state) => state);
    const isNavigate = reducerState?.getBusResult?.isLoadingBook ||true;
    console.log("======================", reducerState);
    const busBlockData =
      reducerState?.getBusResult?.busBlock?.data?.data?.BlockResult;
    console.log("************************",busBlockData);
    const seatData = sessionStorage.getItem("seatData");
    const parsedSeatData = JSON.parse(seatData);
    const resultIndex = parsedSeatData?.resultIndex;
    const boardingPoint = parsedSeatData?.selectedOrigin;
    const droppingPoint = parsedSeatData?.selectedDropPoint;
    
    const handleBookBus = async () => {
      try {
        const payload = {
          EndUserIp: reducerState?.ip?.ipData,
          ResultIndex: JSON.stringify(resultIndex),
          TraceId: busBlockData?.TraceId,
          TokenId: reducerState?.ip?.tokenData,
          BoardingPointId: boardingPoint,
          DroppingPointId: droppingPoint,
          Passenger: busBlockData?.Passenger,
        };

        // Dispatch the busBookAction asynchronously
         dispatch(busBookAction(payload));

        // If dispatch is successful, navigate to the specified route
        navigate("/Busbookingconfirmation");

        // Log the reducerState
        console.log(reducerState);
      } catch (error) {
        // Handle any errors that occurred during dispatching the action
        console.error("Error occurred while booking bus:", error);
      }
    };


    return (
      <div className="flightContainer">
        <Box>
          <Stepper />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Box className="Bus_box">
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#252525",
                    }}
                  >
                    Please Review Your Booking
                  </Typography>
                  <Link sx={{ fontSize: "12px", fontWeight: "bold" }}>
                    Change Details
                  </Link>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box mt={2} textAlign="left">
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Travel:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
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
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        From:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        Delhi
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Departure:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        11 Jan, 2023 , 19:00
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Seat No.(s):
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        1
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Boarding Point:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        Others
                      </Typography>
                    </Box>
                  </Box>
                  <Box mt={2} textAlign="left">
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Bus Type:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
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
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        To:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        Delhi
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Arrival:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        12 Jan, 2023 , 13:00
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        No. of Pax:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        1
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Dropping Point:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        Borivali West
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="Bus_box" mt={2}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#252525",
                    }}
                  >
                    Passenger Details
                  </Typography>
                  <Typography
                    mt={2}
                    sx={{ fontSize: "12px", fontWeight: "bold" }}
                  >
                    Passenger 1
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box textAlign="left">
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Name:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        Shivsm singh
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Phone No:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        +91 89782 57788
                      </Typography>
                    </Box>
                  </Box>

                  <Box mt={2} textAlign="left">
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Gender:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        Male
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Email:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        Sdfser@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box mt={2} textAlign="left">
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Age:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        40
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#666666",
                        }}
                      >
                        Address:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#006FFF",
                        }}
                        ml={2}
                      >
                        Chor Bazar ke Piche Adher Gali Kali Pahdai ke Uper
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="Bus_box" mt={2}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#252525",
                    }}
                  >
                    Cancellation Policy:
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Buscancellation />
                </Box>
              </Box>
              <Box className="Bus_box" mt={2}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#252525",
                    }}
                  >
                    Term & Conditions:
                  </Typography>
                </Box>
                <Box display="flex">
                  <ReadMoreIcon />
                  <Typography
                    ml={2}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                    }}
                  >
                    I have reviewed and agreed on the rates and commission
                    offered for this booking.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <BusSaleSummary />
            </Grid>
          </Grid>
        </Box>
        {/* <form action="/Busbookingconfirmation"> */}
          <Box py={3} textAlign="center">
            <Button variant="contained" type="submit" onClick={handleBookBus}>
              Book Ticket
            </Button>
          </Box>
        {/* </form> */}
      </div>
    );
}

export default BusReviewBooking
