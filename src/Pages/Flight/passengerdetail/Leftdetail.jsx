import React, { useEffect, useState } from "react";
import { dangerouslySetInnerHTML } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Grid from "@mui/material/Grid";
import Accordion from "react-bootstrap/Accordion";
import "./passenger.css";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  bookAction,
  bookActionGDS,
} from "../../../Redux/FlightBook/actionFlightBook";
import { PassengersAction } from "../../../Redux/Passengers/passenger";
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
  const fareValue = reducerState?.flightFare?.flightQuoteData?.Results;
  console.log("fareValue", fareValue);
  const fareRule = reducerState?.flightFare?.flightRuleData?.FareRules;
  const data = reducerState?.oneWay?.oneWayData?.data?.data?.Response;
  const passengerTemplate = {
    Title: "Mr",
    FirstName: "Unit",
    LastName: "test",
    PaxType: 1,
    DateOfBirth: "1987-12-06T00:00:00",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    AddressLine1: "123, Test",
    AddressLine2: "",
    Fare: farePrice,
    City: "Gurgaon",
    CountryCode: "IN",
    CellCountryCode: "+91-",
    ContactNo: "1234567890",
    Nationality: "IN",
    Email: "harsh@tbtq.in",
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
    FirstName: "Raj",
    LastName: "test",
    PaxType: 2,
    DateOfBirth: "",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    Fare: farePrice,
    IsLeadPax: false,
    FFAirlineCode: null,
    FFNumber: "",
  };
  const infantPassenger = {
    Title: "Mr",
    FirstName: "Raj",
    LastName: "test",
    PaxType: 3,
    DateOfBirth: "",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    Fare: farePrice,
    IsLeadPax: false,
    FFAirlineCode: null,
    FFNumber: "",
  };
  let totalPassenger = Number(adults) + Number(childs) + Number(infants);
  const passengerLists = [];
  const passengerChildLists = [];
  const passengerInfantLists = [];
  useEffect(() => {
    if (fareValue) {
      let fareDetails = fareValue?.Fare;
      let fareBreakdown = fareValue?.FareBreakdown;
      console.log("fareDetails: ", fareDetails);
      let arr = [];
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

      // let obj = {
      //   Currency: fareDetails.Currency,
      //   BaseFare: fareDetails.BaseFare / totalPassenger,
      //   Tax: fareDetails.Tax / totalPassenger,
      //   YQTax: fareDetails.YQTax / totalPassenger,
      //   AdditionalTxnFeePub: fareDetails.AdditionalTxnFeePub / totalPassenger,
      //   AdditionalTxnFeeOfrd: fareDetails.AdditionalTxnFeeOfrd / totalPassenger,
      //   OtherCharges: fareDetails.OtherCharges / totalPassenger,
      //   Discount: fareDetails.Discount / totalPassenger,
      //   PublishedFare: fareDetails.PublishedFare / totalPassenger,
      //   OfferedFare: fareDetails.OfferedFare / totalPassenger,
      //   TdsOnCommission: fareDetails.TdsOnCommission / totalPassenger,
      //   TdsOnPLB: fareDetails.TdsOnPLB / totalPassenger,
      //   TdsOnIncentive: fareDetails.TdsOnIncentive / totalPassenger,
      //   ServiceFee: fareDetails.ServiceFee / totalPassenger,
      // };
      // setFarePrice(obj);
    }
  }, [fareValue]);
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

  // useEffect(() => {
  //   if (reducerState?.flightBook?.flightBookDataGDS?.Error?.ErrorCode == 0) {
  //     navigate("flightreviewbooking");
  //   } else {
  //     alert(
  //       `${reducerState?.flightBook?.flightBookDataGDS?.Error?.ErrorMessage}`
  //     );
  //   }
  // }, [reducerState?.flightBook?.flightBookDataGDS?.Error?.ErrorCode, navigate]);

  const fareQuoteData = reducerState?.flightFare?.flightQuoteData?.Results;

  function handleSubmit(event) {
    event.preventDefault();
    // const payloadGDS = {
    //   ResultIndex: ResultIndex,
    //   Passengers: passengerData,

    //   EndUserIp: reducerState?.ip?.ipData,
    //   TokenId: reducerState?.ip?.tokenData,
    //   TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
    // };

    if (fareValue?.IsLCC == false) {
      dispatch(PassengersAction(passengerData));
      navigate("/Flightresult/passengerdetail/flightreviewbooking");
    } else {
      alert("Book not allowed for LCCs. Please do Ticket directly");
    }

    // if()

    // const payload = {
    //   PreferredCurrency: null,
    //   ResultIndex: ResultIndex,
    //   AgentReferenceNo: "sonam1234567890",
    //   Passengers: [
    //     {
    //       Title: "Mr",
    //       FirstName: formData.get("name"),
    //       LastName: formData.get("lastname"),
    //       PaxType: 1,
    //       DateOfBirth: formData.get("dateofbirth"),
    //       Gender: formData.get("gender"),
    //       PassportNo: "",
    //       PassportExpiry: "",
    //       AddressLine1: formData.get("address"),
    //       AddressLine2: "",
    //       Fare: {
    //         BaseFare: 5531.0,
    //         Tax: 1042.0,
    //         YQTax: 0.0,
    //         AdditionalTxnFeePub: 0.0,
    //         AdditionalTxnFeeOfrd: 0.0,
    //         OtherCharges: 0.0,
    //       },
    //       City: formData.get("city"),
    //       CountryCode: "IN",
    //       CountryName: formData.get("country"),
    //       Nationality: "IN",
    //       ContactNo: formData.get("mobilenumber"),
    //       Email: formData.get("email"),
    //       IsLeadPax: true,
    //       FFAirlineCode: "6E",
    //       FFNumber: "123",
    //       Baggage: [
    //         {
    //           AirlineCode: "6E",
    //           FlightNumber: "23",
    //           WayType: 2,
    //           Code: "No Baggage",
    //           Description: 2,
    //           Weight: 0,
    //           Currency: "INR",
    //           Price: 0,
    //           Origin: "DEL",
    //           Destination: "DXB",
    //         },
    //       ],
    //       MealDynamic: [
    //         {
    //           AirlineCode: "6E",
    //           FlightNumber: "23",
    //           WayType: 2,
    //           Code: "No Meal",
    //           Description: 2,
    //           AirlineDescription: "",
    //           Quantity: 0,
    //           Currency: "INR",
    //           Price: 0,
    //           Origin: "DEL",
    //           Destination: "DXB",
    //         },
    //       ],
    //       SeatDynamic: [
    //         {
    //           AirlineCode: "6E",
    //           FlightNumber: "2978",
    //           CraftType: "A320-180",
    //           Origin: "DEL",
    //           Destination: "DXB",
    //           AvailablityType: 1,
    //           Description: 2,
    //           Code: "2A",
    //           RowNo: "2",
    //           SeatNo: "A",
    //           SeatType: 1,
    //           SeatWayType: 2,
    //           Compartment: 1,
    //           Deck: 1,
    //           Currency: "INR",
    //           Price: 300,
    //         },
    //       ],
    //       GSTCompanyAddress: "",
    //       GSTCompanyContactNumber: "",
    //       GSTCompanyName: "",
    //       GSTNumber: "",
    //       GSTCompanyEmail: "",
    //     },
    //   ],
    //   EndUserIp: reducerState?.ip?.ipData,
    //   TokenId: reducerState?.ip?.tokenData,
    //   TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
    // };
    // dispatch(bookAction(payload));

    // sessionStorage.setItem("Passengers", payload?.Passengers);
    // navigate("flightreviewbooking");
  }

  // Add form

  // const handleServiceChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...serviceList];
  //   list[index][name] = value;
  //   setServiceList(list);
  // };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };
  // end
  console.log("fareQuoteData", reducerState);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box className="Top_header" p={5}>
          <Box p={15}>
            <Typography className="Top_txt">Enter Passenger Details</Typography>
            <Typography className="sub_txt">
              (Please add correct details of the passenger as mentioned in ID
              Proof with mobile number so that Airline can inform them in case
              of any change in the flight timing.)
            </Typography>
          </Box>
        </Box>

        <Box className="mid_header" p={5} mt={25}>
          <Typography className="Top_txt">Travellers</Typography>

          <div className="services">
            <form onSubmit={handleSubmit}>
              <Box className="mid_header" p={5} mt={25}>
                <Typography className="p-2 Top_txt text-dark">
                  Adult: {adults}
                </Typography>

                {Array.from({ length: adults }, (err, i) => {
                  return (
                    <div className="mb-2">
                      <span className=" p-2 ">Passenger {i + 1}</span>
                      <Box p={15} display="flex">
                        <Box>
                          <div className="form_input">
                            <label hotel_form_input className="form_lable">
                              First name*
                            </label>
                            <input
                              name="FirstName"
                              placeholder="Enter your name"
                              onChange={(e) => handleServiceChange(e, i)}
                            />
                          </div>
                        </Box>
                        <Box marginLeft={15}>
                          <div className="form_input">
                            <label hotel_form_input className="form_lable">
                              Last name*
                            </label>
                            <input
                              name="LastName"
                              placeholder="Enter your last name"
                              onChange={(e) => handleServiceChange(e, i)}
                            />
                          </div>
                        </Box>
                      </Box>
                      <Box p={15} display="flex">
                        <Box>
                          <div className="hotel_form_input">
                            <label className="form_lable">Gender*</label>
                            <select
                              name="Gender"
                              className="hotel_input_select"
                              onChange={(e) => handleServiceChange(e, i)}
                            >
                              <option value="1">Female</option>
                              <option value="2">Male</option>
                              <option value="3">Transgender</option>
                            </select>
                          </div>
                        </Box>
                        <Box marginLeft={15}>
                          <div className="form_input">
                            <label hotel_form_input className="form_lable">
                              Mobile*
                            </label>
                            <input
                              name="ContactNo"
                              type="text"
                              placeholder="Enter your number"
                              onChange={(e) => handleServiceChange(e, i)}
                            />
                          </div>
                        </Box>
                        <Box marginLeft={15}>
                          <div className="form_input">
                            <label hotel_form_input className="form_lable">
                              Date Of Birth*
                            </label>
                            <input
                              type="date"
                              name="DateOfBirth"
                              className="deaprture_input"
                              onChange={(e) => handleServiceChange(e, i)}
                            />
                          </div>
                        </Box>
                      </Box>
                      <Box p={15} display="flex">
                        <Box>
                          <div className="form_input">
                            <label hotel_form_input className="form_lable">
                              Email**
                            </label>
                            <input
                              name="Email"
                              type="email"
                              placeholder="Enter your email"
                              onChange={(e) => handleServiceChange(e, i)}
                            />
                          </div>
                        </Box>
                        <Box marginLeft={15}>
                          <div className="form_input">
                            <label hotel_form_input className="form_lable">
                              Address*
                            </label>
                            <input
                              name="AddressLine1"
                              type="text"
                              placeholder="Enter your Address"
                              onChange={(e) => handleServiceChange(e, i)}
                            />
                          </div>
                        </Box>
                        <Box marginLeft={15}>
                          <div className="form_input">
                            <label hotel_form_input className="form_lable">
                              City*
                            </label>
                            <input
                              name="City"
                              type="text"
                              placeholder="Enter your City"
                              onChange={(e) => handleServiceChange(e, i)}
                            />
                          </div>
                        </Box>
                      </Box>
                      <Box p={15} display="flex">
                        <Box>
                          <div className="form_input">
                            <label className="form_lable">Country*</label>
                            <input
                              name="Nationality"
                              type="text"
                              placeholder="Enter your Country"
                              onChange={(e) => handleServiceChange(e, i)}
                            />
                          </div>
                        </Box>
                      </Box>
                    </div>
                  );
                })}
              </Box>
              {childs > 0 && (
                <Box className="mid_header" p={5} mt={25}>
                  <Typography className="p-2 Top_txt text-dark">
                    Childs: {childs}
                  </Typography>
                  {Array.from({ length: childs }, (err, i) => {
                    return (
                      <div className="mb-2">
                        <span className=" p-2 ">Child {i + 1}</span>
                        <Box p={15} display="flex">
                          <Box>
                            <div className="form_input">
                              <label hotel_form_input className="form_lable">
                                First name*
                              </label>
                              <input
                                name="FirstName"
                                placeholder="Enter your name"
                                onChange={(e) =>
                                  handleServiceChange(e, i + Number(adults))
                                }
                              />
                            </div>
                          </Box>
                          <Box marginLeft={15}>
                            <div className="form_input">
                              <label hotel_form_input className="form_lable">
                                Last name*
                              </label>
                              <input
                                name="LastName"
                                placeholder="Enter your last name"
                                onChange={(e) =>
                                  handleServiceChange(e, i + Number(adults))
                                }
                              />
                            </div>
                          </Box>
                          <Box marginLeft={15}>
                            <div className="hotel_form_input">
                              <label className="form_lable">Gender*</label>
                              <select
                                name="Gender"
                                className="hotel_input_select"
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
                            <div className="form_input">
                              <label hotel_form_input className="form_lable">
                                Date Of Birth*
                              </label>
                              <input
                                type="date"
                                name="DateOfBirth"
                                className="deaprture_input"
                                onChange={(e) =>
                                  handleServiceChange(e, i + Number(adults))
                                }
                              />
                            </div>
                          </Box>
                        </Box>
                      </div>
                    );
                  })}
                </Box>
              )}
              {infants > 0 && (
                <Box className="mid_header" p={5} mt={25}>
                  <Typography className="p-2 Top_txt text-dark">
                    Infants: {infants}
                  </Typography>
                  {Array.from({ length: infants }, (err, i) => {
                    return (
                      <div className="mb-2">
                        <span className=" p-2 ">Infant {i + 1}</span>
                        <Box p={15} display="flex">
                          <Box>
                            <div className="form_input">
                              <label hotel_form_input className="form_lable">
                                First name*
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
                            </div>
                          </Box>
                          <Box marginLeft={15}>
                            <div className="form_input">
                              <label hotel_form_input className="form_lable">
                                Last name*
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
                            </div>
                          </Box>
                          <Box marginLeft={15}>
                            <div className="hotel_form_input">
                              <label className="form_lable">Gender*</label>
                              <select
                                name="Gender"
                                className="hotel_input_select"
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
                            <div className="form_input">
                              <label hotel_form_input className="form_lable">
                                Date Of Birth*
                              </label>
                              <input
                                type="date"
                                name="DateOfBirth"
                                className="deaprture_input"
                                onChange={(e) =>
                                  handleServiceChange(
                                    e,
                                    i + Number(adults) + Number(childs)
                                  )
                                }
                              />
                            </div>
                          </Box>
                        </Box>
                      </div>
                    );
                  })}
                </Box>
              )}
            </form>
          </div>
        </Box>
        {/* <Box className="mid_header" p={5} mt={25}>
          <Typography className="Top_txt">Travellers</Typography>

          <div className="services">
            <Box className="mid_header" p={5} mt={25}>
              <Box p={15} display="flex">
                <Box>
                  <div className="form_input">
                    <label hotel_form_input className="form_lable">
                      First name*
                    </label>
                    <input name="name" placeholder="Enter your name" />
                  </div>
                </Box>
                <Box marginLeft={15}>
                  <div className="form_input">
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
                  <div className="form_input">
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
                  <div className="form_input">
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
                  <div className="form_input">
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
                  <div className="form_input">
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
                  <div className="form_input">
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
                  <div className="form_input">
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

        <Box className="mid_header" p={5} mt={25}>
          <Box px={20}>
            <Typography
              sx={{ fontSize: "14px", color: "#616161", fontWeight: "bold" }}
            >
              Baggage Details:
            </Typography>
          </Box>
          <Box
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
          </Box>
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
                <div className="form_input">
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
                <div className="form_input">
                  <label hotel_form_input className="form_lable">
                    {data?.Origin}-{data?.Destination}
                  </label>
                  <input type="text" placeholder="Add No Meal Rs. - 0" />
                </div>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}></Grid>
          </Grid>
          <Box className="Top_header" m={15}>
            <Box p={17}>
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
                  <Typography
                    color="#008FCC "
                    fontSize="14px"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    {" "}
                    Subject to change without prior notice.{" "}
                  </Typography>
                  <Typography
                    color="#008FCC "
                    fontSize="14px"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    {" "}
                    Note : We should receive the request at least four hours
                    prior to Airline Fare Rules Policy.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            {/* ); })} */}
          </Box>
          <Box className="mid_header" py={5} px={17} m={15}>
            <Box px={17}>
              <Box display="flex">
                <input
                  className="inputSelect"
                  type="radio"
                  // defaultChecked="checked"
                />{" "}
                <Typography color="#252525" fontWeight="bold" fontSize="16px">
                  No Assistance and Insurance Required
                </Typography>
              </Box>
              <Box display="flex">
                <input
                  className="inputSelect"
                  type="radio"
                  // defaultChecked="checked"
                />{" "}
                <Typography color="#252525" fontWeight="bold" fontSize="16px">
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
          </Box>
          <Box py={4}>
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
          <Box className="Top_header" py={5} my={15} mx={15}>
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
          </Box>

          <Box textAlign="center" pb={15}>
            <form action="" className="formFlightSearch">
              <Button my={1} colorScheme="teal" type="submit">
                Select Seat (s)
              </Button>
            </form>
            {/* <form className="formFlightSearch"> */}
            <Button my={1} colorScheme="teal" type="submit">
              Proceed to Booking Review
            </Button>
            {/* </form> */}
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Leftdetail;
