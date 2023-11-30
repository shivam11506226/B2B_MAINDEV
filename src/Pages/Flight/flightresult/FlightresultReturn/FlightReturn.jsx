import React, { useState } from "react";
import SingleDataReturn from "./SingleDataReturn";
import MultipleDataReturn from "./MultipleDataReturn";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector, useReducer } from "react-redux";

const FlightresultOne = ({ sendDataToParent }) => {
  const reducerState = useSelector((state) => state);
  const [selectedFlightIndex, setSelectedFlightIndex] = useState(null);
  const sendData = (e) => {
    const data = e.target;
    // console.log("dataaaaaaaaaaa", data);
    sendDataToParent(data);
  };
  const [filter, setFilter] = useState(1);
  const setToSearchResults =
    reducerState?.return?.returnData?.data?.data?.Response?.Results;
  // console.log("+++++++++++++", setToSearchResults[1]);

  return setToSearchResults[1]?.map((flight1) => {
    // result = res.sort((a, b) => a.Segments[0][0].Duration - b.Fare.OfferedFare);
    return (
      <Box>
        <div key={flight1?.ResultIndex}>
          {flight1?.Segments?.map((flight, Index) => {
            // console.log("flight", flight);
            const length = flight.length;
            // console.log("ResultIndex1", flight1?.ResultIndex);
            return length === 1 ? (
              <Box
                onClick={(e) => {
                  sendData(e);
                }}
              >
                <SingleDataReturn
                  flight={flight[0]}
                  wholeFlight={flight1}
                  stop={length}
                  index={flight1?.ResultIndex}
                  fare={flight1?.Fare?.PublishedFare}
                  IsLCC={flight1.IsLCC}
                  isSelected={flight1?.ResultIndex === selectedFlightIndex}
                  onSelect={() => setSelectedFlightIndex(flight1?.ResultIndex)}
                  showRadio={true}
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
                  showRadio={true}
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
