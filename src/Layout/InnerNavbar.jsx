import React, { useState } from "react";
import "./InnerNavbar.css";
import { NavLink, useLocation, Link } from "react-router-dom";
import { InnerBarLogo } from "../data";
import { Flex } from "@chakra-ui/react"; // Import Flex from Chakra UI
import Dropdown from "./Dropdown";
import NavBarBox from "../Components/NavBarBox"
// import { , NavLink } from "react-router-dom";
import { data } from "../Components/MenuItem.js";
// import "./NavBarBox.css";
import Box from "@mui/material/Box";
import { Holiday } from "../Components/HolidayMenu.js";
import color from "../color/color.js";

function InnerNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [className, setclassName] = useState(false);
  const [Name, setName] = useState("");
  const [hover, setHover] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const location = useLocation();
  const { pathname } = location;

  const isAdminPath = pathname === "/adminLogin" || pathname === "/admin/dashboard";

  if (isAdminPath) {
    return null; // Don't render the InnerNavbar for admin paths
  }
  console.warn(Name,"namemdkjdsfjkndfjunfduinhuifh")

  return (

<<<<<<< HEAD
    <div className="innerNav" style={{ height: "15%" }}>
=======
    <div className="innerNav" style={{ marginTop: "98px", height: "13%",paddingBottom:"10px" }}>
>>>>>>> 5c2d7eca2062299cb1ee2124fe9e6fd7e3ed4b47
      {InnerBarLogo.map(({ avatar, name, path }, index) => (
        <Flex
          direction="column"
          justifyContent="space-around"
          borderRadius="15px"
          key={index}
          zIndex={2}
          position="relative"
          onMouseEnter={() => (
            setHover(true),
            setName(name)
          )
          }
          onMouseLeave={() => (
            setHover(false),
            setName("")

          )
          }

        >
          <NavLink
            to={path}
            className={({ isActive }) => (isActive ? "active-nav logoname" : "logoname"
            )}


            style={{
              textDecoration: "none",
              color: "#21325D",
              font: "Quicksand, Bold",
<<<<<<< HEAD
              // height: "85%",
=======
             
>>>>>>> 5c2d7eca2062299cb1ee2124fe9e6fd7e3ed4b47
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
                marginBottom:"20px"
              }}
              color={false ? "#21325D" : "white"}
            >
              {name}
            </span>

          </NavLink>
          {/* <NavBarBox avatar={avatar} name={name} path ={path}   /> */}
          < Flex style={{ position: 'absolute',top:"100px",left:'-50px' }} >
            {hover && name === Name  && Name==="Package"  && (
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  zIndex: 1,
                  // width: "73%",
                  margin: "0px 30px",
                  boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                  textAlign: "left",
                  marginTop: "-28px",
                  width: "130px",
                  
                  

                }}
              >
                {/* {hover && name === Name &&  data.map((k, l) => {
                  if (name === "Flights") {
                    return (
                      <ul>
                        <Box>
                          <Link
                            to={k.path}
                          
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
                })}  */}
                {hover && name === Name &&  Holiday.map((k, l) => {
                  if (name === "Package") {
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
            {/* -------- */}
            {/* {hover && name === Name && (
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",

                  marginRight: "-6px",
                  zIndex: 1,
                  boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                  textAlign: "left",
                  width: "140px",
                }}
              >
                {Holiday.map((k, l) => {
                  if (name === "Package") {
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
            )} */}
          </Flex>
        </Flex >

      ))
      }
      <Dropdown />
    </div >
  );
}

export default InnerNavbar;
