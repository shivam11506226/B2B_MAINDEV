import React from 'react';
import { Button, Box, Typography, Grid, TextField, Divider } from '@mui/material';
import './admin.css';
import  color from "../../color/color"
const Admin = () => {
  return (
    <div className='flightContainer'>
      <form action='/AdminUserForm'>
        <Box mb={2}>
          <Typography variant="h5" sx={{ marginBottom: '1rem', color: '#252525' }}>
            Create User
          </Typography>
          <Button variant='contained' type='submit' sx={{ backgroundColor:color.bluedark, borderRadius: '10px' }}>
            User Name Create
          </Button>
        </Box>

        <Divider sx={{ marginBottom: '1rem' }} />

        <Box sx={{ boxShadow: '0px 3px 6px #00000029', padding: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField label="Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Type" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Role" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Email" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Phone" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Status" variant="outlined" fullWidth />
            </Grid>
          </Grid>
        </Box>

        <Box mt={2}>
          <Button variant='contained' type='submit' sx={{ backgroundColor:color.bluedark, borderRadius: '10px' }}>
            Export To CSV
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Admin;
