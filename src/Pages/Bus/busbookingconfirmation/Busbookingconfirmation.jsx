import Stepper from "../../../Components/Stepper";
import React, { useState } from "react";
import { Box, Grid, Typography, Link, Button } from "@mui/material";
import BusSaleSummary from "../busPassengerDetail/BusSaleSummary";
import Buscancellation from "../BusResult/Buscancellation";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import BusStepper from "../../../Components/BusStepper";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { busBookDetailsAction } from "../../../Redux/busSearch/busSearchAction";
import userApi from "../../../Redux/API/api";
import { useEffect } from "react";
import Busbookingloader from "./Busbookingloader";
import axios from "axios";
import Swal from "sweetalert2";
import { getUserDataAction } from "../../../Redux/Auth/UserDataById/actionUserData";
import { balanceSubtractRequest } from "../../../Redux/Auth/balaceSubtract/actionBalnceSubtract";
import dayjs from "dayjs";
const Busbookingconfirmation = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState(null);

  // console.log("dispatchhhhhhh", dispatch);
  const reducerState = useSelector((state) => state);
  // console.log("_______________", reducerState);
  const busFullData =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult;
  //   const busId =
  //     reducerState?.getBusResult?.busBook?.data?.data?.BookResult?.BusId;
  const [busId, setBusId] = useState(0);
  const userId = reducerState?.logIn?.loginData?.data?.data?.id;

  useEffect(() => {
    if (reducerState?.getBusResult?.isLoadingBook == true) setLoader(true);

  }, [reducerState?.getBusResult?.isLoadingBook]);
  useEffect(() => {
    if (reducerState?.getBusResult?.busBook?.data?.data?.BookResult) {
      if (userId) {
        const payload = userId;

        // console.log(payload,'userIdiii');
        dispatch(getUserDataAction(payload));
      }
      handleGetBookingDetails();
      setBusId(
        reducerState?.getBusResult?.busBook?.data?.data?.BookResult?.BusId
      );
      // console.log("busssssssssIdddd", busId);
      setLoader(false);
    }
  }, [reducerState?.getBusResult?.busBook?.data?.data?.BookResult]);
  useEffect(() => {
    if (
      reducerState?.getBusResult?.busDetails?.data?.data?.GetBookingDetailResult
    ) {
      busBookSave();
    }
  }, [
    reducerState?.getBusResult?.busDetails?.data?.data?.GetBookingDetailResult,
  ]);

  const handleGetBookingDetails = () => {
    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      TraceId: busFullData?.TraceId,
      BusId: busId,
      SeatId: 0,
      IsBaseCurrencyRequired: false,
    };
    // busBookSave()
    dispatch(busBookDetailsAction(payload));
  };

  const busBookSave = () => {
    const getDetails =
      reducerState?.getBusResult?.busDetails?.data?.data?.GetBookingDetailResult
        ?.Itinerary;
    const totalAmount =
      reducerState?.getBusResult?.busDetails?.data?.data?.GetBookingDetailResult
        ?.Itinerary?.Price?.PublishedPrice;

    const payloadSavedata = {
      userId: reducerState?.logIn?.loginData?.data?.data?.id,
      name: getDetails?.Passenger[0]?.FirstName,
      phone: getDetails?.Passenger[0]?.Phoneno,
      email: getDetails?.Passenger[0]?.Email,
      address: getDetails?.Passenger[0]?.Address,
      destination: getDetails?.Destination,
      origin: getDetails?.Origin,
      dateOfJourney: getDetails?.DateOfJourney,
      busType: getDetails?.BusType,
      pnr: getDetails?.TicketNo,
      busId: getDetails?.BusId,
      noOfSeats: getDetails?.NoOfSeats,
      amount: totalAmount,
    };
    userApi.busBookingDataSave(payloadSavedata);
  };
  const seatData = sessionStorage.getItem("seatData");
  const parsedSeatData = JSON.parse(seatData);
  const passengerCount = parsedSeatData?.blockedSeatArray.length;
  const resultIndex = parsedSeatData?.resultIndex;
  const selectedBus = busFullData.BusResults.find((bus) => bus.ResultIndex === resultIndex);
  console.log(selectedBus, "selectedBus")
  const cancellationPolicy = selectedBus?.CancellationPolicies;
  console.log(cancellationPolicy, "cancel policy")
  const departureDate = dayjs(selectedBus?.DepartureTime);
  const arrivalDate = dayjs(selectedBus?.ArrivalTime);
  console.log(cancellationPolicy, "cancel policy")
  // Format the dates
  const departureFormattedDate = departureDate.format("DD MMM, YY");
  const arrivalFormattedDate = arrivalDate.format("DD MMM, YY");



  const cancelFromDate = dayjs(cancellationPolicy[0]?.FromDate.slice(0, 9));
  const cancelToDateTime = dayjs(cancellationPolicy[0]?.FromDate.slice(11, 18));
  const cancelFromDateFormatted = cancelFromDate.format("DD MMM, YY");
  const cancelToDateTimeFormatted = cancelToDateTime.format("DD MMM, YY");



  const storedPassengerData = JSON.parse(sessionStorage.getItem("busPassName"));

  return (

    <>
      {loader ? (
        <Busbookingloader props={true} />
      ) : (
        <>


          <>
            <div className="container-xxl margin-pecentage">
              <div className="row">
                <div className="col-lg-9">
                  <div className="col-lg-12">
                    <div className="headingReview">
                      <p>Review Booking</p>
                    </div>
                  </div>
                  <div className="col-lg-12 my-3">
                    <div className="busAllDetail">
                      <div>
                        <p>
                          Bus Details
                        </p>
                        <span>
                          {selectedBus?.TravelName}
                        </span>
                      </div>
                      <div>
                        <p>
                          Origin
                        </p>
                        <span>
                          {selectedBus?.BoardingPointsDetails &&
                            selectedBus.BoardingPointsDetails.length > 0 &&
                            selectedBus.BoardingPointsDetails[0].CityPointLocation}
                        </span>
                      </div>
                      <div>
                        <p>
                          Destination
                        </p>
                        <span>
                          {selectedBus?.DroppingPointsDetails &&
                            selectedBus.DroppingPointsDetails.length > 0 &&
                            selectedBus.DroppingPointsDetails[0].CityPointLocation}
                        </span>
                      </div>
                      <div>
                        <p>
                          Departure Date Time
                        </p>
                        <span>
                          {departureFormattedDate}
                        </span>
                      </div>
                      <div>
                        <p>
                          Arrival Date Time
                        </p>
                        <span>
                          <span>{arrivalFormattedDate}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 my-3">
                    <div className="passengerDetBox">
                      <p>Passenger Details</p>
                      <span>{passengerCount} Adult(s)</span>
                    </div>
                  </div>
                  <div className="col-lg-8 my-3">


                    {storedPassengerData.map((passenger, index) => (
                      <div key={index} className="passDetails">
                        <div>
                          <p>Name:</p>
                          <p>Age:</p>
                          <p>Email Id:</p>
                        </div>
                        <div>
                          <span>{passenger.FirstName} {passenger.LastName}</span>
                          <span>{passenger.Age} Years Old</span>
                          <span>{passenger.Email}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-lg-12 my-3">
                    <div className="passengerDetBox">
                      <p>Cancellation Policy</p>
                    </div>
                  </div>
                  <div className="col-lg-8 my-3">
                    <div className="CancelRulesBus">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Cancellation Time</th>
                            <th scope="col">Cancellation Charges</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cancellationPolicy?.map((item, index) => {
                            const cancelFromDate = dayjs(item?.FromDate.slice(0, 10));
                            const cancelToDateTime = dayjs(item?.ToDate.slice(0, 10)); // Make sure ToDate is the correct property name
                            const cancelFromDateFormatted = cancelFromDate.format("DD MMM, YY");
                            const cancelToDateTimeFormatted = cancelToDateTime.format("DD MMM, YY");

                            return (
                              <tr key={index}>
                                <td>
                                  from {item?.FromDate.slice(11, 16)} {cancelFromDateFormatted} to {item.ToDate.slice(11, 16)} {cancelToDateTimeFormatted}
                                </td>
                                <td>{item?.CancellationCharge}%</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-4 bookBus">
                    <button type="submit">Print</button>
                  </div>
                </div>
                <div className="col-lg-3">
                  <BusSaleSummary />
                </div>
              </div>
            </div>
          </>




        </>
      )}
    </>

  );
};

export default Busbookingconfirmation;


//  <Box sx={{ flexGrow: 1 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={9}>
//                 <Box className="Bus_box">

//                   <Box
//                     style={{
//                       width: '95%',
//                       height: '60px',
//                       paddingLeft: '20px',
//                       paddingRight: '20px',
//                       paddingTop: '12px',
//                       paddingBottom: '12px',
//                       background: '#DBE5FF',
//                       boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.16)',
//                       borderRadius: '8px',
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',

//                     }}
//                   >
//                     <Box
//                       style={{
//                         display: 'flex',
//                         justifyContent: 'flex-start',
//                         alignItems: 'center',
//                         gap: '188px',
//                       }}
//                     >
//                       <Typography
//                         style={{
//                           color: '#21325D',
//                           fontSize: '28px',
//                           fontFamily: 'Montserrat',
//                           fontWeight: 600,
//                           wordWrap: 'break-word',
//                         }}
//                       >
//                         Booking Details
//                       </Typography>
//                     </Box>
//                   </Box>

//                   <Box display="flex" justifyContent="space-between">
//                     <Box mt={2} textAlign="left">
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Travel:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           Ashok Travels Mandsaur Group
//                         </Typography>
//                       </Box>
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           From:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           Delhi
//                         </Typography>
//                       </Box>
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Departure:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           11 Jan, 2023 , 19:00
//                         </Typography>
//                       </Box>
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Seat No.(s):
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           1
//                         </Typography>
//                       </Box>
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Boarding Point:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           Others
//                         </Typography>
//                       </Box>
//                     </Box>
//                     <Box mt={2} textAlign="left">
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Bus Type:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           Ashok Travels Mandsaur Group
//                         </Typography>
//                       </Box>
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           To:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           Delhi
//                         </Typography>
//                       </Box>
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Arrival:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           12 Jan, 2023 , 13:00
//                         </Typography>
//                       </Box>
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           No. of Pax:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           1
//                         </Typography>
//                       </Box>
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Dropping Point:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           Borivali West
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Box>

//                 <Box className="Bus_box" mt={2}>
//                   <Box>
//                     {/* <Typography
//                         sx={{
//                           fontSize: "16px",
//                           fontWeight: "bold",
//                           color: "#252525",
//                         }}
//                       >
//                         Passenger Details
//                       </Typography> */}
//                     <div
//                       style={{
//                         width: '95%',
//                         height: '60px',
//                         paddingLeft: '20px',
//                         paddingRight: '20px',
//                         paddingTop: '14px',
//                         paddingBottom: '14px',
//                         background: '#E4E4E4',
//                         borderRadius: '8px',
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                       }}
//                     >
//                       <div
//                         style={{
//                           color: 'black',
//                           fontSize: '24px',
//                           fontFamily: 'Montserrat',
//                           fontWeight: 600,
//                           wordWrap: 'break-word',
//                         }}
//                       >
//                         Passenger Details
//                       </div>
//                       <div
//                         style={{
//                           color: '#0048FF',
//                           fontSize: '16px',
//                           fontFamily: 'Montserrat',
//                           fontWeight: 600,
//                           wordWrap: 'break-word',
//                         }}
//                       >
//                         (1 Adult)
//                       </div>
//                     </div>

//                     {/* <Typography
//                         mt={2}
//                         sx={{ fontSize: "12px", fontWeight: "bold" }}
//                       >
//                         Passenger 1
//                       </Typography> */}
//                   </Box>
//                   <Box display="flex" justifyContent="space-between" marginTop="10px">
//                     <Box textAlign="left" mt={2}>
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Name:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           Shivsm singh
//                         </Typography>
//                       </Box>

//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Phone No:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           +91 89782 57788
//                         </Typography>
//                       </Box>
//                     </Box>

//                     <Box mt={2} textAlign="left">
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Gender:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           Male
//                         </Typography>
//                       </Box>
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Email:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           Sdfser@gmail.com
//                         </Typography>
//                       </Box>
//                     </Box>

//                     <Box mt={2} textAlign="left">
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Age:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           40
//                         </Typography>
//                       </Box>
//                       <Box display="flex">
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#666666",
//                           }}
//                         >
//                           Address:
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             color: "#006FFF",
//                           }}
//                           ml={2}
//                         >
//                           Chor Bazar ke Piche Adher Gali Kali Pahdai ke Uper
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Box>

//                 <Box className="Bus_box" mt={2}>
//                   <Box>
//                     <Typography
//                       sx={{
//                         fontSize: "16px",
//                         fontWeight: "bold",
//                         color: "#252525",
//                       }}
//                     >
//                       Cancellation Policy:
//                     </Typography>
//                   </Box>
//                   <Box mt={2}>
//                     <Buscancellation />
//                   </Box>
//                 </Box>
//                 {/* <Box className="Bus_box" mt={2}>
//                     <Box>
//                       <Typography
//                         sx={{
//                           fontSize: "16px",
//                           fontWeight: "bold",
//                           color: "#252525",
//                         }}
//                       >
//                         Term & Conditions:
//                       </Typography>
//                     </Box>
//                     <Box display="flex">
//                       <ReadMoreIcon />
//                       <Typography
//                         ml={2}
//                         sx={{
//                           fontSize: "14px",
//                           fontWeight: "bold",
//                           color: "#252525",
//                         }}
//                       >
//                         I have reviewed and agreed on the rates and commission
//                         offered for this booking.
//                       </Typography>
//                     </Box>
//                   </Box> */}
//               </Grid>
//               <Grid item xs={3}>
//                 <BusSaleSummary />
//               </Grid>
//             </Grid>
//           </Box>
//           <Box>
//             <button
//               style={{
//                 width: 200,
//                 height: 53,
//                 paddingLeft: 63.63,
//                 paddingRight: 63.63,
//                 paddingTop: 21.21,
//                 paddingBottom: 21.21,
//                 background: "#21325D",
//                 borderRadius: 5.3,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: 10.91,
//                 display: "inline-flex",
//                 border: "1px solid #21325D",
//                 color: "white",
//                 cursor: "pointer",
//                 marginLeft: "15px",
//                 fontFamily: "Montserrat",
//                 fontSize: "20px"

//               }}
//               type="submit"

//             >
//               Print
//             </button>
//           </Box>