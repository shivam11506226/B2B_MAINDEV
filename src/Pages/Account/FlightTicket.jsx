import React, { useState } from "react";
import FlightChangeReq from "./FlightChangeReq";
import HotelChangeReq from "./HotelChangeReq";
import "./FlightTicket.css";
import BusChangeReq from "./BusChangeReq";
import HolidayChangeReq from "./HolidayChangeReq";
import { GiTreasureMap } from "react-icons/gi";

const FlightTicket = () => {
  const [showFlightChangeReq, setShowFlightChangeReq] = useState(true);
  const [showHotelChangeReq, setShowHotelChangeReq] = useState(false);
  const [showBusChangeReq, setShowBusChangeReq] = useState(false);
  const [showHolidayChangeReq, setShowHolidayChangeReq]=useState(false);

  const handleFlightButtonClick = () => {
    setShowFlightChangeReq(true);
    setShowHotelChangeReq(false);
    setShowBusChangeReq(false);
    setShowHolidayChangeReq(false);
  };

  const handleHotelButtonClick = () => {
    setShowFlightChangeReq(false);
    setShowHotelChangeReq(true);
    setShowBusChangeReq(false);
    setShowHolidayChangeReq(false);
  };

  const handleBusButtonClick = () => {
    setShowFlightChangeReq(false);
    setShowHotelChangeReq(false);
    setShowBusChangeReq(true);
    setShowHolidayChangeReq(false);
  };
  const handleHolidayButtonClick = () => {
    setShowFlightChangeReq(false);
    setShowHotelChangeReq(false);
    setShowBusChangeReq(false);
    setShowHolidayChangeReq(true);
  };

  return (
    <div className="container">
      <div className="buttonBox">
        <button onClick={handleFlightButtonClick}>Flight</button>
        <button onClick={handleHotelButtonClick}>Hotel</button>
        <button onClick={handleBusButtonClick}>Bus</button>
        <button onClick={handleHolidayButtonClick}>Holiday</button>
      </div>
      {showFlightChangeReq && <FlightChangeReq />}
      {showHotelChangeReq && <HotelChangeReq />}
      {showBusChangeReq && <BusChangeReq />}
      {showHolidayChangeReq && <HolidayChangeReq />}
    </div>
  );
};

export default FlightTicket;
