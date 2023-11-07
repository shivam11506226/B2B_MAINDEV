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
import "./registration.css";
import logo from "../../../src/Images/ST-Main-Logo.png";
import color from "../../color/color";
import newbanner from "../../../src/Images/newBanner1.jpg"
import r1 from "../../Images/regestration/r1.svg"
import r2 from "../../Images/regestration/r2.svg"
import r3 from "../../Images/regestration/r3.svg"
import r4 from "../../Images/regestration/r4.svg"
import r5 from "../../Images/regestration/r5.svg"

const Login = () => {
  const [agencyPage, setAgencyPage] = useState(1);
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pan, setPan] = useState("");
  const [personalDetail, setPersonalDetails] = useState(
    {

      first_name: '',
      last_name: '',
      email: '',
      mobile: {
        country_code: "+91",
        mobile_number: '',
      },

      address_details: {
        residential_address: '',
        address_2: '',
        telephone_number: '',
        pincode: '',
        country: '',
        state: '',
        city: '',
      },
      password: '',
    },

  )
  const [agencyDetails, setAgencyDetails] = useState({
    agency_name: "",
    pan_number: "",
    agency_mobile: {
      country_code: "+91",
      mobile_number: "",
    },
    address: "",
    address_2: "",
    fax: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    business_type: "Solo Proprietor",
    office_space: "Owned",
    IATA_registration_id: "Yes",
    IATA_code: "",
    TDS: "",
    TDS_percentage: "",
    references: "",
    consolidators: "",
    remarks: "",
    // document_details: {
    //   pan_card_document: formData.append('file', file),
    // },
  },)
  const [agencyGSTDetails, setAgency_GSTDetails] = useState({
    agency_name: "",
    agency_classification: "Resistered",
    agency_GSTIN: "",
    state: "",
    state_code: "",
    provisional_GSTIN: "",
    contact_person: "",
    phone_number: "",
    telephone_number: "",
    email: "",
    correspondance_mail_id: "",
    GST_registration_status: "",
    HSN_SAC_code: "",
    composition_levy: "Yes",
    address_line1: "",
    address_line2: "",
    pincode: "",
    agency_city: "",
    supply_type: "Tax",
  },)

  useEffect(() => {
    if (reducerState?.logIn?.loginData?.data?.data) {
      navigate("/");
    }
  }, [reducerState, navigate]);
  function handlePersonalDetail(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.warn(formData, "from");

  }

  function handleSubmit(event) {
    event.preventDefault();


    // console.warn("File " + file)

    // console.log("File", file);

    // const formData = new FormData(event.target);

    const payload = {

      personal_details: personalDetail,
      agency_details: agencyDetails,
      agency_gst_details: agencyGSTDetails
    };
    // console.warn(personalDetail, "personalDetail", agencyDetails, "agencyDetails", agencyGSTDetails, "agencyGSTDetails", payload, "payload")
    const formData1 = new FormData();
    formData1.append("file", pan);
    formData1.append("data", JSON.stringify(payload));
    console.warn(payload, "payload@@@@@@@@@@@@@@@@@@@@@@")
    dispatch(signUpAction({ file: pan, data: JSON.stringify(payload) }));
  }

  return (
    <React.Fragment>
      <div className="registrationNNContainer">
        {/* step by step updating part */}

        <Box>
          <div>
            <Grid container px={10} py={15}>
              <Grid item xs={12} sm={12} lg={9} mb={5}>
                <Box
                  display="flex"
                  justifyContant="center"
                  alignItems="center"
                  textAlign="center"
                  marginTop="10px"
                  font="Quicksand, Bold"
                >
                  <Box
                    sx={{
                      width: "200px",
                      height: "69px",
                    }}
                  >
                    <img src={logo} style={{ width: "100%" }}></img>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                lg={3}
                display="flex"
                justifyContent="end"
                alignItems="center"
                mb={5}
              >
                <Box textAlign="right">
                  <form onClick={(e)=>{
                    e.preventDefault()
                    navigate("/Login")}}>
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
                        Login
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Grid>
              {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

              <Grid item xs={12} sm={12} lg={12}>
                <Box style={{ width: "100%", justifyContent: 'center', alignItems: 'center', display: 'flex' }}>


                  <Box style={{ width: '870px', height: '77px', background: '#22344F', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                    <Typography
                      sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                      style={{ color: "white" }}
                    >
                      Agent Registration
                    </Typography>
                  </Box>
                </Box>
                <Box style={{ width: "100%", justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: "30px" }}>


                  <Button border={agencyPage === 1 ? "1px solid blue" : "1px solid blue"} onClick={() => setAgencyPage(1)} style={{ width: '400px', height: '50px', background: '#FFFFFF', justifyContent: 'center', alignItems: 'center', display: 'flex', border: agencyPage === 1 ? "1px solid blue" : '1px solid #D9D9D9' }}>

                    <Typography
                      sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                      style={{ color: "#000000" }}
                    >
                      Personal Details
                    </Typography>
                  </Button>
                  <Button onClick={() => setAgencyPage(2)} style={{ width: '400px', height: '50px', background: '#FFFFFF', justifyContent: 'center', alignItems: 'center', display: 'flex', border: agencyPage === 2 ? "1px solid blue" : '1px solid #D9D9D9' }}>

                    <Typography
                      sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                      style={{ color: "#000000" }}
                    >
                      Agency Details
                    </Typography>
                  </Button>
                  <Button onClick={() => setAgencyPage(3)} style={{ width: '400px', height: '50px', background: '#FFFFFF', justifyContent: 'center', alignItems: 'center', display: 'flex', border: agencyPage === 3 ? "1px solid blue" : '1px solid #D9D9D9' }}>

                    <Typography
                      sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                      style={{ color: "#000000" }}
                    >
                      Agency GST Details
                    </Typography>
                  </Button>
                </Box>

                <Paper
                  className="paper_pin"
                  style={{ height: "100%", width: "100%", borderRadius: "20px", marginTop: "10px" }}
                >
                  {reducerState.signUp?.showSuccessMessage && (
                    <Alert severity="success">
                      Thankyou ! for Registering, we'll contact you ASAP
                    </Alert>
                  )}
                  <Box display='flex' style={{ height: "100%", justifyContant: 'center', alignItems: 'center' }} >
                    {agencyPage === 1 && <Box flex={1} style={{display:"flex" ,justifyContant: 'center', alignItems: 'center' }} >
                      <img src={r1} alt="r1" />
                    </Box>}
                    {agencyPage === 2 && <Box flex={1} style={{height:'100%', justifyContant: 'center', alignItems: 'space-between', }} >
                      <Box style={{height:'50%', justifyContant: 'center', alignItems: 'center'}}>

                      <img src={r2} alt="r1" />
                      </Box>
                      <Box>
                      <img src={r3} alt="r1" />

                    
                      </Box>
                    </Box>}
                    {agencyPage === 3 && <Box flex={1} style={{height:'100%', justifyContant: 'center', alignItems: 'space-between'}} >
                      <Box style={{height:'50%', justifyContant: 'center', alignItems: 'center' }}>

                      <img src={r4} alt="r1"  />
                      </Box>
                      <Box>
                      <img src={r5} alt="r1" />

                    
                      </Box>
                    </Box>}
                    
                    
                    <Box flex={1}>


                      <form onSubmit={handlePersonalDetail}>
                        {agencyPage === 1 && <div
                          className="registrationContainer"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "10px",
                            padding: "20px",
                            backgroundSize: "100% 100%",
                          }}
                        >
                          {/* <img src={newbanner} alt="" style={{width:"100%",background:"cover",height:"300px",opacity:"0.8"}}/> */}
                          <Box>

                            <Typography
                              sx={{
                                fontSize: "22px",
                                fontWeight: "bold",
                              }}
                              style={{ color: '#1E1E1E' }}
                            >
                              Personal Details
                            </Typography>
                            <div>
                              <Grid
                                container
                                spacing={2}
                                display="flex"
                                justifyContent="center"
                                p={3}
                              >
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input" mx={2}>
                                      <label
                                        htmlFor="first_name"
                                        className="form_lable"
                                      >
                                        First Name*
                                      </label>
                                      <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        placeholder=" Enter First Name"
                                        className="input_size"
                                        value={personalDetail.first_name}
                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, first_name: e.target.value

                                        })}

                                        required
                                      />
                                    </div>
                                    <div className="form_input" mx={2}>
                                      <label className="form_lable">
                                        Last Name*
                                      </label>
                                      <input
                                        type="text"
                                        name="last_name"
                                        placeholder=" Enter Last Name"
                                        className="input_size"
                                        required
                                        value={personalDetail.last_name}

                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, last_name: e.target.value

                                        })}
                                      />
                                    </div>
                                    {/* <div className="form_input">
                                      <label className="form_lable">
                                        Residential Address*
                                      </label>
                                      <input
                                        type="text"
                                        name="residential_address"
                                        placeholder="Residential Address"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}
                                  </Box>
                                </Grid>

                                {/* <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Pin Code*
                                      </label>
                                      <input
                                        type="number"
                                        name="pincode"
                                        placeholder=" Enter Pin Code"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                    <div className="form_input" mx={2}>
                                      <label className="form_lable">
                                        State/Province*
                                      </label>
                                      <input
                                        type="text"
                                        name="state"
                                        placeholder=" State"
                                        className="input_size"
                                        required
                                      />
                                    </div>

                                    <div className="form_input" mx={2}>
                                      <label className="form_lable">
                                        Mobile Number
                                      </label>
                                      <input
                                        type="text"
                                        name="mobile_number"
                                        placeholder="+91"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                </Grid> */}
                                <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    Address
                                  </Typography>
                                </Grid>

                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Residential Address*
                                      </label>
                                      <input
                                        type="text"
                                        name="residential_address"
                                        placeholder="Residential Address"
                                        className="input_size"
                                        required
                                        value={personalDetail.address_details.residential_address}
                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, address_details: {
                                            ...personalDetail.address_details
                                            , residential_address: e.target.value
                                          }
                                        })}
                                      />
                                    </div>
                                    {/* <div className="form_input">
                                      <label className="form_lable">City*</label>
                                      <input
                                        type="text"
                                        name="city"
                                        placeholder=" Enter Your City"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}

                                    {/* <div className="form_input">
                                      <label className="form_lable">
                                        Password*
                                      </label>
                                      <input
                                        type="text"
                                        name="password"
                                        placeholder="Enter Your Password"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}
                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        {" "}
                                        Address 2
                                      </label>
                                      <input
                                        type="text"
                                        name="address_2"
                                        placeholder=" Enter Address 2"
                                        className="input_size"
                                        value={personalDetail.address_details.address_2}
                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, address_details: {
                                            ...personalDetail.address_details
                                            , address_2: e.target.value
                                          }
                                        })}
                                      />
                                    </div>



                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    {/* <div className="form_input">
                                      <label className="form_lable">
                                        Pin Code*
                                      </label>
                                      <input
                                        type="number"
                                        name="pincode"
                                        placeholder=" Enter Pin Code"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}

                                    <div className="form_input">
                                      <label className="form_lable">City*</label>
                                      <input
                                        type="text"
                                        name="city"
                                        placeholder=" Enter Your City"
                                        className="input_size"
                                        required

                                        value={personalDetail.address_details.city}
                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, address_details: {
                                            ...personalDetail.address_details
                                            , city: e.target.value
                                          }
                                        })}
                                      />
                                    </div>

                                    <div className="form_input" mx={2}>
                                      <label className="form_lable">
                                        State/Province*
                                      </label>
                                      <input
                                        type="text"
                                        name="state"
                                        placeholder=" State"
                                        className="input_size"
                                        required

                                        value={personalDetail.address_details.state}
                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, address_details: {
                                            ...personalDetail.address_details
                                            , state: e.target.value
                                          }
                                        })}
                                      />
                                    </div>


                                  </Box>
                                </Grid>


                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Pin Code*
                                      </label>
                                      <input
                                        type="number"
                                        name="pincode"
                                        placeholder=" Enter Pin Code"
                                        className="input_size"
                                        required
                                        value={personalDetail.address_details.pincode}
                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, address_details: {
                                            ...personalDetail.address_details
                                            , pincode: e.target.value
                                          }
                                        })}

                                      />
                                    </div>
                                    {/* <div className="form_input">
                                      <label className="form_lable">Email*</label>
                                      <input
                                        type="email"
                                        name="email"
                                        placeholder=" Enter Your Email"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}
                                    {/* <div className="form_input">
                                      <label className="form_lable">
                                        {" "}
                                        TelePhone Number{" "}
                                      </label>
                                      <input
                                        type="number"
                                        name="telephone_number"
                                        placeholder=" Enter Your TelePhone Number"
                                        className="input_size"
                                      />
                                    </div> */}

                                    <div className="form_input">
                                      <label className="form_lable">Country*</label>
                                      <input
                                        type="text"
                                        name="country"
                                        placeholder=" Enter Your Country"
                                        className="input_size"
                                        required

                                        value={personalDetail.address_details.country}
                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, address_details: {
                                            ...personalDetail.address_details
                                            , country: e.target.value
                                          }
                                        })}
                                      />
                                    </div>
                                    {/* <div className="form_input" mx={2}>
                                      <label className="form_lable">
                                        Mobile Number
                                      </label>
                                      <input
                                        type="text"
                                        name="mobile_number"
                                        placeholder="+91"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}
                                  </Box>
                                </Grid>

                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    {/* <div className="form_input">
                                      <label className="form_lable">
                                        Pin Code*
                                      </label>
                                      <input
                                        type="number"
                                        name="pincode"
                                        placeholder=" Enter Pin Code"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}
                                    {/* <div className="form_input">
                                      <label className="form_lable">Email*</label>
                                      <input
                                        type="email"
                                        name="email"
                                        placeholder=" Enter Your Email"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}
                                    <div className="form_input">
                                      <label className="form_lable">
                                        {" "}
                                        TelePhone Number{" "}
                                      </label>
                                      <input
                                        type="number"
                                        name="telephone_number"
                                        placeholder=" Enter Your TelePhone Number"
                                        className="input_size"

                                        value={personalDetail.address_details.telephone_number}
                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, address_details: {
                                            ...personalDetail.address_details
                                            , telephone_number: e.target.value
                                          }
                                        })}
                                      />
                                    </div>

                                    {/* <div className="form_input">
                                      <label className="form_lable">Country*</label>
                                      <input
                                        type="text"
                                        name="country"
                                        placeholder=" Enter Your Country"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}
                                    <div className="form_input" mx={2}>
                                      <label className="form_lable">
                                        Mobile Number
                                      </label>
                                      <input
                                        type="text"
                                        name="mobile_number"
                                        placeholder="+91"
                                        className="input_size"
                                        required

                                        value={personalDetail.mobile.mobile_number}

                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, mobile: {
                                            country_code: "+91",
                                            mobile_number: e.target.value,

                                          }
                                        })}
                                      />
                                    </div>
                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    Contact Information
                                  </Typography>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    {/* <div className="form_input">
                                      <label className="form_lable">
                                        Pin Code*
                                      </label>
                                      <input
                                        type="number"
                                        name="pincode"
                                        placeholder=" Enter Pin Code"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}
                                    <div className="form_input">
                                      <label className="form_lable">Email*</label>
                                      <input
                                        type="email"
                                        name="email"
                                        placeholder=" Enter Your Email"
                                        className="input_size"
                                        required
                                        value={personalDetail.email}
                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, email: e.target.value

                                        })}
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Password*
                                      </label>
                                      <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter Your Password"
                                        className="input_size"
                                        required
                                        value={personalDetail.password}
                                        onChange={(e) => setPersonalDetails({
                                          ...personalDetail, password: e.target.value
                                        }
                                        )}
                                      />
                                    </div>
                                    {/* <div className="form_input">
                                      <label className="form_lable">
                                        {" "}
                                        TelePhone Number{" "}
                                      </label>
                                      <input
                                        type="number"
                                        name="telephone_number"
                                        placeholder=" Enter Your TelePhone Number"
                                        className="input_size"
                                      />
                                    </div> */}

                                    {/* <div className="form_input">
                                      <label className="form_lable">Country*</label>
                                      <input
                                        type="text"
                                        name="country"
                                        placeholder=" Enter Your Country"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}
                                    {/* <div className="form_input" mx={2}>
                                      <label className="form_lable">
                                        Mobile Number
                                      </label>
                                      <input
                                        type="text"
                                        name="mobile_number"
                                        placeholder="+91"
                                        className="input_size"
                                        required
                                      />
                                    </div> */}
                                  </Box>
                                </Grid>
                                <Grid width="100%" display='flex' justifyContent="flex-end"
                                  alignItems="flex-end" >
                                  <Button onClick={() => {
                                    setAgencyPage(2)
                                    console.warn(personalDetail, "personalDetail3333333333333333333333333333333333333")
                                  }} style={{
                                    backgroundColor: '#21325D',
                                    width: '140px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FFFFFF',
                                    fontSize: '16px',
                                    fontWeight: '600',

                                  }}>Next </Button>
                                </Grid>
                              </Grid>
                            </div>
                          </Box>
                        </div>}
                      </form>
                      <form onSubmit={handleSubmit}>
                        {agencyPage === 2 && <div
                          className="registrationContainer"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "10px",
                            padding: "20px",
                            backgroundSize: "100% 100%",
                          }}
                        >
                          <Box>

                            <Typography
                              sx={{
                                fontSize: "22px",
                                fontWeight: "bold",
                              }}
                              style={{ color: '#1E1E1E' }}
                            >
                              Agency Details
                            </Typography>
                            <div>
                              <Grid
                                container
                                spacing={2}
                                display="flex"
                                justifyContent="center"
                                p={3}
                              >
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Agency Name*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_name"
                                        placeholder=" Enter Agency Name"
                                        className="input_size"
                                        required
                                        value={agencyDetails.agency_name}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, agency_name: e.target.value })}

                                      />
                                    </div>
                                    <div className="form_input" mx={2}>
                                      <label className="form_lable">
                                        Last Name*
                                      </label>
                                      <input
                                        type="text"
                                        // name="last_name"
                                        placeholder=" Enter Last Name"
                                        className="input_size"
                                        required
                                      />
                                    </div>

                                  </Box>
                                </Grid>


                                <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    Agency Address
                                  </Typography>
                                </Grid>

                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Address line 1
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_address"
                                        placeholder="Residential Address"
                                        className="input_size"
                                        required
                                        value={agencyDetails.address}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, address: e.target.value })}
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        {" "}
                                        Address line 2
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_address_2"
                                        placeholder=" Enter Address 2"
                                        className="input_size"
                                        value={agencyDetails.address_2}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, address_2: e.target.value })}
                                      />
                                    </div>

                                  </Box>
                                </Grid>

                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >


                                    <div className="form_input">
                                      <label className="form_lable">City*</label>
                                      <input
                                        type="text"
                                        name="agency_city"
                                        placeholder=" Enter Your City"
                                        className="input_size"
                                        required

                                        value={agencyDetails.city}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, city: e.target.value })}
                                      />
                                    </div>

                                    <div className="form_input" mx={2}>
                                      <label className="form_lable">
                                        State/Province*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_state"
                                        placeholder=" State"
                                        className="input_size"
                                        required
                                        value={agencyDetails.state}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, state: e.target.value })}
                                      />
                                    </div>


                                  </Box>
                                </Grid>


                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Pin Code*
                                      </label>
                                      <input
                                        type="number"
                                        name="agency_pincode"
                                        placeholder=" Enter Pin Code"
                                        className="input_size"
                                        required
                                        value={agencyDetails.pincode}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, pincode: e.target.value })}
                                      />
                                    </div>


                                    <div className="form_input">
                                      <label className="form_lable">Country*</label>
                                      <input
                                        type="text"
                                        name="agency_country"
                                        placeholder=" Enter Your Country"
                                        className="input_size"
                                        required
                                        value={agencyDetails.country}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, country: e.target.value })}
                                      />
                                    </div>

                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    Contact Information
                                  </Typography>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        {" "}
                                        TelePhone Number{" "}
                                      </label>
                                      <input
                                        type="number"
                                        name="telephone_number"
                                        placeholder=" Enter Your TelePhone Number"
                                        className="input_size"
                                        value={agencyDetails.agency_mobile.telephone_number}
                                        onChange={(e) => setAgencyDetails({
                                          ...agencyDetails, agency_mobile: {

                                            country_code: "+91",
                                            mobile_number: e.target.value,

                                          }
                                        })}
                                      />
                                    </div>


                                    <div className="form_input" mx={2}>
                                      <label className="form_lable">
                                        Mobile Number
                                      </label>
                                      <input
                                        type="number"
                                        name="agency_mobile_number"
                                        placeholder=" Enter Mobile No."
                                        className="input_size"
                                        required
                                        value={agencyDetails.agency_mobile.mobile_number}
                                        onChange={(e) => setAgencyDetails({
                                          ...agencyDetails, agency_mobile: {

                                            country_code: "+91",
                                            mobile_number: e.target.value,

                                          }
                                        })}


                                      />
                                    </div>
                                  </Box>
                                </Grid>

                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >

                                    <div className="form_input">
                                      <label className="form_lable">
                                        Correspondance Mail Id
                                      </label>
                                      <input
                                        name="agency_gst_details_correspondance_mail_id"
                                        type="email"
                                        placeholder=" Enter Your Correspondance Mail Id"
                                        className="input_size"
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Password*
                                      </label>
                                      <input
                                        type="text"
                                        name="password"
                                        placeholder="Enter Your Password"
                                        className="input_size"
                                        required
                                      />
                                    </div>

                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    PAN Information
                                  </Typography>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >

                                    <div className="form_input">
                                      <label className="form_lable">PAN*</label>
                                      <input

                                        name="pan_card_document"
                                        id="pan_card_document"
                                        type="file"
                                        className="input_size"
                                        required
                                        style={{ padding: "10px" }}
                                        onChange={(e) => setPan(e.target.files[0])}

                                      />
                                    </div>

                                    <div className="form_input">
                                      <label className="form_lable">
                                        PAN Number*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_pan_number"
                                        placeholder=" Enter PAN Number"
                                        className="input_size"
                                        required
                                        value={agencyDetails.pan_number}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, pan_number: e.target.value })}
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">Fax*</label>
                                      <input
                                        type="number"
                                        name="agency_fax"
                                        placeholder=" Enter Fax code"
                                        className="input_size"
                                        required
                                        value={agencyDetails.fax}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, fax: e.target.value })}
                                      />
                                    </div>

                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    Business Details
                                  </Typography>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Business Type*
                                      </label>
                                      <select
                                        name="agency_business_type"
                                        id=""
                                        className="form_input_select"

                                        value={agencyDetails.business_type}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, business_type: e.target.value })}
                                      >
                                        <option px={5}>Sole Proprietor</option>
                                        <option mx={5}>Partnership</option>
                                        <option px={5}>Joint Venture</option>
                                        <option px={5}>PVT LTD. CO.</option>
                                        <option mx={5}>HUF</option>
                                        <option px={5}>Limited</option>
                                      </select>
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        TDS*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_TDS"
                                        className="input_size"
                                        placeholder="TDS"
                                        aria-label="Text input with segmented dropdown button"

                                        value={agencyDetails.TDS}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, TDS: e.target.value })}
                                      />
                                    </div>

                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        TDS(% for exemption)*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_TDS_percentage"
                                        className="input_size"
                                        placeholder="TDS(% for exemption)"
                                        aria-label="Text input with segmented dropdown button"
                                        value={agencyDetails.TDS_percentage}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, TDS_percentage: e.target.value })}
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        IATA Code*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_IATA_code"
                                        placeholder="IATA Code"
                                        required
                                        className="input_size"
                                        value={agencyDetails.IATA_code}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, IATA_code: e.target.value })}


                                      />
                                    </div>

                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    References and Consolidations
                                  </Typography>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        References: (optional)
                                      </label>
                                      <textarea
                                        name="agency_references"
                                        className="form-control Input_box"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={agencyDetails.references}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, references: e.target.value })}
                                      ></textarea>
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Consolidators: (optional)
                                      </label>
                                      <textarea
                                        name="agency_consolidators"
                                        className="form-control Input_box"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={agencyDetails.consolidators}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, consolidators: e.target.value })}
                                      ></textarea>
                                    </div>

                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    Remarks
                                  </Typography>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Remarks:(optional)
                                      </label>
                                      <textarea
                                        className="form-control Input_box"
                                        name="agency_remarks"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={agencyDetails.remarks}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, remarks: e.target.value })}
                                      ></textarea>
                                    </div>

                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="center">  <div
                                  style={{
                                    display: "flex",
                                    margin: "auto",
                                    gap: "20px",
                                    marginLeft: "20px",
                                  }}
                                >
                                  <Box py={2} style={{ padding: "-10px" }}>
                                    <FormControl display="flex">
                                      <FormLabel
                                        id="demo-row-radio-buttons-group-label"
                                        sx={{ color: "black", fontWeight: "bold" }}
                                      >
                                        Office Space
                                      </FormLabel>
                                      <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={agencyDetails.office_space}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, office_space: e.target.value })}
                                      >
                                        <FormControlLabel
                                          value="Owned"
                                          control={<Radio />}
                                          label="Owned"
                                        />
                                        <FormControlLabel
                                          value="Rental"
                                          control={<Radio />}
                                          label="Rental"
                                        />
                                      </RadioGroup>
                                    </FormControl>
                                  </Box>
                                  <Box py={2}>
                                    <FormControl display="flex">
                                      <FormLabel
                                        id="demo-row-radio-buttons-group-label"
                                        sx={{ color: "black", fontWeight: "bold" }}
                                      >
                                        IATA Registerd
                                      </FormLabel>
                                      <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={agencyDetails.IATA_registration_id}
                                        onChange={(e) => setAgencyDetails({ ...agencyDetails, IATA_registration_id: e.target.value })}
                                      >
                                        <FormControlLabel
                                          value="Yes"
                                          control={<Radio />}
                                          label="Yes"
                                        />
                                        <FormControlLabel
                                          value="No"
                                          control={<Radio />}
                                          label="No"
                                        />
                                      </RadioGroup>
                                    </FormControl>
                                  </Box>
                                </div></Grid>

                                <Grid width="100%" display='flex' justifyContent="space-between"
                                  alignItems="center"  >
                                  <Button onClick={() => setAgencyPage(1)} style={{
                                    backgroundColor: '#A2B4C1',
                                    width: '140px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FFFFFF',
                                    fontSize: '16px',
                                    fontWeight: '600',

                                  }}>{`< Back`} </Button>
                                  <div
                                    style={{}}
                                  >
                                    <Button
                                      onClick={() => {
                                        console.warn(pan, "agencyDetails$$$$$$$$$$$$$$$$$$$$$$s")

                                        setAgencyPage(3)
                                      }}
                                      variant="contained"
                                      style={{
                                        backgroundColor: '#21325D',
                                        width: '140px',
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#FFFFFF',
                                        fontSize: '16px',
                                        fontWeight: '600',

                                      }}
                                    >
                                      Next
                                    </Button>
                                  </div>
                                </Grid>
                              </Grid>
                            </div>
                          </Box>
                          {/* ##################################################################### */}
                          {/* <Box>

                            <Typography
                              sx={{
                                fontSize: "22px",
                                fontWeight: "bold",
                              }}
                              style={{ color: '#1E1E1E' }}
                            >
                              Agency Details
                            </Typography>

                            <div>
                              <Grid
                                container
                                spacing={2}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                textAlign="center"
                                p={3}
                                columns={2}
                              >
                                <Grid
                                  item
                                  width='100%'
                                  alignItems="center"
                                >
                                  <Box py={2} >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        First Name*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_name"
                                        placeholder=" Enter Agency Name"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Last Name*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_name"
                                        placeholder=" Enter Agency Name"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                              
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">PAN*</label>
                                      <input
                                        name="pan_card_document"
                                        id="pan_card_document"
                                        type="file"
                                        className="input_size"
                                        required
                                        style={{ padding: "10px" }}
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Agency Address*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_address"
                                        placeholder=" Enter Agency Address"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Pin Code*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_pincode"
                                        placeholder=" Enter Your Pin Code"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">City*</label>
                                      <input
                                        type="text"
                                        name="agency_city"
                                        placeholder=" Enter Your City"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                 

                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        TDS(% for exemption)*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_TDS_percentage"
                                        className="input_size"
                                        placeholder="TDS(% for exemption)"
                                        aria-label="Text input with segmented dropdown button"
                                      />
                                    </div>
                                  </Box>

                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Consolidators: (optional)
                                      </label>
                                      <textarea
                                        name="agency_consolidators"
                                        className="form-control Input_box"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                  </Box>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={4}
                                  alignItems="center"
                                >
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        PAN Number*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_pan_number"
                                        placeholder=" Enter PAN Number"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Address 2
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_address_2"
                                        placeholder=" Enter Your Address 2"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">Country*</label>
                                      <input
                                        type="text"
                                        name="agency_country"
                                        placeholder=" Enter Your Country"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Business Type*
                                      </label>
                                      <select
                                        name="agency_business_type"
                                        id=""
                                        className="form_input_select"
                                      >
                                        <option px={5}>Sole Proprietor</option>
                                        <option mx={5}>Partnership</option>
                                        <option px={5}>Joint Venture</option>
                                        <option px={5}>PVT LTD. CO.</option>
                                        <option mx={5}>HUF</option>
                                        <option px={5}>Limited</option>
                                      </select>
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        IATA Code*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_IATA_code"
                                        placeholder="IATA Code"
                                        required
                                        className="input_size"
                                      />
                                    </div>
                                  </Box>

                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Remarks:(optional)
                                      </label>
                                      <textarea
                                        className="form-control Input_box"
                                        name="agency_remarks"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                  </Box>
                                </Grid>
                              </Grid>
                              <div
                                style={{
                                  display: "flex",
                                  margin: "auto",
                                  gap: "20px",
                                  marginLeft: "20px",
                                }}
                              >
                                <Box py={2} style={{ padding: "-10px" }}>
                                  <FormControl display="flex">
                                    <FormLabel
                                      id="demo-row-radio-buttons-group-label"
                                      sx={{ color: "black", fontWeight: "bold" }}
                                    >
                                      Office Space
                                    </FormLabel>
                                    <RadioGroup
                                      row
                                      aria-labelledby="demo-row-radio-buttons-group-label"
                                      name="row-radio-buttons-group"
                                    >
                                      <FormControlLabel
                                        value="Owned"
                                        control={<Radio />}
                                        label="Owned"
                                      />
                                      <FormControlLabel
                                        value="Rental"
                                        control={<Radio />}
                                        label="Rental"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </Box>
                                <Box py={2}>
                                  <FormControl display="flex">
                                    <FormLabel
                                      id="demo-row-radio-buttons-group-label"
                                      sx={{ color: "black", fontWeight: "bold" }}
                                    >
                                      IATA Registerd
                                    </FormLabel>
                                    <RadioGroup
                                      row
                                      aria-labelledby="demo-row-radio-buttons-group-label"
                                      name="row-radio-buttons-group"
                                    >
                                      <FormControlLabel
                                        value="Yes"
                                        control={<Radio />}
                                        label="Yes"
                                      />
                                      <FormControlLabel
                                        value="No"
                                        control={<Radio />}
                                        label="No"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </Box>
                              </div>
                            </div>
                          </Box> */}
                        </div>}
                        {agencyPage === 3 && <div
                          className="registrationContainer"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "10px",
                            padding: "20px",
                            backgroundSize: "100% 100%",
                          }}
                        >

                          <Box>

                            <Typography
                              sx={{
                                fontSize: "22px",
                                fontWeight: "bold",
                              }}
                              style={{ color: '#1E1E1E' }}
                            >
                              Agency GST Details
                            </Typography>
                            <div>
                              <Grid
                                container
                                spacing={2}
                                display="flex"
                                justifyContent="center"
                                p={3}
                              >
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Agency Name
                                      </label>
                                      <input
                                        name="agency_gst_details_agency_name"
                                        type="text"
                                        placeholder=" Enter Agency Name"
                                        className="input_size"
                                        required
                                        value={agencyGSTDetails.agency_name}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, agency_name: e.target.value })}
                                      />
                                    </div>
                                    <div className="form_input" mx={2}>
                                      <label
                                        htmlFor="first_name"
                                        className="form_lable"
                                      >
                                        Last Name*
                                      </label>
                                      <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        placeholder=" Enter First Name"
                                        className="input_size"
                                        required
                                      />
                                    </div>


                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Agency Classificaion*
                                      </label>
                                      <select
                                        className="form_input_select"
                                        name="agency_gst_details_agency_classification"
                                        value={agencyGSTDetails.agency_GSTIN}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, agency_classification: e.target.value })}
                                      >
                                        <option px={5}>Registered</option>
                                        <option mx={5}>Unregistered</option>
                                        <option px={5}>AppliedFor</option>
                                      </select>
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Agency GSTIN
                                      </label>
                                      <input
                                        name="agency_gst_details_agency_GSTIN"
                                        type="text"
                                        placeholder=" Enter Your Agency GSTIN"
                                        className="input_size"
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, agency_GSTIN: e.target.value })}
                                      />
                                    </div>


                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Provisinal GST Number
                                      </label>
                                      <input
                                        name="agency_gst_details_provisional_GSTIN"
                                        type="text"
                                        placeholder=" Enter Your Provisinal GST Number"
                                        className="input_size"
                                        value={agencyGSTDetails.provisional_GSTIN}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, provisional_GSTIN: e.target.value })}
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        State Code*
                                      </label>
                                      <input
                                        name="agency_gst_details_state_code"
                                        type="number"
                                        placeholder=" Enter Your State Code"
                                        className="input_size"
                                        required
                                      />
                                    </div>


                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        GST Registration Status
                                      </label>
                                      <input
                                        name="agency_gst_details_GST_registration_status"
                                        type="text"
                                        placeholder=" Enter GST Registration Status"
                                        className="input_size"
                                        value={agencyGSTDetails.GST_registration_status}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, GST_registration_status: e.target.value })}
                                      />
                                    </div>

                                    <div className="form_input">
                                      <label className="form_lable">Contact  Person*</label>
                                      <input
                                        name="agency_gst_details_contact_person"
                                        type="text"
                                        placeholder=" Enter Your State"
                                        className="input_size"
                                        required
                                        value={agencyGSTDetails.contact_person}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, contact_person: e.target.value })}
                                      />
                                    </div>


                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        HSN/SAC code*
                                      </label>
                                      <input
                                        name="agency_gst_details_HSN_SAC_code"
                                        type="text"
                                        className="input_size"
                                        placeholder="HSN/SAC code"
                                        required
                                        value={agencyGSTDetails.HSN_SAC_code}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, HSN_SAC_code: e.target.value })}
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Supply Type
                                      </label>
                                      <select className="form_input_select" name=""

                                      >
                                        <option mx={5}>Tax</option>
                                        <option px={5}>SEZWOP</option>
                                      </select>
                                    </div>


                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <div className="form_input">
                                    <label className="form_lable">
                                      Composition Levy as per Section 10 of CGST
                                    </label>
                                    <select
                                      name="agency_gst_details_composition_levy"
                                      id=""
                                      className="form_input_select"
                                      value={agencyGSTDetails.composition_levy}
                                      onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, composition_levy: e.target.value })}
                                    >
                                      <option
                                        mx={5}
                                        sx={{
                                          fontSize: "9px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Yes
                                      </option>
                                      <option px={5}>No</option>
                                    </select>
                                  </div>
                                </Grid>


                                <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    Agency Address
                                  </Typography>
                                </Grid>

                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Address Line 1*
                                      </label>
                                      <input
                                        name="agency_gst_details_address_line1"
                                        type="text"
                                        placeholder=" Enter Address Line 1"
                                        className="input_size"
                                        required
                                        value={agencyGSTDetails.address_line1}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, address_line1: e.target.value })}
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Address Line 2*
                                      </label>
                                      <input
                                        name="agency_gst_details_address_line2"
                                        type="text"
                                        className="input_size"
                                        placeholder="Enter Your Address"
                                        value={agencyGSTDetails.address_line2}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, address_line2: e.target.value })}
                                      />
                                    </div>

                                  </Box>
                                </Grid>

                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >


                                    <div className="form_input">
                                      <label className="form_lable">
                                        Agency City*
                                      </label>
                                      <input
                                        name="agency_gst_details_agency_city"
                                        type="text"
                                        placeholder=" Enter Your City"
                                        className="input_size"
                                        required
                                        value={agencyGSTDetails.agency_city}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, agency_city: e.target.value })}
                                      />
                                    </div>

                                    <div className="form_input">
                                      <label className="form_lable">
                                        State*
                                      </label>
                                      <input
                                        name="agency_gst_details_state"
                                        type="text"
                                        placeholder=" Enter Your State Code"
                                        className="input_size"
                                        required
                                        value={agencyGSTDetails.state}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, state: e.target.value })}
                                      />
                                    </div>


                                  </Box>
                                </Grid>


                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Pin Code*
                                      </label>
                                      <input
                                        name="agency_gst_details_pincode"
                                        type="number"
                                        className="input_size"
                                        placeholder=" Enter Pin Code"
                                        value={agencyGSTDetails.pincode}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, pincode: e.target.value })}
                                      />
                                    </div>


                                    <div className="form_input">
                                      <label className="form_lable">Country*</label>
                                      <input
                                        type="text"
                                        name="country"
                                        placeholder=" Enter Your Country"
                                        className="input_size"
                                        required
                                      />
                                    </div>

                                  </Box>
                                </Grid>

                                <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    GST Address Details
                                  </Typography>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Address Line 1*
                                      </label>
                                      <input
                                        name="agency_gst_details_address_line1"
                                        type="text"
                                        placeholder=" Enter Address Line 1"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Address Line 2*
                                      </label>
                                      <input
                                        name="agency_gst_details_address_line2"
                                        type="text"
                                        className="input_size"
                                        placeholder="Enter Your Address"
                                      />
                                    </div>

                                  </Box>
                                </Grid>

                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >


                                    <div className="form_input">
                                      <label className="form_lable">
                                        Agency City*
                                      </label>
                                      <input
                                        name="agency_gst_details_agency_city"
                                        type="text"
                                        placeholder=" Enter Your City"
                                        className="input_size"
                                        required
                                      />
                                    </div>

                                    <div className="form_input">
                                      <label className="form_lable">
                                        State Code*
                                      </label>
                                      <input
                                        name="agency_gst_details_state_code"
                                        type="number"
                                        placeholder=" Enter Your State Code"
                                        className="input_size"
                                        required
                                        value={agencyGSTDetails.state_code}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, state_code: e.target.value })}
                                      />
                                    </div>


                                  </Box>
                                </Grid>


                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Pin Code*
                                      </label>
                                      <input
                                        name="agency_gst_details_pincode"
                                        type="number"
                                        className="input_size"
                                        placeholder=" Enter Pin Code"
                                      />
                                    </div>


                                    <div className="form_input">
                                      <label className="form_lable">Country*</label>
                                      <input
                                        type="text"
                                        name="country"
                                        placeholder=" Enter Your Country"
                                        className="input_size"
                                        required
                                      />
                                    </div>

                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    Contact Information
                                  </Typography>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        {" "}
                                        TelePhone Number{" "}
                                      </label>
                                      <input
                                        type="number"
                                        name="agency_gst_details_telephone_number"
                                        placeholder=" Enter Your TelePhone Number"
                                        className="input_size"
                                        value={agencyGSTDetails.telephone_number}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, telephone_number: e.target.value })}

                                      />
                                    </div>


                                    <div className="form_input" mx={2}>
                                      <label className="form_lable">
                                        Mobile Number
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_gst_details_phone_number"
                                        placeholder="+91"
                                        className="input_size"
                                        required
                                        value={agencyGSTDetails.phone_number}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, phone_number: e.target.value })}
                                      />
                                    </div>
                                  </Box>
                                </Grid>

                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >

                                    <div className="form_input">
                                      <label className="form_lable">Email*</label>
                                      <input
                                        name="agency_gst_details_email"
                                        type="email"
                                        placeholder=" Enter Email Id"
                                        className="input_size"
                                        required
                                        value={agencyGSTDetails.email}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, email: e.target.value })}
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Password*
                                      </label>
                                      <input
                                        type="text"
                                        name="password"
                                        placeholder="Enter Your Password"
                                        className="input_size"
                                        required
                                      />
                                    </div>

                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >

                                    <div className="form_input">
                                      <label className="form_lable">correspondance Email*</label>
                                      <input
                                        name="correspondance_mail_id"
                                        type="email"
                                        placeholder=" Enter Email Id"
                                        className="input_size"
                                        required
                                        value={agencyGSTDetails.correspondance_mail_id}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, correspondance_mail_id: e.target.value })}
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Supply Type
                                      </label>
                                      <select className="form_input_select" name=""
                                        value={agencyGSTDetails.supply_type}
                                        onChange={(e) => setAgency_GSTDetails({ ...agencyGSTDetails, supply_type: e.target.value })}
                                      >
                                        <option mx={5}>Tax</option>
                                        <option px={5}>SEZWOP</option>
                                      </select>
                                    </div>

                                  </Box>
                                </Grid>
                                {/* <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    PAN Information
                                  </Typography>
                                </Grid> */}
                                {/* <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >

                                    <div className="form_input">
                                      <label className="form_lable">PAN*</label>
                                      <input
                                        name="pan_card_document"
                                        id="pan_card_document"
                                        type="file"
                                        className="input_size"
                                        required
                                        style={{ padding: "10px" }}
                                      />
                                    </div>

                                    <div className="form_input">
                                      <label className="form_lable">
                                        PAN Number*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_pan_number"
                                        placeholder=" Enter PAN Number"
                                        className="input_size"
                                        required
                                      />
                                    </div>

                                  </Box>
                                </Grid> */}
                                {/* <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    Business Details
                                  </Typography>
                                </Grid> */}
                                {/* <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Business Type*
                                      </label>
                                      <select
                                        name="agency_business_type"
                                        id=""
                                        className="form_input_select"
                                      >
                                        <option px={5}>Sole Proprietor</option>
                                        <option mx={5}>Partnership</option>
                                        <option px={5}>Joint Venture</option>
                                        <option px={5}>PVT LTD. CO.</option>
                                        <option mx={5}>HUF</option>
                                        <option px={5}>Limited</option>
                                      </select>
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        TDS*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_TDS_percentage"
                                        className="input_size"
                                        placeholder="TDS"
                                        aria-label="Text input with segmented dropdown button"
                                      />
                                    </div>

                                  </Box>
                                </Grid>
                                <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        TDS(% for exemption)*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_TDS_percentage"
                                        className="input_size"
                                        placeholder="TDS(% for exemption)"
                                        aria-label="Text input with segmented dropdown button"
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        IATA Code*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_IATA_code"
                                        placeholder="IATA Code"
                                        required
                                        className="input_size"
                                      />
                                    </div>

                                  </Box>
                                </Grid> */}
                                {/* <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    References and Consolidations
                                  </Typography>
                                </Grid> */}
                                {/* <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        TDS(% for exemption)*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_TDS_percentage"
                                        className="input_size"
                                        placeholder="TDS(% for exemption)"
                                        aria-label="Text input with segmented dropdown button"
                                      />
                                    </div>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        IATA Code*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_IATA_code"
                                        placeholder="IATA Code"
                                        required
                                        className="input_size"
                                      />
                                    </div>

                                  </Box>
                                </Grid> */}
                                {/* <Grid width="100%" alignItems="start">
                                  <Typography
                                    sx={{
                                      fontSize: "22px",
                                      fontWeight: "bold",
                                    }}
                                    style={{ color: '#1E1E1E' }}
                                  >
                                    Remarks
                                  </Typography>
                                </Grid> */}
                                {/* <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Remarks:(optional)
                                      </label>
                                      <textarea
                                        className="form-control Input_box"
                                        name="agency_remarks"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                      ></textarea>
                                    </div>

                                  </Box>
                                </Grid> */}
                                {/* <Grid width="100%" alignItems="center">  <div
                                  style={{
                                    display: "flex",
                                    margin: "auto",
                                    gap: "20px",
                                    marginLeft: "20px",
                                  }}
                                >
                                  <Box py={2} style={{ padding: "-10px" }}>
                                    <FormControl display="flex">
                                      <FormLabel
                                        id="demo-row-radio-buttons-group-label"
                                        sx={{ color: "black", fontWeight: "bold" }}
                                      >
                                        Office Space
                                      </FormLabel>
                                      <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                      >
                                        <FormControlLabel
                                          value="Owned"
                                          control={<Radio />}
                                          label="Owned"
                                        />
                                        <FormControlLabel
                                          value="Rental"
                                          control={<Radio />}
                                          label="Rental"
                                        />
                                      </RadioGroup>
                                    </FormControl>
                                  </Box>
                                  <Box py={2}>
                                    <FormControl display="flex">
                                      <FormLabel
                                        id="demo-row-radio-buttons-group-label"
                                        sx={{ color: "black", fontWeight: "bold" }}
                                      >
                                        IATA Registerd
                                      </FormLabel>
                                      <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                      >
                                        <FormControlLabel
                                          value="Yes"
                                          control={<Radio />}
                                          label="Yes"
                                        />
                                        <FormControlLabel
                                          value="No"
                                          control={<Radio />}
                                          label="No"
                                        />
                                      </RadioGroup>
                                    </FormControl>
                                  </Box>
                                </div></Grid> */}

                                <Grid width="100%" display='flex' justifyContent="space-between"
                                  alignItems="center"  >
                                  <Button onClick={() => setAgencyPage(2)} style={{
                                    backgroundColor: '#A2B4C1',
                                    width: '140px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FFFFFF',
                                    fontSize: '16px',
                                    fontWeight: '600',

                                  }}>{`< Back`} </Button>
                                  <div
                                    style={{}}
                                  >
                                    <Button
                                      // type="submit"
                                      onClick={handleSubmit}
                                      variant="contained"
                                      style={{
                                        backgroundColor: '#21325D',
                                        width: '140px',
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#FFFFFF',
                                        fontSize: '16px',
                                        fontWeight: '600',

                                      }}
                                    >
                                      Submit
                                    </Button>
                                  </div>
                                </Grid>
                              </Grid>
                            </div>
                          </Box>



                          {/* <Box>
                            <Typography
                              sx={{
                                fontSize: "22px",
                                fontWeight: "bold",
                              }}
                              style={{ color: color.bluedark }}
                            >
                              Agency GST Details
                            </Typography>
                            <div>
                              <Grid
                                container
                                spacing={2}
                                display="flex"
                                justifyContent="center"
                                p={3}
                              >
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={4}
                                  alignItems="center"
                                >
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        First Name
                                      </label>
                                      <input
                                        name="agency_gst_details_agency_name"
                                        type="text"
                                        placeholder=" Enter Agency Name"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">State*</label>
                                      <input
                                        name="agency_gst_details_state"
                                        type="text"
                                        placeholder=" Enter Your State"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Contact Person
                                      </label>
                                      <input
                                        name="agency_gst_details_contact_person"
                                        type="text"
                                        placeholder=" Enter Contact Person"
                                        className="input_size"
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">Email*</label>
                                      <input
                                        name="agency_gst_details_email"
                                        type="email"
                                        placeholder=" Enter Email Id"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>

                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        HSN/SAC code*
                                      </label>
                                      <input
                                        name="agency_gst_details_HSN_SAC_code"
                                        type="text"
                                        className="input_size"
                                        placeholder="HSN/SAC code"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Address Line 2*
                                      </label>
                                      <input
                                        name="agency_gst_details_address_line2"
                                        type="text"
                                        className="input_size"
                                        placeholder="Enter Your Address"
                                      />
                                    </div>
                                  </Box>
                                  <Box style={{ display: "flex", margin: "auto", width: "510px", gap: "20px" }}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Supply Type
                                      </label>
                                      <select className="form_input_select" name="">
                                        <option mx={5}>Tax</option>
                                        <option px={5}>SEZWOP</option>
                                      </select>
                                    </div>
                                    <div
                                      style={{ marginTop: "10px" }}
                                    >
                                      <Button
                                        type="submit"
                                        variant="contained"
                                        style={{
                                          backgroundColor: color.bluedark,
                                          color: "white",

                                        }}
                                      >
                                        Submit
                                      </Button>
                                    </div>
                                  </Box>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={4}
                                  alignItems="center"
                                >
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Agency Classificaion*
                                      </label>
                                      <select
                                        className="form_input_select"
                                        name="agency_gst_details_agency_classification"
                                      >
                                        <option px={5}>Registered</option>
                                        <option mx={5}>Unregistered</option>
                                        <option px={5}>AppliedFor</option>
                                      </select>
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        State Code*
                                      </label>
                                      <input
                                        name="agency_gst_details_state_code"
                                        type="number"
                                        placeholder=" Enter Your State Code"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        TelePhone Number
                                      </label>
                                      <input
                                        name="agency_gst_details_telephone_number"
                                        type="text"
                                        placeholder=" Enter Your Number"
                                        className="input_size"
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Correspondance Mail Id
                                      </label>
                                      <input
                                        name="agency_gst_details_correspondance_mail_id"
                                        type="email"
                                        placeholder=" Enter Your Correspondance Mail Id"
                                        className="input_size"
                                      />
                                    </div>
                                  </Box>

                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Composition Levy as per Section 10 of CGST
                                      </label>
                                      <select
                                        name="agency_gst_details_composition_levy"
                                        id=""
                                        className="form_input_select"
                                      >
                                        <option
                                          mx={5}
                                          sx={{
                                            fontSize: "9px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          Yes
                                        </option>
                                        <option px={5}>No</option>
                                      </select>
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Pin Code*
                                      </label>
                                      <input
                                        name="agency_gst_details_pincode"
                                        type="number"
                                        className="input_size"
                                        placeholder=" Enter Pin Code"
                                      />
                                    </div>
                                  </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Agency GSTIN
                                      </label>
                                      <input
                                        name="agency_gst_details_agency_GSTIN"
                                        type="text"
                                        placeholder=" Enter Your Agency GSTIN"
                                        className="input_size"
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Provisinal GST Number
                                      </label>
                                      <input
                                        name="agency_gst_details_provisional_GSTIN"
                                        type="text"
                                        placeholder=" Enter Your Provisinal GST Number"
                                        className="input_size"
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Mobile Number
                                      </label>
                                      <input
                                        name="agency_gst_details_phone_number"
                                        type="number"
                                        placeholder=" Enter Your Mobile Number"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        GST Registration Status
                                      </label>
                                      <input
                                        name="agency_gst_details_GST_registration_status"
                                        type="text"
                                        placeholder=" Enter GST Registration Status"
                                        className="input_size"
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Address Line 1*
                                      </label>
                                      <input
                                        name="agency_gst_details_address_line1"
                                        type="text"
                                        placeholder=" Enter Address Line 1"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Agency City*
                                      </label>
                                      <input
                                        name="agency_gst_details_agency_city"
                                        type="text"
                                        placeholder=" Enter Your City"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box>
                                </Grid>
                              </Grid>
                            </div>
                          </Box> */}
                        </div>}
                      </form>
                    </Box>
                  </Box>
                </Paper>
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
{/* <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        Mobile No.*
                                      </label>
                                      <input
                                        type="number"
                                        name="agency_mobile_number"
                                        placeholder=" Enter Mobile No."
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box> */}
{/* <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">Fax*</label>
                                      <input
                                        type="number"
                                        name="agency_fax"
                                        placeholder=" Enter Fax code"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box> */}
{/* <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        State/Province*
                                      </label>
                                      <input
                                        type="text"
                                        name="agency_state"
                                        placeholder="State"
                                        className="input_size"
                                        required
                                      />
                                    </div>
                                  </Box> */}

