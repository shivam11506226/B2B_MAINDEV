import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Link from "@mui/icons-material/Link";
import Divider from "@mui/material/Divider";
import { Grid, Radio, Typography, Button } from "@mui/material";
import "./passenger.css";
import { Spacer } from "@chakra-ui/react";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const KeyValue = ({ data, value }) => {
  // console.log("----------------------");
  // console.log(data);
  // console.log(value);
  // console.log("----------------------");
  return (
    <>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography
            sx={{
              color: "#616161",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            {data}:
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box textAlign="right">
          <Typography
            sx={{
              color: "#FF8900",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            Rs. {value}.00
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default function Popularfilter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  // console.log("reducerState", reducerState);
  const fareQuote = reducerState?.flightFare?.flightQuoteData?.Error?.ErrorCode;
  const fareRule = reducerState?.flightFare?.flightRuleData?.FareRules;
  const fareValue = reducerState?.flightFare?.flightQuoteData?.Results;

  const fareofall = reducerState?.flightFare;

  const markUpamount =
    reducerState?.userData?.userData?.data?.data?.markup?.flight;
  console.log("fareValue 🤞", fareofall);


  // flight departure


  // time and day

  const fareValueDepart = reducerState?.flightFare?.flightQuoteData?.Results;

  const departDate = fareValueDepart?.Segments?.[0]?.[0]?.Origin?.DepTime;
  const dateDepart = new Date(departDate);
  const departDay = dateDepart.getDate();
  const departMonth = dateDepart.toLocaleString("default", {
    month: "short",
  });
  const departYear = dateDepart.getFullYear();
  const formattedDepart = `${departDay} ${departMonth} ${departYear}`;


  // class and flight number 

  const departFlightNumber = fareValueDepart?.Segments?.[0]?.[0]?.Airline?.FlightNumber;
  const departFlightClass = fareValueDepart?.Segments?.[0]?.[0]?.Airline?.FareClass;


  // depart depart and arrival city 

  const departDepartureCity = fareValueDepart?.Segments?.[0]?.[0]?.Origin?.Airport?.AirportCode;
  const departDestinationCity = fareValueDepart?.Segments?.[0]?.[0]?.Destination?.Airport?.AirportCode;


  // flight departure







  // flight return 

  const fareValueReturn = reducerState?.flightFare?.flightQuoteDataReturn?.Results;


  const ReturnDate = fareValueReturn?.Segments?.[0]?.[0]?.Origin?.DepTime;
  const dateReturn = new Date(ReturnDate);
  const ReturnDay = dateReturn.getDate();
  const ReturnMonth = dateReturn.toLocaleString("default", {
    month: "short",
  });
  const ReturnYear = dateReturn.getFullYear();
  const formattedReturn = `${ReturnDay} ${ReturnMonth} ${ReturnYear}`;


  // class and flight number 

  const ReturnFlightNumber = fareValueReturn?.Segments?.[0]?.[0]?.Airline?.FlightNumber;
  const ReturnFlightClass = fareValueReturn?.Segments?.[0]?.[0]?.Airline?.FareClass;


  // depart depart and arrival city 

  const ReturnDepartureCity = fareValueReturn?.Segments?.[0]?.[0]?.Origin?.Airport?.AirportCode;
  const ReturnDestinationCity = fareValueReturn?.Segments?.[0]?.[0]?.Destination?.Airport?.AirportCode;



  const totalFare = (
    fareValueDepart?.Fare?.PublishedFare +
    markUpamount +
    fareValueReturn?.Fare?.PublishedFare +
    markUpamount
  );

  console.log(fareValueDepart)
  console.log(fareValueReturn)

  console.log(totalFare, "totalFare")

  let total = 0;

  return (
    // <>
    //   {fareQuote === 0 ? (
    //     <>
    //       {fareValue?.Segments?.map((dat, index) => {
    //         return dat?.map((data1) => {
    //           const dateString = data1?.Origin?.DepTime;
    //           const date = new Date(dateString);
    //           const day = date.getDate();
    //           const month = date.toLocaleString("default", {
    //             month: "short",
    //           });
    //           const year = date.getFullYear();
    //           const formattedDate = `${day} ${month} ${year}`;
    //           return (
    <>
      <div className="priceSummary">
        <div className="head">
          <span>Price Summary</span>
        </div>
        <div className="cat">
          <p className="p-2">Depature:</p>
        </div>
        <div className="totCOmm">
          <div >
            <span>{formattedDepart}</span>
            <p>{departFlightNumber}</p>
            <p>{departFlightClass} Class</p>
          </div>

        </div>
        <div className="priceChart">
          <div >
            <span className="text-bold">From</span>
            <p className="text-bold">{departDepartureCity}</p>
          </div>
          <div >
            <span className="text-bold">To</span>
            <p className="text-bold">{departDestinationCity}</p>
          </div>
        </div>
        <div className="totCOmm">
          {fareValueDepart?.FareBreakdown?.map((data) => {
            return (
              <div className="">
                {data?.PassengerType === 1 && (
                  <>
                    <span>Adult x {data?.PassengerCount}</span>
                    <p>{'₹'}{data?.BaseFare + data?.Tax}</p>

                  </>
                )}
                {data?.PassengerType === 2 && (
                  <>
                    <span>Child x {data?.PassengerCount}</span>
                    <p>{'₹'}{data?.BaseFare + data?.Tax}</p>
                  </>
                )}
                {data?.PassengerType === 3 && (
                  <>
                    <span>Infant x {data?.PassengerCount}</span>
                    <p>{'₹'}{data?.BaseFare + data?.Tax}</p>
                  </>
                )}


              </div>
            );
          })}

        </div>










        {/* arrival  */}

        <div className="cat">
          <p className="p-2">Return:</p>
        </div>

        <div className="totCOmm">
          <div >
            <span>{formattedReturn}</span>
            <p>{ReturnFlightNumber}</p>
            <p>{ReturnFlightClass} Class</p>
          </div>

        </div>
        <div className="priceChart">
          <div >
            <span className="text-bold">From</span>
            <p className="text-bold">{ReturnDepartureCity}</p>
          </div>
          <div >
            <span className="text-bold">To</span>
            <p className="text-bold">{ReturnDestinationCity}</p>
          </div>
        </div>
        <div className="totCOmm">
          {fareValueReturn?.FareBreakdown?.map((data) => {
            return (
              <div className="">
                {data?.PassengerType === 1 && (
                  <>
                    <span>Adult x {data?.PassengerCount}</span>
                    <p>{'₹'}{data?.BaseFare + data?.Tax}</p>

                  </>
                )}
                {data?.PassengerType === 2 && (
                  <>
                    <span>Child x {data?.PassengerCount}</span>
                    <p>{'₹'}{data?.BaseFare + data?.Tax}</p>
                  </>
                )}
                {data?.PassengerType === 3 && (
                  <>
                    <span>Infant x {data?.PassengerCount}</span>
                    <p>{'₹'}{data?.BaseFare + data?.Tax}</p>
                  </>
                )}


              </div>
            );
          })}

        </div>

        <div className="TotGst">
          <div>
            <span>Total TAX: </span>
            <p>{'₹'}{markUpamount}</p>
          </div>
          <div >
            <span>Grand Total:</span>
            <p>
              {'₹'}{totalFare}
            </p>
          </div>
        </div>
      </div>
    </>
    //           );
    //         });
    //       })}
    //     </>
    //   ) : (
    //     <>
    //       <div>
    //         <p>session expired</p>
    //       </div>
    //     </>
    //   )}

    // </>

  );
}


















// <Box sx={{ flexGrow: 1, background: "#FCFFFF", border: "2px solid #5C85A4", borderRadius: "10px" }}>
//   <Box
//     // backgroundColor="white"



//     p={3}

//   >
//     <Box sx={{ backgroundColor: '#B8CCFF', display: 'flex', alignItems: 'center', height: '40px', paddingX: "10px", marginBottom: '20px' }}>

//       <Typography
//         sx={{ color: "#000000", fontSize: "18px", fontWeight: "bold", backgroundColor: '#B8CCFF', }}

//       >
//         Fare Summary
//       </Typography>
//     </Box>

//     {fareQuote === 0 ? (
//       <>
//         {/* {fareRule[0]?.map((data) => {
//           return (
//             <> */}
//         {fareValue?.Segments?.map((dat, index) => {
//           return dat?.map((data1) => {
//             const dateString = data1?.Origin?.DepTime;
//             const date = new Date(dateString);
//             const day = date.getDate();
//             const month = date.toLocaleString("default", {
//               month: "short",
//             });
//             const year = date.getFullYear();
//             const formattedDate = `${day} ${month} ${year}`;
//             return (
//               <>
//                 <Grid container>
//                   <Grid item xs={12} md={4}>
//                     <Box>
//                       <Typography
//                         sx={{
//                           color: "#000000",
//                           fontSize: "10px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         {formattedDate}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                   <Grid item xs={12} md={4}>
//                     <Box textAlign="center">
//                       <Typography
//                         sx={{
//                           color: "#000000",
//                           fontSize: "10px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         {data1?.Airline?.FlightNumber}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                   <Grid item xs={12} md={4}>
//                     <Box textAlign="right">
//                       <Typography
//                         sx={{
//                           color: "#000000",
//                           fontSize: "10px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         {data1?.Airline?.FareClass} Class
//                       </Typography>
//                     </Box>
//                   </Grid>
//                 </Grid>
//                 <Divider
//                   style={{
//                     height: "2px",
//                     background: "#D3D3D3",
//                     marginTop: "10px",
//                     marginBottom: "10px",
//                   }}
//                 />
//                 <Grid container>
//                   <Grid item xs={12} md={4}>
//                     <Box>
//                       <Typography
//                         sx={{
//                           color: "#616161",
//                           fontSize: "10px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         Dept:
//                       </Typography>
//                       <Typography
//                         sx={{
//                           color: "#616161",
//                           fontSize: "10px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         Arr:
//                       </Typography>
//                     </Box>
//                   </Grid>
//                   <Grid item xs={12} md={4}>
//                     <Box textAlign="center">
//                       <Typography
//                         sx={{
//                           color: "#0052D0",
//                           fontSize: "10px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         {data1?.Origin?.Airport?.AirportCode}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           color: "#0052D0",
//                           fontSize: "10px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         {data1?.Destination?.Airport?.AirportCode}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                 </Grid>
//               </>
//             );
//           });
//         })}
//         <Divider
//           style={{
//             height: "2px",
//             background: "#D3D3D3",
//             marginTop: "10px",
//             marginBottom: "10px",
//           }}
//         />
//         <div>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//               width="100%"
//               style={{ backgroundColor: '#DFE6F7' }}
//             >
//               <Typography>Fare / Pax Type</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Grid container>
//                 {fareValue?.Fare?.TaxBreakup?.map((obj) => {
//                   total += obj.value;
//                   return <KeyValue data={obj.key} value={obj.value} />;
//                 })}

//                 <Grid item xs={12} md={6}>
//                   <Box>
//                     <Typography
//                       sx={{
//                         color: "#616161",
//                         fontSize: "10px",
//                         fontWeight: "bold",
//                       }}
//                       my={1}
//                     >
//                       Total:
//                     </Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Box textAlign="right">
//                     <Typography
//                       sx={{
//                         color: "#000000",
//                         fontSize: "10px",
//                         fontWeight: "400",
//                       }}
//                       my={1}
//                     >
//                       ₹ {total}.00
//                     </Typography>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </AccordionDetails>
//           </Accordion>
//           <Divider
//             style={{
//               height: "2px",
//               background: "#D3D3D3",
//               marginTop: "10px",
//               marginBottom: "10px",
//             }}
//           />
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//               style={{ backgroundColor: '#DFE6F7' }}
//             >
//               <Typography>Total Fare </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Grid container>
//                 {fareValue?.FareBreakdown?.map((data) => {
//                   return (
//                     <>
//                       {data?.PassengerType === 1 && (
//                         <>
//                           <Grid item xs={12} md={6}>
//                             <Box>
//                               <Typography
//                                 sx={{
//                                   color: "#616161",
//                                   fontSize: "10px",
//                                   fontWeight: "bold",
//                                 }}
//                               >
//                                 <span>Adult x {data?.PassengerCount}</span>
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#616161",
//                                   fontSize: "10px",
//                                   fontWeight: "bold",
//                                 }}
//                               >
//                                 Excess Baggage
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#616161",
//                                   fontSize: "10px",
//                                   fontWeight: "bold",
//                                 }}
//                               >
//                                 Meal
//                               </Typography>
//                             </Box>
//                           </Grid>

//                           <Grid item xs={12} md={6}>
//                             <Box textAlign="right">
//                               <Typography
//                                 sx={{
//                                   color: "#000000",
//                                   fontSize: "10px",
//                                   fontWeight: "400",
//                                 }}
//                               >
//                                 ₹ {data?.BaseFare + data?.Tax}
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#000000",
//                                   fontSize: "10px",
//                                   fontWeight: "400",
//                                 }}
//                               >
//                                 ₹ 00.00
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#000000",
//                                   fontSize: "10px",
//                                   fontWeight: "400",
//                                 }}
//                               >
//                                 ₹ 00.00
//                               </Typography>
//                             </Box>
//                           </Grid>
//                         </>
//                       )}
//                       {data?.PassengerType === 2 && (
//                         <>
//                           <Grid item xs={12} md={6}>
//                             <Box>
//                               <Typography
//                                 sx={{
//                                   color: "#616161",
//                                   fontSize: "10px",
//                                   fontWeight: "bold",
//                                 }}
//                               >
//                                 <span>Child x {data?.PassengerCount}</span>
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#616161",
//                                   fontSize: "10px",
//                                   fontWeight: "bold",
//                                 }}
//                               >
//                                 Excess Baggage
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#616161",
//                                   fontSize: "10px",
//                                   fontWeight: "bold",
//                                 }}
//                               >
//                                 Meal
//                               </Typography>
//                             </Box>
//                           </Grid>

//                           <Grid item xs={12} md={6}>
//                             <Box textAlign="right">
//                               <Typography
//                                 sx={{
//                                   color: "#000000",
//                                   fontSize: "10px",
//                                   fontWeight: "400",
//                                 }}
//                               >
//                                 ₹ {data?.BaseFare + data?.Tax}
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#000000",
//                                   fontSize: "10px",
//                                   fontWeight: "400",
//                                 }}
//                               >
//                                 ₹ 00.00
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#000000",
//                                   fontSize: "10px",
//                                   fontWeight: "400",
//                                 }}
//                               >
//                                 ₹ 00.00
//                               </Typography>
//                             </Box>
//                           </Grid>
//                         </>
//                       )}
//                       {data?.PassengerType === 3 && (
//                         <>
//                           <Grid item xs={12} md={6}>
//                             <Box>
//                               <Typography
//                                 sx={{
//                                   color: "#616161",
//                                   fontSize: "10px",
//                                   fontWeight: "bold",
//                                 }}
//                               >
//                                 <span>Infant x {data?.PassengerCount}</span>
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#616161",
//                                   fontSize: "10px",
//                                   fontWeight: "bold",
//                                 }}
//                               >
//                                 Excess Baggage
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#616161",
//                                   fontSize: "10px",
//                                   fontWeight: "bold",
//                                 }}
//                               >
//                                 Meal
//                               </Typography>
//                             </Box>
//                           </Grid>

//                           <Grid item xs={12} md={6}>
//                             <Box textAlign="right">
//                               <Typography
//                                 sx={{
//                                   color: "#000000",
//                                   fontSize: "10px",
//                                   fontWeight: "400",
//                                 }}
//                               >
//                                 ₹ {data?.BaseFare + data?.Tax}
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#000000",
//                                   fontSize: "10px",
//                                   fontWeight: "400",
//                                 }}
//                               >
//                                 ₹ 00.00
//                               </Typography>
//                               <Typography
//                                 sx={{
//                                   color: "#000000",
//                                   fontSize: "10px",
//                                   fontWeight: "400",
//                                 }}
//                               >
//                                 ₹ 00.00
//                               </Typography>
//                             </Box>
//                           </Grid>
//                         </>
//                       )}
//                     </>
//                   );
//                 })}
//               </Grid>
//             </AccordionDetails>
//           </Accordion>
//           <Divider
//             style={{
//               height: "2px",
//               background: "#D3D3D3",
//               marginTop: "10px",
//               marginBottom: "10px",
//             }}
//           />
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//               style={{ backgroundColor: '#DFE6F7' }}
//             >
//               <Typography>Additional Charges</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Grid container>

//                 <Grid item xs={12} md={6}>
//                   <Box>
//                     <Typography
//                       sx={{
//                         color: "#616161",
//                         fontSize: "10px",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       Total GST
//                     </Typography>
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12} md={6}>
//                   <Box textAlign="right">
//                     <Typography
//                       sx={{
//                         color: "#616161",
//                         fontSize: "10px",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       ₹ 00.00
//                     </Typography>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </AccordionDetails>
//           </Accordion>
//         </div>




//         {/* <Grid container>

//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography
//                 sx={{
//                   color: "#616161",
//                   fontSize: "10px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Fare / Pax Type
//               </Typography>
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <Box textAlign="right">
//               <Typography
//                 sx={{
//                   color: "#616161",
//                   fontSize: "10px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Amount
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//         <Divider
//           style={{
//             height: "2px",
//             background: "#D3D3D3",
//             marginTop: "10px",
//             marginBottom: "10px",
//           }}
//         />
//         <Grid container>
//           {fareValue?.Fare?.TaxBreakup?.map((obj) => {
//             total += obj.value;
//             return <KeyValue data={obj.key} value={obj.value} />;
//           })}

//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography
//                 sx={{
//                   color: "#616161",
//                   fontSize: "10px",
//                   fontWeight: "bold",
//                 }}
//                 my={1}
//               >
//                 Total:
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box textAlign="right">
//               <Typography
//                 sx={{
//                   color: "#000000",
//                   fontSize: "10px",
//                   fontWeight: "400",
//                 }}
//                 my={1}
//               >
//                 ₹ {total}.00
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//         <Divider
//           style={{
//             height: "2px",
//             background: "#D3D3D3",
//             marginTop: "10px",
//             marginBottom: "10px",
//           }}
//         />
//         <Typography
//           sx={{
//             color: "#616161",
//             fontSize: "12px",
//             fontWeight: "bold",
//           }}
//           my={1}
//         >
//           Total Fare (Inc. Taxes)
//         </Typography>
//         <Grid container>
//           {fareValue?.FareBreakdown?.map((data) => {
//             return (
//               <>
//                 {data?.PassengerType === 1 && (
//                   <>
//                     <Grid item xs={12} md={6}>
//                       <Box>
//                         <Typography
//                           sx={{
//                             color: "#616161",
//                             fontSize: "10px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           <span>Adult x {data?.PassengerCount}</span>
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#616161",
//                             fontSize: "10px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           Excess Baggage
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#616161",
//                             fontSize: "10px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           Meal
//                         </Typography>
//                       </Box>
//                     </Grid>

//                     <Grid item xs={12} md={6}>
//                       <Box textAlign="right">
//                         <Typography
//                           sx={{
//                             color: "#000000",
//                             fontSize: "10px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           ₹ {data?.BaseFare + data?.Tax}
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#000000",
//                             fontSize: "10px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           ₹ 00.00
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#000000",
//                             fontSize: "10px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           ₹ 00.00
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   </>
//                 )}
//                 {data?.PassengerType === 2 && (
//                   <>
//                     <Grid item xs={12} md={6}>
//                       <Box>
//                         <Typography
//                           sx={{
//                             color: "#616161",
//                             fontSize: "10px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           <span>Child x {data?.PassengerCount}</span>
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#616161",
//                             fontSize: "10px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           Excess Baggage
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#616161",
//                             fontSize: "10px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           Meal
//                         </Typography>
//                       </Box>
//                     </Grid>

//                     <Grid item xs={12} md={6}>
//                       <Box textAlign="right">
//                         <Typography
//                           sx={{
//                             color: "#000000",
//                             fontSize: "10px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           ₹ {data?.BaseFare + data?.Tax}
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#000000",
//                             fontSize: "10px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           ₹ 00.00
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#000000",
//                             fontSize: "10px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           ₹ 00.00
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   </>
//                 )}
//                 {data?.PassengerType === 3 && (
//                   <>
//                     <Grid item xs={12} md={6}>
//                       <Box>
//                         <Typography
//                           sx={{
//                             color: "#616161",
//                             fontSize: "10px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           <span>Infant x {data?.PassengerCount}</span>
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#616161",
//                             fontSize: "10px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           Excess Baggage
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#616161",
//                             fontSize: "10px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           Meal
//                         </Typography>
//                       </Box>
//                     </Grid>

//                     <Grid item xs={12} md={6}>
//                       <Box textAlign="right">
//                         <Typography
//                           sx={{
//                             color: "#000000",
//                             fontSize: "10px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           ₹ {data?.BaseFare + data?.Tax}
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#000000",
//                             fontSize: "10px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           ₹ 00.00
//                         </Typography>
//                         <Typography
//                           sx={{
//                             color: "#000000",
//                             fontSize: "10px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           ₹ 00.00
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   </>
//                 )}
//               </>
//             );
//           })}
//         </Grid>
//         <Box
//           sx={{
//             background: "#FFFFFF",
//             border: "1px solid #D1D1D1",
//             borderRadius: "10px",
//             padding: "10px",
//             marginY: "10px",
//           }}
//         >
//           <Grid container>
//             <Grid item xs={12} md={6}>
//               <Box>
//                 <Typography
//                   sx={{
//                     color: "#616161",
//                     fontSize: "10px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Total Base. Fare
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: "#616161",
//                     fontSize: "10px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Total Tax
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: "#616161",
//                     fontSize: "10px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Other Charges
//                 </Typography>
//               </Box>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Box textAlign="right">
//                 <Typography
//                   sx={{
//                     color: "#000000",
//                     fontSize: "10px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   ₹ {fareValue?.Fare?.BaseFare}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: "#000000",
//                     fontSize: "10px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   ₹ {fareValue?.Fare?.Tax}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: "#000000",
//                     fontSize: "10px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   ₹ {fareValue?.Fare?.OtherCharges}
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box> */}
//         <Grid container sx={{ backgroundColor: '#B8CCFF', display: 'flex', alignItems: 'center', height: '40px', paddingX: "10px", marginY: "20px" }}>
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography
//                 sx={{
//                   color: "#000000",
//                   fontSize: "12px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Total Payable:
//               </Typography>
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <Box textAlign="right">
//               <Typography
//                 sx={{
//                   color: "#000000",
//                   fontSize: "11px",
//                   fontWeight: "600",
//                 }}
//               >
//                 ₹{" "}
//                 {fareValue?.Fare?.BaseFare +
//                   fareValue?.Fare?.Tax +
//                   fareValue?.Fare?.OtherCharges}
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//         {/* </>
//           );
//          })} */}
//       </>
//     ) : (
//       // <Grid container>
//       //   <Grid item xs={12} md={4}>
//       <Box>
//         <Typography
//           sx={{
//             color: "#ff0000",
//             fontSize: "10px",
//             fontWeight: "bold",
//           }}
//         >
//           {
//             reducerState?.flightFare?.flightQuoteData?.Error
//               ?.ErrorMessage
//           }

//         </Typography>
//       </Box>
//       //   </Grid>
//       // </Grid>
//     )}
//   </Box>
// </Box>
