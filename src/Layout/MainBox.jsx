import React from "react";
import { InnerBarLogo } from "../data";
import { Link } from "react-router-dom";

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
        marginTop:"15%",
        height:"350px"
      }}
    >
      {InnerBarLogo.map(({ avatar, name, path }, index) => (
        <Link to={path} key={index} style={{textDecoration:"none"}}>
          <div
            style={{
              width: "180px",
              height: "133.48px",
              padding: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <img
              src={avatar}
              alt={name}
              className="avatarImage"
              style={{
                width: "60px",
                height: "60px",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
              }}
            />
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
