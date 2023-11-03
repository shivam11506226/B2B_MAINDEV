import React from "react";
import Admini from "../../Images/Admin.svg";
// import AccountDetails from "./AccountDetails"; // Import the Account component
// import Queue from "./Queue"; // Import the Queue component
// import Tickets from "./Ticket"; // Import the Tickets component
// import Stack from "@mui/material/Stack";
// import { Button, Box } from "@mui/material";
// import color from "../../color/color";
import { useNavigate } from "react-router-dom";
import "./Administration.css";

const Administration = () => {
  const navigate = useNavigate();
  const Services = () => {
    navigate("/Services");
  };
  const Accounts = () => {
    navigate("/accounts");
  };
  const Reports = () => {
    navigate("/Reports");
  };
  const Queues = () => {
    navigate("/Queue");
  };
  const GST = () => {
    navigate("/GST");
  };
  const Service_Request = () => {
    navigate("/ServiceRequest");
  };
  const Forex = () => {
    navigate("/Forex");
  };
  return (
    <div className="button-container">
      <div className="header">
        <p>How Can we Assist you today?</p>
      </div>
      <div className="content">
        <div className="category">
          <img src={Admini} alt="" />
          <p>Administration</p>
        </div>
        <div className="menu">
          <div><div onClick={Services}>Services</div></div>
          <div><div onClick={Accounts}>Accounts</div></div>
          <div><div onClick={Reports}>Reports</div></div>
          <div><div onClick={Queues} >Queues</div></div>
          <div><div onClick={GST}>GST</div></div>
          <div><div onClick={Service_Request}>Service Request</div></div>
          <div><div onClick={Forex}>Forex</div></div>
        </div>
      </div>
    </div>
  );
};

export default Administration;
