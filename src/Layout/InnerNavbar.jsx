import React ,{useState} from "react";
import "./InnerNavbar.css";
import { Flex, Box, Spacer, Center, Text, Square } from "@chakra-ui/react";
import { InnerBarLogo } from "../data";
import { NavLink } from "react-router-dom";
import NavBarBox from "../Components/NavBarBox";
import {InnerBarMoreLogo} from "../data1";
import add  from '../Images/FlightImages/add.png';
const Card = () => {
  return (
    <div  >
    <div className="innerNav1" >
      {InnerBarMoreLogo.map(({ avatar, name, path }, index) => {
        return (
          <Flex
          direction="column"
          justifyContent="space-around"
          borderRadius="15px"
         
          key={index}
          marginBottom="10px"
          height='80px'
          width='100px'
          box-shadow='0px 3px 6px #00000029'
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
    </div>
  );
};

function InnerNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
                width:"100px",
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
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
        <button
          style={{
            
             backgroundColor:'white',
            height:'80px',
            color: "white",
            borderRadius: "8px",
            border: "2px solid #2980b9",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "18px",
            transition: "background-color 0.3s ease-in-out",
          }}
          onClick={toggleDropdown}
        >

          <img src={add} alt="" style={{width:'100%',height:'50px'}}/>
        </button>
        {isDropdownOpen && (
          <div
            style={{
              position: 'absolute',
              
               
            }}
          >
            {/* Example cards */}
            <Card/>
            
          </div>
        )}
      </div>
     
    </div>
  );
}

export default InnerNavbar;
