import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableRow, Paper, TextField, InputAdornment } from '@mui/material';
import './FlightBooking.css';
import SearchIcon from '@mui/icons-material/Search';
const AllFlightBooking = () => {
  const [flightBookings, setFlightBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageSize = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    async function fetchFlightBookings() {
      try {
        const response = await axios.get(`http://localhost:8000/skytrails/api/admin/getAllFlightBookingListAgent`,
          {
            params: {
              page: currentPage,
              size: pageSize,
              search: searchTerm,
            }
          }
        );
        setFlightBookings(response.data.result.docs);
        console.log("=>>>", response.data.result.totalPages)
        setTotalPages(response.data.result.totalPages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching flight bookings:', error);
        setLoading(false);
      }
    }
    fetchFlightBookings();
  }, [currentPage, searchTerm])


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when performing a new search
  };
  return (
    <div className='flight-container'>
      <TextField
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name, ID, etc."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <table border="1">
        <thead>
          <tr>
            <th>PNR</th>
            <th>User ID</th>
            <th>Passenger Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Flight Name</th>
            <th>PaymentStatus</th>
            <th>City </th>
            <th>Country </th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {flightBookings.map(booking => (
            <tr key={booking._id}>
              <td>{booking.pnr}</td>
              <td>{booking.userId}</td>
              <td>{`${booking.passengerDetails[0].firstName} ${booking.passengerDetails[0].lastName}`}</td>
              <td>{booking.passengerDetails[0].email}</td>

              <td>
                {`${booking.passengerDetails[0]?.phone?.country_code || 'N/A'} ${booking.passengerDetails[0]?.phone?.mobile_number || ''}`}


              </td>
              <td>{booking.flightName}</td>
              <td>{booking.paymentStatus}</td>
              <td>{booking.city}</td>
              <td>{booking.country}</td>
              <td>{booking.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="paginate">
        {Array.from({ length: totalPages }, (_, i) => (
          <button className='flightButton' key={i} onClick={() => handlePageChange(i + 1)}>
            <h5 className='flightButton'>{i + 1}</h5>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllFlightBooking;
