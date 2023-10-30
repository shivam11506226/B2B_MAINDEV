import React ,{useState} from "react";
import "./InnerNavbar.css";
import { Flex, Box, Spacer, Center, Text, Square } from "@chakra-ui/react";
import { Menu, MenuItem, Button } from '@material-ui/core';
import { InnerBarLogo } from "../data";
import { NavLink } from "react-router-dom";
import NavBarBox from "../Components/NavBarBox";
import {InnerBarMoreLogo} from "../data1";

import Dropdown from "./Dropdown";
function InnerNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="innerNav" style={{marginTop:"118px"}}>
      {InnerBarLogo.map(({ avatar, name, path }, index) => {
        return (
          <Flex
            direction="column"
            justifyContent="space-around"
            borderRadius="15px"
            w="10%"
            height="85%"
            key={index}
            zIndex={2}
        
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
                height: "75%",
                justifyContent: "space-around",
                width:"100px",
                
               
              }}
            >
              {/* components call from other components for blue print */}

              <NavBarBox name={name} avatar={avatar} key={index} />
            </NavLink>
           
          </Flex>
          
        );
      
      })}
        <Dropdown/>
    </div>
  );
}

export default InnerNavbar;
