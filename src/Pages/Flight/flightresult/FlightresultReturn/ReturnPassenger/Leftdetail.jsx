import React, { useEffect, useState } from "react";
import { dangerouslySetInnerHTML } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Grid from "@mui/material/Grid";
import Accordion from "react-bootstrap/Accordion";
import "./passenger.css";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import groupimg from "../../../../../Images/Groupl.png";
import {
  bookAction,
  bookActionGDS,
} from "../../../../../Redux/FlightBook/actionFlightBook";
import {
  PassengersAction,
  PassengersActionReturn,
} from "../../../../../Redux/Passengers/passenger";
const Leftdetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adults = sessionStorage.getItem("adults");
  const childs = sessionStorage.getItem("childs");
  const infants = sessionStorage.getItem("infants");
  const reducerState = useSelector((state) => state);
  console.log("reducerState", reducerState);
  const ResultIndex = sessionStorage.getItem("ResultIndex");
  const [farePrice, setFarePrice] = useState("");
  const [farePriceReturn, setFarePriceReturn] = useState("");
  const [sub, setSub] = useState(false);
  const fareValue = reducerState?.flightFare?.flightQuoteData?.Results;
  const fareValueReturn =
    reducerState?.flightFare?.flightQuoteDataReturn?.Results;
  console.log("fareValue", fareValue);
  const fareRule = reducerState?.flightFare?.flightRuleData?.FareRules;
  const fareRuleReturn =
    reducerState?.flightFare?.flightRuleDataReturn?.FareRules;
  console.log(fareValueReturn, fareRuleReturn, "vivekk");
  const data = reducerState?.oneWay?.oneWayData?.data?.data?.Response;
  const isPassportRequired =
    reducerState?.flightFare?.flightQuoteData?.Results
      ?.IsPassportRequiredAtTicket;
  const passengerTemplate = {
    Title: "Mr",
    FirstName: "",
    LastName: "",
    PaxType: 1,
    DateOfBirth: "",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    AddressLine1: "",
    AddressLine2: "",
    Fare: farePrice[0],
    City: "Gurgaon",
    CountryCode: "IN",
    CellCountryCode: "+91-",
    ContactNo: "",
    Nationality: "IN",
    Email: "",
    IsLeadPax: true,
    FFAirlineCode: null,
    FFNumber: "",
    GSTCompanyAddress: "",
    GSTCompanyContactNumber: "",
    GSTCompanyName: "",
    GSTNumber: "",
    GSTCompanyEmail: "",
  };
  const childPassenger = {
    Title: "Mr",
    FirstName: "",
    LastName: "",
    PaxType: 2,
    DateOfBirth: "",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    Fare: farePrice[1],
    IsLeadPax: false,
    FFAirlineCode: null,
    FFNumber: "",
  };
  const infantPassenger = {
    Title: "Mr",
    FirstName: "",
    LastName: "",
    PaxType: 3,
    DateOfBirth: "",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    Fare: farePrice[2],
    IsLeadPax: false,
    FFAirlineCode: null,
    FFNumber: "",
  };
  let totalPassenger = Number(adults) + Number(childs) + Number(infants);
  const passengerLists = [];
  const passengerChildLists = [];
  const passengerInfantLists = [];
  useEffect(() => {
    if (fareValue && fareValueReturn) {
      const fareDetails = fareValue?.Fare;
      const fareBreakdown = fareValue?.FareBreakdown;
      const fareBreakdownReturn = fareValueReturn?.FareBreakdown;
      console.log("fareBreakdownReturn: ", fareBreakdownReturn);
      console.log("fareBreakdown", fareBreakdown);
      const arr = [];
      const arrReturn = [];

      fareBreakdown.map((price, key) => {
        let obj1 = {
          Currency: price?.Currency,
          BaseFare: price?.BaseFare / price?.PassengerCount,
          Tax: price?.Tax / price?.PassengerCount,
          YQTax: price?.YQTax / price?.PassengerCount,
          AdditionalTxnFeePub:
            price?.AdditionalTxnFeePub / price?.PassengerCount,
          AdditionalTxnFeeOfrd:
            price?.AdditionalTxnFeeOfrd / price?.PassengerCount,
          // OtherCharges: price?.OtherCharges / price?.PassengerCount,
          // Discount: price?.Discount / price?.PassengerCount,
          // PublishedFare: +price?.BaseFare + +price?.Tax / price?.PassengerCount,
          // OfferedFare: price?.OfferedFare / price?.PassengerCount,
          // TdsOnCommission: price?.TdsOnCommission / price?.PassengerCount,
          // TdsOnPLB: price?.TdsOnPLB / price?.PassengerCount,
          // TdsOnIncentive: price?.TdsOnIncentive / price?.PassengerCount,
          // ServiceFee: price?.ServiceFee / price?.PassengerCount,
        };
        arr.push(obj1);
        console.log(arr[1]);
        setFarePrice(arr);
      });
      fareBreakdownReturn?.map((price, index) => {
        let objReturn = {
          Currency: price?.Currency,
          BaseFare: price?.BaseFare / price?.PassengerCount,
          Tax: price?.Tax / price?.PassengerCount,
          YQTax: price?.YQTax / price?.PassengerCount,
          AdditionalTxnFeePub:
            price?.AdditionalTxnFeePub / price?.PassengerCount,
          AdditionalTxnFeeOfrd:
            price?.AdditionalTxnFeeOfrd / price?.PassengerCount,
        };
        arrReturn.push(objReturn);
        setFarePriceReturn(arrReturn);
      });
    }
  }, [fareValue, fareValueReturn]);
  console.log("farePrice", farePrice);
  for (let i = 0; i < adults; i++) {
    passengerLists.push({
      ...passengerTemplate,
      IsLeadPax: i === 0, // Set the first passenger as the lead passenger
    });
  }

  for (let i = 0; i < childs; i++) {
    passengerChildLists.push({
      ...childPassenger,
      IsLeadPax: false, // Set the first passenger as the lead passenger
    });
  }
  for (let i = 0; i < infants; i++) {
    passengerInfantLists.push({
      ...infantPassenger,
      IsLeadPax: false, // Set the first passenger as the lead passenger
    });
  }
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  // const [passengerData,setPassengerData] = useState(allPassenger.flat())

  const [passengerList, setPassengerList] = useState(passengerLists);
  const allPassenger = [
    passengerLists,
    passengerChildLists,
    passengerInfantLists,
  ];
  const [passengerData, setPassengerData] = useState(allPassenger.flat());

  const handleServiceChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...passengerData];
    if (i < adults) {
      if (!list[i]["Fare"]) {
        list[i]["Fare"] = farePrice[0];
      }
    }
    if (i >= adults && i < +adults + +childs) {
      if (!list[i]["Fare"]) {
        list[i]["Fare"] = farePrice[1];
      }
    } else {
      if (!list[i]["Fare"]) {
        list[i]["Fare"] = farePrice[2];
      }
    }
    list[i][name] = value;
    setPassengerData(list);
  };
  console.log("passengerData", passengerData);


  const fareQuoteData = reducerState?.flightFare?.flightQuoteData?.Results;

  function isValidEmail(email,phoneNumber) {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;

    // Test the phone number against the pattern
    const result2= phonePattern.test(phoneNumber);

    // Test the email against the regular expression
    const result1 = emailRegex.test(email);
    const result=result1 && result2;
    console.warn(result, "Please fill all the details/////");
    return result
  }

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };
  const datet = new Date();

  // Set the minimum date to 12 years ago
  // const minDateValue = new Date(datet);
  const maxDateValue = new Date(datet);
  maxDateValue.setFullYear(datet.getFullYear() - 12);
  const minDateValueChild = new Date(datet);
  const maxDateValueChild = new Date(datet);
  const minDateValueInfer = new Date(datet);

  minDateValueChild.setFullYear(datet.getFullYear() - 11)
  maxDateValueChild.setFullYear(datet.getFullYear() - 2)
  minDateValueInfer.setFullYear(datet.getFullYear() - 2)





  const currentDate = formatDate(datet)
  const maxDate = formatDate(maxDateValue)
  const minDateChild = formatDate(minDateValueChild)
  const maxDateChild = formatDate(maxDateValueChild)
  const minDateInfer = formatDate(maxDateValueChild)


  function handleSubmit(event) {
    event.preventDefault();
    setSub(true)
    const valid = passengerData.filter(
      (item) =>
        item.FirstName === "" || item.LastName === "" || item.DateOfBirth === ""
    );

    const emailVal = passengerList.filter((item) =>

      // console.warn(passengerList[0].Email, "***********************************************nooooooooooooooooooooooooooooo")

      !isValidEmail(item.Email,item.ContactNo)


    )

    if (valid.length !== 0 && emailVal.length !== 0) {
      alert("Please enter a details")
      return
    }




    const passengerDataReturn = passengerData?.map((item, index) => {
      if (item?.PaxType == 1) {
        return {
          ...item,
          Fare: farePriceReturn[0],
        };
      } else if (item?.PaxType == 2) {
        return {
          ...item,
          Fare: farePriceReturn[1],
        };
      } else {
        return {
          ...item,
          Fare: farePriceReturn[2],
        };
      }
    });
    console.log("passengerData", passengerData, passengerDataReturn);

    dispatch(PassengersAction(passengerData));
    dispatch(PassengersActionReturn(passengerDataReturn))
    navigate("/Flightresult/passengerdetail/flightreviewbooking");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="leftdiv">Passenger Details</div>
          <div className="rightdiv">Name Format as per airline guidelines</div>
        </div>
        <Box p={5} mt={25}>
          <div className="services">
            <form onSubmit={handleSubmit}>
              <Box className="mid_header1" p={5} mt={25}>
                <Typography className="p-2 Top_txt1 text-dark1">
                  Adult: {adults}
                </Typography>
                {Array.from({ length: adults }, (err, i) => {
                  return (
                    <div className="mb-3 p-2">
                      <div className="mb-1">Passenger {i + 1}</div>
                      <Grid
                        container
                        rowSpacing={2}
                        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                        columns={{ xs: 4, sm: 6, md: 12 }}
                      >
                        <Grid item md={4} sm={3}>
                          <Box>
                            <div className="hotel_form_input">
                              <label className="form_lable1_1">
                                Title
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <select
                                name="Title"
                                className="hotel_input_select border_input1"
                                onChange={(e) => handleServiceChange(e, i)}
                              >
                                <option value="Mr">Mr.</option>
                                <option value="Mrs">Mrs.</option>
                                <option value="Miss">Miss</option>
                              </select>
                            </div>
                          </Box>
                        </Grid>
                        <Grid item md={4} sm={3}>
                          <Box marginLeft={15}>
                            <div className="form_input1">
                              <label hotel_form_input className="form_lable1_1">
                                First name
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <input
                                className="form_input_input"
                                name="FirstName"
                                placeholder="Enter your name"
                                onChange={(e) => handleServiceChange(e, i)}
                              />
                              {passengerData[i].FirstName == "" && sub && <span id="error1">Enter First Name</span>}
                            </div>
                          </Box>
                        </Grid>

                        <Grid item md={4} sm={3}>
                          <Box marginLeft={15}>
                            <div className="form_input1">
                              <label hotel_form_input className="form_lable1_1">
                                Last name
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <input
                                id="br"
                                name="LastName"
                                placeholder="Enter your last name"
                                onChange={(e) => handleServiceChange(e, i)}
                              />
                              {passengerData[i].LastName == "" && sub && <span id="error1">Enter Last Name</span>}
                            </div>
                          </Box>
                        </Grid>
                        <Grid item md={4} sm={3}>
                          <Box marginLeft={8}>
                            <div className="form_input1">
                              <label hotel_form_input className="form_lable1_1">
                                Date Of Birth
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <input
                                type="date"
                                name="DateOfBirth"
                                className="deaprture_input"
                                max={maxDate}
                                onChange={(e) => handleServiceChange(e, i)}
                              />
                              {passengerData[i].DateOfBirth == "" && sub && <span id="error1">Enter DOB</span>}
                            </div>
                          </Box>
                        </Grid>
                        <Grid item md={4} sm={3}>
                          <Box marginLeft={15}>
                            <div className="form_input1">
                              <label hotel_form_input className="form_lable1_1">
                                Email
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <input
                                type="email"
                                name="Email"
                                className="deaprture_input"
                                placeholder="Enter Email"
                                onChange={(e) => handleServiceChange(e, i)}
                              />
                              {passengerData[i].Email == "" && sub && <span id="error1">Enter Email</span>}
                            </div>
                          </Box>
                        </Grid>
                        <Grid item md={4} sm={3}>
                          {" "}
                          <Box marginLeft={15}>
                            <div className="form_input1">
                              <label hotel_form_input className="form_lable1_1">
                                ContactNo
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <input
                                type="text"
                                name="ContactNo"
                                className="deaprture_input"
                                placeholder="Enter Contact"
                                onChange={(e) => handleServiceChange(e, i)}
                              />
                              {passengerData[i].ContactNo == "" && sub && <span id="error1">Enter Contact</span>}
                            </div>
                          </Box>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })}
              </Box>
              {childs > 0 && (
                <Box className="mid_header1" p={5} mt={25}>
                  <Typography className="p-2 Top_txt text-dark">
                    Childs: {childs}
                  </Typography>
                  {Array.from({ length: childs }, (err, i) => {
                    return (
                      <div className="mb-2">
                        <span className=" p-2 ">Passenger {i + 1}</span>
                        <Box p={15} display="flex">
                          <Box>
                            <div className="form_input1">
                              <label hotel_form_input className="form_lable">
                                First name
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <input
                                name="FirstName"
                                placeholder="Enter your name"
                                onChange={(e) =>
                                  handleServiceChange(e, i + Number(adults))
                                }
                              />
                              {passengerData[Number(adults) + i].FirstName == "" && sub && <span id="error1">Enter First Name</span>}
                            </div>
                          </Box>
                          <Box marginLeft={15}>
                            <div className="form_input1">
                              <label hotel_form_input className="form_lable">
                                Last name
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <input
                                name="LastName"
                                placeholder="Enter your last name"
                                onChange={(e) =>
                                  handleServiceChange(e, i + Number(adults))
                                }
                              />
                              {passengerData[Number(adults) + i].LastName == "" && sub && <span id="error1">Enter Last Name</span>}
                            </div>
                          </Box>
                          <Box marginLeft={15}>
                            <div className="hotel_form_input">
                              <label className="form_lable">
                                Gender
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <select
                                name="Gender"
                                className="hotel_input_select border_input1 "
                                onChange={(e) =>
                                  handleServiceChange(e, i + Number(adults))
                                }
                              >
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                                <option value="3">Transgender</option>
                              </select>
                            </div>
                          </Box>
                          <Box marginLeft={15}>
                            <div className="form_input1">
                              <label hotel_form_input className="form_lable">
                                Date Of Birth
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <input
                                type="date"
                                name="DateOfBirth"
                                className="deaprture_input"
                                max={maxDateChild}
                                min={minDateChild}
                                onChange={(e) =>
                                  handleServiceChange(e, i + Number(adults))
                                }
                              />
                              {passengerData[Number(adults) + i].DateOfBirth == "" && sub && <span id="error1">Enter DOB</span>}
                            </div>
                          </Box>
                        </Box>
                      </div>
                    );
                  })}
                </Box>
              )}
              {infants > 0 && (
                <Box className="mid_header1" p={5} mt={25}>
                  <Typography className="p-2 Top_txt text-dark">
                    Infants: {infants}
                  </Typography>
                  {Array.from({ length: infants }, (err, i) => {
                    return (
                      <div className="mb-2">
                        <span className=" p-2 ">Infant {i + 1}</span>
                        <Box p={15} display="flex">
                          <Box>
                            <div className="form_input1">
                              <label hotel_form_input className="form_lable">
                                First name
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <input
                                name="FirstName"
                                placeholder="Enter your name"
                                onChange={(e) =>
                                  handleServiceChange(
                                    e,
                                    i + Number(adults) + Number(childs)
                                  )
                                }
                              />
                              {passengerData[i + Number(adults) + Number(childs)].FirstName == "" && sub && <span id="error1">Enter First Name</span>}
                            </div>
                          </Box>
                          <Box marginLeft={15}>
                            <div className="form_input1">
                              <label hotel_form_input className="form_lable">
                                Last name
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <input
                                name="LastName"
                                placeholder="Enter your last name"
                                onChange={(e) =>
                                  handleServiceChange(
                                    e,
                                    i + Number(adults) + Number(childs)
                                  )
                                }
                              />
                              {passengerData[i + Number(adults) + Number(childs)].LastName == "" && sub && <span id="error1">Enter Last Name</span>}
                            </div>
                          </Box>
                          <Box marginLeft={15}>
                            <div className="hotel_form_input">
                              <label className="form_lable">
                                Gender
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <select
                                name="Gender"
                                className="hotel_input_select border_input1"
                                onChange={(e) =>
                                  handleServiceChange(
                                    e,
                                    i + Number(adults) + Number(childs)
                                  )
                                }
                              >
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                                <option value="3">Transgender</option>
                              </select>
                            </div>
                          </Box>
                          <Box marginLeft={15}>
                            <div className="form_input1">
                              <label hotel_form_input className="form_lable">
                                Date Of Birth
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <input
                                type="date"
                                name="DateOfBirth"
                                className="deaprture_input"
                                min={minDateInfer}
                                max={currentDate}
                                onChange={(e) =>
                                  handleServiceChange(
                                    e,
                                    i + Number(adults) + Number(childs)
                                  )
                                }
                              />
                              {passengerData[i + Number(adults) + Number(childs)].DateOfBirth == "" && sub && <span id="error1">Enter DOB</span>}
                            </div>
                          </Box>
                        </Box>
                      </div>
                    );
                  })}
                </Box>
              )}
              {/* <Box className="mid_header1" p={5} mt={25}>
                <Typography className="p-2 Top_txt text-dark">
                  Add GST Details
                </Typography>

              </Box> */}
              <div
                style={{
                  width: 973,
                  height: 45,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  background: "rgba(187, 187, 187, 0.30)",
                  borderRadius: 4,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "inline-flex",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    color: "black",
                    fontSize: 24,
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Add GST Details
                </div>
                <div style={{ width: 16, height: 16, position: "relative" }}>
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      left: 0,
                      top: 0,
                      position: "absolute",

                      borderRadius: 9999,
                    }}
                  />

                  <div
                    style={{
                      width: 10.33,
                      height: 0,
                      left: 28,
                      top: 3,
                      position: "absolute",
                      transform: "rotate(90deg)",
                      transformOrigin: "0 0",
                    }}
                  >
                    {" "}
                    <img src={groupimg} alt="" />
                  </div>
                </div>
              </div>

              <Box className="mid_header1" p={5} mt={25}>
                {/* <Typography className="p-2 Top_txt text-dark">
                  Contact Details
                </Typography> */}

                <div className="mb-2">
                  {/* <span className=" p-2 ">Passenger {i + 1}</span> */}
                  <Box p={15} display="flex">
                    <Box>
                      <div className="form_input1">
                        <label className="form_lable">
                          GST Number
                          <span
                            style={{
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          name="Nationality"
                          type="text"
                          placeholder="Enter your Country"
                          onChange={(e, i) => handleServiceChange(e, i)}
                        />
                      </div>
                    </Box>
                    <Box marginLeft={15}>
                      <div className="form_input1">
                        <label hotel_form_input className="form_lable">
                          GST Company Name
                          <span
                            style={{
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          name="ContactNo"
                          type="text"
                          placeholder="Enter GST Number"
                          onChange={(e, i) => handleServiceChange(e, i)}
                        />
                      </div>
                    </Box>
                    <Box marginLeft={15}>
                      <div className="form_input1">
                        <label hotel_form_input className="form_lable">
                          GST Company Contact
                          <span
                            style={{
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          name="Email"
                          type="email"
                          placeholder="company name"
                          onChange={(e, i) => handleServiceChange(e, i)}
                        />
                      </div>
                    </Box>
                    <Box marginLeft={15}>
                      <div className="form_input1">
                        <label className="form_lable">
                          Company Address
                          <span
                            style={{
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          name="Email"
                          type="email"
                          placeholder="Company Address"
                          onChange={(e, i) => handleServiceChange(e, i)}
                        />
                      </div>
                    </Box>

                    <Box marginLeft={15}>
                      <div className="form_input1">
                        <label className="form_lable">
                          GST Company Email
                          <span
                            style={{
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          name="Nationality"
                          type="text"
                          placeholder="Enter Company Email"
                          onChange={(e, i) => handleServiceChange(e, i)}
                        />
                      </div>
                    </Box>
                  </Box>
                </div>
                {/* ); */}
                {/* })} */}
              </Box>
              <Box
                // className="mid_header"
                p={5}
                mt={25}
              >
                <div
                  style={{
                    color: "black",
                    fontSize: 24,
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Baggage & Meal Services
                </div>{" "}
              </Box>
            </form>
          </div>
        </Box>
        {/* <Box className="mid_header" p={5} mt={25}>
          <Typography className="Top_txt1">Travellers</Typography>

          <div className="services">
            <Box className="mid_header" p={5} mt={25}>
              <Box p={15} display="flex">
                <Box>
                  <div className="form_input1">
                    <label hotel_form_input className="form_lable">
                      First name*
                    </label>
                    <input name="name" placeholder="Enter your name" />
                  </div>
                </Box>
                <Box marginLeft={15}>
                  <div className="form_input1">
                    <label hotel_form_input className="form_lable">
                      Last name*
                    </label>
                    <input name="lastname" placeholder="Enter your last name" />
                  </div>
                </Box>
              </Box>
              <Box p={15} display="flex">
                <Box>
                  <div className="hotel_form_input">
                    <label className="form_lable">Gender*</label>
                    <select name="gender" className="hotel_input_select">
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      <option value="3">Transgender</option>
                    </select>
                  </div>
                </Box>
                <Box marginLeft={15}>
                  <div className="form_input1">
                    <label hotel_form_input className="form_lable">
                      Mobile*
                    </label>
                    <input
                      name="mobilenumber"
                      type="text"
                      placeholder="Enter your number"
                    />
                  </div>
                </Box>
                <Box marginLeft={15}>
                  <div className="form_input1">
                    <label hotel_form_input className="form_lable">
                      Date Of Birth*
                    </label>
                    <input
                      type="date"
                      name="dateofbirth"
                      className="deaprture_input"
                    />
                  </div>
                </Box>
              </Box>
              <Box p={15} display="flex">
                <Box>
                  <div className="form_input1">
                    <label hotel_form_input className="form_lable">
                      Email**
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </Box>
                <Box marginLeft={15}>
                  <div className="form_input1">
                    <label hotel_form_input className="form_lable">
                      Address*
                    </label>
                    <input
                      name="address"
                      type="text"
                      placeholder="Enter your Address"
                    />
                  </div>
                </Box>
                <Box marginLeft={15}>
                  <div className="form_input1">
                    <label hotel_form_input className="form_lable">
                      City*
                    </label>
                    <input
                      name="city"
                      type="text"
                      placeholder="Enter your City"
                    />
                  </div>
                </Box>
              </Box>
              <Box p={15} display="flex">
                <Box>
                  <div className="form_input1">
                    <label className="form_lable">Country*</label>
                    <input
                      name="country"
                      type="text"
                      placeholder="Enter your Country"
                    />
                  </div>
                </Box>
              </Box>
            </Box>
          </div>
        </Box> */}

        <Box className="mid_header1" p={5} mt={25}>
          {/* <Box px={20}>
            <Typography
              sx={{ fontSize: "14px", color: "#616161", fontWeight: "bold" }}
            >
              Baggage Details:
            </Typography>
          </Box> */}
          {/* <Box
            className="inner_box"
            display="flex"
            justifyContent="space-around"
            mx={20}
            my={15}
          >
            {fareValue?.Segments?.map((data1, index) => {
              console.log("Data Map", data1);
              // return data?.map((data1, index) => {
              const len = data1.length;
              return (
                <>
                  <Box width="120px">
                    <Typography
                      color="#252525"
                      fontSize="14px"
                      fontWeight="bold"
                      display="flex"
                      justifyContent="center"
                    >
                      Sector
                    </Typography>
                    <Button
                      style={{
                        width: "156px",
                        height: "22px",
                        fontSize: "9px",
                        alignItems: "center",
                        display: "flex",
                        backgroundColor: "white",
                        color: "black",
                        justifyContent: "center",
                        borderRadius: "10px",
                        border: "1px solid #D1D1D1",
                      }}
                    >
                      {data1[0]?.Origin?.Airport?.AirportCode}-
                      {data1[len - 1]?.Destination?.Airport?.AirportCode}
                    </Button>
                  </Box>
                  <Box>
                    <Typography
                      color="#252525"
                      fontSize="14px"
                      fontWeight="bold"
                      display="flex"
                      justifyContent="center"
                    >
                      Cabin
                    </Typography>
                    <Button
                      style={{
                        width: "156px",
                        height: "22px",
                        fontSize: "9px",
                        alignItems: "center",
                        display: "flex",
                        backgroundColor: "white",
                        color: "black",
                        justifyContent: "center",
                        borderRadius: "10px",
                        border: "1px solid #D1D1D1",
                      }}
                    >
                      {data1[0]?.CabinBaggage ? data1[0]?.CabinBaggage : "7 Kg"}
                    </Button>
                  </Box>
                  <Box>
                    <Typography
                      color="#252525"
                      fontSize="14px"
                      fontWeight="bold"
                      display="flex"
                      justifyContent="center"
                    >
                      Check-In
                    </Typography>
                    <Button
                      style={{
                        width: "156px",
                        height: "22px",
                        fontSize: "9px",
                        alignItems: "center",
                        display: "flex",
                        backgroundColor: "white",
                        color: "black",
                        justifyContent: "center",
                        borderRadius: "10px",
                        border: "1px solid #D1D1D1",
                      }}
                    >
                      {data1[0]?.Baggage}
                    </Button>
                  </Box>
                </>
              );
              // });
            })}
          </Box> */}
          <Grid container spacing={1}>
            <Grid item xs={6} md={4}>
              <Box p={17}>
                <Typography color="#616161" fontSize="14px" fontWeight="bold">
                  Select Excess Baggage
                </Typography>
                <Typography color="#616161" fontSize="14px" fontWeight="bold">
                  (Extra charge will be applicable):
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box py={17}>
                <div className="form_input1">
                  <label hotel_form_input className="form_lable">
                    {data?.Origin}-{data?.Destination}
                  </label>
                  <input type="text" placeholder="No Excess / Extra Baggage" />
                </div>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}></Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} md={4}>
              <Box p={17}>
                <Typography color="#616161" fontSize="14px" fontWeight="bold">
                  Meal Preferences:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box py={17}>
                <div className="form_input1">
                  <label hotel_form_input className="form_lable">
                    {data?.Origin}-{data?.Destination}
                  </label>
                  <input type="text" placeholder="Add No Meal Rs. - 0" />
                </div>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}></Grid>
          </Grid>

          <Box className="mid_header1" m={15}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              marginTop="10px"
            >
              <Typography
                color="#008FCC"
                fontSize="16px"
                fontWeight="bold"
                textAlign="center"
              >
                Fare Rule
              </Typography>
              <Typography
                color="#707070"
                fontSize="12px"
                fontWeight="bold"
                textAlign="center"
              >
                {data?.Origin}-{data?.Destination}
              </Typography>
            </Box>
            <Box p={17}>
              <Grid container spacing={1} mt={1}>
                <Grid item xs={6} md={6}>
                  <Box textAlign="center">
                    <Typography
                      color="#707070"
                      fontSize="14px"
                      fontWeight="bold"
                      textAlign="left"
                      mb={1}
                    >
                      Cancellation
                    </Typography>
                    <Typography
                      color="#008FCC"
                      fontSize="14px"
                      fontWeight="bold"
                      textAlign="left"
                    >
                      INR 3500 from 0 To 3 Days before dept
                    </Typography>
                    <Typography
                      color="#008FCC"
                      fontSize="14px"
                      fontWeight="bold"
                      textAlign="left"
                    >
                      INR 3000 from 4 Days & above before dept
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box textAlign="center">
                    <Typography
                      color="#707070"
                      fontSize="14px"
                      fontWeight="bold"
                      textAlign="left"
                      mb={1}
                    >
                      Reissue
                    </Typography>
                    <Typography
                      color="#008FCC"
                      fontSize="14px"
                      fontWeight="bold"
                      textAlign="left"
                    >
                      INR 3250 from 0 To 3 Days before dept
                    </Typography>
                    <Typography
                      color="#008FCC"
                      fontSize="14px"
                      fontWeight="bold"
                      textAlign="left"
                    >
                      INR 2750 from 4 Days & above before dept
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box py={5}>
              <ul color="red">
                <li
                  style={{
                    color: "#FF0000",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Mentioned Fee are per PAX and per sector
                </li>
                <li
                  style={{
                    color: "#FF0000",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Apart from airline charges, GST + RAF + applicable charges if
                  any, will be charged
                </li>
              </ul>
            </Box>
            {/* {fareQuoteData?.FareRules[0]?.map((value) => {
              return ( */}
            <Box px={17} py={5}>
              <Grid container spacing={1} mt={1}>
                <Grid item xs={6} md={6}>
                  <Typography
                    color="#707070"
                    fontSize="14px"
                    fontWeight="bold"
                    textAlign="left"
                    mb={1}
                  >
                    {fareQuoteData?.AirlineCode}:{data?.Origin}-
                    {data?.Destination}
                  </Typography>
                  <Typography
                    color="#707070"
                    fontSize="14px"
                    textAlign="left"
                    mb={1}
                  >
                    The Fare Basis Code is:{" "}
                    {fareQuoteData?.FareRules[0]?.FareBasisCode}
                    <br />
                    Meal: Chargeable
                    <br />
                    Seat: Chargeable
                    {fareRule &&
                      fareRule.length > 0 &&
                      fareRule.map((dat) => {
                        console.log("Dat", dat);
                        return (
                          <Box my={2}>
                            <Accordion
                              style={{ width: "700px" }}
                              defaultActiveKey={null}
                            >
                              <Accordion.Item>
                                <Accordion.Header>
                                  <p>Detailed Fare Rules</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: dat?.FareRuleDetail,
                                    }}
                                  />
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </Box>
                        );
                      })}
                  </Typography>
                  {/* <Typography
                    color="#008FCC "
                    fontSize="14px"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    {" "}
                    Subject to change without prior notice.{" "}
                  </Typography> */}
                  {/* <Typography
                    color="#008FCC "
                    fontSize="14px"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    {" "}
                    Note : We should receive the request at least four hours
                    prior to Airline Fare Rules Policy.{" "}
                  </Typography> */}
                </Grid>
              </Grid>
            </Box>
            {/* ); })} */}
          </Box>
          {/* <Box className="mid_header1" py={5} px={17} m={15}>
            <Box px={17}>
              <Box display="flex" alignItems="center">
                <input
                  className="inputSelect"
                  type="radio"
                  // defaultChecked="checked"
                />{" "}
                <Typography
                  color="#252525"
                  fontWeight="bold"
                  marginLeft="5px"
                  fontSize="16px"
                >
                  No Assistance and Insurance Required
                </Typography>
              </Box>
              <Box display="flex">
                <input
                  className="inputSelect"
                  type="radio"
                  // defaultChecked="checked"
                />{" "}
                <Typography
                  color="#252525"
                  fontWeight="bold"
                  marginLeft="5px"
                  fontSize="16px"
                >
                  Travel Assistance and Insurance for only Rs. 161.00 per
                  Passenger (Terms & Conditions)
                </Typography>
              </Box>
              <Box display="flex" mt={15}>
                <Typography color="#252525" fontWeight="bold" fontSize="16px">
                  Domestic Travel Assistance and Insurance is valid from 16 Feb
                  2023 to 16 Feb 2023 from your date of journey or till your
                  date of return, which ever is earlier. To know more on the
                  coverage, please Click Here
                </Typography>
              </Box>
            </Box>
          </Box> */}
          {/* <Box py={4}>
            <ul color="red">
              <li
                style={{
                  color: "#FF0000",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Mentioned Fee are per PAX and per sector
              </li>
              <li
                style={{
                  color: "#FF0000",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Apart from airline charges, GST + RAF + applicable charges if
                any, will be charged
              </li>
            </ul>
          </Box> */}

          {/* <Box className="Top_header" py={5} my={15} mx={15}>
            <Typography
              color="#707070"
              fontSize="14px"
              fontWeight="bold"
              textAlign="left"
              mb={1}
              px={4}
              py={2}
            >
              Special Service
            </Typography>
          </Box> */}

          <button
            style={{
              width: 200,
              height: 63,

              background: "#21325D",
              borderRadius: 5.3,
              justifyContent: "center",
              alignItems: "center",

              display: "inline-flex",
              border: "1px solid #21325D",
              color: "white",
              cursor: "pointer",
              marginTop: "10px",
              marginLeft: "28px",
            }}
            type="submit"
          >
            Proceed to Book
          </button>
        </Box>
      </form>
    </div>
  );
};

export default Leftdetail;
