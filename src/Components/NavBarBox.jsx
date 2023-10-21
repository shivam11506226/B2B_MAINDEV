import { Square, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./MenuItem";
import "./NavBarBox.css";
import Box from "@mui/material/Box";
import color from "../color/color.js";

const NavBarBox = ({ avatar, name}) => {
  const [hover, setHover] = useState(false);

  return (
    <Square w="auto" borderRadius="15px">
      <Flex
        direction="column"
        w="auto"
        
        alignItems="center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div>
          <img
            src={avatar}
            alt={name}
            className="avatarImage"
            style={{ width: "100%", height: "50px" }}
          />
        </div>
        <Text fontWeight="bold" fontSize="12px" style={{ textAlign: "center", color: color.bluedark }}>
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
              marginTop: "-12px"
            }}
          >
            {data.map((k, l) => {
              if (name === "Flights") {
                return (
                  <ul key={l}>
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
      </Flex>
    </Square>
  );
};

export default NavBarBox;
