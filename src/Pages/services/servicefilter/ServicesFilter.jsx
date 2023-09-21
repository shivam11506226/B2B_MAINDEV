import { Box, Grid, Typography, label, Input } from "@mui/material";
import React from "react";
import './servicefilter.css';

const ServicesFilter = () => {
  return (
    <>
      <Box
        p={3}
        backgroundColor="#FCFFFF"
        boxShadow="1px 1px 8px gray"
        borderRadius="10px"
        alignItems="center"
       
        display="flex"
        flexWrap="wrap"
        className="filter-container"
      >
        <Box p={1}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#252525",
              borderBottom: "2px solid grey",
            }}
            textAlign="center"
          >
            Filter
          </Typography>
        </Box>

        <Grid container alignItems="center">
          <Grid md={7} sm={6}>
            <Box display="flex" alignItems="center">
              <Box px={1}>
                <Typography color="#666666" fontSize="15px" fontWeight="bold">
                  Status
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid md={5} sm={6} display="flex">
            <Box display="flex" justifyContent="right" width="100%">
              <Box display="block" alignItems="right" textAlign="end">
                <Typography
                  display="flex"
                  color="#006FFF"
                  fontSize="15px"
                  fontWeight="bold"
                >
                  (Select/ Unselect)
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>


        <div style={{ display: 'flex', width: '95%',  marginLeft: '10px', height: '50px', gap: '10px' }}>
          <Box className="input" display='flex' alignItems='center' >
            <input type="checkbox"  style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">Open</Typography>
          </Box>
          <Box className="input" display='flex' alignItems='center'>
            <input type="checkbox"  style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">In Progress</Typography>
          </Box>
          <Box className="input" display='flex' alignItems='center'>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">Hold</Typography>
          </Box>
        </div>



        <div style={{ display: 'flex', width: '95%',  marginLeft: '10px', height: '50px', gap: '10px' }}>
          <Box className="input" display='flex' alignItems='center'>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">Closed</Typography>
          </Box>
          <Box className="input" display='flex' alignItems='center'>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">Rejected</Typography>
          </Box>
          <Box className="input" display='flex' alignItems='center'  >
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">Re Open</Typography>
          </Box>
        </div>






        {/* ------------------------------------------- */}

        <Box p={1}>
        <Typography color="#666666" fontSize="15px" fontWeight="bold">
            
            Demographic Type
          </Typography>
        </Box>
        <Box display="flex" justifyContent='space-around' style={{ marginLeft: '8px',gap:'10px' }}>
          <button className="click">Non Set</button>
          <button className="click">Domestic</button>
          <button className="click">International</button>

        </Box>

        {/* ----------------------------------------------------------- */}
        <Grid container alignItems="center" style={{marginTop:'10px'}}>
          <Grid md={7} sm={6}>
            <Box display="flex" alignItems="center">
              <Box px={1}>
                <Typography color="#666666" fontSize="15px" fontWeight="bold">
                  Restrict By Category
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid md={5} sm={6} display="flex">
            <Box display="flex" justifyContent="right" width="100%">
              <Box display="block" alignItems="right" textAlign="end">
                <Typography
                  display="flex"
                  color="#006FFF"
                  fontSize="15px"
                  fontWeight="bold"
                >
                  (Select/ Unselect)
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>


        <div style={{  marginLeft: '10px', marginBottom: '10px',width:'70%' }}>
          <Box className="input" display='flex' alignItems='center' >
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">Amendment Request</Typography>
          </Box>
          <Box className="input" display='flex' alignItems='center'>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">BeddingTypeIssue</Typography>
          </Box>
           <Box className="input" display='flex' alignItems='center'>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">BeddingTypeIssue</Typography>
          </Box>
          <Box className="input" display='flex' alignItems='center'>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">Booking Cancelled at Hotel End</Typography>
          </Box>
          <Box className="input" display='flex' alignItems='center'>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">Book-out</Typography>
          </Box>
          <Box className="input" display='flex' alignItems='center'>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">Domestic Package</Typography>
          </Box>
          <Box className="input" display='flex' alignItems='center'>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">Hotel Refund</Typography>
          </Box>
          <Box className="input" display='flex' alignItems='center'  >
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <Typography ml={2} color="#252525" fontSize="15px" fontWeight="bold">Hotel Cancellation/Amendment</Typography>
          </Box>
        </div>


        <Grid container alignItems="center">
          <Box  alignItems="center" gap="20px">
            <Box px={1}>
              <Typography color="#666666" fontSize="15px" fontWeight="bold">
                Restrict By Request Id
              </Typography>
            </Box>
            <Box mt={1}>
              <input className="input_date" type="text" style={{border:'2px solid grey',marginLeft:'10px'}} />
            </Box>
          </Box>
        </Grid>

        <Grid container alignItems="center" mt={2}>
          <Box display="flex" alignItems="center">
            <Box px={1}>
            <Typography color="#666666" fontSize="15px" fontWeight="bold">
                Restrict By Request Date
              </Typography>
            </Box>
          </Box>
        </Grid>



        <div style={{display:'flex',gap:'10px'}}>
        <Box>
          <Typography mt={1} fontSize="12px" fontWeight='bold' color="#252525" ml={2}>
            From:
          </Typography>
          <input mt={1} className="input_date" type="date" style={{border:'2px solid grey',marginLeft:'10px'}}/>
        </Box>
        <Box>
          <Typography mt={1} fontSize="12px" fontWeight='bold' color="#252525" ml={2}>
            To:
          </Typography>
          <input mt={1} className="input_date" type="date" style={{border:'2px solid grey',marginLeft:'10px'}}/>
        </Box>
        </div>





        <Grid container alignItems="center" mt={2}>
          <Box display="flex" alignItems="center">
            <Box px={1}>
            <Typography color="#666666" fontSize="15px" fontWeight="bold">
                Restrict By Reminder Date
              </Typography>
            </Box>
          </Box>
        </Grid>


        <div style={{display:'flex',gap:'10px',marginBottom:'20px'}}> 
        <Box>
          <Typography mt={1} fontSize="12px" fontWeight='bold' color="#252525" ml={2}>
            From:
          </Typography>
          <input className="input_date" type="date" style={{border:'2px solid grey',marginLeft:'10px'}}/>
        </Box>
        <Box>
          <Typography mt={1} fontSize="12px" fontWeight='bold' color="#252525" ml={2}>
            To:
          </Typography>
          <input className="input_date" type="date" style={{border:'2px solid grey',marginLeft:'10px'}}/>
        </Box>
        </div>
       



        <div > 
        <Box  style={{display:'flex',gap:'10px',marginLeft:'10px',width:'100%'}}>
          <form action="/">
            <button className="click" type="submit">Apply</button>
          </form>

          <form action="/services">
            <button className="click" type="submit">Reset</button>
          </form>
        </Box>
        </div>
        





      </Box>
    </>
  );
};

export default ServicesFilter;
