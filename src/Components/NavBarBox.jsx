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
          <div>
            <img src={avatar} alt={name} className="avatarImage" />
            {/* <svg
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 128 128"
              style={{
                enableBackground: "new 0 0 128 128",
              }}
              xmlSpace="preserve"
              // {...props}
            >
              <style type="text/css">{"\n\t.st0{fill:#21325D;}\n"}</style>
              <g>
                <g>
                  <path
                    className="st0"
                    d="M123.1,4.9c-4.8-4.8-12.6-4.7-17.3,0.2L80.2,31.8L17.5,11.1L4.4,24.2l52.2,32.1L30.2,83.9l-16.9-2.8L1.4,93 l24.9,8.7l8.7,24.9l11.9-11.9l-2.8-16.9l27.5-26.4l32.1,52.2l13.1-13.1L96.2,47.8l26.7-25.7C127.8,17.5,127.9,9.7,123.1,4.9z"
                  />
                </g>
              </g>
            </svg> */}
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
              width: "73%",
              margin: "0px 30px",
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
                        <p
                          style={{
                            color: "black",
                            borderRadius: "8px",
                            fontWeight: "bold",
                            width: "130px",
                            textAlign: "center",
                            marginLeft: "-20px",
                            marginTop: "5px",
                            boxShadow:
                              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                          }}
                        >
                          {k.tittle}
                        </p>
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
              marginRight: "-6px",
              zIndex: 1,
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
              textAlign: "left",
              width: "140px",
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
                        <p
                          style={{
                            color: "black",
                            borderRadius: "8px",
                            fontWeight: "bold",
                            width: "110px",
                            textAlign: "center",
                            marginLeft: "-20px",
                            marginTop: "5px",
                            boxShadow:
                              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                          }}
                        >
                          {k.tittle}
                        </p>
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
