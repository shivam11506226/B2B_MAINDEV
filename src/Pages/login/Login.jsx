import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Input, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Flex, space, Spacer, Text } from "@chakra-ui/react";
import Popularfilter from "../Flight/flightresult/Popularfilter";
import StLogo from "../../Images/ST-Main-Logo.png";
import LockIcon from "@mui/icons-material/Lock";
import { InnerBarLogo } from "../../data";
import { logindata } from "../../logindata";
import { logindataaa } from "../../logindataaa";
import { NavLink } from "react-router-dom";
import NavBarBox from "../../Components/NavBarBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RefreshIcon from "@mui/icons-material/Refresh";
import Alert from "@mui/material/Alert";
import Capchacode from "./Capchacode";
import flight from "../../Images/flight.png";
import hotelbed from "../../Images/hotelbed.png";
import schoolbus from "../../Images/schoolbus.png";
import taxi from "../../Images/taxi.png";
import accounting from "../../Images/accounting.png";
import forex from "../../Images/forex.png";
import passport from "../../Images/passport.png";
import binoculars from "../../Images/binoculars.png";
import beachchair from "../../Images/beach-chair.png";
import insurence from "../../Images/insurence.png";
import luggagex from "../../Images/luggagex.png";
import airportt from "../../Images/airportt.png";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Button } from "@mui/material";
import { fontWeight } from "@mui/system";
import {
  FaPlane, // Flight icon
  FaHotel, // Hotel icon
  // Add more icons here for other items
  FaGlobe, // Islandhopper icon
  FaBus, // Transfer icon
  FaBinoculars, // Sightseeing icon
  FaPassport, // Visa icon
  FaShieldAlt, // Insurance icon
  FaUser, // Administration icon
} from "react-icons/fa";
import { GiCardboardBox } from "react-icons/gi";

