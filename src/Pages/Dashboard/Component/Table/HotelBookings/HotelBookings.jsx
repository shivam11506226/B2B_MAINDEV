// AllHotelBooking.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableRow, Paper } from '@mui/material';

const AllHotelBooking = () => {
    const [hotelBookings, setHotelBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchHotelBookings() {
            try {
                const response = await axios.get('http://localhost:8000/skytrails/api/admin/getAllHotelBookingList');
                setHotelBookings(response.data.result.docs);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching hotel bookings:', error);
                setLoading(false);
            }
        }

        fetchHotelBookings();
    }, []);
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
                <th>Hotel Name</th>
                <th>City Name</th>
                <th>Status</th>
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
                  <td>{booking.status}</td>
                  {/* Add more table data cells based on your data */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
};

export default AllHotelBooking;
