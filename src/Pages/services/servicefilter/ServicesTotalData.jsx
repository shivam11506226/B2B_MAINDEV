import { Box, Typography } from '@mui/material'
import React from 'react'

const ServicesTotalData = () => {
  return (
    <div>
    <Box p={2} >
      <div style={{display:'flex',margin:'auto',width:'50%',gap:'10px'}}>
      <Typography color="#FF8900" fontSize="18px" width="350px" fontWeight="bold" textAlign="center" >
      Total Open Requests : 
      </Typography>
      <Typography color="#FF8900" fontSize="18px" fontWeight="bold" textAlign="center" >
       0
      </Typography>

      </div>
     
      <div style={{display:'flex',margin:'auto',width:'50%',gap:'10px'}}> 
      <Typography color="#FF8900" fontSize="18px" width="400px" fontWeight="bold" textAlign="center" style={{paddingLeft:'55px'}}>
      Total In progress Requests : 
      </Typography>
      <Typography color="#FF8900" fontSize="18px" fontWeight="bold" textAlign="center">
       0
      </Typography>
      </div>
     

      </Box>
      
      
      
      <Box
        p={3}
        backgroundColor="#FCFFFF"
        boxShadow="1px 1px 8px gray"
        borderRadius="10px"
        alignItems="center"
      >
       <Typography textAlign="center" color="#666666" fontSize="18px">No data available to display</Typography>
      </Box>
    </div>
  )
}

export default ServicesTotalData
