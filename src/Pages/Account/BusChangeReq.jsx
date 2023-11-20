import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./FlightTicket.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Spinner = () => {
  return <div className="spinner"></div>;
};

const BusChangeReq = () => {
  const reducerState = useSelector((state) => state);
  const userId = reducerState?.logIn?.loginData?.data?.data?.id;
  const [busData, setBusData] = useState([]);
  const [loading, setLoading] = useState(false);
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModalTwo, setOpenModalTwo] = React.useState(false);
  const handleModalOpenTwo = () => setOpenModalTwo(true);
  const handleModalCloseTwo = () => setOpenModalTwo(false);

  const [reason, setReason] = useState("");
  const [selectedBus, setSelectedBus] = useState(null);

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

  const fetchBusData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/skytrails/user/getAllAgentBusBookingList?userId=${userId}`,
        {
          params: {
            page: currentPage,
            size: pageSize,
            search: searchTerm,
          },
        }
      );
      console.log(response, "bus");
      setBusData(response.data.result.docs);
      setTotalPages(response.data.result.totalPages);
    } catch (error) {
      console.error("Error fetching hotel bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitBus = async (event) => {
    event.preventDefault();

    if (!selectedBus) {
      // Handle error, no hotel selected
      return;
    }

    const selectedReason = document.querySelector("input[type=radio]:checked");
    const selectedCheckboxValue = selectedReason ? selectedReason.value : null;

    const formData = {
      reason: reason,
      changerequest: selectedCheckboxValue,
      bookingId: selectedBus.bookingId,
      id: selectedBus?._id,
      agentId: selectedBus?.userId,
      contactNumber: selectedBus?.phone,
      amount: selectedBus?.amount,
    };
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/skytrails/user/BusDetailsRequest",
        formData
      );
      console.log("Response from the server:", response.data);
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
    fetchBusData();
  }, [currentPage, searchTerm]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        busData.map((bus, index) => (
          <div className="ticket" key={index}>
            <div className="ticketcart">
              <div className="innerdiv1">
                <p>Customer Name: {bus.name}</p>
                <p>Bus Name: {bus.busType}</p>
                <p>Origin: {bus.origin}</p>
                <p>Destination: {bus.destination}</p>
              </div>
              <div className="innerdiv2">
                <p>PNR: {bus.pnr}</p>
                <p>No Of Seats: {bus.noOfSeats}</p>
                <p>Status: {bus.bookingStatus}</p>
              </div>
              <div className="btn-request">
                <button
                  onClick={() => {
                    handleModalOpenTwo();
                    setSelectedBus(bus);
                  }}
                >
                  Change Request
                </button>
              </div>
            </div>
            <div className="action">
              <div className="link">
                <a href="http://">Fare Rule</a>
                <a href="http://">View Ticket</a>
                <Link
                  onClick={() => {
                    handleModalOpenTwo();
                    setSelectedBus(bus);
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
              {selectedBus && (
                <p>
                  <span>PNR:- </span> {selectedBus.pnr}
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
                  onClick={handleSubmitBus}
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

export default BusChangeReq;