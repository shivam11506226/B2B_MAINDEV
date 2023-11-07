import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./FlightTicket.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';



// for tab

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

// for tab 

const FlightTicket = () => {

  // for tab

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // for tab


  // for checkbox 

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  // for checkbox 



  const reducerState = useSelector((state) => state);
  const userId = reducerState?.logIn?.loginData?.data?.data?.id;

  const [flightData, setFlightData] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  const [busData, setBusData] = useState([]);
  const [loading, setLoading] = useState(false); // Changed initial state to false
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');


  // for modal

  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 10,

  };


  const fetchFlightData = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(`http://localhost:8000/skytrails/user/getAllAgentFlightBookingList?userId=${userId}`, {
        params: {
          page: currentPage,
          size: pageSize,
          search: searchTerm,
        }
      });
      setFlightData(response.data.result.docs);
      setTotalPages(response.data.result.totalPages);
    } catch (error) {
      console.error('Error fetching flight bookings:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const fetchHotelData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/skytrails/user/getAllAgentHotelBookingList?userId=${userId}`, {
        params: {
          page: currentPage,
          size: pageSize,
          search: searchTerm,
        }
      });
      setHotelData(response.data.result.docs);
      setTotalPages(response.data.result.totalPages);
    } catch (error) {
      console.error('Error fetching hotel bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBusData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/skytrails/user/getAllAgentBusBookingList?userId=${userId}`, {
        params: {
          page: currentPage,
          size: pageSize,
          search: searchTerm,
        }
      });
      setBusData(response.data.result.docs);
      setTotalPages(response.data.result.totalPages);
    } catch (error) {
      console.error('Error fetching bus bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the current tab is changed
  useEffect(() => {
    if (value === 0) {
      fetchFlightData();
    } else if (value === 1) {
      fetchHotelData();
    } else if (value === 2) {
      fetchBusData();
    }
  }, [value, currentPage, searchTerm]);


  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };




  const Spinner = () => {
    return (
      <div className="spinner">

      </div>
    );
  };




  return (
    <div className="container">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Flight Booking" {...a11yProps(0)} />
          <Tab label="Hotel Booking" {...a11yProps(1)} />
          <Tab label="Bus Booking" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0} >
        {
          loading ? (<Spinner />)
            : (

              flightData.map((flight, index) => (
                <div className="ticket" key={index}>
                  <div className="ticketcart">
                    <div className="innerdiv1">
                      <p>Passenger Name: {`${flight.passengerDetails[0].firstName} ${flight.passengerDetails[0].lastName}`}</p>
                      <p>Flight Name: {flight.airlineDetails.AirlineName}</p>
                      <p>Departure: {flight.airlineDetails.DepTime}</p>
                      <p> {flight.origin}<ArrowForwardIcon /> {flight.destination}</p>
                    </div>
                    <div className="innerdiv2">
                      <p>PNR: {flight.pnr}</p>
                      <p>Reference Code: {flight.referenceCode}</p>
                      <p>Status: {flight.status}</p>
                    </div>
                    <div className="btn-request">
                      <button type="submit">Change Request</button>
                    </div>
                  </div>
                  <div className="action">
                    <div className="link">
                      <a href="http://">Fare Rule</a>
                      <a href="http://">View Ticket</a>
                      <Link onClick={handleModalOpen} to="">Change Request</Link>
                    </div>
                    <div className="view">
                      <button>View Invoice</button>
                    </div>
                  </div>
                </div>
              ))

            )
        }
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1} >
        {
          loading ? (<Spinner />)
            : (
              hotelData.map((hotel, index) => (
                <div className="ticket" key={index}>
                  <div className="ticketcart">
                    <div className="innerdiv1">
                      <p>Customer Name: {hotel.name}</p>
                      <p>Hotel Name: {hotel.hotelName}</p>
                      <p>City Name: {hotel.cityName}</p>
                      <p>No of Room: {hotel.room}</p>
                    </div>
                    <div className="innerdiv2">
                      <p>PNR: {hotel.pnr}</p>
                      <p>Reference Code: { }</p>
                      <p>Status: {hotel.bookingStatus}</p>
                    </div>
                    <div className="btn-request">
                      <button type="submit">Change Request</button>
                    </div>
                  </div>
                  <div className="action">
                    <div className="link">
                      <a href="http://">Fare Rule</a>
                      <a href="http://">View Ticket</a>
                      <Link onClick={handleModalOpen} to="">Change Request</Link>
                    </div>
                    <div className="view">
                      <button>View Invoice</button>
                    </div>
                  </div>
                </div>
              ))
            )
        }
      </CustomTabPanel>



      <CustomTabPanel value={value} index={2} >
        {
          loading ? (<Spinner />)
            : (
              busData.map((bus, index) => (

                <div className="ticket" key={index}>

                  <div className="ticketcart">
                    <div className="innerdiv1">
                      <p>Customer Name: {bus.name}</p>

                      <p>Bus Type: {bus.busType}</p>
                      <p> {bus.origin} <ArrowForwardIcon /> {bus.destination} </p>
                      <p>No of Seats: {bus.noOfSeats}</p>
                    </div>
                    <div className="innerdiv2">
                      <p>PNR: {bus.pnr}</p>
                      <p>Reference Code: { }</p>
                      <p>Status: {bus.bookingStatus}</p>
                    </div>
                    <div className="btn-request">
                      <button type="submit">Change Request</button>
                    </div>
                  </div>
                  <div className="action">
                    <div className="link">
                      <a href="http://">Fare Rule</a>
                      <a href="http://">View Ticket</a>
                      <Link onClick={handleModalOpen} to="">Change Request</Link>
                    </div>
                    <div className="view">
                      <button>View Invoice</button>
                    </div>
                  </div>
                </div>
              ))
            )
        }
      </CustomTabPanel>



      <Stack spacing={2}>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
      </Stack>









      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-box">
            <div className="modal-header">
              <h2>Change Request</h2>
              <p><span>PNR</span>QP-7311 V1</p>
            </div>
            <form action="">
              <div className="input-text" >
                <label className="bold" htmlFor="reason">Write Your Valid Reason</label>
                <input type="text" id="reason" />
              </div>
              <label className="bold" htmlFor="">Please Select a Valid Reason </label>
              <div className="input-check">

                <div className="formGroup">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    checked={checkboxes.checkbox1}
                    onChange={handleCheckboxChange}
                    value={"Change in Travel Plans"}
                  />
                  <label>Change in Travel Plans
                  </label>
                </div>

                <div className="formGroup">
                  <input
                    type="checkbox"
                    name="checkbox2"
                    checked={checkboxes.checkbox2}
                    onChange={handleCheckboxChange}
                    value={"Travel Advisory or Warnings"}
                  />
                  <label> Travel Advisory or Warnings
                  </label>
                </div>



                <div className="formGroup">
                  <input
                    type="checkbox"
                    name="checkbox3"
                    checked={checkboxes.checkbox3}
                    onChange={handleCheckboxChange}
                    value={"Visa or Documentation Problems"}
                  />
                  <label>Visa or Documentation Problems
                  </label>
                </div>

                <div className="formGroup">
                  <input
                    type="checkbox"
                    name="checkbox4"
                    checked={checkboxes.checkbox4}
                    onChange={handleCheckboxChange}
                    value={"Medical Issues"}
                  />
                  <label>Medical Issues
                  </label>
                </div>

                <div className="formGroup">
                  <input
                    type="checkbox"
                    name="checkbox4"
                    checked={checkboxes.checkbox5}
                    onChange={handleCheckboxChange}
                    value={"Other"}
                  />
                  <label> Other
                  </label>
                </div>

              </div>
              <div className="modal-button">
                <button className="">Cancel</button>
                <button className="second">Send Request</button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>

    </div>
  );
};

export default FlightTicket;


