{/* <Box py={2}>
                                <div className="form-row d-flex">
                                  <div className="px-3 py-2">
                                    Office Space:{" "}
                                    <input type="checkbox" required /> Ownered
                                  </div>
                                  <div className="px-3 py-2">
                                    <input
                                      type="checkbox"
                                      name="agency_office_space"
                                    />{" "}
                                    Rented
                                  </div>
                                </div>
                              </Box> */}
{/* <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">TDS</label>
                                      <input
                                        type="text"
                                        name="agency_TDS"
                                        className="input_size"
                                        placeholder="TDS Exemption:"
                                      />
                                    </div>
                                  </Box> */}
{/* 
                                  <Box py={2}>
                                    <div className="form_input">
                                      <label className="form_lable">
                                        References: (optional)
                                      </label>
                                      <textarea
                                        name="agency_references"
                                        className="form-control Input_box"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                  </Box> */}
{/* <Box py={2}>
                                <div className="form-row d-flex">
                                  <div className="px-3 py-2">
                                    IATA Registered:{" "}
                                    <input type="checkbox" required /> Yes
                                  </div>
                                  <div className="px-3 py-2">
                                    <input
                                      type="checkbox"
                                      name="agency_IATA_registration_id"
                                    />{" "}
                                    No
                                  </div>
                                </div>
                              </Box> */}
{/* <div className="form_input">
          <label className="form_lable">
            {" "}
            TelePhone Number{" "}
          </label>
          <input
            type="number"
            name="telephone_number"
            placeholder=" Enter Your TelePhone Number"
            className="input_size"
          />
        </div> */}

