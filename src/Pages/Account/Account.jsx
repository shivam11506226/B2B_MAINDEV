import React, { useState } from "react";
import AccountDetails from "./AccountDetails"; // Import the Account component
import Queue from "./Queue"; // Import the Queue component
import Tickets from "./Ticket"; // Import the Tickets component
import Stack from "@mui/material/Stack";
import { Button, Box   } from "@mui/material";
import color from "../../color/color";


const Account = () => {
  const [activeButton, setActiveButton] = useState("Account");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    
      <div className="button-container" style={{background: "white",
      padding: '2rem'}}>
        <Box sx={{ flexGrow: 1 }} my={2}>
    

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: color.bluedark,
            borderRadius: "10px",
            color: "white",
            boxShadow: "0px 3px 6px #00000029",
          }}
          onClick={() => handleButtonClick("Account")}
        >
          Account
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: color.bluedark,
            borderRadius: "10px",
            color: "white",
            boxShadow: "0px 3px 6px #00000029",
          }}
          onClick={() => handleButtonClick("Queue")}
        >
          Queue
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: color.bluedark,
            borderRadius: "10px",
            color: "white",
            boxShadow: "0px 3px 6px #00000029",
          }}
          onClick={() => handleButtonClick("Tickets")}
        >
          Tickets
        </Button>
      </Stack>
      </Box>
      
      {activeButton === "Account" && <AccountDetails />}
      {activeButton === "Queue" && <Queue />}
      {activeButton === "Tickets" && <Tickets />}
      </div>
  );
};

export default Account;