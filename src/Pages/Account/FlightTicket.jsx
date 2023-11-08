import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./FlightTicket.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import FlightChangeReq from "./FlightChangeReq";
import HotelChangeReq from "./HotelChangeReq";





const FlightTicket = () => {




  return (
    <div className="container">
      {/* <FlightChangeReq /> */}
      <HotelChangeReq />
    </div>
  );
};

export default FlightTicket;


