{/* <div className="form_input">
          <label className="form_lable">Country*</label>
          <input
            type="text"
            name="country"
            placeholder=" Enter Your Country"
            className="input_size"
            required
          />
        </div> */}
{/* <div className="form_input" mx={2}>
          <label className="form_lable">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobile_number"
            placeholder="+91"
            className="input_size"
            required
          />
        </div> */}
{/* <div className="form_input">
          <label className="form_lable">
            Pin Code*
          </label>
          <input
            type="number"
            name="pincode"
            placeholder=" Enter Pin Code"
            className="input_size"
            required
          />
        </div> */}
{/* <div className="form_input">
          <label className="form_lable">Country*</label>
          <input
            type="text"
            name="country"
            placeholder=" Enter Your Country"
            className="input_size"
            required
          />
        </div> */}
{/* <div className="form_input">
          <label className="form_lable">Email*</label>
          <input
            type="email"
            name="email"
            placeholder=" Enter Your Email"
            className="input_size"
            required
          />
        </div> */}
{/* <div className="form_input">
          <label className="form_lable">
            {" "}
            TelePhone Number{" "}
          </label>
          <input
            type="number"
            name="telephone_number"
            placeholder=" Enter Your TelePhone Number"
            className="input_size"
          />
        </div> */}
{/* <div className="form_input">
          <label className="form_lable">
            Pin Code*
          </label>
          <input
            type="number"
            name="pincode"
            placeholder=" Enter Pin Code"
            className="input_size"
            required
          />
        </div> */}
{/* <div className="form_input">
          <label className="form_lable">Email*</label>
          <input
            type="email"
            name="email"
            placeholder=" Enter Your Email"
            className="input_size"
            required
          />
        </div> */}
{/* <div className="form_input">
          <label className="form_lable">
            Pin Code*
          </label>
          <input
            type="number"
            name="pincode"
            placeholder=" Enter Pin Code"
            className="input_size"
            required
          />
        </div> */}
{/* <div className="form_input" mx={2}>
          <label className="form_lable">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobile_number"
            placeholder="+91"
            className="input_size"
            required
          />
        </div> */}
{/* <Grid width="100%" alignItems="center">
                                  <Box
                                    py={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="form_input">
                                      <label className="form_lable">
                                        {" "}
                                        Address 2
                                      </label>
                                      <input
                                        type="text"
                                        name="address_2"
                                        placeholder=" Enter Address 2"
                                        className="input_size"
                                      />
                                    </div>



                                  </Box>
                                </Grid> */}
{/* <div className="form_input">
          <label className="form_lable">City*</label>
          <input
            type="text"
            name="city"
            placeholder=" Enter Your City"
            className="input_size"
            required
          />
        </div> */}

{/* <div className="form_input">
          <label className="form_lable">
            Password*
          </label>
          <input
            type="text"
            name="password"
            placeholder="Enter Your Password"
            className="input_size"
            required
          />
        </div> */} {/* <Grid width="100%" alignItems="center">
      <Box
        py={2}
        display="flex"
        justifyContent="space-between"
        style={{ gap: "10px" }}
      >
        <div className="form_input">
          <label className="form_lable">
            Pin Code*
          </label>
          <input
            type="number"
            name="pincode"
            placeholder=" Enter Pin Code"
            className="input_size"
            required
          />
        </div>
        <div className="form_input" mx={2}>
          <label className="form_lable">
            State/Province*
          </label>
          <input
            type="text"
            name="state"
            placeholder=" State"
            className="input_size"
            required
          />
        </div>

        <div className="form_input" mx={2}>
          <label className="form_lable">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobile_number"
            placeholder="+91"
            className="input_size"
            required
          />
        </div>
      </Box>
    </Grid> */}
{/* <div className="form_input">
          <label className="form_lable">
            Residential Address*
          </label>
          <input
            type="text"
            name="residential_address"
            placeholder="Residential Address"
            className="input_size"
            required
          />
        </div> */}