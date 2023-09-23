import * as React from "react";
import { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Box, Button, Typography, Paper, makeStyles } from "@mui/material";
import { useNavigate } from "react-router-dom";
import STLOGO from "../Images/ST-Main-Logo.png";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { logoutAction } from "../Redux/Auth/logIn/actionLogin";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const [scrollYvalue, setScrollYValue] = useState(0);
  const reducerState = useSelector((state) => state);
  const [openModal, setOpenModal] = React.useState(false);
  const [amount, setAmount] = React.useState("");
  const [userData, setUserData] = useState(null);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openLoginpage = () => {
    navigate("/Registration");
  };

  const openRegistration = () => {
    navigate("/Login");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSubmit = () => {
    dispatch(logoutAction());
    window.location.reload();
  };
  // Edit package
  const editPackage = () => {
    navigate("/EditHolidayPackage");
  };

 

  useEffect(() => {
    const updateSrollYPosition = () => {
      setScrollYValue(window.scrollY);
    };
    window.addEventListener("scroll", updateSrollYPosition);

    return () => window.removeEventListener("scroll", updateSrollYPosition);
  });

 
  const handlePayment = (e) => {
    e.preventDefault();
    const data = {_id:reducerState?.logIn?.loginData?.data?.data?.id, amount: amount };

    // axios
    //   .post("http://localhost:8000/updateBalance", data)
    //   .then((res) => {
    //     console.log(res.data);
    //     handleRazorpay(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    handleRazorpay(data);

    // alert(amount);
    setAmount("");
    handleCloseModal();
    
  };

  const handleRazorpay = (data) => {
    console.log("handleRazorpay called");
    const options = {
      key: "rzp_test_rSxJ8wZCLzTJck",
      amount: amount * 100,
      currency: "INR",
      name: "The SkyTrails",
      description: "Test Transaction",
      image: STLOGO,
      order_id: data.id,
      handler: function (response) {
        console.log(response);
         // Check if the Razorpay payment is successful
      if (response.razorpay_payment_id) {
        // Payment was successful, now update the user's balance
        const paymentData = {
          _id: reducerState?.logIn?.loginData?.data?.data?.id,
          amount: amount,
        };

        axios
          .post("http://localhost:8000/updateBalance", paymentData)
          .then((balanceUpdateResponse) => {
            console.log("new data response",balanceUpdateResponse);

            // Handle any further actions after a successful payment and database update
          })
          .catch((balanceUpdateError) => {
            console.error("Error updating user balance:", balanceUpdateError);
            // Handle the error from the database update, if needed.
          });
          // console.log(response)
          const paymentVerifyData = {
            razorpay_order_id: response.data.id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: data.razorpay_signature,
          };

          console.log("paymentVeriy", paymentVerifyData)

  
          axios
            .post("http://localhost:8000/payVerify", paymentVerifyData)
            .then((verificationResponse) => {
              console.log(verificationResponse.data);
  
              // Handle any further actions after a successful payment verification
              // You can update the user's balance here if the payment was successful
            })
            .catch((verificationError) => {
              console.error("Error verifying payment:", verificationError);
              // Handle the error from the payment verification, if needed.
            });
      } else {
        // Payment was not successful, handle it as needed
        console.log("Razorpay payment was not successful");
        // Handle the unsuccessful payment scenario, e.g., display an error message.
      }
      },
    };
    // console.log("option data", options)
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  //get user detail for update balance 
  const userId=reducerState?.logIn?.loginData?.data?.data?.id

  useEffect(() => {
    // Make a GET request to the API endpoint
    axios.get(`http://localhost:8000/travvolt/user/${userId}`)
      .then((response) => {
        // Handle the response data
        const user = response.data.data;
        setUserData(user);
        console.log("user data",response?.data?.data?.balance)
      })
      .catch((error) => {
        console.error(error);
        // Handle errors, e.g., display an error message
      });
  }, []);
  return (
    <div className={scrollYvalue > 45 ? "header_scroll" : "header"}>
      <div>
        <a href="/">
          <img
            src={STLOGO}
            style={{ width: "90%", height: "70px" }}
            className="mt-2 ms-2"
            alt="logo"
          />
        </a>
      </div>

      <div className="welcome">
        <p>Contect Your Representative</p>
        <p className="welPrice">
          Cash Balance: ₹ {userData?.balance}
        </p>
        <button onClick={handleOpenModal}>Recharge</button>

        <div style={{ marginBottom: "25px", height: "60px",display:'flex'}}>
          <Box marginTop={3}>
            <Typography
              sx={{
                color: "#2525250",
                fontSize: "15px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Welcome{" "}
            </Typography>
            <Typography
              sx={{
                color: "#0052D0",
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {reducerState?.logIn?.loginData?.data?.data?.username}
            </Typography>
          </Box>
          <ArrowDropDownIcon
            onClick={handleClick}
            id="menu"
            aria-controls={open ? "menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            cursor="pointer"
            style={{marginTop:'24px',marginRight:'20px'}}
          />
        </div>

        <div
          style={{
            marginLeft: "-25px",
          }}
        >
         

          
          <Menu
            id="menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleSubmit}>
              {reducerState?.logIn?.loginData?.data?.data ? "Logout" : "Login"}
            </MenuItem>
            <MenuItem onClick={editPackage}>My Package</MenuItem>
          </Menu>
        </div>
      </div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-1rem",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              style={{
                cursor: "pointer",
                textDecoration: "none", // Remove underline by default
                transition: "text-decoration 0.3s ease", // Smooth transition
              }}
            >
              Enter Payment Detail
            </Typography>

            <CloseIcon
              onClick={handleCloseModal}
              style={{ cursor: "pointer" }}
            />
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Paper
              elevation={3}
              style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
            >
              <form onSubmit={handlePayment}>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <FormLabel>Name</FormLabel>
                  <OutlinedInput
                    type="text"
                    value={
                      reducerState?.logIn?.loginData?.data?.data?.username || ""
                    }
                    readOnly
                    sx={{ width: "100%" }}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <FormLabel>Email address</FormLabel>
                  <OutlinedInput
                    type="email"
                    value={
                      reducerState?.logIn?.loginData?.data?.data?.email || ""
                    }
                    readOnly
                    placeholder="Enter your email"
                    sx={{ width: "100%" }}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 6 }}>
                  <FormLabel>Amount</FormLabel>
                  <OutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    sx={{ width: "100%" }}
                  />
                </FormControl>

                <Box display="flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ margin: 0.1 }}
                  >
                    Recharge Wallet
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleCloseModal}
                    sx={{ margin: 0.5, backgroundColor: "red", margin: 0.1 }}
                  >
                    Cancel
                  </Button>
                </Box>
                <span style={{color:"red"}}>{reducerState?.logIn?.loginData?.data?.data?.id}</span>
              </form>
            </Paper>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default Header;
