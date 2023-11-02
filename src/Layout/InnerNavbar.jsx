import React, { useState } from "react";
import "./InnerNavbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { InnerBarLogo } from "../data";
import { Flex } from "@chakra-ui/react"; // Import Flex from Chakra UI
import Dropdown from "./Dropdown";

function InnerNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [className, setclassName] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const location = useLocation();
  const { pathname } = location;

  const isAdminPath = pathname === "/adminLogin" || pathname === "/admin/dashboard";

  if (isAdminPath) {
    return null; // Don't render the InnerNavbar for admin paths
  }

  return (
    
    <div className="innerNav" style={{ marginTop: "110px", height:"15%" }}>
      {InnerBarLogo.map(({ avatar, name, path }, index) => (
        <Flex
          direction="column"
          justifyContent="space-around"
          borderRadius="15px"
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
              color: "#21325D",
              font: "Quicksand, Bold",
              height: "85%",
              justifyContent: "space-around",
              width: "100px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "30px" }} color={false ? "#21325D" : "white"}>
              {avatar}
            </div>
            <span
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontStyle: "normal", // Fixed typo in fontStyle
                fontWeight: "400",
              }}
              color={false ? "#21325D" : "white"}
            >
              {name}
            </span>
          </NavLink>
        </Flex>
      ))}
      <Dropdown />
    </div>
  );
}

export default InnerNavbar;
