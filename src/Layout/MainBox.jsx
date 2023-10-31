import React from "react";
import { InnerBarLogo } from "../data";
import { Link } from "react-router-dom";
import color from "../color/color";
function MainBox() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "800px",
        display: "flex",
        flexShrink: 0,
       
        gap: "20px",
        flexWrap: "wrap",
        margin:"auto",
        alignItem: "center",
        justifyContent:"center",
        borderRadius: "10px",
        height:"310px"
      }}
    >
      {InnerBarLogo.map(({ avatar, name, path }, index) => (
        <Link to={path} key={index} style={{textDecoration:"none"}}>
          <div
            style={{
              width: "180px",
          
             
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
            }}
          >
             <div style={{fontSize:"40px",color:color.bluedark}}>{avatar}</div>
             <div
              style={{
                color: "black",
                fontSize: "20px",
                fontFamily: "Montserrat",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              {name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MainBox;
