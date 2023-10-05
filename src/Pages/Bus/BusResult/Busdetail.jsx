import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import "./busresult.css";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Modal,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import { Button } from "react-bootstrap";
import Link from "@mui/material/Link";
import Busmoredetail from "./Busmoredetail";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { height } from "@mui/system";
// import { CheckBox } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

const Busdetail = () => {
  const name = [];
  const [blockedSeatArray, setBlockedSeatArray] = useState([]);
  const upperArray = [];
  const lowerArray = [];
   const [selectedOrigin, setSelectedOrigin] = useState("");
   const[selectedDropPoint,setSelectedDropPoint]=useState("");
  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);
  const [flatArray, setFlatArray] = useState([]);
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
          console.log(
            "finalLayout",
            response.data?.data?.GetBusSeatLayOutResult?.SeatLayoutDetails
              ?.HTMLLayout
          );

          setLayout((prev) => finalLayout);
          const SeatDetailsArray =
            response.data?.data?.GetBusSeatLayOutResult?.SeatLayoutDetails
              ?.SeatLayout?.SeatDetails;
          console.log("seatDetailssAraayyy", SeatDetailsArray);

          let singleArray = SeatDetailsArray.reduce(
            (acc, currentArray) => [...acc, ...currentArray],
            []
          );
          setFlatArray(singleArray);
          busDataResult.map((item, index) => {
            if (item?.ResultIndex == resultIndex) {
              setOrigin(item?.BoardingPointsDetails);
              setDestination(item?.DroppingPointsDetails);
            }
          });

          // console.log("flattArayyyyyy",flatArray)
          setModal((prev) => !prev);
        });
    } catch (error) {
      console.error("Try-Catch Error:", error);
    }
  };
  console.log(layout);
  console.log(seatLayoutData);
  console.log("flattArayyyyyy", flatArray);
  console.log("originnnnnnnnn", origin);
  flatArray.forEach((obj) => {
    if (obj?.IsUpper === true) {
      upperArray.push(obj);
    } else if (obj?.IsUpper === false) {
      lowerArray.push(obj);
    }
  });

  console.log(upperArray, lowerArray);
  function handleSeatLayoutStringTwo(inputString) {
    // Your bus seat layout string
    let busSeatLayoutString = `${inputString}`;

    // Create an empty array to store the seat objects
    let seatObjects = [];

    // Create a temporary div element to parse the string
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = busSeatLayoutString;
    console.log("temppdivvvvvvvvvv", tempDiv);
    // Select all seat div elements
    let seatDivs = tempDiv.querySelectorAll(
      ".hseat, .bhseat, .vhseat, .bhseat, .bseat, .vseat, .nseat, .rhseat"
    );
    console.log(seatDivs);

    // Iterate through each seat div and differentiate between upper/lower and left/right sides
    seatDivs.forEach((seatDiv) => {
      // Check if the seat div is inside the upper part of the bus
      console.log(seatDiv.closest(".outerseat"), "............hfhgfhgj");

      if (seatDiv.closest(".outerseat")) {
        const upperCheck = seatDiv.closest(".outerseat");
        const lowerDivCheck = upperCheck.querySelector(".lower");
        if (lowerDivCheck) {
          seatObjects.push({
            type: "lower",
            id: seatDiv.id,
            class: seatDiv.getAttribute("class"),
            top: seatDiv.style.top,
            left: seatDiv.style.left,
            onclick: seatDiv.getAttribute("onclick"),
          });
        } else {
          seatObjects.push({
            type: "upper",
            id: seatDiv.id,
            class: seatDiv.getAttribute("class"),
            top: seatDiv.style.top,
            left: seatDiv.style.left,
            onclick: seatDiv.getAttribute("onclick"),
          });
        }
      }
      // Check if the seat div is inside the lower part of the bus
      else if (seatDiv.closest(".outerlowerseat")) {
        seatObjects.push({
          type: "lower",
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
  function addOrRemoveSeat(e, object) {
    console.log("hiiiiiiiiiiiiiiiiiiiii");
    console.log(e);
    console.log(e.target.checked);
    // console.log(index)
    if (e.target.checked) {
      setBlockedSeatArray([...blockedSeatArray, object]);
      console.log(blockedSeatArray);
    } else {
      // const element = object;
      // const index = blockedSeatArray.indexOf(element);
      // const slicedArray=blockedSeatArray.splice(index, 1)
      // setBlockedSeatArray(slicedArray);
         const updatedBlockedSeatArray = blockedSeatArray.filter(
           (seatObject) => seatObject !== object
         );
         setBlockedSeatArray(updatedBlockedSeatArray);
      console.log(blockedSeatArray);
    }
  }
  function handleClose(){
    setBlockedSeatArray([]);
    setSelectedDropPoint("")
    setSelectedOrigin("")
    setOrigin([])
    setDestination([])
    setModal((prev) => !prev);
  }
  function handleContinue(){
      const dataToSave = {
        blockedSeatArray: blockedSeatArray,
        selectedOrigin: selectedOrigin,
        selectedDropPoint: selectedDropPoint,
      };

      // Save the combined state object to session storage
      sessionStorage.setItem("seatData", JSON.stringify(dataToSave));
      navigate("/BusPassengerDetail");
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
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          className="layOutParent"
          sx={{
            height: "600px",
            width: "800px",
            bgcolor: "background.paper",
            backdropFilter: "blur(5px)",
            border: "1px solid red",
            alignSelf: "center",
            opacity: 0.9,
            display: "flex",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "60%",
            }}
          >
            <Box class="outerseat">
              <Box class="busSeatlft">
                <Box class="upper"></Box>
              </Box>
              <Box class="busSeatrgt">
                <Box class="busSeat">
                  <Box class="seatcontainer clearfix">
                    {layout?.map((item, index) => {
                      if (item?.type == "upper") {
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
                              display: "flex",
                              border: "1px solid red",
                              position: "absolute",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox
                              onChange={(e) =>
                                addOrRemoveSeat(e, upperArray?.[index], index)
                              }
                              disabled={
                                upperArray?.[index]?.SeatStatus == true
                                  ? false
                                  : true
                              }
                            />
                          </Box>
                        );
                      }
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box class="outerlowerseat">
              <Box class="busSeatlft">
                <Box class="lower"></Box>
              </Box>
              <Box class="busSeatrgt">
                <Box class="busSeat">
                  <Box class="seatcontainer clearfix">
                    {layout?.map((item, index) => {
                      if (item?.type == "lower") {
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
                              display: "flex",
                              border: "1px solid red",
                              // padding: "2px",
                              position: "absolute",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox
                              onChange={(e) =>
                                addOrRemoveSeat(
                                  e,
                                  lowerArray?.[index - upperArray.length],
                                  index
                                )
                              }
                              disabled={
                                lowerArray?.[index - upperArray.length]
                                  ?.SeatStatus == true
                                  ? false
                                  : true
                              }
                            />
                          </Box>
                        );
                      }
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "50%",
              border: "3px solid gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "80%",
                width: "100%",
                border: "2px solid black",
              }}
            >
              <Box>
                <Box>
                  <label>Origin</label>
                  <select
                    value={selectedOrigin}
                    onClick={(e) => setSelectedOrigin(e.target.value)}
                  >
                    {origin.map((name, index) => (
                      <option key={index} value={name?.CityPointIndex}>
                        {name?.CityPointName}
                      </option>
                    ))}
                  </select>
                </Box>
                <Box>
                  <label>Destination</label>
                  <select
                    value={selectedDropPoint}
                    onClick={(e) => setSelectedDropPoint(e.target.value)}
                  >
                    {destination.map((name, index) => (
                      <option key={index} value={name?.CityPointIndex}>
                        {name?.CityPointName}
                      </option>
                    ))}
                  </select>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  paddingTop: "5px",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  {" "}
                  <Typography>Seats:</Typography>
                  {blockedSeatArray?.map((seat, index) => {
                    return (
                      <Typography
                        sx={{
                          border: "1px solid red",
                        }}
                      >
                        {seat?.SeatName}
                      </Typography>
                    );
                  })}
                </Box>
                <Box>
                  {(() => {
                    const totalSeatPrice = blockedSeatArray.reduce(
                      (totalPrice, seat) => {
                        return totalPrice + (seat?.SeatFare || 0);
                      },
                      0
                    );
                    return <Typography>Price:{totalSeatPrice}</Typography>;
                  })()}
                </Box>
              </Box>

              <Box>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleContinue}>Continue</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Busdetail;
