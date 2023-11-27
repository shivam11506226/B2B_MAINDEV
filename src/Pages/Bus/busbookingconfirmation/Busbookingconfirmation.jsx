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


