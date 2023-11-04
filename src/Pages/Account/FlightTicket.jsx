import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./FlightTicket.css";

const FlightTicket = () => {
  const reducerState = useSelector((state) => state);
  const [flightData, setFlightData] = useState([]);
  const userId = reducerState?.logIn?.loginData?.data?.data?.id;

  // Dummy flight ticket data for testing
  const dummyData = [
    {
      passengerName: "John Doe",
      flightName: "Flight ABC123",
      departure: "New York",
      destination: "Los Angeles",
      pnr: "ABC123XYZ",
      referenceCode: "REF987",
      status: "Confirmed",
    },
    {
      passengerName: "Jane Smith",
      flightName: "Flight XYZ456",
      departure: "Chicago",
      destination: "Miami",
      pnr: "XYZ456ABC",
      referenceCode: "REF123",
      status: "Canceled",
    },
  ];

  useEffect(() => {
    // Make a GET request to the API endpoint
    // axios
    //   .get(`http://localhost:8000/skyTrails/flightBooking/getoneFlightsBooking/${userId}`)
    //   .then((response) => {
    //     // Handle the response data
    //     const user = response.data.data;
    //     setFlightData(user);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // Handle errors, e.g., display an error message
    //   });
    setFlightData(dummyData);
  }, []);

  return (
    <div className="container">
      {flightData.map((flight, index) => (
        <div className="ticket" key={index}>
          <div className="ticketcart">
          <div className="innerdiv1">
            <p>Passenger Name: {flight.passengerName}</p>
            <p>Flight Name: {flight.flightName}</p>
            <p>Departure: {flight.departure}</p>
            <p>Destination: {flight.destination}</p>
          </div>
          <div className="innerdiv2">
            <p>PNR: {flight.pnr}</p>
            <p>Reference Code: {flight.referenceCode}</p>
            <p>Status: {flight.status}</p>
          </div>
          <div className="btn-request">
           <button type="submit">Change Request</button>
          </div>
          </div>
          <div className="action">
            <div className="link">
            <a href="http://">Fare Rule</a>
            <a href="http://">View Ticket</a>
            <a href="http://">Change Request</a>
            </div>
            <div className="view">
            <button>View Invoice</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightTicket;
