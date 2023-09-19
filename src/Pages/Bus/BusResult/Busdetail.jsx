import React from "react";
import Box from "@mui/material/Box";
import "./busresult.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import Link from "@mui/material/Link";
import Busmoredetail from "./Busmoredetail";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Busdetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const busFullData =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult;
  console.log(busFullData);
  const busDataResult =
    reducerState?.getBusResult?.busResult?.data?.data?.BusSearchResult
      ?.BusResults;
  console.log("bus res", busDataResult);

  return (
    <div>
      {busDataResult?.map((item, index) => {
        return (
          <Box className="top_head" p={2} my={2}>
            <Grid container>
              <Grid item lg={2}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    {item?.TravelName}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#006FFF",
                      display: "flex",
                      alignItems: "left",
                      textAlign: "left",
                      paddingRight: "12px",
                    }}
                  >
                    {item?.BusType}
                  </Typography>
                  <Busmoredetail />
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      paddingLeft: "10px",
                    }}
                  >
                    {item?.DepartureTime?.slice(12, 16)}
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
                    {item?.ArrivalTime?.slice(12, 16)}
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
                      textAlign: "center",
                    }}
                  >
                    {item?.OperatorId}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#252525",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    {item?.AvailableSeats}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={2}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#FF8900",
                      display: "flex",
                      alignItems: "left",
                      textAlign: "left",
                    }}
                  >
                    ₹ {item?.BusPrice?.BasePrice}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={1}>
                <Box>
                  <form action="/BusPassengerDetail">
                    <Button textAlign="left" type="submit">
                      Book Now
                    </Button>
                  </form>
                  <Link
                    sx={{
                      fontSize: "8px",
                      fontWeight: "bold",
                      color: "#FF8900",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      cursor: "pointer",
                      justifyContent: "center",
                    }}
                  >
                    Cancellation policy
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </div>
  );
};

export default Busdetail;
