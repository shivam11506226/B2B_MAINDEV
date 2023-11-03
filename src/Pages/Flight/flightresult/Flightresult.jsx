import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import Popularfilter from "../flightresult/Popularfilter";
import "./flightresult.css";
import Flightnavbar from "../Flightnavbar";
const Flightresult = () => {
  return (
    <React.Fragment>
      <div className="flightContainer" style={{width:"100%",marginTop:"-80px"}}>
        {/* step by step updating part */}
        {/* <Flightnavbar/> */}
        <Box>
      
          <div>
            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              pb={5}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                display="flex"
                justifyContent="end"
                alignItems="center"
              >
                
              </Grid>
             
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                display="flex"
                justifyContent="start"
                alignItems="center"
              >
                
              </Grid>
            </Grid>
          </div>
          <div>
            <Popularfilter />
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Flightresult;
