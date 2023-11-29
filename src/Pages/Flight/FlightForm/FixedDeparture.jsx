import React from 'react'

import './fixeddeparture.css';

const FixedDeparture = () => {
    return (
        <div className="container-fluid margin-pecenatage">
            <div className="topBoxDeparture">
                <h3>Search Fixed Departure</h3>
                <p>Credit balance : 0 Add Funds | My Bookings </p>
                <label htmlFor="">Sector <sup>*</sup></label>
                <div className='fixedDepartSelect'>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <button className='fixedDepartButton'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default FixedDeparture
