import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import BusStepper from "../../Components/BusStepper";
import BusForm from "./busform/BusForm";

const bus = () => {
  return (
     <div className="flightContainer" style={{width:"60%",margin:"auto",borderRadius:"12px"}}>
      <BusStepper />
      <BusForm />
    </div>
  );
};

export default bus;
