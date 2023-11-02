// AllHotelBooking.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableRow, Paper } from '@mui/material';

const AllHotelBooking = () => {
  const [hotelBookings, setHotelBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageSize = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    async function fetchHotelBookings() {
      try {
        const response = await axios.get(`http://localhost:8000/skytrails/api/admin/getAllHotelBookingList?page=${currentPage}&size=${pageSize}`);
        setHotelBookings(response.data.result.docs);
        console.log("=>>>",response.data.result.page)
        setTotalPages(response.data.result.totalPages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hotel bookings:', error);
        setLoading(false);
      }
    }
    console.log("hotelBookings========", hotelBookings);
    fetchHotelBookings();
  }, [currentPage]);
  const handlePageChange = (page) => {
    console.log("page",page)
    setCurrentPage(page);
  };
  return (

    <div>
      <h1>All Hotel Bookings</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>HotelName</th>
            <th>CityName</th>
            {/* Add more table headers based on your data */}
          </tr>
        </thead>
        <tbody>
          {hotelBookings.map(booking => (
            <tr key={booking._id}>
              <td>{booking._id}</td>
              <td>{booking.userId}</td>
              <td>{booking.name}</td>
              <td>{booking.phone}</td>
              <td>{booking.email}</td>
              <td>{new Date(booking.CheckInDate).toDateString()}</td>
              <td>{new Date(booking.CheckOutDate).toDateString()}</td>
              <td>{booking.hotelName}</td>
              <td>{booking.cityName}</td>
              {/* Add more table data cells based on your data */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => handlePageChange(i + 1)}>
            <h5>{i+1}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllHotelBooking;
