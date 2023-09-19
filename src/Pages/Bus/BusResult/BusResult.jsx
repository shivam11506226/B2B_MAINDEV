import Stepper from "../../../Components/Stepper";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./busresult.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import Busdetail from "./Busdetail";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { useEffect } from "react";
import { clearBusSearchReducer } from "../../../Redux/busSearch/busSearchAction";
import BusStepper from "../../../Components/BusStepper";

const BusResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const busFullData = reducerState;
  console.log("full data", busFullData);
  const busDataResult = reducerState?.getBusResult;
  console.log("bus data", busDataResult);
  const [loader, setLoader] = useState(false);

  // Loader Code
  useEffect(() => {
    if (reducerState?.getBusResult?.isLoading == true) {
      setLoader(true);
    }
  }, [reducerState?.getBusResult?.isLoading]);

  useEffect(() => {
    if (reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult) {
      navigate("/BusResult");
      setLoader(false);
    }
  }, [reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="flightContainer">
          <BusStepper />
          <Box className="top_head" p={2} my={2}>
            <Box display="flex" textAlign="center">
              <Typography
                sx={{ fontSize: "12px", fontWeight: "bold", color: "#252525" }}
              >
                {busFullData?.Origin}
                {" - "}
                {busFullData?.Destination}{" "}
              </Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: "bold", color: "#006FFF" }}
              >
                Wed, 11 Jan, 2023
              </Typography>
            </Box>
          </Box>
          <Box className="top_head" p={2} my={2}>
            <Grid container>
              <Grid item lg={2.5}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    Travelers
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={2.5}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    Bus Types
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    Departure
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    Arrival
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    Publish
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    Seat
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={2}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    Price
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={1}></Grid>
            </Grid>
          </Box>
          <Busdetail />
        </div>
      )}
    </>
  );
};

export default BusResult;
