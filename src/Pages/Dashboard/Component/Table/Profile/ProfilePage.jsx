import React, { useState } from 'react';

const ProfilePage = () => {
    

  const handleEditProfile = () => {

  };

  const handleChangePassword = () => {

  };

  const handleLogout = () => {

  };

  return (
    <div className="profile-page">
      <div className="profile-overview">
        <h3>Profile Overview</h3>
        {/* Display user's overview information here */}
      </div>

      <div className="booking-history">
        <h3>Booking History</h3>
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Destination</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
