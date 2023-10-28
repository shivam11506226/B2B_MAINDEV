import React, { useState } from "react";
import SingleDataReturn from "./SingleDataReturn";
import MultipleDataReturn from "./MultipleDataReturn";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector, useReducer } from "react-redux";

const FlightresultOne = ({ sendDataToParent }) => {
  const reducerState = useSelector((state) => state);
  const [filter, setFilter] = useState(1);
  const setToSearchResults =
    reducerState?.return?.returnData?.data?.data?.Response?.Results;
  console.log("+++++++++++++", setToSearchResults[0]);

  const [selectedFlightIndex, setSelectedFlightIndex] = useState(null);

  const sendData = (e) => {
    const data =e.target;
  console.log("dataaaaaaaaaaa",data)
    sendDataToParent(data);
  };

  return setToSearchResults[0]?.map((flight1) => {
    // result = res.sort((a, b) => a.Segments[0][0].Duration - b.Fare.OfferedFare);
    return (
      <Box
      padding="5px"
      width="442px"
      mt={2}

      height="118px"
      backgroundColor="#F5F5F5"
      display='flex'
      justifyContent='center'
      alignItems='center'
      
      boxShadow="1px 1px 8px gray"
      borderRadius="10px"
      >
        {/* <div className="row">
          <div
            className={`btn btn-primary m-3 text-center p-2 fs-5 col ${
              filter === 1 ? "active" : ""
            }`}
            onClick={() => setFilter(1)}
          >
            Cheapest
          </div>
          <div
            className={`btn btn-primary m-3 text-center p-2 fs-5 col ${
              filter === 2 ? "active" : ""
            }`}
            onClick={() => setFilter(2)}
          >
            Fastest
          </div>
          <div
            className={`btn btn-primary m-3 text-center p-2 fs-5 col ${
              filter === 3 ? "active" : ""
            }`}
            onClick={() => setFilter(3)}
          >
            Best
          </div>
        </div> */}
        {/* const ResultIndex = flight1.id || flight1?.ResultIndex; */}

        <div key={flight1?.ResultIndex}>
          {flight1?.Segments?.map((flight, Index) => {
            console.log("flight", flight);
            const length = flight.length;
            console.log("ResultIndex1", flight1?.ResultIndex);
            return length === 1 ? (
              <Box
                onClick={(e) => {
                  sendData(e);
                }}
              >
                <SingleDataReturn
                  flight={flight[0]}
                  stop={length}
                  wholeFlight={flight1}
                  index={flight1?.ResultIndex}
                  fare={flight1?.Fare?.PublishedFare}
                  IsLCC={flight1.IsLCC}
                  isSelected={flight1?.ResultIndex === selectedFlightIndex}
                  onSelect={(e) => {
                    setSelectedFlightIndex(flight1?.ResultIndex);
                  }}
                />
              </Box>
            ) : (
              <Box
                onClick={(e) => {
                  sendData(e);
                }}
              >
                <MultipleDataReturn
                  flight={flight}
                  wholeFlight={flight1}
                  stop={length}
                  index={flight1?.ResultIndex}
                  fare={flight1?.Fare?.PublishedFare}
                  IsLCC={flight1.IsLCC}
                  isSelected={flight1?.ResultIndex === selectedFlightIndex}
                  onSelect={() => setSelectedFlightIndex(flight1?.ResultIndex)}
                />
              </Box>
            );
          })}
        </div>
      </Box>
    );
  });
};

export default FlightresultOne;
