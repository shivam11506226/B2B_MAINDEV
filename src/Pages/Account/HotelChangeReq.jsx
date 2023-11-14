// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import "./FlightTicket.css";
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import { Link } from "react-router-dom";


// const Spinner = () => {
//     return (
//         <div className="spinner">

//         </div>
//     );
// };

// const HotelChangeReq = () => {
//     const reducerState = useSelector((state) => state);
//     const userId = reducerState?.logIn?.loginData?.data?.data?.id;
//     const [hotelData, setHotelData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const pageSize = 5;
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(0);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [openModalTwo, setOpenModalTwo] = React.useState(false);
//     const handleModalOpenTwo = () => setOpenModalTwo(true);
//     const handleModalCloseTwo = () => setOpenModalTwo(false);



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

//     const fetchHotelData = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get(`http://localhost:8000/skytrails/user/getAllAgentHotelBookingList?userId=${userId}`, {
//                 params: {
//                     page: currentPage,
//                     size: pageSize,
//                     search: searchTerm,
//                 }
//             });
//             setHotelData(response.data.result.docs);
//             setTotalPages(response.data.result.totalPages);
//         } catch (error) {
//             console.error('Error fetching hotel bookings:', error);
//         } finally {
//             setLoading(false);
//         }
//     };


//     const handleSubmitHotel = async (event) => {
//         event.preventDefault();
//         console.log(hotelData)
//         const selectedReason = document.querySelector('input[type=radio]:checked');
//         const selectedCheckboxValue = selectedReason ? selectedReason.value : null;

//         const formData = {
//             "reason": reason,
//             "changerequest": selectedCheckboxValue,
//             "bookingId": hotelData.bookingId,
//             "id": hotelData?._id,
//             "agentId": hotelData?.userId,
//             "contactNumber": hotelData?.phone,
//             "amount": hotelData?.amount,
//         };

//         console.log("post method shaan", formData);

//         try {
//             const response = await axios.post('http://localhost:8000/skytrails/user/changeHotelDetailsRequest', formData);
//             console.log('Response from the server:', response.data);
//         } catch (error) {
//             console.error('Error sending data to the server:', error);
//         }
//     };

//     useEffect(() => {
//         fetchHotelData();
//     }, [currentPage, searchTerm]);

//     return (
//         <div>
//             {
//                 loading ? (<Spinner />)
//                     : (
//                         hotelData.map((hotel, index) => (
//                             <div className="ticket" key={index}>
//                                 <div className="ticketcart">
//                                     <div className="innerdiv1">
//                                         <p>Customer Name: {hotel.name}</p>
//                                         <p>Hotel Name: {hotel.hotelName}</p>
//                                         <p>City Name: {hotel.cityName}</p>
//                                         <p>No of Room: {hotel.room}</p>
//                                     </div>
//                                     <div className="innerdiv2">
//                                         <p>PNR: {hotel.pnr}</p>
//                                         <p>Reference Code: { }</p>
//                                         <p>Status: {hotel.bookingStatus}</p>
//                                     </div>
//                                     <div className="btn-request">
//                                         <button type="submit">Change Request</button>
//                                     </div>
//                                 </div>
//                                 <div className="action">
//                                     <div className="link">
//                                         <a href="http://">Fare Rule</a>
//                                         <a href="http://">View Ticket</a>
//                                         <Link onClick={handleModalOpenTwo} to="">Change Request</Link>
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
//                 open={openModalTwo}
//                 onClose={handleModalCloseTwo}
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

//                                         value={"Change in Travel Plans"}
//                                     />
//                                     <label>Change in Travel Plans
//                                     </label>
//                                 </div>

//                                 <div className="formGroup">
//                                     <input
//                                         type="radio"
//                                         name="checkbox2"

//                                         value={"Travel Advisory or Warnings"}
//                                     />
//                                     <label> Travel Advisory or Warnings
//                                     </label>
//                                 </div>



//                                 <div className="formGroup">
//                                     <input
//                                         type="radio"
//                                         name="checkbox3"

//                                         value={"Visa or Documentation Problems"}
//                                     />
//                                     <label>Visa or Documentation Problems
//                                     </label>
//                                 </div>

//                                 <div className="formGroup">
//                                     <input
//                                         type="radio"
//                                         name="checkbox4"

//                                         value={"Medical Issues"}
//                                     />
//                                     <label>Medical Issues
//                                     </label>
//                                 </div>

//                                 <div className="formGroup">
//                                     <input
//                                         type="radio"
//                                         name="checkbox5"

