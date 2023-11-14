import React, { useState } from "react";
import FlightChangeReq from "./FlightChangeReq";
import HotelChangeReq from "./HotelChangeReq";
import "./FlightTicket.css";

const FlightTicket = () => {
  const [showFlightChangeReq, setShowFlightChangeReq] = useState(true);
  const [showHotelChangeReq, setShowHotelChangeReq] = useState(false);

  const handleFlightButtonClick = () => {
    setShowFlightChangeReq(true);
    setShowHotelChangeReq(false);
  };

  const handleHotelButtonClick = () => {
    setShowFlightChangeReq(false);
    setShowHotelChangeReq(true);
  };

  return (
    <div className="container">
      <div className="buttonBox">
        <button onClick={handleFlightButtonClick}>Flight</button>
        <button onClick={handleHotelButtonClick}>Hotel</button>
        <button onClick={handleHotelButtonClick}>Bus</button>
      </div>
      {showFlightChangeReq && <FlightChangeReq />}
      {showHotelChangeReq && <HotelChangeReq />}
    </div>
  );
};

export default FlightTicket;