import color from "../../color/color.js";
const Login = () => {
  const reducerState = useSelector((state) => state);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (reducerState?.logIn?.loginData?.data?.data) {
      navigate("/");
    }
  }, [reducerState, navigate]);

  return (
    <React.Fragment>
      <div className="loginContainer">
        {/* step by step updating part */}
    
        <Box>
          <div>
            <Grid container px={10}>
              <Grid item xs={12} sm={12} lg={9} >
                <Box
                  display="flex"
                  justifyContant="center"
                  alignItems="center"
                  textAlign="center"
                 
                  font="Quicksand, Bold"
                >
                  <Box
                    sx={{
                      width: "69px",
                      height: "45px",
                    }}
                  >
                    <img src={StLogo} alt="" style={{ width: "250px" }}></img>
                  </Box>
                 
                </Box>

                {/* <Grid container mt={15} lg={5} style={{border:"1px solid red"}}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={10}
                    textAlign="center"
                    style={{
                      border: "2px solid black",
                      borderRadius:"12px",
                      backgroundColor:"#fff",
                      boxShadow:"0px 4px 12px 4px rgba(0, 0, 0, 0.25)"
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "600",
                        textAlign: "center",
                        marginTop: "30px",
                        font: "Quicksand, Bold",
                      }}
                    >
                      Our Services
                    </Typography>
                    <Box display="flex" justifyContent="center" py={4}>
                      <Box textAlign="center" px={1}>
                        <FaPlane
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Flights
                        </Typography>
                      </Box>
                      <Box textAlign="center" px={3}>
                        <FaHotel
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Hotel
                        </Typography>
                      </Box>
                      
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      py={1}
                      px={5}
                      
                    >
                      <Box textAlign="center" px={3}>
                        <FaBus
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Transfer
                        </Typography>
                      </Box>

                      <Box textAlign="center" px={3}>
                        <GiCardboardBox
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Package
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" justifyContent="center" py={4}>
                    
                      <Box textAlign="center" px={3}>
                        <FaPassport
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Forex
                        </Typography>
                      </Box>
                      <Box textAlign="center" px={3}>
                        <FaShieldAlt
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Insurance
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>


                </Grid> */}
              </Grid>
              <Grid item xs={12} sm={12} lg={3}>
                <form onClick={(e)=>{
                  e.preventDefault()
                  navigate("/Registration")}}>
                  <Box textAlign="right" >
                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<AccountCircleIcon />}
                      style={{
                        backgroundColor: "white",
                        color: "#254B70",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        marginTop: "100px",
                      }}
                    >
                      Register
                    </Button>
                  </Box>
                </form>
                {/* <form action="/" style={{border:"1px solid pink"}}>
                  {reducerState.logIn.loginData?.data?.data?.message && (
                    <Alert severity="success">
                      Thankyou ! for Registering, we'll contact you ASAP
                    </Alert>
                  )}
                  <Box pt={5} className="login_field" style={{border:"2px solid black"}}>
                    <Typography
                      className="Login_min"
                      font="Bold"
                      style={{ color: color.bluedark }}
                    >
                      Login
                    </Typography>
                    <Box py={2}>
                      <div className="form_input">
                        <label className="form_lable">Email*</label>

                        <input
                          style={{ height: "60px", width: "400px" }}
                          name="email"
                          type="email"
                          placeholder="Enter your Email Address"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                    </Box>
                    <Box py={2}>
                      <div className="form_input">
                        <label className="form_lable">Password*</label>

                        <input
                          style={{ height: "60px", width: "400px" }}
                          type="password"
                          placeholder="Enter Your Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                    </Box>
                    <Box>
                      <Capchacode email={email} password={password} />

                      <Typography className="forget_pass" style={{textAlign:"center"}}>
                        Forgot Password
                      </Typography>

                      <Box
                        display="flex"
                        justifyContent="center"
                        mt={2}
                        textAlign="center"
                      >
                      
                      </Box>
                    </Box>
                  </Box>
                </form> */}
              </Grid>
             
            </Grid>
          </div>
        </Box>

        <div style={{display:"flex",width:"50%",margin:"auto",gap:"100px",height:"400px",marginTop:"20px"}}>
        <Grid container  lg={12} >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    textAlign="center"
                    style={{
                     
                      borderRadius:"12px",
                      backgroundColor:"#fff",
                      boxShadow:"0px 4px 12px 4px rgba(0, 0, 0, 0.25)"
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "600",
                        textAlign: "center",
                        marginTop: "30px",
                        font: "Quicksand, Bold",
                      }}
                    >
                      Our Services
                    </Typography>
                    <Box display="flex" justifyContent="center" py={4}>
                      <Box textAlign="center" px={3}>
                        <FaPlane
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Flights
                        </Typography>
                      </Box>
                      <Box textAlign="center" px={3}>
                        <FaHotel
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Hotel
                        </Typography>
                      </Box>
                      
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      py={1}
                      px={5}
                      
                    >
                      <Box textAlign="center" px={3}>
                        <FaBus
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Transfer
                        </Typography>
                      </Box>

                      <Box textAlign="center" px={3}>
                        <GiCardboardBox
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Package
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" justifyContent="center" py={4}>
                    
                      <Box textAlign="center" px={3}>
                        <FaPassport
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Forex
                        </Typography>
                      </Box>
                      <Box textAlign="center" px={3}>
                        <FaShieldAlt
                          style={{ fontSize: "35px", color: color.bluedark }}
                        />
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: color.bluedark,
                          }}
                        >
                          Insurance
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>


                </Grid>
                <form action="/">
                  {reducerState.logIn.loginData?.data?.data?.message && (
                    <Alert severity="success">
                      Thankyou ! for Registering, we'll contact you ASAP
                    </Alert>
                  )}
                  <Box  className="login_field" style={{marginTop:"10px"}}>
                    <Typography
                      className="Login_min"
                      font="Bold"
                      style={{ color: color.bluedark }}
                    >
                      Login
                    </Typography>
                    <Box py={2} >
                      <div className="form_input">
                        <label className="form_lable">Email*</label>

                        <input
                          style={{ height: "60px", width: "400px" }}
                          name="email"
                          type="email"
                          placeholder="Enter your Email Address"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                    </Box>
                    <Box py={2}>
                      <div className="form_input">
                        <label className="form_lable">Password*</label>

                        <input
                          style={{ height: "60px", width: "400px" }}
                          type="password"
                          placeholder="Enter Your Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                    </Box>
                    <Box>
                      <Capchacode email={email} password={password} />

                      <Typography className="forget_pass" style={{textAlign:"center"}}>
                        Forgot Password
                      </Typography>

                      <Box
                        display="flex"
                        justifyContent="center"
                        mt={2}
                        textAlign="center"
                      >
                      
                      </Box>
                    </Box>
                  </Box>
                </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
