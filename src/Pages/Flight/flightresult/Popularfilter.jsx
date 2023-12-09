import  React,{useEffect} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useNavigate } from "react-router-dom";
import Fairrule from "./Fairrule";
import Nonrefundable from "./Nonrefundable";
import LuggageIcon from "@mui/icons-material/Luggage";
import { useDispatch, useSelector, useReducer } from "react-redux";

import Divider from "@mui/material/Divider";
import { Grid, Radio, Typography, Button } from "@mui/material";
import Rangeslide from "./Rangeslide";
import Flightdetail from "./Flightdetail";

import "./flightresult.css";
import { Spacer } from "@chakra-ui/react";
import Swal from "sweetalert2";
const label = { inputProps: { "aria-label": "Checkbox demo" } };


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Popularfilter() {
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const results =
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;
  // useEffect(()=>{
  //   if(
  //    (reducerState?.flightFare?.flightQuoteData?.Error?.ErrorCode !== 0 ||
  //     reducerState?.flightFare?.flightQuoteData?.Error?.ErrorCode == undefined ) ||
  //      ( reducerState?.flightFare?.flightRuleData?.Error?.ErrorCode !== 0 || reducerState?.flightFare?.flightRuleData?.Error?.ErrorCode === undefined )
  //   )
  //   { 
  //     Swal.fire({
  //       title: "Hii Encountered an Error flight Result ",
  //       text: `${reducerState?.flightFare?.flightQuoteData?.Error?.ErrorMessage}`,
  //       icon: "question",
  //     });
  //     // navigate("/")
  //   }
  // },[reducerState?.flightFare?.flightQuoteData?.Error?.ErrorCode ])
  console.log(reducerState,"resuder state >>>>>>>>>>>>>>>>>>>>>>")
    
  const OpenNewpage = () => {
    navigate("booknow");
  };
  return (
    // <div className="col-lg-12 col-md-12 col-sm-12">
    <Flightdetail />
    // </div>
  );
}
