import { Box, Typography } from '@mui/material'
import React from 'react'

const ServicesTotalData = () => {
  return (
    <div>
    <Box p={2}>
      <Typography color="#FF8900" fontSize="18px" fontWeight="bold" textAlign="center">
      Total Open Requests : 0
      </Typography>
      <Typography color="#FF8900" fontSize="18px" fontWeight="bold" textAlign="center">
      Total In progress Requests : 0
      </Typography>
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
