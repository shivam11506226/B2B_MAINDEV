import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../../Constants/constant";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography"

import './fixeddeparture.css';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  }
const FixedDeparture = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [toQuery, settoQuery] = useState("")
    const [toSearchResult, setToSearchResults] = useState([])
    const [toSearchResultData, setToSearchResultsData] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [item, setItem] = useState(null);
    useEffect(() => {
        let mounted = true;

        const fetchSearchResults = async () => {
            setIsLoading(true);

            // make an API call to get search results

            const results = await axios.get(
                `${apiURL.baseURL}/skyTrails/getSector`

            );
            setToSearchResults(results?.data)
            console.log(results, "jfdvhjdfvdfuivfuifviufviu................................")
            settoQuery(results?.data.data[0]?.Sector)




        };
        fetchSearchResults()

        // return () => {
        //   mounted = false;
        // };
    }, []);

    const handelSearch = async () => {
        const results = await axios.get(
            `${apiURL.baseURL}/skyTrails/fixDeparturefilter?Sector=${toQuery}`
            // `${apiURL.baseURL}/skyTrails/fixDeparturefilter?Sector=DEL-DXB`

        );
        console.warn(results?.data?.data, "result1 .................................................")
        setToSearchResultsData(results?.data?.data)
        console.warn("search result click", results?.data?.data)
    }
    console.warn('Fetching results', toSearchResult);
    return (

        <>
            <div className="container-fluid margin-pecenatage">
                <div className="topBoxDeparture">
                    <h3>Search Fixed Departure</h3>
                    <p> </p>
                    <label htmlFor="">Sector <sup>*</sup></label>



                    <div className='fixedDepartSelect'>
                        {toSearchResult.data?.length > 0 ?
                            <select class="form-select"
                                onChange={(e) => settoQuery(e.target.value)}
                                aria-label="Default select example">

                                {toSearchResult?.data.map((item, index) => (
                                    index === 0 ? <option selected value={item.Sector}>{item.Sector}</option> : <option value={item.Sector}>{item.Sector}</option>

                                ))
                                }



                            </select> : ""
                        }
                        <button className='fixedDepartButton' onClick={() => handelSearch()} >Search</button>
                    </div>
                </div>
                <div className='table1'>
                    {toSearchResultData.length > 0 &&
                        <table

                        //  id="boxx" sx={{ mt: "50px", position: "fixed", top: "30%", left: "0", width: "100%", display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column" }} 
                        >

                            <thead
                            //  container spacing={0} columns={16} sx={{ backgroundColor: "#071C2C", display: 'flex', justifyContent: 'center', alignItems: "center", height: "70px" }}
                            >
                                <tr>
                                    <th item className='4grid_item' >
                                        Sector
                                    </th>
                                    <th item className='4grid_item'>
                                        Departure Data
                                    </th>
                                    <th item className='4grid_item'>
                                        Return Date
                                    </th>
                                    <th item className='4grid_item'>
                                        Airlines
                                    </th>
                                    <th item className='4grid_item'>
                                        Flight No
                                    </th>
                                    <th item className='4grid_item'>
                                        Total Seats
                                    </th>
                                    <th item className='4grid_item'>
                                        Onward Time
                                    </th>
                                    <th item className='4grid_item'>
                                        Return Time
                                    </th>
                                    <th item className='4grid_item'>
                                        Price
                                    </th>
                                    <th item className='4grid_item'>
                                        Sold
                                    </th>
                                    <th item className='4grid_item'>
                                        UnSold
                                    </th>
                                    <th item className='4grid_item'>
                                        Hold
                                    </th>
                                    <th item className='4grid_item'>
                                        Availlable Seats
                                    </th>
                                    <th item className='4grid_item'>
                                        AirTKT
                                    </th>
                                    <th item className='4grid_item'>
                                        AIRPKG
                                    </th>
                                </tr>
                            </thead>


                            {toSearchResultData.length > 0 && toSearchResultData.map((item, index) => (
                                <tbody
                                //  className="child1" container spacing={0} columns={16}  sx={{ backgroundColor: "#071C2C", display: 'flex', justifyContent: 'center', alignItems: "center", height: "70px"  }}
                                >
                                    <tr>
                                        <td item className='4grid_item item14' >
                                            {item.Sector}
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.DepartureDate}
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.ReturnDate
                                            }
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.Airlines
                                            }
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.FlightNo
                                            }
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.AvailableSeats}
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.OnwardTime
                                            }
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.ReturnTime
                                            }
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.Price}
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.Sold}
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.UnSold}
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.Hold}
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.AvailableSeats}
                                        </td>

                                        <td item className='4grid_item item14'>

                                            {item.AirTKT === "Call Us Book" ? item.AirTKT : <button className='book_know_btn' onClick={(event) => {
                                                event.stopPropagation();
                                                setOpenModal((prev) => !prev);
                                                setItem(item);
                                            }} >Book Know</button>
                                            }
                                        </td>
                                        <td item className='4grid_item item14'>
                                            {item.AIRPKG
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            ))}



                        </table>}
                </div>

            </div>
            <Modal
                open={openModal}
                onClose={() => setOpenModal((prev) => !prev)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box display="flex">
                        <Box>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sector</td>
                                        <td>{item?.Sector}</td>
                                    </tr>
                                    <tr>
                                        <td>Dept Dates</td>
                                        <td>Data 5</td>
                                    </tr>
                                    <tr>
                                        <td>Return Dates</td>
                                        <td>Data 5</td>
                                    </tr>
                                    <tr>
                                        <td>Airlines</td>
                                        <td>Data 5</td>
                                    </tr>
                                    <tr>
                                        <td>Flight No</td>
                                        <td>Data 5</td>
                                    </tr>
                                    <tr>
                                        <td>Onward Time</td>
                                        <td>Data 5</td>
                                    </tr>
                                    <tr>
                                        <td>Return Time</td>
                                        <td>Data 5</td>
                                    </tr>
                                    <tr>
                                        <td>Agent Price</td>
                                        <td>Data 5</td>
                                    </tr>
                                    <tr>
                                        <td>Available Seats</td>
                                        <td>Data 5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Box>
                        <Box></Box>
                    </Box>
                </Box>
            </Modal>

        </>
    )
}

export default FixedDeparture
