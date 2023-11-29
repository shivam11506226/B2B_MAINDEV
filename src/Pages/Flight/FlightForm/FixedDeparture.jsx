import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { apiURL } from "../../../Constants/constant";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import './fixeddeparture.css';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'blue' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: "7px",
    wordWrap: true,
    width: "50px",
    border: '1px solid white',
}));
const FixedDeparture = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [toQuery, settoQuery] = useState("")
    const [toSearchResult, setToSearchResults] = useState([])
    const [toSearchResultData, setToSearchResultsData] = useState([])
    useEffect(() => {
        let mounted = true;

        const fetchSearchResults = async () => {
            setIsLoading(true);

            // make an API call to get search results

            const results = await axios.get(
                `${apiURL.baseURL}/skyTrails/getSector`

            );
            setToSearchResults(results?.data)
            settoQuery(results?.data[0]?.Sector)




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
        console.warn(results.data.data, "result1 .................................................")
        setToSearchResultsData(results.data.data)
        console.warn("search result click", results.data.data)
    }
    console.warn('Fetching results', toSearchResult);
    return (

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
            {toSearchResultData.length >0 &&
            <Box id="boxx" sx={{ mt: "50px", position: "fixed", top: "30%", left: "0", width: "100%", display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column" }} >

                <Grid   container spacing={0} columns={16} sx={{ backgroundColor: "#071C2C", display: 'flex', justifyContent: 'center', alignItems: "center", height: "70px" }}>
                    <Grid item className='grid_item' >
                        Sector
                    </Grid>
                    <Grid item className='grid_item'>
                        Departure Data
                    </Grid>
                    <Grid item className='grid_item'>
                        Return Date
                    </Grid>
                    <Grid item className='grid_item'>
                        Airlines
                    </Grid>
                    <Grid item className='grid_item'>
                        Flight No
                    </Grid>
                    <Grid item className='grid_item'>
                        Total Seats
                    </Grid>
                    <Grid item className='grid_item'>
                        Onward Time
                    </Grid>
                    <Grid item className='grid_item'>
                        Return Time
                    </Grid>
                    <Grid item className='grid_item'>
                        Price
                    </Grid>
                    <Grid item className='grid_item'>
                        Sold
                    </Grid>
                    <Grid item className='grid_item'>
                        UnSold
                    </Grid>
                    <Grid item className='grid_item'>
                        Hold
                    </Grid>
                    <Grid item className='grid_item'>
                        Availlable Seats
                    </Grid>
                    <Grid item className='grid_item'>
                        AirTKT
                    </Grid>
                    <Grid item className='grid_item'>
                        AIRPKG
                    </Grid>
                </Grid>
                {toSearchResultData.length > 0 && toSearchResultData.map((item, index) => (
                    <Grid className="child1" container spacing={0} columns={16}  sx={{ backgroundColor: "#071C2C", display: 'flex', justifyContent: 'center', alignItems: "center", height: "70px"  }}>
                        <Grid item className='grid_item item1' >
                            {item.Sector}
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.DepartureDate}
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.ReturnDate
                            }
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.Airlines
                            }
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.FlightNo
                            }
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.AvailableSeats}
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.OnwardTime
                            }
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.ReturnTime
                            }
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.Price}
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.Sold}
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.UnSold}
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.Hold}
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.AvailableSeats}
                        </Grid>

                        <Grid item className='grid_item item1'>

                            {item.AirTKT === "Call Us Book" ? item.AirTKT : <button className='book_know_btn'>Book Know</button>
                            }
                        </Grid>
                        <Grid item className='grid_item item1'>
                            {item.AIRPKG
                            }
                        </Grid>
                    </Grid>
                ))}

            </Box>}
        </div>
    )
}

export default FixedDeparture
