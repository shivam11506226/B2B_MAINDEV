import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './AgentRequest.css'
const AllAgentRequest = () => {
    const [agentRequest, setAgentRequest] = useState([]);
    const [loading, setLoading] = useState(true);
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [userTypeTerm, setUserTypeTerm] = useState('AGENT');
    const [searchTerm, setSearchTerm] = useState('');
    const renderField = (field, agent) => {
        switch (field) {
            case 'OtpVerified':
                return agent.otpVerified ? 'Verified' : 'Not Verified';
            case 'ApproveStatus':
                return agent.approveStatus;
            case 'Status':
                return agent.status;
            default:
                return agent[field.toLowerCase()];
        }
    };

    const approveStatusEnum = {
        APPROVED: 'Approved',
        PENDING: 'Pending',
        REJECT: 'Rejected'
    };

    const statusEnum = {
        ACTIVE: 'Active',
        BLOCK: 'Blocked',
        DELETE: 'Deleted'
    };
    const handleStatusChange = async (userId, status) => {
        try {
            const response = await axios.post('http://localhost:8000/skytrails/api/admin/approveAgent', {
                userId: userId,
                approveStatus: status, // Set the selected status
                reason: 'Updated by Admin' // You can customize the reason
            });
            console.log('Agent status updated:', response.data.message);
            const updatedAgents = agentRequest.map(agent => {
                if (agent._id === userId) {
                    return { ...agent, approveStatus: status };
                }
                return agent;
            });
            setAgentRequest(updatedAgents);
        } catch (error) {
            console.error('Error updating agent status:', error);
        }
    };

    useEffect(() => {
        async function fetchAgentRequestData() {
            setLoading(true); // Set loading state to true
            try {
                const response = await axios.get(`http://localhost:8000/skytrails/api/admin/getAgents`, {
                    params: {
                        page: currentPage,
                        size: pageSize,
                        usersType1: userTypeTerm,
                        search: searchTerm,

                    }
                });
                setAgentRequest(response.data.result.docs);
                setTotalPages(response.data.result.totalPages);
            } catch (error) {
                console.error('Error fetching Agent request List:', error);
            }
            setLoading(false);
        }
        fetchAgentRequestData();
        console.log('agentRequest:', agentRequest);
    }, [currentPage, searchTerm, userTypeTerm]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handleUserType = (event) => {
        setUserTypeTerm(event.target.value);
        console.log("event=============", event);
        console.log("======================event.target.value", event.target.value);
        setCurrentPage(1);
    };
    return (
        <div className="agent-container">
            <div style={{ display: "flex", height: "80px", gap: "10px", width: "80%", marginTop: "80px" }}>
                <div style={{ width: "250px"  }}>  <TextField
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
                </div>
                <div style={{ width: "150px" }}>
                    <select value={userTypeTerm} onChange={handleUserType}>
                        <option value="">All Users</option>
                        <option value="USER">User</option>
                        <option value="AGENT">Agent</option>
                        <option value="SUBADMIN">Subadmin</option>
                    </select>
                </div>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>UserType</th>
                        <th>Location</th>
                        <th>OtpVerified</th>
                        <th>ApproveStatus</th>
                        <th>Status</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {agentRequest.map(agent => (
                        <tr key={agent._id} >
                            <td>{agent._id}</td>
                            <td>{agent.username}</td>
                            <td>{agent.email}</td>
                            <td>
                                {typeof agent.phone === 'object'
                                    ? `${agent.phone.country_code}${agent.phone.mobile_number}`
                                    : agent.phone}
                            </td>
                            <td>{agent.userType}</td>
                            <td>
                                {typeof agent.location === 'object' && Array.isArray(agent.location.coordinates)
                                    ? `${agent.location.coordinates[0]}${agent.location.coordinates[1]}`
                                    : agent.location}
                            </td>
                            <td>{renderField('OtpVerified', agent)}</td>
                            <td className='approvalbutton'>
                                {agent.approveStatus === 'PENDING' || 'APPROVED' || 'REJECT' ? (
                                    <div>
                                        <select value={agent.approveStatus} onChange={(e) => handleStatusChange(agent._id, e.target.value)}style={{ backgroundColor: agent.approveStatus === 'APPROVED' ? 'lightgreen' : agent.approveStatus === 'REJECT' ? 'pink' : 'lightblue' }}>
                                            <option value="PENDING">Pending</option>
                                            <option value="APPROVED">Approve</option>
                                            <option value="REJECT">Reject</option>
                                        </select>
                                    </div>
                                ) : (
                                    agent.approveStatus
                                )}
                            </td>
                            <td className='approvalbutton'>
                                {agent.status === 'ACTIVE' || 'BLOCKED' || 'DELETE' ? (
                                    <div>
                                        <select value={agent.approveStatus} onChange={(e) => handleStatusChange(agent._id, e.target.value)} style={{ backgroundColor: agent.status === 'ACTIVE' ? 'lightgreen' : agent.status === 'BLOCK' ? 'pink' : 'lightblue' }}>
                                            <option value="ACTIVE">Active</option>
                                            <option value="BLOCK">Blocked</option>
                                            <option value="DELETE">Delete</option>
                                        </select>
                                    </div>
                                ) : (
                                    agent.status
                                )}
                            </td>
                            <td>{agent.Reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="paginate">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button className="agentButton" key={i + 1} onClick={() => handlePageChange(i + 1)}>
                        <h5>{i + 1}</h5>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllAgentRequest;
