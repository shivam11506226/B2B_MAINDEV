import React from 'react'
import { Button, Box } from '@mui/material';
import "./sightseeing.css";

const SightseeingForm = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-xs-12 col-md-6">
                    <div className="form_input">
                        <label className="form_lable">Destination</label>
                        <select name="" id="" className="form_input_select">
                            <option mx={5}>Delhi</option>
                            <option mx={5}>Delhi</option>
                            <option mx={5}>Delhi</option>
                            <option mx={5}>Delhi</option>
                            <option mx={5}>Delhi</option>
                        </select>
                    </div>
                </div>
                
            </div>
            <div className='row'>
                <div className="col-xs-12 col-md-2">
                    <div className="form_input">
                        <label className="form_lable">DEPARTURE</label>
                        <input
                            type="date"
                            name="departure"
                            id="departure"
                            className="deaprture_input"
                        ></input>
                    </div>
                </div>
                <div className="col-xs-12 col-md-3">
                    <div className="form_input">
                        <label className="form_lable">Nationality</label>
                        <select name="" id="" className="form_input_select">
                            <option mx={5}>Indian</option>
                            <option mx={5}>Indian</option>
                            <option mx={5}>Indian</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-xs-12 col-md-2">
                    <div className="form_input">
                        <label className="form_lable">Name a keyword</label>
                        <input
                            type="text"
                            name="mane_a_keyword"
                            className="deaprture_input"
                        ></input>
                    </div>
                </div>
            </div>
            <div className='row' >
                <div className="col-xs-12">
                    <form action="/SightseeingResult">
                        <Box display='flex' justifyContent='center'>
                            <Button
                                variant='contained'
                                my={4}
                                colorScheme="teal"
                                type="submit"
                                m
                                sx={{ backgroundColor: '#00BDC4', borderRadius: '20px' }}
                            >
                                Search
                            </Button>
                        </Box>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SightseeingForm
