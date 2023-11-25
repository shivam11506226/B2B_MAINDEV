import Stepper from "../../../Components/Stepper";
import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import "./busresult.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import Busdetail from "./Busdetail";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { useEffect } from "react";
import { clearBusSearchReducer } from "../../../Redux/busSearch/busSearchAction";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const BusResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const busFullData = reducerState;
  console.log("full data", busFullData);
  const busDataResult = reducerState?.getBusResult;
  console.log("bus data", busDataResult);
  const [loader, setLoader] = useState(false);

  // Loader Code
  useEffect(() => {
    if (reducerState?.getBusResult?.isLoading == true) {
      setLoader(true);
    }
  }, [reducerState?.getBusResult?.isLoading]);

  useEffect(() => {
    if (reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult) {
      navigate("/BusResult");
      setLoader(false);
    }
  }, [reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult]);

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


  const [selectedAC, setSelectedAC] = useState(false);
  const [selectedNonAC, setSelectedNonAC] = useState(false);
  const [selectedSleeper, setSelectedSleeper] = useState(false);
  const [selectedSeater, setSelectedSeater] = useState(false);

  const handleACClick = () => {
    setSelectedAC(true);
    setSelectedNonAC(false);
  };

  const handleNonACClick = () => {
    setSelectedAC(false);
    setSelectedNonAC(true);
  };


  const handleSleeperClick = () => {
    setSelectedSleeper(true);
    setSelectedSeater(false);
  };

  const handleSeaterClick = () => {
    setSelectedSleeper(false);
    setSelectedSeater(true);
  };


  const handleClearFilter = () => {
    setSelectedAC(false);
    setSelectedNonAC(false)
    setSelectedSleeper(false)
    setSelectedSeater(false)
  }



  return (
    <>
      {loader ? (
        <Loader />
      ) : (


        <>

          {/* <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">

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
                          fontSize: '14px',
                          fontWeight: '400',
                          textAlign: 'center'

                        }} ><FilterAltIcon style={{ fontWeight: "600", fontFamily: "Montserrat", fontSize: '14px' }} /> Filter</Typography>
                        <Typography style={{ color: '#0048FF', textDecoration: 'underline' }} onClick={handleClearFilter}>clear all</Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{ fontWeight: '600', fontFamily: 'Montserrat', fontSize: '14px', paddingBottom: '10px' }}>
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
                          Non AC
                        </Button>
                      </div>

                      <div className="applyFilter">
                        <button>Apply</button>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                </div>
              </div>


              <div className="col-lg-9">
                <Box className="top_head" p={2} my={2}>
                  <Box display="flex" textAlign="center">
                    <Typography
                      sx={{ fontSize: "12px", fontWeight: "bold", color: "#252525" }}
                    >
                      {busFullData?.Origin}
                      {" - "}
                      {busFullData?.Destination}{" "}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "12px", fontWeight: "bold", color: "#006FFF" }}
                    >
                      Wed, 11 Jan, 2023
                    </Typography>
                  </Box>
                </Box>
                <Box className="top_head" p={2} my={2}>
                  <Grid container>
                    <Grid item lg={2.5}>
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
                          Travelers
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={2.5}>
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
                          Bus Types
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
                          Departure
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
                          Arrival
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
                          Seat
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={2}>
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
                          Price
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={1}></Grid>
                  </Grid>
                </Box> */}
          <Busdetail />
          {/* </div>
            </div>
          </div> */}
        </>
      )}
    </>
  );
};

export default BusResult;
