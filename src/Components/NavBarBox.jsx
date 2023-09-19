import { Center, Square, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { data } from "./MenuItem";
import "./NavBarBox.css";
import Box from "@mui/material/Box";
import { Holiday } from "./HolidayMenu";

const NavBarBox = ({ avatar, name, path }, index) => {
  const [hover, setHover] = useState(false);

  return (
    <Square w="auto" h="100%" borderRadius="15px" key={index}>
      <Flex
        direction="column"
        w="auto"
        h="100%"
        alignItems="center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Center pt="10px">
          <div className="img">
            <img src={avatar} alt={name} className="avatarImage" />
          </div>
        </Center>
        <Text fontWeight="bold" fontSize="12px" style={{ textAlign: "center" }}>
          {name}
        </Text>

        {hover && (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              zIndex: 1,
              width: "100%",
              margin: "-4px 30px",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
              textAlign: "left",
            }}
          >
            {data.map((k, l) => {
              if (name === "Flights") {
                return (
                  <ul>
                    <Box>
                      <Link
                        to={k.path}
                        onClick={() => setHover(false)}
                        style={{
                          textDecoration: "none",
                          color: "grey",
                          fontWeight: "bold",
                          textAlign: "right",
                          fontSize: "14px",
                        }}
                      >
                        {k.tittle}
                      </Link>
                    </Box>
                  </ul>
                );
              }
            })}
          </div>
        )}
        {/* -------- */}
        {hover && (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              marginTop: "-4px",
              marginRight: "-66px",
              zIndex: 1,
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
              textAlign: "left",
            }}
          >
            {Holiday.map((k, l) => {
              if (name === "Holiday Package") {
                return (
                  <ul>
                    <Box>
                      <Link
                        to={k.path}
                        onClick={() => setHover(false)}
                        style={{
                          textDecoration: "none",
                          color: "grey",
                          fontWeight: "bold",
                          textAlign: "right",
                          fontSize: "14px",
                        }}
                      >
                        {k.tittle}
                      </Link>
                    </Box>
                  </ul>
                );
              }
            })}
          </div>
        )}
      </Flex>
    </Square>
  );
};

export default NavBarBox;
