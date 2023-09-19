import React from 'react';
import { Button,Box, Typography,Grid } from '@mui/material';
import './admin.css';

const Admin = () => {
  return (
    <div className='flightContainer'>
      <form action='/AdminUserForm'>
      <Box>
        <Button variant='contained' type='submit' sx={{backgroundColor:'#006FFF',borderRadius:'10px'}}>User Name Create</Button>
      </Box>
      </form>
      <Box my={2} sx={{boxShadow:"0px 3px 6px #00000029",padding:'10px'}}>
        <Grid container >
            <Grid item  xs={2}>
                <Typography sx={{color:'#252525',fontSize:'16px',fontWeight:'bold'}} textAlign='center'>Name</Typography>
            </Grid>
            <Grid item  xs={2}>
                <Typography sx={{color:'#252525',fontSize:'16px',fontWeight:'bold'}}  textAlign='center'>Type</Typography>
            </Grid>
            <Grid item  xs={2}>
                <Typography sx={{color:'#252525',fontSize:'16px',fontWeight:'bold'}}  textAlign='center'>Role</Typography>
            </Grid>
            <Grid item  xs={2}>
                <Typography sx={{color:'#252525',fontSize:'16px',fontWeight:'bold'}}  textAlign='center'>Email</Typography>
            </Grid>
            <Grid item  xs={2}>
                <Typography sx={{color:'#252525',fontSize:'16px',fontWeight:'bold'}}  textAlign='center'>Phone</Typography>
            </Grid>
            <Grid item  xs={2}>
                <Typography sx={{color:'#252525',fontSize:'16px',fontWeight:'bold'}}  textAlign='center'>Status</Typography>
            </Grid>
        </Grid>
      </Box>
      <Box>
        <Button variant='contained' type='submit' sx={{backgroundColor:'#006FFF',borderRadius:'10px'}}>Export To CSV</Button>
      </Box>
    </div>
  )
}

export default Admin
