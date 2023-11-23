// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import "./FlightTicket.css";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Pagination from '@mui/material/Pagination';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import { Link } from "react-router-dom";

// const Spinner = () => {
//     return (
//         <div className="spinner">

//         </div>
//     );
// };

// const FlightChangeReq = () => {

//     const reducerState = useSelector((state) => state);
//     const userId = reducerState?.logIn?.loginData?.data?.data?.id;

//     const [flightData, setFlightData] = useState([]);
//     const [loading, setLoading] = useState(false); // Changed initial state to false
//     const pageSize = 5;
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(0);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [openModalOne, setOpenModalOne] = React.useState(false);
//     const handleModalOpenOne = () => setOpenModalOne(true);
//     const handleModalCloseOne = () => setOpenModalOne(false);

//     const [reason, setReason] = useState('');

//     const handleReasonChange = (event) => {
//         setReason(event.target.value);

//     };

//     const style = {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: 500,
//         bgcolor: 'background.paper',
//         boxShadow: 10,

//     };

//     const fetchFlightData = async () => {
//         try {
//             setLoading(true); // Start loading
//             const response = await axios.get(`${apiURL.baseURL}/skytrails/user/getAllAgentFlightBookingList?userId=${userId}`, {
//                 params: {
//                     page: currentPage,
//                     size: pageSize,
//                     search: searchTerm,
//                 }
//             });
//             setFlightData(response.data.result.docs);
//             setTotalPages(response.data.result.totalPages);
//         } catch (error) {
//             console.error('Error fetching flight bookings:', error);
//         } finally {
//             setLoading(false); // Stop loading
//         }
//     };

//     // handle submit flight change request

//     const handleSubmitFlight = async (event) => {
//         console.log(flightData)
//         event.preventDefault();
//         const selectedReason = document.querySelector('input[type=radio]:checked');
//         const selectedCheckboxValue = selectedReason ? selectedReason.value : null;

//         const formData = {
//             "reason": reason,
//             "changerequest": selectedCheckboxValue,
//             "bookingId": flightData[0]?.bookingId,
//             "id": flightData[0]?._id,
//             "agentId": flightData[0]?.userId,
//             "contactNumber": flightData[0]?.passengerDetails[0]?.ContactNo,
//             "amount": Number(flightData[0]?.amount)
//         };

//         console.log(formData)

//         try {
//             console.log("tryingg.....")
//             const response = await axios.post('${apiURL.baseURL}/skytrails/user/changeFlightDetailsRequest', formData);
//             console.log('Response from the server:', response.data);

//         } catch (error) {
//             console.error('Error sending data to the server:', error);
//         }
//     };

//     // Fetch data when the current tab is changed
//     useEffect(() => {

//         fetchFlightData();

//     }, [currentPage, searchTerm]);

//     const handlePageChange = (event, page) => {
//         setCurrentPage(page);
//     };
//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);
//         setCurrentPage(1);
//     };

//     return (
//         <div>
//             {
//                 loading ? (<Spinner />)
//                     : (

//                         flightData.map((flight, index) => (
//                             <div className="ticket" key={index}>
//                                 <div className="ticketcart">
//                                     <div className="innerdiv1">
//                                         <p>Passenger Name: {`${flight.passengerDetails[0].firstName} ${flight.passengerDetails[0].lastName}`}</p>
//                                         <p>Flight Name: {flight.airlineDetails.AirlineName}</p>
//                                         <p>Departure: {flight.airlineDetails.DepTime}</p>
//                                         <p> {flight.origin}<ArrowForwardIcon /> {flight.destination}</p>
//                                     </div>
//                                     <div className="innerdiv2">
//                                         <p>PNR: {flight.pnr}</p>
//                                         <p>Reference Code: {flight.referenceCode}</p>
//                                         <p>Status: {flight.status}</p>
//                                     </div>
//                                     <div className="btn-request">
//                                         <button type="submit">Change Request</button>
//                                     </div>
//                                 </div>
//                                 <div className="action">
//                                     <div className="link">
//                                         <a href="http://">Fare Rule</a>
//                                         <a href="http://">View Ticket</a>
//                                         <Link onClick={handleModalOpenOne} to="">Change Request</Link>
//                                     </div>
//                                     <div className="view">
//                                         <button>View Invoice</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))

//                     )
//             }

//             <Modal
//                 open={openModalOne}
//                 onClose={handleModalCloseOne}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <div className="modal-box">
//                         <div className="modal-header">
//                             <h2>Change Request</h2>
//                             <p><span>PNR</span>QP-7311 V1</p>
//                         </div>
//                         <form action="">
//                             <div className="input-text" >
//                                 <label className="bold" htmlFor="reason">Write Your Valid Reason</label>
//                                 <input type="text" id="reason" onChange={handleReasonChange} />
//                             </div>
//                             <label className="bold" htmlFor="">Please Select a Valid Reason </label>
//                             <div className="input-check">

//                                 <div className="formGroup">
//                                     <input
//                                         type="radio"
//                                         name="checkbox1"
//                                         // onChange={handleRadioChange}
//                                         value={"Change in Travel Plans"}
//                                     />
//                                     <label>Change in Travel Plans
//                                     </label>
//                                 </div>

//                                 <div className="formGroup">
//                                     <input
//                                         type="radio"
//                                         name="checkbox2"
//                                         // onChange={handleRadioChange}
//                                         value={"Travel Advisory or Warnings"}
//                                     />
//                                     <label> Travel Advisory or Warnings
//                                     </label>
//                                 </div>

//                                 <div className="formGroup">
//                                     <input
//                                         type="radio"
//                                         name="checkbox3"

//                                         // onChange={handleRadioChange}
//                                         value={"Visa or Documentation Problems"}
//                                     />
//                                     <label>Visa or Documentation Problems
//                                     </label>
//                                 </div>

