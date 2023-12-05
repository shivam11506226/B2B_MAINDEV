import React, { useState } from 'react';
import { apiURL } from '../../../../Constants/constant';
const CreateSubAdminPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    mobile_number: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiURL.baseURL}/skytrails/api/subAdmin/createSubAdmin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Subadmin created successfully:', data);
        // Redirect or perform other actions upon successful creation
      } else {
        console.error('Failed to create subadmin:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating subadmin:', error.message);
    }
  };

  return (
    <div>
      <h1>Create Subadmin</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          Mobile Number:
          <input type="text" name="mobile_number" value={formData.mobile_number} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Create Subadmin</button>
      </form>
    </div>
  );
};

export default CreateSubAdminPage;
