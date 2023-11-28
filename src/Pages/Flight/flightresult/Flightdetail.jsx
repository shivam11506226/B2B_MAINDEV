import React, { useEffect, useState, useRef } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fairrule from "./Fairrule";
import Nonrefundable from "./Nonrefundable";
import LuggageIcon from "@mui/icons-material/Luggage";
import { useDispatch, useSelector, useReducer } from "react-redux";
import image from "../../../Images/FlightImages/1AC.png";
import SingleData from "./SingleData";
import MultipleData from "./MultipleData";
import { tokenAction } from "../../../Redux/ResultIndex/resultIndex";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Flightdetail = () => {
  const reducerState = useSelector((state) => state);
  const navigate = useNavigate();
  const [filter, setFilter] = useState(1);
  const results =
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results || reducerState?.return?.returnData?.data?.data?.Response?.Results;
  // console.log("Reducer State", results);

  useEffect(() => {
    if (!results) {
      navigate("/flights");
    }
  }, [results]);



  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const accordionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setExpanded(false);
      } else {
        setExpanded('panel1');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  return results?.map((res) => {
    let result = res;
    result =
      filter === 1
        ? res.sort((a, b) => a.Fare.OfferedFare - b.Fare.OfferedFare)
        : res.sort(
          (a, b) =>
            a.Segments[0].map((i) => i.Duration) -
            b.Segments[0].map((i) => i.Duration)
        );
    // result = res.sort((a, b) => a.Segments[0][0].Duration - b.Fare.OfferedFare);


    // filter box 




    return (
      <div div className="row">
        <div className="col-lg-3">
          <div className="packResFilterBox" >
            <Accordion ref={accordionRef} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ width: '100%', border: "none" }}
              >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>

                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    fontWeight: '400',
                    textAlign: 'center'

                  }} ><FilterAltIcon style={{ fontWeight: "600", fontFamily: "Montserrat", fontSize: '14px' }} /> Filter</Typography>

                </div>
              </AccordionSummary>
              <div style={{ color: '#0048FF', textDecoration: 'underline', textAlign: "right", paddingRight: "15px" }} >
                <button>clear all</button>
              </div>
              <AccordionDetails>
                <div className="fareFilter">
                  <p>Fare Type</p>
                  <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label > Refundable</label>
                  </div>
                  <div>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label > Non-Refundable</label>
                  </div>
                </div>

                <div className="airlinesFilter">
                  <p>Airlines</p>
                  <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label >Air India (AI)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label >Akasa Air(QP)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label >GO FIRST (G8)</label>
                  </div>
                </div>

                <div className="outboundFilter">
                  <p>Outbound Flight times</p>
                  <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label >Morning (04:00-11:00)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label >Afternoon (11:00-16:00)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label >Evening (16:00-21:00)</label>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

          </div>
        </div>
        <div className="col-lg-9">
          <div className="flgihtdetailsTabBox">
            <div className={`flightdetailsTabs ${filter === 1 ? "flightdetailsTabsActive" : ""}`} onClick={() => setFilter(1)}>
              Cheapest
            </div>
            <div className={`flightdetailsTabs ${filter === 2 ? "flightdetailsTabsActive" : ""}`} onClick={() => setFilter(2)}>
              Fastest
            </div>
            <div className={`flightdetailsTabs ${filter === 3 ? "flightdetailsTabsActive" : ""}`} onClick={() => setFilter(3)}>
              Best
            </div>
          </div>
          {result?.map((flight1) => {
            const ResultIndex = flight1.id || flight1?.ResultIndex;
            return (
              <div key={ResultIndex} >
                {flight1?.Segments?.map((flight, Index) => {
                  const length = flight.length;
                  return length === 1 ? (
                    <SingleData
                      flight={flight[0]}
                      stop={length}
                      index={ResultIndex}
                      fare={flight1?.Fare?.PublishedFare}
                      IsLCC={flight1.IsLCC}
                    />
                  ) : (
                    <MultipleData
                      flight={flight}
                      stop={length}
                      index={ResultIndex}
                      fare={flight1?.Fare?.PublishedFare}
                      IsLCC={flight1.IsLCC}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

export default Flightdetail;
