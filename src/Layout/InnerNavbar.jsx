import React from "react";
import "./InnerNavbar.css";
import { Flex, Box, Spacer, Center, Text, Square } from "@chakra-ui/react";
import { InnerBarLogo } from "../data";
import { NavLink } from "react-router-dom";
import NavBarBox from "../Components/NavBarBox";

function InnerNavbar() {
  return (
    <div className="innerNav">
      {InnerBarLogo.map(({ avatar, name, path }, index) => {
        return (
          <Flex
            direction="column"
            justifyContent="space-around"
            borderRadius="15px"
            w="8%"
            key={index}
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "active-nav logoname" : "logoname"
              }
              style={{
                textDecoration: "none",
                color: "#252525",
                font: "Quicksand, Bold",
                height: "100%",
                justifyContent: "space-around",
              }}
            >
              {/* components call from other components for blue print */}

              <NavBarBox name={name} avatar={avatar} key={index} />
            </NavLink>
          </Flex>
        );
        {
          /* </Square> */
        }
      })}
    </div>
  );
}

export default InnerNavbar;
