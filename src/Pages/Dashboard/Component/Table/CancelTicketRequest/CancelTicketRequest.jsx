import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableRow, Paper, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './CancelTicketRequest.css'

const AllCancelRequest = () => {
    const [cancelRequest, setCancelRequest] = useState([]);
    const [loading, setLoading] = useState(true);
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchCancelRequest() {
            try {
                const response = await axios.get('http://localhost:8000/skytrails/api/admin/getSubAdmin', {
                    params: {
                        page: currentPage,
                        size: pageSize,
                        search: searchTerm,
                    }
                });
    
                setCancelRequest(response.data.result.docs);
                setTotalPages(response.data.result.totalPages);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cancel requests:', error);
                setLoading(false);
            }
        }
    
        fetchCancelRequest();
    }, [currentPage, searchTerm]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to the first page when performing a new search
    };
    return (
        <div className='cancel-container'>
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
                        <th>Transaction Id</th>
                        <th>City </th>
                        <th>Country </th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {cancelRequest.map(booking => (
                        <tr key={booking._id}>
                            <td>{booking.pnr}</td>
                            <td>{booking.userId}</td>
                            <td>{`${booking.firstName} ${booking.lastName}`}</td>
                            <td>{booking.userDetails ? booking.userDetails.email : "Empty"}</td>
                            <td>
                                {booking.phone ? `${booking.phone.country_code}${booking.phone.mobile_number}` : "Empty"}
                            </td>
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
            <div className="paginate">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button className='cancelButton' key={i} onClick={() => handlePageChange(i + 1)}>
                        <h5 className='cancelButton'>{i + 1}</h5>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default AllCancelRequest;