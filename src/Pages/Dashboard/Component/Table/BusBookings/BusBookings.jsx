import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllBusBooking = () => {
  const [busBookings, setBusBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageSize = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchBusBookings() {
      try {
        const response = await axios.get(`http://localhost:8000/skytrails/api/admin/getAllBusBookingList?page=${currentPage}&size=${pageSize}`);
        setBusBookings(response.data.result.docs);
        setTotalPages(response.data.result.totalPages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Bus bookings:', error);
        setLoading(false);
      }
    }

    fetchBusBookings();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>All Bus Bookings</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Bus ID</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Destination</th>
            <th>Origin</th>
            <th>Bus Name</th>
            <th>Bus Type</th>
            <th>PNR</th>
            <th>Date Of Journey</th>
            <th>No Of Seats</th>
          </tr>
        </thead>
        <tbody>
          {busBookings.map(bookings => (
            <tr key={bookings._id}>
              <td>{bookings._id}</td>
              <td>{bookings.userId}</td>
              <td>{bookings.name}</td>
              <td>{bookings.email}</td>
              <td>{bookings.phone}</td> {/* Assuming 'phone' is a string */}
              <td>{bookings.destination}</td>
              <td>{bookings.origin}</td>
              <td>{bookings.busName}</td>
              <td>{bookings.busType}</td>
              <td>{bookings.pnr}</td>
              <td>{new Date(bookings.dateOfJourney).toDateString()}</td>
              <td>{bookings.noOfSeats}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => handlePageChange(i + 1)}>
            <h5>{i + 1}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllBusBooking;
