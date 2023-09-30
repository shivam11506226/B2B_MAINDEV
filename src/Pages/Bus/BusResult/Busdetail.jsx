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

          const finalLayout = handleSeatLayoutStringTwo(
            response.data?.data?.GetBusSeatLayOutResult?.SeatLayoutDetails
              ?.HTMLLayout
          );
          console.log("finalLayout", finalLayout);
          setLayout((prev) => finalLayout);
          setModal((prev) => !prev);
        });
    } catch (error) {
      console.error("Try-Catch Error:", error);
    }
  };
  console.log(layout);
  console.log(seatLayoutData);

  function handleSeatLayoutString(inputString) {
    let outerSeatPointer = 0;
    let lowerSeatPointer = 0;
    const divArray = [];
    const divRegex = /<div[^>]*?>/g;

    // Extract div elements using regex
    const divElements = inputString.match(divRegex);
    console.log("divElementttttttttttttttttt", divElements);
    // Initialize an array to store objects

    // Loop through the extracted div elements
    for (const div of divElements) {
      // Use regex to extract attributes
      const idMatch = /id="([^"]*)"/.exec(div);
      const styleMatch = /style="([^"]*)"/.exec(div);
      const classMatch = /class="([^"]*)"/.exec(div);

      // Create an object with extracted attributes
      const divObject = {
        id: idMatch ? idMatch[1] : null,
        style: styleMatch ? styleMatch[1] : null,
        class: classMatch ? classMatch[1] : null,
      };

      // Check if any of the attributes are null, and skip adding to the array
      if (
        divObject.id !== null &&
        divObject.style !== null &&
        divObject.class !== null
      ) {
        // Push the object into the array
        divArray.push(divObject);
      }
    }
    return divArray;
  }
  function handleSeatLayoutStringTwo(inputString) {
    // Your bus seat layout string
    let busSeatLayoutString = `${inputString}`;

    // Create an empty array to store the seat objects
    let seatObjects = [];

    // Create a temporary div element to parse the string
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = busSeatLayoutString;

    // Select all seat div elements
    let seatDivs = tempDiv.querySelectorAll(
      ".hseat, .bhseat, .vhseat, .bhseat, .bseat, .vseat, .nseat, .rhseat"
    );

    // Iterate through each seat div and differentiate between upper/lower and left/right sides
    seatDivs.forEach((seatDiv) => {
      // Check if the seat div is inside the upper part of the bus
      if (seatDiv.closest(".outerseat")) {
        let side = seatDiv.closest(".busSeatrgt") ? "right" : "left";
        seatObjects.push({
          type: "upper",
          side: side,
          id: seatDiv.id,
          class: seatDiv.getAttribute("class"),
          top: seatDiv.style.top,
          left: seatDiv.style.left,
          onclick: seatDiv.getAttribute("onclick"),
        });
      }
      // Check if the seat div is inside the lower part of the bus
      else if (seatDiv.closest(".outerlowerseat")) {
        let side = seatDiv.closest(".busSeatrgt") ? "right" : "left";
        seatObjects.push({
          type: "lower",
          side: side,
          id: seatDiv.id,
          class: seatDiv.getAttribute("class"),
          top: seatDiv.style.top,
          left: seatDiv.style.left,
          onclick: seatDiv.getAttribute("onclick"),
        });
      }
    });

    // Log the array of seat objects
    // console.log(seatObjects);
    return seatObjects;
  }

  return (
    <Box>
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
          </Box>
        );
      })}
      <Modal
        open={modal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          className="layOutParent"
          sx={{
            position: "absolute",
            height: "600px",
            width: "800px",
            bgcolor: "background.paper",
            alignSelf: "center",
            // transform: "translate(-60%, -60%)",
          }}
        >
          <Box class="outerseat">
            <Box class="busSeatlft">
              <Box class="upper">
                {layout?.map((item) => {
                  if (item?.type == "upper" && item?.side == "left") {
                    const divStyle = {
                      top: item?.top || 0,

                      left: item?.left || 0,
                    };

                    return (
                      <Box
                        class={item?.class}
                        id={item?.id}
                        style={{
                          ...divStyle,
                          width: "40px",
                          height: "40px",
                          display: "block",
                          border: "1px solid red",
                          padding: "2px",
                          position: "absolute",
                        }}
                      ></Box>
                    );
                  }
                })}
              </Box>
            </Box>
            <Box class="busSeatrgt">
              <Box class="busSeat">
                <Box class="seatcontainer clearfix">
                  {layout?.map((item) => {
                    if (item?.type == "upper" && item?.side == "right") {
                      const divStyle = {
                        top: item?.top || 0,

                        left: item?.left || 0,
                      };

                      return (
                        <Box
                          class={item?.class}
                          id={item?.id}
                          style={{
                            ...divStyle,
                            width: "20px",
                            height: "20px",
                            display: "inline-block",
                            border: "1px solid red",
                            position: "absolute",
                          }}
                        ></Box>
                      );
                    }
                  })}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box class="outerlowerseat">
            <Box class="busSeatlft">
              <Box class="lower">
                {layout?.map((item) => {
                  if (item?.type == "lower" && item?.side == "left") {
                    const divStyle = {
                      top: item?.top || 0,

                      left: item?.left || 0,
                    };

                    return (
                      <Box
                        class={item?.class}
                        id={item?.id}
                        style={{
                          ...divStyle,
                          width: "40px",
                          height: "40px",
                          display: "block",
                          border: "1px solid red",
                          padding: "2px",
                          position: "absolute",
                        }}
                      ></Box>
                    );
                  }
                })}
              </Box>
            </Box>
            <Box class="busSeatrgt">
              <Box class="busSeat">
                <Box class="seatcontainer clearfix">
                  {layout?.map((item) => {
                    if (item?.type == "lower" && item?.side == "right") {
                      const divStyle = {
                        top: item?.top || 0,

                        left: item?.left || 0,
                      };

                      return (
                        <Box
                          class={item?.class}
                          id={item?.id}
                          style={{
                            ...divStyle,
                            width: "20px",
                            height: "20px",
                            display: "inline-block",
                            border: "1px solid red",
                            // padding: "2px",
                            position: "absolute",
                          }}
                        ></Box>
                      );
                    }
                  })}
                </Box>
              </Box>
              {/* <Box class="clr"></Box> */}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Busdetail;
