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
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const KeyValue = ({ data, value }) => {
  console.log("----------------------");
  console.log(data);
  console.log(value);
  console.log("----------------------");
  return (
    <>
      <Grid item xs={12} md={6}>
        <Box>
          
          <div
                              style={{
                                color: "black",
                                fontSize: 16,
                                fontFamily: "Montserrat",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                               {data}:
                             </div>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box textAlign="right">
        
          <div
                              style={{
                                color: "black",
                                fontSize: 11.47,
                                fontFamily: "Montserrat",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Rs. {value}.00
                            </div>
        </Box>
      </Grid>
      
    </>
  );
};

export default function Popularfilter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("reducerState", reducerState);
  const fareQuote = reducerState?.flightFare?.flightQuoteData?.Error?.ErrorCode;
  const fareRule = reducerState?.flightFare?.flightRuleData?.FareRules;
  const fareValue = reducerState?.flightFare?.flightQuoteData?.Results;

  console.log("fareValue 🤞", fareValue);

  let total = 0;

  return (
    <Box sx={{ flexGrow: 1, background: "#FCFFFF"}}>
      <Box
        backgroundColor="white"
        
        borderRadius="10px"
        border= '1px #5C85A4 solid'
        p="10px"
        marginTop="8px"
        
      >
        <div
          style={{
            width: 290,
            height: 49,
            padding: 10,
            background: "#B8CCFF",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: 24,
              fontFamily: "Montserrat",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Fare Summary
          </div>
        </div>

        {fareQuote === 0 ? (
          <>
            {/* {fareRule[0]?.map((data) => {
              return (
                <> */}
            {fareValue?.Segments?.map((dat, index) => {
              return dat?.map((data1) => {
                const dateString = data1?.Origin?.DepTime;
                const date = new Date(dateString);
                const day = date.getDate();
                const month = date.toLocaleString("default", {
                  month: "short",
                });
                const year = date.getFullYear();
                const formattedDate = `${day} ${month} ${year}`;
                return (
                  <>
                    <Grid container>
                      <Grid item xs={12} md={4}>
                        <Box>
                          <div
                            style={{
                              color: "black",
                              fontSize: 16,
                              fontFamily: "Montserrat",
                              fontWeight: "600",
                              wordWrap: "break-word",
                            }}
                          >
                            {" "}
                            {formattedDate}
                          </div>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box textAlign="center">
                          <Box>
                            <div
                              style={{
                                color: "black",
                                fontSize: 16,
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                wordWrap: "break-word",
                              }}
                            >
                              {" "}
                              {data1?.Airline?.FlightNumber}
                            </div>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box textAlign="right">
                          <div
                            style={{
                              color: "black",
                              fontSize: 16,
                              fontFamily: "Montserrat",
                              fontWeight: "600",
                              wordWrap: "break-word",
                            }}
                          >
                            {" "}
                            {data1?.Airline?.FareClass} Class
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                    <Divider
                      style={{
                        height: "2px",
                        background: "#D3D3D3",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    />
                    <Grid container>
                      <Grid item xs={12} md={4}>
                        <Box>
                          <div
                            style={{
                              color: "black",
                              fontSize: 16,
                              fontFamily: "Montserrat",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            {" "}
                            Dept:
                          </div>

                          <div
                            style={{
                              color: "black",
                              fontSize: 16,
                              fontFamily: "Montserrat",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            {" "}
                            Arr:
                          </div>
                        </Box>
                      </Grid>
                      <Divider
                        style={{
                          height: "2px",
                          background: "#D3D3D3",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      />
                      <Grid item xs={12} md={4}>
                        <Box textAlign="center">
                          <div
                            style={{
                              color: "black",
                              fontSize: 16,
                              fontFamily: "Montserrat",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            {" "}
                            {data1?.Origin?.Airport?.AirportCode}
                          </div>
                          <div
                            style={{
                              color: "black",
                              fontSize: 16,
                              fontFamily: "Montserrat",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            {" "}
                            {data1?.Destination?.Airport?.AirportCode}
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                  </>
                );
              });
            })}
            <Divider
              style={{
                height: "2px",
                background: "#D3D3D3",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
           
            <div style={{width: 290, height: 36, paddingLeft: 10, paddingRight: 10, paddingTop: 8, paddingBottom: 8, background: '#DFE6F7', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
  <div style={{justifyContent: 'space-between',  gap: 120, display: 'flex'}}>
    <div style={{color: 'black', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '350',marginLeft:"-6px"}}> Fare / Pax Type</div>
    <div style={{width: 20, height: 25.21, color: '#21325D'}}>Amount</div>
  </div>
</div>
            <Divider
              style={{
                height: "2px",
                background: "#D3D3D3",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Grid container>
              {fareValue?.Fare?.TaxBreakup?.map((obj) => {
                total += obj.value;
                return <KeyValue data={obj.key} value={obj.value} />;
              })}

              <Grid item xs={12} md={6}>
              <div
              style={{
                width: 290,
                height: 34,
                padding: 7,
                background: "#B8CCFF",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 250,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 120,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "black",
                    fontSize: 15,
                    fontFamily: "Montserrat",
                    fontWeight: "350",
                    wordWrap: "break-word",
                  }}
                >
                  Total 
                </div>
                <div
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 120,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      color: "black",
                      fontSize: 11.47,
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      marginLeft:"70px"
                      
                    }}
                  >
                   Rs. {total}.00
                  </div>
                </div>
              </div>
            </div>
                
              </Grid>
             
            </Grid>
            <Divider
              style={{
                height: "2px",
                background: "#D3D3D3",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
           
            <Grid container>
              {fareValue?.FareBreakdown?.map((data) => {
                return (
                  <>
                    {data?.PassengerType === 1 && (
                      <>
                        <Grid item xs={12} md={6}>
                          <Box>
                            <div
                              style={{
                                color: "black",
                                fontSize: 16,
                                fontFamily: "Montserrat",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              {" "}
                              <span>Adult x {data?.PassengerCount}</span>{" "}
                            </div>
                            <div
                              style={{
                                width: 290.65,
                                height: 20,
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: 113,
                                display: "inline-flex",
                              }}
                            >
                              <div
                                style={{
                                  color: "black",
                                  fontSize: 16,
                                  fontFamily: "Montserrat",
                                  fontWeight: "400",
                                  wordWrap: "break-word",
                                }}
                              >
                                Total Base Fare
                              </div>
                              <div
                                style={{
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 2.29,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    color: "black",
                                    fontSize: 11.47,
                                    fontFamily: "Montserrat",
                                    fontWeight: "400",
                                    wordWrap: "break-word",
                                    marginLeft:"6px"
                                  }}
                                >
                                  {" "}
                                  Rs. {fareValue?.Fare?.BaseFare}
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                width: 290.65,
                                height: 20,
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: 113,
                                display: "inline-flex",
                              
                              }}
                            >
                              <div
                                style={{
                                  color: "black",
                                  fontSize: 16,
                                  fontFamily: "Montserrat",
                                  fontWeight: "400",
                                  wordWrap: "break-word",
                                }}
                              >
                                Total Tax
                              </div>
                              <div
                                style={{
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 2.29,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    color: "black",
                                    fontSize: 11.47,
                                    fontFamily: "Montserrat",
                                    fontWeight: "400",
                                    wordWrap: "break-word",
                                    marginLeft:"46px"
                                  }}
                                >
                                  {" "}
                                   Rs. {fareValue?.Fare?.Tax}
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                width: 290,
                                height: 36,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 8,
                                paddingBottom: 8,
                                background: "#DFE6F7",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 30,
                                display: "inline-flex",
                                marginBottom:"5px",
                                marginTop:"5px"
                              }}
                            >
                              <div
                                style={{
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 80,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    width: 150,
                                    color: "black",
                                    fontSize: 15,
                                    fontFamily: "Montserrat",
                                    fontWeight: "300",
                                    wordWrap: "break-word",
                                  }}
                                >
                                  Additional Charges
                                </div>

                                <div
                                  style={{
                                    color: "black",
                                    fontSize: 11.47,
                                    fontFamily: "Montserrat",
                                    fontWeight: "350",
                                    wordWrap: "break-word",
                                   
                                   
                                  }}
                                >
                                 
                                 
                                    {" "}
                                    Rs. {fareValue?.Fare?.OtherCharges}
                                 
                                </div>
                              </div>
                            </div>
                            <Typography
                              sx={{
                                color: "#616161",
                                fontSize: "10px",
                                fontWeight: "bold",
                              }}
                            ></Typography>
                           
                          
                          </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Box textAlign="right">
                            <div
                              style={{
                                color: "black",
                                fontSize: 11.47,
                                fontFamily: "Montserrat",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              {" "}
                              Rs. {data?.BaseFare + data?.Tax}
                            </div>
                            {/* <Typography
                              sx={{
                                color: "#FF8900",
                                fontSize: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              Rs. {data?.BaseFare + data?.Tax}
                            </Typography> */}
                          </Box>
                        </Grid>
                      </>
                    )}
                    {data?.PassengerType === 2 && (
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
                              <span>Child x {data?.PassengerCount}</span>
                            </Typography>
                            <Typography
                              sx={{
                                color: "#616161",
                                fontSize: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              Excess Baggage
                            </Typography>
                            <Typography
                              sx={{
                                color: "#616161",
                                fontSize: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              Meal
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
                              Rs. {data?.BaseFare + data?.Tax}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#FF8900",
                                fontSize: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              Rs. 00.00
                            </Typography>
                            <Typography
                              sx={{
                                color: "#FF8900",
                                fontSize: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              Rs. 00.00
                            </Typography>
                          </Box>
                        </Grid>
                      </>
                    )}
                    {data?.PassengerType === 3 && (
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
                              <span>Infant x {data?.PassengerCount}</span>
                            </Typography>
                            <Typography
                              sx={{
                                color: "#616161",
                                fontSize: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              Excess Baggage
                            </Typography>
                            <Typography
                              sx={{
                                color: "#616161",
                                fontSize: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              Meal
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
                              Rs. {data?.BaseFare + data?.Tax}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#FF8900",
                                fontSize: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              Rs. 00.00
                            </Typography>
                            <Typography
                              sx={{
                                color: "#FF8900",
                                fontSize: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              Rs. 00.00
                            </Typography>
                          </Box>
                        </Grid>
                      </>
                    )}
                  </>
                );
              })}
            </Grid>
                        <div
              style={{
                width: 290,
                height: 34,
                padding: 7,
                background: "#B8CCFF",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 123,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 125,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "black",
                    fontSize: 15,
                    fontFamily: "Montserrat",
                    fontWeight: "350",
                    wordWrap: "break-word",
                  }}
                >
                  Total Pub. Fare:
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap:5,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      color: "black",
                      fontSize: 11.47,
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      wordWrap: "break-word",
                      
                    }}
                  >
                    {" "}
                    Rs.{" "}
                    {fareValue?.Fare?.BaseFare +
                      fareValue?.Fare?.Tax +
                      fareValue?.Fare?.OtherCharges}
                  </div>
                </div>
              </div>
            </div>

            {/* </>
              );
             })} */}
          </>
        ) : (
          <Grid container>
            <Grid item xs={12} md={4}>
              <Box>
                <Typography
                  sx={{
                    color: "#ff0000",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {
                    reducerState?.flightFare?.flightQuoteData?.Error
                      ?.ErrorMessage
                  }
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