//                                 <div className="formGroup">
//                                     <input
//                                         type="radio"
//                                         name="checkbox4"
//                                         // onChange={handleRadioChange}
//                                         value={"Medical Issues"}
//                                     />
//                                     <label>Medical Issues
//                                     </label>
//                                 </div>

//                                 <div className="formGroup">
//                                     <input
//                                         type="radio"
//                                         name="checkbox5"
//                                         // onChange={handleRadioChange}
//                                         value={"Other"}
//                                     />
//                                     <label> Other
//                                     </label>
//                                 </div>

//                             </div>
//                             <div className="modal-button">
//                                 <button type="button" onClick={handleModalCloseOne}>Cancel</button>
//                                 <button className="second" type="submit" onClick={handleSubmitFlight}>Send Request</button>
//                             </div>
//                         </form>
//                     </div>
//                 </Box>
//             </Modal>
//         </div>
//     )
// }

// export default FlightChangeReq

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./FlightTicket.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { apiURL } from "../../Constants/constant";

const Spinner = () => {
  return <div className="spinner"></div>;
};

const FlightChangeReq = () => {
  const reducerState = useSelector((state) => state);
  const userId = reducerState?.logIn?.loginData?.data?.data?.id;
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(false);
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModalTwo, setOpenModalTwo] = React.useState(false);
  const handleModalOpenTwo = () => setOpenModalTwo(true);
  const handleModalCloseTwo = () => setOpenModalTwo(false);

  const [reason, setReason] = useState("");
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 10,
  };

  const fetchFlightData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${apiURL.baseURL}/skytrails/user/getAllAgentFlightBookingList?userId=${userId}`,
        {
          params: {
            page: currentPage,
            size: pageSize,
            search: searchTerm,
          },
        }
      );
      setFlightData(response.data.result.docs);
      setTotalPages(response.data.result.totalPages);
    } catch (error) {
      console.error("Error fetching hotel bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitFlight = async (event) => {
    event.preventDefault();

    if (!selectedFlight) {
      // Handle error, no hotel selected
      return;
    }

    const selectedReason = document.querySelector("input[type=radio]:checked");
    const selectedCheckboxValue = selectedReason ? selectedReason.value : null;

    const formData = {
      reason: reason,
      changerequest: selectedCheckboxValue,
      bookingId: flightData[0]?.bookingId,
      id: flightData[0]?._id,
      agentId: flightData[0]?.userId,
      contactNumber: flightData[0]?.passengerDetails[0]?.ContactNo,
      amount: Number(flightData[0]?.amount),
    };
    // console.log(formData);

    try {
      const response = await axios.post(
        `${apiURL.baseURL}/skytrails/user/changeFlightDetailsRequest`,
        formData
      );
      // console.log("Response from the server:", response.data);
      setOpenModalTwo(false);
    } catch (error) {
      console.error("Error sending data to the server:", error);
    }
  };

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    fetchFlightData();
  }, [currentPage, searchTerm]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        flightData.map((flight, index) => (
          <div className="ticket" key={index}>
            <div className="ticketcart">
              <div className="innerdiv1">
                <p>
                  Passenger Name:{" "}
                  {`${flight.passengerDetails[0].firstName} ${flight.passengerDetails[0].lastName}`}
                </p>
                <p>Flight Name: {flight.airlineDetails.AirlineName}</p>
                <p>Departure: {flight.airlineDetails.DepTime}</p>
                <p>
                  {" "}
                  {flight.origin}
                  <ArrowForwardIcon /> {flight.destination}
                </p>
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
                <Link
                  onClick={() => {
                    handleModalOpenTwo();
                    setSelectedFlight(flight);
                  }}
                  to=""
                >
                  Change Request
                </Link>
              </div>
              <div className="view">
                <button>View Invoice</button>
              </div>
            </div>
          </div>
        ))
      )}

      {/* Add pagination controls */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>

      <Modal
        open={openModalTwo}
        onClose={handleModalCloseTwo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-box">
            <div className="modal-header">
              <h2>Change Request</h2>
              {selectedFlight && (
                <p>
                  <span>PNR:-</span> {selectedFlight.pnr}
                </p>
              )}
            </div>
            <form action="">
              <div className="input-text">
                <label className="bold" htmlFor="reason">
                  Write Your Valid Reason
                </label>
                <input type="text" id="reason" onChange={handleReasonChange} />
              </div>
              <label className="bold" htmlFor="">
                Please Select a Valid Reason{" "}
              </label>
              <div className="input-check">
                <div className="formGroup">
                  <input
                    type="radio"
                    name="checkbox1"
                    value={"Change in Travel Plans"}
                  />
                  <label>Change in Travel Plans</label>
                </div>

                <div className="formGroup">
                  <input
                    type="radio"
                    name="checkbox2"
                    value={"Travel Advisory or Warnings"}
                  />
                  <label> Travel Advisory or Warnings</label>
                </div>

                <div className="formGroup">
                  <input
                    type="radio"
                    name="checkbox3"
                    value={"Visa or Documentation Problems"}
                  />
                  <label>Visa or Documentation Problems</label>
                </div>

                <div className="formGroup">
                  <input
                    type="radio"
                    name="checkbox4"
                    value={"Medical Issues"}
                  />
                  <label>Medical Issues</label>
                </div>

                <div className="formGroup">
                  <input type="radio" name="checkbox5" value={"Other"} />
                  <label> Other</label>
                </div>
              </div>
              <div className="modal-button">
                <button type="button" onClick={handleModalCloseTwo}>
                  Cancel
                </button>
                <button
                  className="second"
                  type="submit"
                  onClick={handleSubmitFlight}
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FlightChangeReq;
