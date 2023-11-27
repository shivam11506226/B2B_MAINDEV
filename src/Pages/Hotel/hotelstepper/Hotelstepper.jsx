import React, { useEffect, useState } from "react";
import "./hotelstepper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Flex, Spacer, Text, HStack } from "@chakra-ui/react";
import Loader from "../../Loader/Loader";
import Hotelform from "./Hotelform";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import color from "../../../color/color.js"
const Hotelstepper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("State Data", reducerState?.hotelSearchResult);

  return (
    <div className="flightContainer1" >
      <div>
        <Hotelform />
        {/* <Loader /> */}
      </div>
    </div>
  );
};

export default Hotelstepper;


// style = {{
//   width: "55%", margin: "auto", height: "auto", borderRadius: "8px",
//     background: "#FFFBFB", marginTop: "-80px", paddingLeft: "30px", paddingRight: "30px", paddingBottom: "20px"
// }}