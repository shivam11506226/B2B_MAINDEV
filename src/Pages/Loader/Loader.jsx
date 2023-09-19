import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="body">
      <div className="loader">
        <div className="wait"> Please Wait We are Fetching Result !!</div>
        <div className="iata_code departure_city">SKY</div>
        <div className="plane">
          <img
            src="https://zupimages.net/up/19/34/4820.gif"
            className="plane-img"
            alt="logo"
          />
        </div>
        <div className="earth-wrapper">
          <div className="earth"></div>
        </div>
        <div className="iata_code arrival_city">TRAILS</div>
      </div>
    </div>
  );
}

export default Loader;
