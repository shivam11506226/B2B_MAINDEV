import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import "./busresult.css";
import Grid from "@mui/material/Grid";
import { Typography, Modal } from "@mui/material";
import { Button } from "react-bootstrap";
import Link from "@mui/material/Link";
import Busmoredetail from "./Busmoredetail";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { height } from "@mui/system";

const Busdetail = () => {
  const [modal, setModal] = useState(false);
  const [seatLayoutData, setSeatLayoutData] = useState({});
  const [layout, setLayout] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const busFullData =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult;
  console.log(busFullData);
  const busDataResult =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult
      ?.BusResults;
  console.log("bus res", busDataResult);

  const handleBuslayout = (resultIndex) => {
    console.log("resultIndexxxxxxxxxxxx", resultIndex);
    const requestData = {
      EndUserIp: reducerState?.ip?.ipData,
      ResultIndex: resultIndex,
      TraceId: busFullData?.TraceId,
      TokenId: reducerState?.ip?.tokenData,
    };

    try {
      axios
        .post("http://localhost:8000/travvolt/bus/seatlayout", requestData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setSeatLayoutData(response.data);

          const finalLayout = handleSeatLayoutString(
            response.data?.data?.GetBusSeatLayOutResult?.SeatLayoutDetails
              ?.HTMLLayout
          );
          console.log("finalLayout",finalLayout)
          setLayout((prev)=>finalLayout);
          
        })
    } catch (error) {
      console.error("Try-Catch Error:", error);
    }
  };
  console.log(layout);

  function handleSeatLayoutString(inputString) {
    let outerSeatPointer=0;
    let lowerSeatPointer=0
    const divArray = [];
    const divRegex = /<div[^>]*?>/g;

    // Extract div elements using regex
    const divElements = inputString.match(divRegex);
    console.log("divElementttttttttttttttttt",divElements);
    // Initialize an array to store objects
   

    // Loop through the extracted div elements
    for (const div of divElements) {
      // Use regex to extract attributes
      const idMatch = /id="([^"]*)"/.exec(div);
      const styleMatch = /style="([^"]*)"/.exec(div);

      // Create an object with extracted attributes
      const divObject = {
        id: idMatch ? idMatch[1] : null,
        style: styleMatch ? styleMatch[1] : null,
        
        
      };

      // Check if any of the attributes are null, and skip adding to the array
      if (
        divObject.id !== null &&
        divObject.style !== null &&
        divObject.class !== null &&
        divObject.onclick !== null
      ) {
        // Push the object into the array
        divArray.push(divObject);
      }
    }
    return divArray;
  }

  return (
    <div>
      {busDataResult?.map((item, index) => {
        return (
          <Box className="top_head" p={2} my={2}>
            <Grid container>
              <Grid item lg={2}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    {item?.TravelName}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#006FFF",
                      display: "flex",
                      alignItems: "left",
                      textAlign: "left",
                      paddingRight: "12px",
                    }}
                  >
                    {item?.BusType}
                  </Typography>
                  <Busmoredetail />
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      paddingLeft: "10px",
                    }}
                  >
                    {item?.DepartureTime?.slice(12, 16)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    {item?.ArrivalTime?.slice(12, 16)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {item?.OperatorId}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    {item?.AvailableSeats}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={2}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#FF8900",
                      display: "flex",
                      alignItems: "left",
                      textAlign: "left",
                    }}
                  >
                    ₹ {item?.BusPrice?.BasePrice}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  {/* <form action="/BusPassengerDetail"> */}
                  <Button
                    textAlign="left"
                    onClick={() => handleBuslayout(item?.ResultIndex)}
                  >
                    Book Now
                  </Button>
                  {/* </form> */}
                  <Link
                    sx={{
                      fontSize: "8px",
                      fontWeight: "bold",
                      color: "#FF8900",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      cursor: "pointer",
                      justifyContent: "center",
                    }}
                  >
                    Cancellation policy
                  </Link>
                </Box>
              </Grid>
            </Grid>
            {/* <Modal open={modal}>
              <Box>
               
                  <div>
                    {
                      seatLayoutData?.data?.GetBusSeatLayOutResult
                        ?.SeatLayoutDetails?.HTMLLayout
                    }
                  
                </div>
              </Box>
            </Modal> */}
          </Box>
        );
      })}
    </div>
  );
};

export default Busdetail;
