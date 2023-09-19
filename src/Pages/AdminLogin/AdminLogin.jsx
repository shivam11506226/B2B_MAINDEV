import React from "react";

import { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { Input, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Flex, space, Spacer, Text } from "@chakra-ui/react";
import Popularfilter from "../Flight/flightresult/Popularfilter";
import tra from "../../Images/tra.png";
import LockIcon from "@mui/icons-material/Lock";
import { InnerBarLogo } from "../../data";
import { logindata } from "../../logindata";
import { logindataaa } from "../../logindataaa";
import { NavLink } from "react-router-dom";
import NavBarBox from "../../Components/NavBarBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RefreshIcon from "@mui/icons-material/Refresh";
import Alert from "@mui/material/Alert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { fontWeight } from "@mui/system";
import { signUpAction } from "../../Redux/Auth/SignUp/actionSignUp";
import { getUserAction } from "../../Redux/Auth/UserData/actionUserData";
import { adminAuthAction } from "../../Redux/Auth/AdminAuth/actionAdminAuth";
import StLogo from "../../Images/ST-Main-Logo.png";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(reducerState);

  let adminData = reducerState?.adminAuth?.adminData?.data?.roles[0];

  useEffect(() => {
    if (adminData == "ADMIN") {
      navigate("/admin/dashboard");
    }
  }, [reducerState, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    dispatch(adminAuthAction(payload));
  };

  return (
    //  {
    //    adminData === 'undefined'? (<h1>Hello</h1>): (<h1>Hell1</h1>)

    //  }

    <div
      style={{
        width: "85%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <span className="d-flex justify-content-between align-items-center ">
      <img src={StLogo} style={{ width: "180px",marginTop:'13px' }}></img>
      <h1 style={{ marginTop: "20px" }}>Admin Login </h1>
      </span>
      
      <form onSubmit={handleSubmit}>
        <Box pt={5} className="login_field">
          <Typography className="Login_min" font="Quicksand, Bold">
            Login
          </Typography>
          <Box py={2}>
            <div className="form_input">
              <label className="form_lable">Email*</label>

              <input
                style={{ height: "60px", width: "100px" }}
                name="username"
                type="text"
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
                name="password"
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </Box>
          <Box>
            <Typography className="forget_pass">Forgot Password</Typography>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#0052D0",
                color: "white",
                width: "100%",
                borderRadius: "20px",
              }}
            >
              Login
            </Button>
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
    </div>
  );
};

export default AdminLogin;
