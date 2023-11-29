import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import userApi from "../../../../../Redux/API/api";

const FixedDeparture = () => {
  const [sector, setSector] = useState("");
  const addSector=()=>{
    const payload = {
      Sector: sector,
    };
   userApi.fixedDepartureAddSector(payload)
   setSector("")
  }
  return (
    <>
      <Box
        height="92vh"
        width="80vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Typography variant="h3" component="h2" mb="20px">
            Add Sector Below
          </Typography>
          <Box display="flex" alignItems="center">
            <input value={sector} onChange={(e)=>{setSector(e.target.value)}}/>
            <Button variant="contained" onClick={addSector}>Add</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FixedDeparture;
