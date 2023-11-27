import React, { useEffect, useState } from "react";
import { dangerouslySetInnerHTML } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Grid from "@mui/material/Grid";
import Accordion from "react-bootstrap/Accordion";
import "./passenger.css";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import groupimg from "../../../Images/Groupl.png";
import {
  bookAction,
  bookActionGDS,
} from "../../../Redux/FlightBook/actionFlightBook";
import { PassengersAction } from "../../../Redux/Passengers/passenger";
import Headers from "../../../Components/Headers";
import FlightLoader from "../FlightLoader/FlightLoader";
const Leftdetail = () => {


  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adults = sessionStorage.getItem("adults");
  const childs = sessionStorage.getItem("childs");
  const infants = sessionStorage.getItem("infants");
  const reducerState = useSelector((state) => state);
  // console.log("reducerState", reducerState);
  const ResultIndex = sessionStorage.getItem("ResultIndex");
  const [farePrice, setFarePrice] = useState("");
  const fareValue = reducerState?.flightFare?.flightQuoteData?.Results;
  const isPassportRequired =
    reducerState?.flightFare?.flightQuoteData?.Results
      ?.IsPassportRequiredAtTicket;
  // console.log("fareValue", fareValue);
  const fareRule = reducerState?.flightFare?.flightRuleData?.FareRules;
  const data = reducerState?.oneWay?.oneWayData?.data?.data?.Response;
  //error show state
  const [fromError, setFromError] = useState("");
  const [toError, setToError] = useState("");
  const [dateError, setDateError] = useState("");
  const [sub, setSub] = useState(false);

  const passengerTemplate = {
    Title: "Mr",
    FirstName: "",
    LastName: "",
    PaxType: 1,
    DateOfBirth: "",
    Gender: 1,
    PassportNo: "",
    PassportExpiry: "",
    AddressLine1: "test",
    AddressLine2: "test2",
    Fare: farePrice,
    City: "gurgaon",
    CountryCode: "IN",
    CellCountryCode: "+91-",
    ContactNo: "",
    Nationality: "",
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
    Fare: farePrice,
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
      // console.log("fareDetails: ", fareDetails);
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
        // console.log(arr[1]);
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
  // console.log("farePrice", farePrice);
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
  // console.log("passengerData", passengerData);
  // console.warn("passengerTemplate", passengerList);


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
  const hii = { h11: "hii", h1: "h2", h3: "h3", h4: "" };
  // const ps = Object.keys(hii)

  // async function validate() {
  //   const ps1 = await Object.values(passengerTemplate).filter((x) => x !== "");
  //   const ps2 = await Object.values(childPassenger).filter((x) => x !== "");
  //   const ps3 = await Object.values(infantPassenger).filter((x) => x !== "");

  //   if (ps1.length > 0 || ps2.length > 0 || ps3.length > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  // validate();
  function validatePhoneNumber(phoneNumber) {
    // Define the regular expression pattern for a valid phone number
    var phonePattern = /^\d{10}$/;

    // Test the phone number against the pattern
    return phonePattern.test(phoneNumber);
  }
  function validateEmail1(email) {
    // Define the regular expression pattern for a valid phone number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the phone number against the pattern
    return emailRegex.test(email);
  }

  function isValidEmail(email, phoneNumber) {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;

    // Test the phone number against the pattern
    const result2 = validatePhoneNumber(phoneNumber);


    // Test the email against the regular expression
    const result1 = validateEmail1(email);
    const result = result1 && result2;
    console.warn(result, "Please fill all the details/////");
    return result
  }


  async function handleSubmit(event) {
    event.preventDefault();
    setSub(true)

    // const payloadGDS = {
    //   ResultIndex: ResultIndex,
    //   Passengers: passengerData,

    //   EndUserIp: reducerState?.ip?.ipData,
    //   TokenId: reducerState?.ip?.tokenData,
    //   TraceId: reducerState?.oneWay?.oneWayData?.data?.data?.Response?.TraceId,
    // };

    const formData = new FormData(event.target);
    console.warn(passengerData, "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7")

    // if (!formData.get("FirstName")) {
    //   setFromError("Enter First Name");
    //   return;
    // }
    // if (!formData.get("to")) {
    //   setToError("Enter Arrival City");
    //   return;
    // }
    // if (!formData.get("departure")) {
    //   setDateError("Select Date");
    //   return;
    // }
    // console.warn(passengerList, "passengerListemailValnooooooooooooooooooooooooooooo");
    const valid = await passengerData.filter(
      (item) =>
        item.FirstName === "" || item.LastName === "" || item.DateOfBirth === ""
    );
    // const res= isValidEmail(passengerList[0].Email)
    const emailVal = await passengerList.filter((item) =>

      // console.warn(passengerList[0].Email, "***********************************************nooooooooooooooooooooooooooooo")

      !isValidEmail(item.Email, item.ContactNo)


    )
    // const emailVal=5
    console.warn(emailVal, "emailVaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkk");
    // console.log(
    //   passengerData,
    //   "passengerDatammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
    // );
    if (valid.length === 0 && emailVal.length === 0) {
      // console.log("yessssssssssssssssssssssssssssss");


      if (fareValue?.IsLCC === false) {
        dispatch(PassengersAction(passengerData));
        navigate("/Flightresult/passengerdetail/flightreviewbooking");
      } else {
        dispatch(PassengersAction(passengerData));
        navigate("/Flightresult/passengerdetail/flightreviewbooking");
      }
    } else {
      alert("Please fill all the details");
    }

    // if()

    // const payload = {
    //   PreferredCurrency: null,
    //   ResultIndex: ResultIndex,
    //   AgentReferenceNo: "sonam1234567890",
    //   Passengers: [
    //     {
    //       Title: formData.get("title"),
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
    //         Currency:fareValue?.Fare?.Currency,
    //         BaseFare: fareValue?.Fare?.BaseFare,
    //         Tax: fareValue?.Fare?.Tax,
    //         YQTax: fareValue?.Fare?.YQTax,
    //         AdditionalTxnFeePub: fareValue?.Fare?.AdditionalTxnFeePub,
    //         AdditionalTxnFeeOfrd: fareValue?.Fare?.AdditionalTxnFeeOfrd,
    //         OtherCharges: fareValue?.Fare?.OtherCharges,
    //         Discount:fareValue?.Fare?.Discount,
    //         PublishedFare: fareValue?.Fare?.PublishedFare,
    //         OfferedFare: fareValue?.Fare?.OfferedFare,
    //         TdsOnCommission: fareValue?.Fare?.TdsOnCommission,
    //         TdsOnPLB: fareValue?.Fare?.TdsOnPLB,
    //         TdsOnIncentive: fareValue?.Fare?.TdsOnIncentive,
    //         ServiceFee: fareValue?.Fare?.ServiceFee
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
    //           AirlineCode: fareValue?.Segments[0]?.Airline?.AirlineCode,
    //           FlightNumber: fareValue?.Segments[0]?.Airline?.FlightNumber,
    //           WayType: ,
    //           Code: ,
    //           Description: ,
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
  // console.log("fareQuoteData", reducerState);
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




  // console.warn(minDateChild, "minDateChild", maxDateChild, "maxDateChild", 'currentDate&&&&&&&&&&&&&&&&&&&&&&&&&78888888888888888888')

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} validate>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="leftdiv">Passenger Details</div>
          <div className="rightdiv"></div>
        </div>

        <div className="services">
          <form onSubmit={handleSubmit}>
            <Box
              className="mid_header"
              p={5}
              mt={25}
              mb={10}
              style={{
                borderRadius: "4.587px",
                border: "1.147px solid #9E9E9E",

                background: "#FFFBFB",
              }}
            >
              <Typography className="p-2 Top_txt text-dark">
                Adult: {adults}
              </Typography>

              {Array.from({ length: adults }, (err, i) => {
                return (
                  <div className="mb-2">
                    <div className=" p-2 ">
                      Passenger {i + 1} {i == 0 ? "Lead" : ""}
                    </div>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item md={4}>
                        <Box>
                          <div className="form_input">
                            <label className="form_lable">Title*</label>
                            <select
                              name="Title"
                              onChange={(e) => handleServiceChange(e, i)}
                            >
                              <option value="Mr">Mr.</option>
                              <option value="Mrs">Mrs.</option>
                              <option value="Miss">Miss</option>
                            </select>
                          </div>
                        </Box>
                      </Grid>
                      <Grid item md={4}>
                        {" "}
                        <Box>
                          <div className="form_input">
                            <label className="form_lable">First name*</label>
                            <input
                              name="FirstName"
                              placeholder="Enter your name"
                              onChange={(e) => handleServiceChange(e, i)}
                              required
                            />

                            {passengerData[i].FirstName == "" && sub && <span id="error1">Enter First Name</span>}

                          </div>
                        </Box>
                      </Grid>
                      <Grid item md={4}>
                        <Box>
                          <div className="form_input">
                            <label hotel_form_input className="form_lable">
                              Last Name*
                            </label>
                            <input
                              name="LastName"
                              placeholder="Enter your last name"
                              onChange={(e) => handleServiceChange(e, i)}
                              required
                            />
                            {passengerData[i].LastName == "" && sub && <span id="error1">Enter Last Name</span>}
                          </div>
                        </Box>
                      </Grid>
                      <Grid item md={4}>
                        {" "}
                        <Box>
                          <div className="form_input">
                            <label hotel_form_input className="form_lable">
                              Date Of Birth*
                            </label>
                            <input
                              type="date"
                              name="DateOfBirth"
                              onChange={(e) => handleServiceChange(e, i)}
                              required
                              // value={maxDate}
                              // min={minDate}
                              max={maxDate}

                            />
                            {passengerData[i].DateOfBirth == "" && sub && <span id="error1">Enter DOB</span>}
                          </div>
                        </Box>
                      </Grid>
                      <Grid item md={4}>
                        <Box>
                          <div className="form_input">
                            <label hotel_form_input className="form_lable">
                              Email*
                            </label>
                            <input
                              type="email"
                              name="Email"
                              placeholder="Enter Email"
                              onChange={(e) => handleServiceChange(e, i)}

                            />
                            {!validateEmail1(passengerData[i].Email) && sub && <span id="error1">Enter Email</span>}
                          </div>
                        </Box>
                      </Grid>
                      <Grid item md={4}>
                        <Box>
                          <div className="form_input">
                            <label hotel_form_input className="form_lable">
                              ContactNo*
                            </label>
                            <input
                              type="number"
                              name="ContactNo"
                              placeholder="Enter ContactNo"
                              onChange={(e) => handleServiceChange(e, i)}
                              required


                            />
                            {!validatePhoneNumber(passengerData[i].ContactNo) == true && sub && <span id="error1">Enter Contact</span>}
                          </div>
                        </Box>
                      </Grid>

                      {isPassportRequired === true ? (
                        <Grid item md={4}>
                          <Box>
                            <div className="form_input">
                              <label className="form_lable">PassportNo*</label>
                              <input
                                name="PassportNo"
                                type="text"
                                required
                                placeholder="Enter Passport No"
                                onChange={(e) => handleServiceChange(e, i)}
                              />
                            </div>
                          </Box>
                        </Grid>
                      ) : (
                        ""
                      )}
                      {isPassportRequired === true ? (
                        <Grid item md={4}>
                          <Box>
                            <div className="form_input">
                              <label className="form_lable">
                                PassportExpiry*
                              </label>
                              <input
                                name="PassportExpiry"
                                type="date"
                                required
                                placeholder="Enter Passport date"
                                onChange={(e) => handleServiceChange(e, i)}
                              />
                            </div>
                          </Box>
                        </Grid>
                      ) : (
                        ""
                      )}
                    </Grid>
                  </div>
                );
              })}
            </Box>
            {childs > 0 && (
              <Box
                className="mid_header"
                style={{ border: "1.147px solid #9E9E9E" }}
                p={5}
                mt={25}
              >
                <Typography className="p-2 Top_txt text-dark">
                  Childs: {childs}
                </Typography>
                {Array.from({ length: childs }, (err, i) => {
                  return (
                    <div className="mb-2">
                      <div className=" p-2 ">Child {i + 1}</div>
                      <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item md={4}>
                          <Box>
                            <div className="form_input">
                              <label hotel_form_input className="form_lable">
                                First name*
                              </label>
                              <input
                                name="FirstName"
                                type="text"
                                placeholder="Enter your name"
                                onChange={(e) =>
                                  handleServiceChange(e, i + Number(adults))
                                }
                                required
                              />
                              {passengerData[Number(adults) + i].FirstName == "" && sub && <span id="error1">Enter First Name</span>}


                            </div>
                          </Box>
                        </Grid>
                        <Grid item md={4}>
                          <Box>
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
                                required
                              />
                              {passengerData[Number(adults) + i].LastName == "" && sub && <span id="error1">Enter Last Name</span>}

                            </div>
                          </Box>
                        </Grid>
                        <Grid item md={4}>
                          <Box>
                            <div className="hotel_form_input">
                              <label className="form_lable">Gender*</label>
                              <select
                                name="Gender"
                                className="form_input_select"
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
                        </Grid>
                        <Grid item md={4}>
                          <Box>
                            <div className="form_input">
                              <label hotel_form_input className="form_lable">
                                Date Of Birth*
                              </label>
                              <input
                                type="date"
                                name="DateOfBirth"
                                onChange={(e) =>
                                  handleServiceChange(e, i + Number(adults))
                                }
                                required
                                // value={minDateChild}
                                max={maxDateChild}
                                min={minDateChild}
                              // max={"2021-11-11" }
                              // min={ "2020-11-11"}
                              />
                              {passengerData[Number(adults) + i].DateOfBirth == "" && sub && <span id="error1">Enter DOB</span>}
                            </div>
                          </Box>
                        </Grid>
                        {isPassportRequired == true ? (
                          <Grid item md={4}>
                            <Box>
                              <div className="form_input">
                                <label className="form_lable">
                                  PassportNo*
                                </label>
                                <input
                                  name="PassportNo"
                                  type="text"
                                  required
                                  placeholder="Enter Passport No"
                                  onChange={(e) =>
                                    handleServiceChange(e, i + Number(adults))
                                  }
                                />
                              </div>
                            </Box>
                          </Grid>
                        ) : (
                          ""
                        )}
                        {isPassportRequired == true ? (
                          <Grid item md={4}>
                            <Box>
                              <div className="form_input">
                                <label className="form_lable">
                                  PassportExpiry*
                                </label>
                                <input
                                  name="PassportExpiry"
                                  type="date"
                                  required
                                  placeholder="Enter Passport date"
                                  onChange={(e) =>
                                    handleServiceChange(e, i + Number(adults))
                                  }
                                />
                              </div>
                            </Box>
                          </Grid>
                        ) : (
                          ""
                        )}
                      </Grid>
                    </div>
                  );
                })}
              </Box>
            )}
            {infants > 0 && (
              <Box
                className="mid_header"
                style={{ border: "1.147px solid #9E9E9E" }}
                p={5}
                mt={25}
              >
                <Typography className="p-2 Top_txt text-dark">
                  Infants: {infants}
                </Typography>
                {Array.from({ length: infants }, (err, i) => {
                  return (
                    <div className="mb-2">
                      <span className=" p-2 ">Infant {i + 1}</span>
                      <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item md={4}>
                          {" "}
                          <Box>
                            <div className="form_input">
                              <label hotel_form_input className="form_lable">
                                First name*
                              </label>
                              <input
                                name="FirstName"
                                placeholder="Enter your name"
                                required
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
                        </Grid>
                        <Grid item md={4}>
                          <Box>
                            <div className="form_input">
                              <label hotel_form_input className="form_lable">
                                Last name*
                              </label>
                              <input
                                name="LastName"
                                placeholder="Enter your last name"
                                required
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
                        </Grid>
                        <Grid item md={4}>
                          <Box>
                            <div className="hotel_form_input">
                              <label className="form_lable">Gender*</label>
                              <select
                                name="Gender"
                                className="form_input_select"
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
                        </Grid>
                        <Grid item md={4}>
                          <Box>
                            <div className="form_input">
                              <label hotel_form_input className="form_lable">
                                Date Of Birth*
                              </label>
                              <input
                                type="date"
                                name="DateOfBirth"
                                className="deaprture_input form_input_select"
                                required
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
                        </Grid>
                        {isPassportRequired == true ? (
                          <Grid item md={4}>
                            <Box>
                              <div className="form_input">
                                <label className="form_lable">
                                  PassportNo*
                                </label>
                                <input
                                  name="PassportNo"
                                  type="text"
                                  required
                                  placeholder="Enter Passport No"
                                  onChange={(e) =>
                                    handleServiceChange(
                                      e,
                                      i + Number(adults) + Number(childs)
                                    )
                                  }
                                />
                              </div>
                            </Box>
                          </Grid>
                        ) : (
                          ""
                        )}
                        {isPassportRequired == true ? (
                          <Grid item md={4}>
                            <Box>
                              <div className="form_input">
                                <label className="form_lable">
                                  PassportExpiry*
                                </label>
                                <input
                                  name="PassportExpiry"
                                  type="date"
                                  required
                                  placeholder="Enter Passport date"
                                  onChange={(e) =>
                                    handleServiceChange(
                                      e,
                                      i + Number(adults) + Number(childs)
                                    )
                                  }
                                />
                              </div>
                            </Box>
                          </Grid>
                        ) : (
                          ""
                        )}
                      </Grid>
                    </div>
                  );
                })}
              </Box>
            )}
          </form>
        </div>

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

        <Box
          className="mid_header"
          p={5}
          mt={25}
          mb={10}
          style={{
            borderRadius: "4.587px",
            border: "1.147px solid #9E9E9E",

            background: "#FFFBFB",
          }}
        >
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
              // console.log("Data Map", data1);
              // return data?.map((data1, index) => {
              const len = data1.length;
              return (
                <>
                  <Box width="120px" height="40px">
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
                        height: "30px",
                        fontSize: "12px",
                        alignItems: "center",
                        display: "flex",
                        backgroundColor: "white",
                        color: "black",
                        justifyContent: "center",
                        borderRadius: "10px",
                        border: "1px solid #D1D1D1",
                        borderRadius: "4px",
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
                        height: "30px",
                        fontSize: "12px",
                        alignItems: "center",
                        display: "flex",
                        backgroundColor: "white",
                        color: "black",
                        justifyContent: "center",
                        borderRadius: "10px",
                        border: "1px solid #D1D1D1",
                        borderRadius: "4px",
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
                        height: "30px",
                        fontSize: "12px",
                        alignItems: "center",
                        display: "flex",
                        backgroundColor: "white",
                        color: "black",
                        justifyContent: "center",
                        borderRadius: "10px",
                        border: "1px solid #D1D1D1",
                        borderRadius: "4px",
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
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} md={4}>
              <Box px={17} py={5}>
                <Grid container spacing={1} mt={1}>
                  <Grid item xs={6} md={6}>
                    {fareRule &&
                      fareRule.length > 0 &&
                      fareRule.map((dat) => {
                        // console.log("Dat", dat);
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

                    {/*                
                 <p style={{width:"100%"}}>
                 The Fare Basis Code is:{" "}
                    {fareQuoteData?.FareRules[0]?.FareBasisCode}
                    <br />
                    Meal: Chargeable
                    <br />
                    Seat: Chargeable
                 </p> */}

                    {/* <Typography
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
                  </Typography> */}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Box className="mid_header1" m={15}>
            <Box display="flex" flexDirection="column">
              <Typography
                color="#008FCC"
                fontSize="16px"
                fontWeight="bold"
                textAlign="center"
                width="100%"
              >
                Fare Rule
              </Typography>
              <Typography
                color="#707070"
                fontSize="12px"
                fontWeight="bold"
                textAlign="center"
                width="100%"
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

            {/* ); })} */}
          </Box>

          {/* <div
            style={{
              width: 200,
              height: 30,
              paddingBottom: 32,
              background: "#21325D",
              borderRadius: 8,
              textAlign: "center",
              alignItems: "center",
              gap: 24,
              color:"white",
              marginLeft: "15px",
              marginBottom:"5px"
            }}
          >
          
            <Button my={1}  type="submit">
            Proceed to Book
            </Button>
          </div> */}
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