//                                         value={"Other"}
//                                     />
//                                     <label> Other
//                                     </label>
//                                 </div>

//                             </div>
//                             <div className="modal-button">
//                                 <button type="button" onClick={handleModalCloseTwo}>Cancel</button>
//                                 <button className="second" type="submit" onClick={handleSubmitHotel}>Send Request</button>
//                             </div>
//                         </form>
//                     </div>
//                 </Box>
//             </Modal>
//         </div>
//     )
// }

// export default HotelChangeReq



import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./FlightTicket.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const Spinner = () => {
    return (
        <div className="spinner">

        </div>
    );
};

const HotelChangeReq = () => {
    const reducerState = useSelector((state) => state);
    const userId = reducerState?.logIn?.loginData?.data?.data?.id;
    const [hotelData, setHotelData] = useState([]);
    const [loading, setLoading] = useState(false);
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [openModalTwo, setOpenModalTwo] = React.useState(false);
    const handleModalOpenTwo = () => setOpenModalTwo(true);
    const handleModalCloseTwo = () => setOpenModalTwo(false);

    const [reason, setReason] = useState('');
    const [selectedHotel, setSelectedHotel] = useState(null);

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 10,
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

    const handleSubmitHotel = async (event) => {
        event.preventDefault();

        if (!selectedHotel) {
            // Handle error, no hotel selected
            return;
        }

        const selectedReason = document.querySelector('input[type=radio]:checked');
        const selectedCheckboxValue = selectedReason ? selectedReason.value : null;

        const formData = {
            "reason": reason,
            "changerequest": selectedCheckboxValue,
            "bookingId": selectedHotel.bookingId,
            "id": selectedHotel?._id,
            "agentId": selectedHotel?.userId,
            "contactNumber": selectedHotel?.phone,
            "amount": selectedHotel?.amount,
        };
        console.log(formData)

        try {
            const response = await axios.post('http://localhost:8000/skytrails/user/changeHotelDetailsRequest', formData);
            console.log('Response from the server:', response.data);
            setOpenModalTwo(false);

        } catch (error) {
            console.error('Error sending data to the server:', error);
        }
    };

    useEffect(() => {
        fetchHotelData();
    }, [currentPage, searchTerm]);

    return (
        <div>
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
                                        <button onClick={() => {
                                            handleModalOpenTwo();
                                            setSelectedHotel(hotel);
                                        }}>Change Request</button>
                                    </div>
                                </div>
                                <div className="action">
                                    <div className="link">
                                        <a href="http://">Fare Rule</a>
                                        <a href="http://">View Ticket</a>
                                        <Link onClick={() => {
                                            handleModalOpenTwo();
                                            setSelectedHotel(hotel);
                                        }} to="">Change Request</Link>
                                    </div>
                                    <div className="view">
                                        <button>View Invoice</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
            }

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
                            <p><span>PNR</span>QP-7311 V1</p>
                        </div>
                        <form action="">
                            <div className="input-text" >
                                <label className="bold" htmlFor="reason">Write Your Valid Reason</label>
                                <input type="text" id="reason" onChange={handleReasonChange} />
                            </div>
                            <label className="bold" htmlFor="">Please Select a Valid Reason </label>
                            <div className="input-check">

                                <div className="formGroup">
                                    <input
                                        type="radio"
                                        name="checkbox1"
                                        value={"Change in Travel Plans"}
                                    />
                                    <label>Change in Travel Plans
                                    </label>
                                </div>

                                <div className="formGroup">
                                    <input
                                        type="radio"
                                        name="checkbox2"
                                        value={"Travel Advisory or Warnings"}
                                    />
                                    <label> Travel Advisory or Warnings
                                    </label>
                                </div>

                                <div className="formGroup">
                                    <input
                                        type="radio"
                                        name="checkbox3"
                                        value={"Visa or Documentation Problems"}
                                    />
                                    <label>Visa or Documentation Problems
                                    </label>
                                </div>

                                <div className="formGroup">
                                    <input
                                        type="radio"
                                        name="checkbox4"
                                        value={"Medical Issues"}
                                    />
                                    <label>Medical Issues
                                    </label>
                                </div>

                                <div className="formGroup">
                                    <input
                                        type="radio"
                                        name="checkbox5"
                                        value={"Other"}
                                    />
                                    <label> Other
                                    </label>
                                </div>
                            </div>
                            <div className="modal-button">
                                <button type="button" onClick={handleModalCloseTwo}>Cancel</button>
                                <button className="second" type="submit" onClick={handleSubmitHotel}>Send Request</button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default HotelChangeReq;
