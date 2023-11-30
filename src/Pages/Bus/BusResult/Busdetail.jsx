import React, { useState, useRef, useEffect } from "react";
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
import { apiURL } from "../../../Constants/constant";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import dayjs from "dayjs";
import busArrow from '../../../Images/busArrow.png'
import { motion } from "framer-motion";



const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};


const Busdetail = () => {
  const name = [];
  const upperArray = [];
  const lowerArray = [];
  const [blockedSeatArray, setBlockedSeatArray] = useState([]);
  const [resulttIndex, setResulttIndex] = useState("");

  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDropPoint, setSelectedDropPoint] = useState("");
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
    // console.log("resultIndexxxxxxxxxxxx", resultIndex);
    const requestData = {
      EndUserIp: reducerState?.ip?.ipData,
      ResultIndex: resultIndex,
      TraceId: busFullData?.TraceId,
      TokenId: reducerState?.ip?.tokenData,
    };

    try {
      axios
        .post(`${apiURL.baseURL}/skyTrails/bus/seatlayout`, requestData, {
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
          // console.log(
          //   "finalLayout",
          //   response.data?.data?.GetBusSeatLayOutResult?.SeatLayoutDetails
          //     ?.HTMLLayout
          // );

          setLayout((prev) => finalLayout);
          const SeatDetailsArray =
            response.data?.data?.GetBusSeatLayOutResult?.SeatLayoutDetails
              ?.SeatLayout?.SeatDetails;
          // console.log("seatDetailssAraayyy", SeatDetailsArray);

          let singleArray = SeatDetailsArray.reduce(
            (acc, currentArray) => [...acc, ...currentArray],
            []
          );
          setFlatArray(singleArray);
          busDataResult.map((item, index) => {
            if (item?.ResultIndex === resultIndex) {
              setOrigin(item?.BoardingPointsDetails);
              setDestination(item?.DroppingPointsDetails);
            }
          });
          setResulttIndex(resultIndex);

          // console.log("flattArayyyyyy",flatArray)
          setModal((prev) => !prev);
        });
    } catch (error) {
      console.error("Try-Catch Error:", error);
    }
  };
  // console.log(layout);
  // console.log(seatLayoutData);
  // console.log("flattArayyyyyy", flatArray);
  // console.log("originnnnnnnnn", origin);
  flatArray.forEach((obj) => {
    if (obj?.IsUpper === true) {
      upperArray.push(obj);
    } else if (obj?.IsUpper === false) {
      lowerArray.push(obj);
    }
  });

  // console.log(upperArray, lowerArray);
  function handleSeatLayoutStringTwo(inputString) {
    // Your bus seat layout string
    let busSeatLayoutString = `${inputString}`;

    // Create an empty array to store the seat objects
    let seatObjects = [];

    // Create a temporary div element to parse the string
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = busSeatLayoutString;
    // console.log("temppdivvvvvvvvvv", tempDiv);
    // Select all seat div elements
    let seatDivs = tempDiv.querySelectorAll(
      ".hseat, .bhseat, .vhseat, .bhseat, .bseat, .vseat, .nseat, .rhseat"
    );
    // console.log(seatDivs);

    // Iterate through each seat div and differentiate between upper/lower and left/right sides
    seatDivs.forEach((seatDiv) => {
      // Check if the seat div is inside the upper part of the bus
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
        }

        // Conditionally check for SeatType 2 and add sleeper seat
        else {
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
    // console.log("hiiiiiiiiiiiiiiiiiiiii");
    // console.log(e);
    // console.log(e.target.checked);
    // console.log(index)
    if (e.target.checked) {
      setBlockedSeatArray([...blockedSeatArray, object]);
      // console.log(blockedSeatArray);
    } else {
      // const element = object;
      // const index = blockedSeatArray.indexOf(element);
      // const slicedArray=blockedSeatArray.splice(index, 1)
      // setBlockedSeatArray(slicedArray);
      const updatedBlockedSeatArray = blockedSeatArray.filter(
        (seatObject) => seatObject !== object
      );
      setBlockedSeatArray(updatedBlockedSeatArray);
      // console.log(blockedSeatArray);
    }
  }
  function handleClose() {
    setBlockedSeatArray([]);
    setSelectedDropPoint("");
    setSelectedOrigin("");
    setOrigin([]);
    setDestination([]);
    setModal((prev) => !prev);
  }

  function handleContinue() {
    if (
      blockedSeatArray.length === 0 || selectedOrigin === "" || destination.length === 0 ||
      selectedDropPoint === "" || origin === ""
    ) {
      return
    }
    const dataToSave = {
      blockedSeatArray: blockedSeatArray,
      selectedOrigin: selectedOrigin,
      selectedDropPoint: selectedDropPoint,
      resultIndex: resulttIndex,
    };

    // Save the combined state object to session storage
    sessionStorage.setItem("seatData", JSON.stringify(dataToSave));
    navigate("/BusPassengerDetail");
  }



  // filter box 

  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const accordionRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setExpanded(false);
      } else {
        setExpanded('panel1');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [filteredBusData, setFilteredBusData] = useState([]);

  const [selectedAC, setSelectedAC] = useState(false);
  const [selectedNonAC, setSelectedNonAC] = useState(false);
  const [selectedSleeper, setSelectedSleeper] = useState(false);
  const [selectedSeater, setSelectedSeater] = useState(false);

  const handleACClick = () => {
    setSelectedAC(true);
    setSelectedNonAC(false);
    filterBusData();
  };

  const handleNonACClick = () => {
    setSelectedAC(false);
    setSelectedNonAC(true);
    filterBusData();
  };


  const handleSleeperClick = () => {
    setSelectedSleeper(true);
    setSelectedSeater(false);
    filterBusData();
  };

  const handleSeaterClick = () => {
    setSelectedSleeper(false);
    setSelectedSeater(true);
    filterBusData();
  };


  const handleClearFilter = () => {
    setSelectedAC(false);
    setSelectedNonAC(false)
    setSelectedSleeper(false)
    setSelectedSeater(false)
    setFilteredBusData(busDataResult);
  }


  const filterBusData = () => {
    let filteredData = busDataResult?.filter((item) => {
      let busType = item?.BusType.toLowerCase();

      if (selectedNonAC) {
        return busType.includes("non a/c");
      }
      else if (selectedSleeper) {
        return busType.includes("sleeper");
      }
      else if (selectedSeater) {
        return busType.includes("seater");
      }
      else {
        return !busType.includes("non a/c");
      }
    });

    setFilteredBusData(filteredData);
  };

  useEffect(() => {
    // Apply initial filtering on component mount
    filterBusData();
  }, [selectedAC, selectedNonAC, selectedSleeper, selectedSeater]);

  return (
    <>

      <div className="container-xxl margin-pecentage">
        <div className="row">
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} className="col-lg-3 mt-2">

            <div className="packResFilterBox" >
              <Accordion ref={accordionRef} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{ width: '100%', border: "none" }}
                >
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>

                    <Typography style={{
                      fontFamily: 'Montserrat',
                      fontSize: '12px',
                      fontWeight: '400',
                      textAlign: 'center'

                    }} ><FilterAltIcon style={{ fontWeight: "600", fontFamily: "Montserrat", fontSize: '14px' }} /> Filter</Typography>
                    <Typography style={{ color: '#0048FF', textDecoration: 'underline' }} onClick={handleClearFilter}>clear all</Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontWeight: '600', fontFamily: 'Montserrat', fontSize: '12px', paddingBottom: '10px' }}>
                    AC
                  </Typography>
                  <div className="acFilter">
                    <Button
                      variant={selectedAC ? 'contained' : 'outlined'}
                      color="primary"
                      onClick={handleACClick}
                      style={{ backgroundColor: selectedAC ? '#21325D' : 'transparent', borderRadius: '5px', color: selectedAC ? '#FFFFFF' : '#21325D' }}
                    >
                      AC
                    </Button>
                    <Button
                      variant={selectedNonAC ? 'contained' : 'outlined'}
                      color="primary"
                      onClick={handleNonACClick}
                      style={{ backgroundColor: selectedNonAC ? '#21325D' : 'transparent', borderRadius: '5px', color: selectedNonAC ? '#FFFFFF' : '#21325D' }}
                    >
                      Non AC
                    </Button>
                  </div>




                  <Typography style={{ fontWeight: '600', fontFamily: 'Montserrat', fontSize: '14px', paddingBottom: '10px' }}>
                    SEAT TYPE
                  </Typography>
                  <div className="seatFilter">
                    <Button
                      variant={selectedSleeper ? 'contained' : 'outlined'}
                      color="primary"
                      onClick={handleSleeperClick}
                      style={{ backgroundColor: selectedSleeper ? '#21325D' : 'transparent', borderRadius: '5px', color: selectedSleeper ? '#FFFFFF' : '#21325D' }}
                    >
                      Sleeper
                    </Button>
                    <Button
                      variant={selectedSeater ? 'contained' : 'outlined'}
                      color="primary"
                      onClick={handleSeaterClick}
                      style={{ backgroundColor: selectedSeater ? '#21325D' : 'transparent', borderRadius: '5px', color: selectedSeater ? '#FFFFFF' : '#21325D' }}
                    >
                      Seater
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion>

            </div>
          </motion.div>
          <motion.div className="col-lg-9">
            <motion.div variants={variants} initial="initial"
              whileInView="animate" className="row top_head">
              {filteredBusData?.map((item, index) => {

                const departureDate = dayjs(item?.DepartureTime);
                const arrivalDate = dayjs(item?.ArrivalTime);

                // Format the dates
                const departureFormattedDate = departureDate.format("DD MMM, YY");
                const arrivalFormattedDate = arrivalDate.format("DD MMM, YY");
                return (
                  <>
                    <motion.div variants={variants} className="col-lg-12 busResultBox">
                      <div className="busSearchOne">
                        <p>{item?.TravelName}</p>
                      </div>
                      <div className="busSearchTwo">
                        <div>
                          <div>
                            {/* <p>{item?.BoardingPointsDetails && item.BoardingPointsDetails.length > 0 && item.BoardingPointsDetails[0].CityPointLocation}</p> */}
                            <p>{busFullData?.Origin}</p>

                          </div>
                          <div>
                            <p>{item?.DepartureTime?.slice(11, 16)}</p>
                          </div>
                          <div>
                            <span>{departureFormattedDate}</span>
                          </div>
                        </div>
                        <div className="busImage">
                          <img src={busArrow} />
                        </div>
                        <div>
                          <div>
                            {/* <p>{item?.DroppingPointsDetails && item.DroppingPointsDetails.length > 0 && item.DroppingPointsDetails[0].CityPointLocation}</p> */}
                            <p>{busFullData?.Destination}</p>

                          </div>
                          <div>
                            <p>{item?.ArrivalTime?.slice(11, 16)}</p>
                          </div>
                          <div>
                            <span>{arrivalFormattedDate}</span>
                          </div>
                        </div>

                      </div>
                      <div className="busSearchFour">
                        <div className="">
                          <p>₹ {item?.BusPrice?.BasePrice}</p>
                        </div>
                        <button onClick={() => handleBuslayout(item?.ResultIndex)}>Select Seat</button>
                      </div>
                    </motion.div>
                    <div className="col-lg-12">
                      <div className="busType">
                        <p>{item?.BusType}</p>
                        <Busmoredetail />
                        <p>{item?.AvailableSeats} {' '}Seats Available</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div >



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
          {/* //seat div started */}
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
                      if (item?.type === "upper") {
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
                              position: "absolute",
                              justifyContent: "center",
                              alignItems: "center",
                              border: `2px solid ${item?.SeatType === 2 ? "green" : "blue"
                                }`, // Change the border color based on SeatType // Change the border color based on SeatType // Change the color based on SeatType
                            }}
                          >
                            <Checkbox
                              onChange={(e) =>
                                addOrRemoveSeat(e, upperArray?.[index], index)
                              }
                              disabled={
                                upperArray?.[index]?.SeatStatus === true
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
                      if (item?.type === "lower") {
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
                                  ?.SeatStatus === true
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
              <Box
                sx={{
                  display: "flex",
                  paddingTop: "5px",
                  width: "70%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "auto",
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
                          color: "blue",
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
                    return (
                      <div style={{ display: "flex" }}>
                        <Typography>Price:</Typography>
                        <h2
                          style={{
                            color: "blue",
                            marginTop: "3px",
                            width: "20px",
                          }}
                        >
                          {totalSeatPrice}
                        </h2>
                      </div>
                    );
                  })()}
                </Box>
              </Box>

              <Box
                style={{
                  width: "70%",
                  margin: "auto",
                  gap: "70px",
                  display: "flex",
                }}
              >
                <label>Origin</label>
                <select
                  value={selectedOrigin} // Bind the selected value to the state variable.
                  onClick={(e) => setSelectedOrigin(e.target.value)} // Use onChange to handle value changes.
                  style={{ borderRadius: "10px", width: "120px" }}
                >
                  {origin.map((name, index) => (
                    (index === 0 ? <option key={index} selected value={name?.CityPointIndex}>
                      {name?.CityPointName}
                    </option> :

                      <option key={index} value={name?.CityPointIndex}>
                        {name?.CityPointName}
                      </option>)
                  ))}
                </select>
              </Box>

              <Box
                style={{
                  width: "70%",
                  margin: "auto",
                  marginTop: "20px",
                  display: "flex",
                  gap: "30px",
                }}
              >
                <label>Destination</label>
                <select
                  value={selectedDropPoint}
                  onClick={(e) => setSelectedDropPoint(e.target.value)}
                  style={{ borderRadius: "10px", width: "120px" }}
                >
                  {destination.map((name, index) => (

                    (index === 0 ? <option key={index} selected value={name?.CityPointIndex}>
                      {name?.CityPointName}
                    </option> :

                      <option key={index} value={name?.CityPointIndex}>
                        {name?.CityPointName}
                      </option>)
                  ))}
                </select>
              </Box>


              <Box
                style={{
                  width: "60%",
                  display: "flex",
                  gap: "20px",
                  margin: "auto",
                  marginTop: "20px",
                }}
              >
                <Button
                  onClick={handleClose}
                  style={{ backgroundColor: "#21325D", color: "white" }}
                >
                  Close
                </Button>
                <Button
                  onClick={handleContinue}
                  style={{ backgroundColor: "#21325D", color: "white" }}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Busdetail;




{/* <div className="row top_head">

  <div className="col-lg-2">
    <div>
      <p>{item?.TravelName}</p>
    </div>
  </div>
  <div className="col-lg-3">
    <div>

      <p>{item?.BusType}</p>
      <Busmoredetail />
    </div>
  </div>
  <div className="col-lg-1">
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
  </div>
  <div className="col-lg-1">
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
  </div>

  <div className="col-lg-1">
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
  </div>
  <div className="col-lg-2">
    <Box>
      <Typography
        sx={{
          fontSize: "14px",

          color: "#000",
          display: "flex",
          alignItems: "left",
          textAlign: "left",
          fontFamily: "Montserrat",

          fontStyle: "normal",
          fontWeight: "500px"
        }}
      >
        ₹ {item?.BusPrice?.BasePrice}
      </Typography>
    </Box>
  </div>
  <div className="col-lg-2">
    <Box>
      <Button
        textAlign="left"
        onClick={() => handleBuslayout(item?.ResultIndex)}
        style={{ backgroundColor: "#21325D", color: "white", fontSize: "14px" }}
      >
        Book Now
      </Button>
    </Box>
  </div>
</div> */}