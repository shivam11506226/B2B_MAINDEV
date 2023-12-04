import React, { useEffect, useState } from "react";
import FlightLoader from "./FlightLoader/FlightLoader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StyledTabs from "./FlightFormContainer";

import Swal from "sweetalert2";
import "./Flight.css";

const Flight = () => {
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const [loader, setLoader] = useState(false);

  console.log("reducerState", reducerState);
  useEffect(() => {
    if (
      reducerState?.oneWay?.isLoading ||
      reducerState?.return?.isLoading === true
    ) {
      setLoader(true);
    } 
  }, [reducerState?.oneWay?.isLoading || reducerState?.return?.isLoading]);
  // useEffect(() => {
  //   if (reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results||reducerState?.return?.returnData?.data?.data?.Response?.Results) {
  //     navigate("/Flightresult");
  //     setLoader(false);
  //   }
  // }, [reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results||reducerState?.return?.returnData?.data?.data?.Response?.Results]);

  useEffect(() => {
    const oneWayResults =
      reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;
    const returnResults =
      reducerState?.return?.returnData?.data?.data?.Response?.Results;
    
    if (oneWayResults) {
      navigate("/Flightresult");
    } else if (returnResults) {
      // navigate("/FlightresultReturn");
      if (returnResults[1] !== undefined) {
        navigate("/FlightresultReturn");
      } else {
        navigate("/FlightResultInternational");
      }
    }

    if (oneWayResults || returnResults) {
      setLoader(false);
    }
  }, [
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results,
    reducerState?.return?.returnData?.data?.data?.Response?.Results,
    navigate,
  ]);
  useEffect(() => {
    const error =
      reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Error?.ErrorMessage;
    if (error) {
      setLoader(false);
      Swal.fire({
        title: "Heii Encountered Error",
        text: `${error}`,
        icon: "question",
      });
    }
  }, [reducerState?.oneWay?.oneWayData?.data?.data?.Response]);

  if (loader) {
    return <FlightLoader />;
  }

  return (
    // <>
    //   {loader ? (
    //     <FlightLoader />
    //   ) : (
    //     <div>
    //       <Box
    //         display={"flex"}
    //         justifyContent={"center"}
    //         alignSelf={"center"}
    //         alignItems={"center"}
    //       >
    //         {/* <Flightnavbar/> */}

    //       </Box>
    //       <StyledTabs />
    //     </div>

    //   )}
    // </>
    // <>
    //   <FlightLoader />
    // </>

    <div className="container-xxl margin-pecentage-large">
      <StyledTabs />
    </div>
  );
};

export default Flight;
