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

const Flightresult = () => {
  return (
    <React.Fragment>
      <div className="flightContainer">
        {/* step by step updating part */}

        <Box>
          <Flex
            w="100%"
            h="50"
            mb="20"
            borderRadius="20px"
            m="auto"
            className="shadow-sm p-3 mb-5  rounded "
          >
            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">1</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Flight Search
              </Text>
            </Flex>
            <Spacer />
            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">2</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Flight Result
              </Text>
            </Flex>
            <Spacer />

            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">3</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Passenger Details
              </Text>
            </Flex>
            <Spacer />
            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">4</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Review Booking
              </Text>
            </Flex>
            <Spacer />
            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">5</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Booking Confirmation
              </Text>
            </Flex>
          </Flex>
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
                <Box>
                  <Typography className="city">New Delhi</Typography>
                  <Typography className="city">
                    Indira Gandhi International Airport, India
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Box>
                  <FlightTakeoffIcon className="flightup" />
                </Box>
                <Box>
                  <Typography className="duration">- - - -</Typography>
                </Box>
                <Box>
                  <FlightLandIcon className="flightup" />
                </Box>
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
                <Box>
                  <Typography className="city2">Mumbai</Typography>
                  <Typography className="city2">
                    Chhatrapati Shivaji International Airport, India
                  </Typography>
                </Box>
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
