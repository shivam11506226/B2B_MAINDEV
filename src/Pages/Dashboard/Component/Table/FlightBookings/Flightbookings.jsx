import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableRow, Paper } from '@mui/material';

const AllFlightBooking = () => {
  const [flightBookings, setFlightBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageSize = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0);

  useEffect(()=>{
    async function fetchFlightBookings() {
        try {
          const response = await axios.get(`http://localhost:8000/skytrails/api/admin/getAllFlightBookingList?page=${currentPage}&size=${pageSize}`);
          setFlightBookings(response.data.result.docs);
          console.log("=>>>",response.data.result.totalPages)
          setTotalPages(response.data.result.totalPages);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching flight bookings:', error);
          setLoading(false);
        }
      }
      fetchFlightBookings();
  },[])

  useEffect(() => {
    async function fetchFlightBookings() {
      try {
        const response = await axios.get(`http://localhost:8000/skytrails/api/admin/getAllFlightBookingList?page=${currentPage}&size=${pageSize}`);
        setFlightBookings(response.data.result.docs);
        // console.log("=>>>",response.data.result.totalPages)
        // setTotalPages(response.data.result.totalPages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching flight bookings:', error);
        setLoading(false);
      }
    }

    fetchFlightBookings();
  }, [currentPage]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>All Flight Bookings</h1>
      <table border="1">
        <thead>
          <tr>
            <th>PNR</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Flight Name</th>
            <th>PaymentStatus</th>
            <th>Transaction Id</th>
            <th>City Name</th>
            <th>Country Name</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {flightBookings.map(booking => (
            <tr key={booking._id}>
              <td>{booking.pnr}</td>
              <td>{booking.userId}</td>
              <td>{`${booking.firstName} ${booking.lastName}`}</td>
              <td>{booking.email}</td>
              <td>{booking.flightName}</td>
              <td>{booking.paymentStatus}</td>
              <td>{booking.transactionId}</td>
              <td>{booking.city}</td>
              <td>{booking.country}</td>
              <td>{booking.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => handlePageChange(i + 1)}>
            <h5>{i+1}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllFlightBooking;
