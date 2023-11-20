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
    return null;
  }

  return (

    <div className="innerNav" style={{ height: "15%" }}>
      {InnerBarLogo.map(({ avatar, name, path }, index) => (
        <div className="navItems" key={index}>
          <NavLink to={path}
            className={({ isActive }) => isActive ? "active-nav logoname" : "logoname"}>
            <span className="navIcons" color={false ? "#21325D" : "white"}>
              {avatar}
            </span>
            <span className="navTitle" color={false ? "#21325D" : "white"}
            >
              {name}
            </span>
          </NavLink>
        </div>
      ))}
      <Dropdown />
    </div>
  );
}

export default InnerNavbar;
