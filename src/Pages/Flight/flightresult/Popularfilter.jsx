import * as React from "react";
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
  const OpenNewpage = () => {
    navigate("booknow");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box
            backgroundColor="#F5F5F5"
            boxShadow="1px 1px 8px gray"
            borderRadius="10px"
          >
            <Typography justifyContent="center" display="flex" pt={3}>
              Popular Filter
            </Typography>
            <Divider sx={{ backgroundColor: "gray", marginY: "5px" }} />
            <Typography
              pt={1}
              paddingLeft="22px"
              justifyContent="start"
              display="flex"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Popular Filter
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginY: "15px",
                marginX: "20px",
              }}
            >
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                className="Bton_filter"
                sx={{
                  background: "white",
                  color: "gray",
                  boxShadow: "2px 2px 8px gray",
                  borderRadius: "20px",
                  fontSize: "9px",
                  width: "100%",
                }}
                mt={5}
              >
                Morning (04:00-11:00)
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginY: "15px",
                marginX: "20px",
              }}
            >
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                className="Bton_filter"
                sx={{
                  background: "white",
                  color: "gray",
                  boxShadow: "2px 2px 8px gray",
                  borderRadius: "20px",
                  fontSize: "9px",
                  width: "100%",
                }}
                mt={5}
              >
                Afternoon (11:00-16:00)
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginY: "15px",
                marginX: "20px",
              }}
            >
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                className="Bton_filter"
                sx={{
                  background: "white",
                  color: "gray",
                  boxShadow: "2px 2px 8px gray",
                  borderRadius: "20px",
                  fontSize: "9px",
                  width: "100%",
                }}
                mt={5}
              >
                Evening (16:00-21:00)
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginY: "15px",
                marginX: "20px",
              }}
            >
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                className="Bton_filter"
                sx={{
                  background: "white",
                  color: "gray",
                  boxShadow: "2px 2px 8px gray",
                  borderRadius: "20px",
                  fontSize: "9px",
                  width: "100%",
                }}
                mt={5}
              >
                Night (21:00-04:00)
              </Button>
            </Box>
            <Divider sx={{ backgroundColor: "gray", marginY: "5px" }} />
            <Typography
              pt={1}
              paddingLeft="22px"
              justifyContent="start"
              display="flex"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Fare Type
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginY: "15px",
                marginX: "20px",
              }}
            >
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                className="Bton_filter"
                sx={{
                  background: "white",
                  color: "gray",
                  boxShadow: "2px 2px 8px gray",
                  borderRadius: "20px",
                  fontSize: "9px",
                  width: "100%",
                }}
                mt={5}
              >
                Refundable
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginY: "15px",
                marginX: "20px",
              }}
            >
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                className="Bton_filter"
                sx={{
                  background: "white",
                  color: "gray",
                  boxShadow: "2px 2px 8px gray",
                  borderRadius: "20px",
                  fontSize: "9px",
                  width: "100%",
                }}
                mt={5}
              >
                Non-Refundable
              </Button>
            </Box>
            <Divider sx={{ backgroundColor: "gray" }} />
            <Typography
              pt={1}
              paddingLeft="22px"
              justifyContent="start"
              display="flex"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Stops
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginY: "15px",
              }}
            >
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                className="Bton_filter"
                sx={{
                  background: "white",
                  color: "gray",
                  boxShadow: "2px 2px 8px gray",
                  borderRadius: "20px",
                  fontSize: "9px",
                }}
                mt={5}
              >
                Direct
              </Button>
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                className="Bton_filter"
                sx={{
                  background: "white",
                  color: "gray",
                  boxShadow: "2px 2px 8px gray",
                  borderRadius: "20px",
                  fontSize: "9px",
                }}
                mt={5}
              >
                1 Stop
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginY: "15px",
                marginX: "20px",
              }}
            >
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                className="Bton_filter"
                sx={{
                  background: "white",
                  color: "gray",
                  boxShadow: "2px 2px 8px gray",
                  borderRadius: "20px",
                  fontSize: "9px",
                }}
                mt={5}
              >
                2+ Stops
              </Button>
            </Box>
            <Divider sx={{ backgroundColor: "gray" }} />
            <Typography
              pt={1}
              paddingLeft="22px"
              justifyContent="start"
              display="flex"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Onward Duration
            </Typography>
            <Box display="flex" justifyContent="center">
              <Rangeslide />
            </Box>

            <Divider sx={{ backgroundColor: "gray" }} />
            <Typography
              pt={1}
              paddingLeft="22px"
              justifyContent="start"
              display="flex"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Preferred Airlines
            </Typography>
            <Box textAlign="left" pb={3}>
              <form action="">
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Akasa Air
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  IndiGo
                </div>

                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Air India
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Spice Jet
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Vistara
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Go First
                </div>
                <div>
                  <Checkbox
                    {...label}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                  Alliance Air
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{
                      borderRadius: "20px",
                      boxShadow: "1px 1px 5px gray",
                      padding: "12px",
                    }}
                  >
                    View All
                  </Button>
                </div>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box>
            <Box
              display="flex"
              px={2}
              backgroundColor="#F5F5F5"
              boxShadow="1px 1px 8px gray"
            >
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Sorting By:</Button>
              </Grid>
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Departure</Button>
              </Grid>
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Duration</Button>
              </Grid>
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Arrival</Button>
              </Grid>
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Pub Price</Button>
              </Grid>
              <Grid md={2} sm={4}>
                <Button sx={{ color: "black" }}>Offer Price</Button>
              </Grid>
            </Box>
          </Box>
          <Flightdetail />
        </Grid>
      </Grid>
    </Box>
  );
}
