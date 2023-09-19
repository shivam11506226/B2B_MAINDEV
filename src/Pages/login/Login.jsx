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
import beachchair from "../../Images/beachchair.png";
import insurence from "../../Images/insurence.png";
import luggagex from "../../Images/luggagex.png";
import airportt from "../../Images/airportt.png";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Button } from "@mui/material";
import { fontWeight } from "@mui/system";

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
            <Grid container px={10} py={5}>
              <Grid item xs={12} sm={12} lg={9}>
                <Box
                  display="flex"
                  justifyContant="center"
                  alignItems="center"
                  textAlign="center"
                  // marginTop="10px"
                  font="Quicksand, Bold"
                >
                  <Box
                    sx={{
                      width: "69px",
                      height: "69px",
                    }}
                  >
                    <img src={StLogo} style={{ width: "250px" }}></img>
                  </Box>
                  {/* <Typography className="logo_text">Travvolt</Typography> */}
                </Box>
                <Box
                  sx={{ displayf: "flex", justifyContent: "center" }}
                  mt={10}
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
                  <Grid container mt={5}>
                    <Grid item xs={12} sm={12} lg={1} textAlign="center"></Grid>
                    <Grid item xs={12} sm={12} lg={10} textAlign="center">
                      <Box display="flex" justifyContent="space-around">
                        <Box textAlign="center">
                          <img src={flight} />
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#252525",
                            }}
                          >
                            Flights
                          </Typography>
                        </Box>
                        <Box textAlign="center">
                          <img src={hotelbed} />
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#252525",
                            }}
                          >
                            Hotel
                          </Typography>
                        </Box>
                        <Box textAlign="center">
                          <img src={schoolbus} />
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#252525",
                            }}
                          >
                            Bus
                          </Typography>
                        </Box>
                        <Box textAlign="center">
                          <img src={taxi} />
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#252525",
                            }}
                          >
                            Taxi
                          </Typography>
                        </Box>
                        <Box textAlign="center">
                          <img src={accounting} />
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#252525",
                            }}
                          >
                            GST
                          </Typography>
                        </Box>
                      </Box>
                      <Box display="flex" justifyContent="center" py={4}>
                        <Box textAlign="center" px={3}>
                          <img src={insurence} />
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#252525",
                            }}
                          >
                            Sightseeing
                          </Typography>
                        </Box>
                        <Box textAlign="center" px={3}>
                          <img src={beachchair} />
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#252525",
                            }}
                          >
                            Holiday Package
                          </Typography>
                        </Box>
                        <Box textAlign="center" px={3}>
                          <img src={passport} />
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#252525",
                            }}
                          >
                            Visa
                          </Typography>
                        </Box>
                        <Box textAlign="center" px={3}>
                          <img src={forex} />
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#252525",
                            }}
                          >
                            Forex
                          </Typography>
                        </Box>
                      </Box>
                      <Box display="flex" justifyContent="center">
                        <Box textAlign="center" px={2}>
                          <img src={luggagex} />
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#252525",
                            }}
                          >
                            Assistance & Insurance
                          </Typography>
                        </Box>
                        <Box textAlign="center" px={2}>
                          <img src={airportt} />
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#252525",
                            }}
                          >
                            Fixed Departure
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={1} textAlign="center"></Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} lg={3}>
                <form action="/Registration">
                  <Box textAlign="right">
                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<AccountCircleIcon />}
                      style={{
                        backgroundColor: "white",
                        color: "#254B70",
                        fontWeight: "bold",
                        borderRadius: "10px",
                      }}
                    >
                      Register
                    </Button>
                  </Box>
                </form>
                <form action="/">
                  {reducerState.logIn.loginData?.data?.data?.message && (
                    <Alert severity="success">
                      Thankyou ! for Registering, we'll contact you ASAP
                    </Alert>
                  )}
                  <Box pt={5} className="login_field">
                    <Typography className="Login_min" font="Quicksand, Bold">
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

                      <Typography className="forget_pass">
                        Forgot Password
                      </Typography>

                      <Box
                        display="flex"
                        justifyContent="center"
                        mt={2}
                        textAlign="center"
                      >
                        <Typography color="black" fontSize="10px">
                          By proceeding, you agree to Travvolt{" "}
                          <Link href="#" underline="always" color="#FF8900">
                            {"Privacy Policy"}
                          </Link>{" "}
                          ,{" "}
                          <Link href="#" underline="always" color="#FF8900">
                            {"User Agreement"}
                          </Link>{" "}
                          and{" "}
                          <Link href="#" underline="always" color="#FF8900">
                            {"Terms of Service"}
                          </Link>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </form>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                lg={3}
                display="flex"
                justifyContent="start"
                alignItems="center"
              ></Grid>
            </Grid>
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Login;
