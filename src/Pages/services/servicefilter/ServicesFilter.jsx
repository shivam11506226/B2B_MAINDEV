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
      >
        <Box p={1}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#252525",
              borderBottom: "1px solid grey",
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
                <Typography color="#666666" fontSize="12px" fontWeight="bold">
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
                  fontSize="10px"
                  fontWeight="bold"
                >
                  (Select/ Unselect)
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box className="input" display='flex' alignItems='center'>
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">Open</Typography>
        </Box>
        <Box className="input" display='flex' alignItems='center'>
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">In Progress</Typography>
        </Box>
        <Box className="input" display='flex' alignItems='center'>
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">Hold</Typography>
        </Box>
        <Box className="input" display='flex' alignItems='center'>
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">Closed</Typography>
        </Box>
        <Box className="input" display='flex' alignItems='center'>
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">Rejected</Typography>
        </Box>
        <Box className="input" display='flex' alignItems='center' borderBottom="1px solid grey" >
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">Re Open</Typography>
        </Box>
        {/* ------------------------------------------- */}

        <Box p={1}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "#252525",
            }}
            textAlign="center"
          >
            Demographic Type
          </Typography>
        </Box>
        <Box display="flex" justifyContent='space-around'>
          <button className="btn">Non Set</button>
          <button className="btn">Domestic</button>
        </Box>
        <Box display="flex" justifyContent="center">
          <button className="btn-1">International</button>
        </Box>
        {/* ----------------------------------------------------------- */}
        <Grid container alignItems="center">
          <Box display="flex" alignItems="center">
            <Box px={1}>
              <Typography color="#666666" fontSize="12px" fontWeight="bold">
                Restrict By Category
              </Typography>
            </Box>

            <Grid md={5} sm={6} display="flex">
              <Box display="flex" justifyContent="right" width="100%">
                <Box display="block" alignItems="right" textAlign="end">
                  <Typography
                    display="flex"
                    color="#006FFF"
                    fontSize="10px"
                    fontWeight="bold"
                  >
                    (Select/ Unselect)
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Box className="input" display='flex' alignItems='center'>
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">Amendment Request</Typography>
        </Box>
        <Box className="input" display='flex' alignItems='center'>
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">BeddingTypeIssue</Typography>
        </Box>
        <Box className="input" display='flex' alignItems='center'>
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">Booking Cancelled at Hotel End</Typography>
        </Box>
        <Box className="input" display='flex' alignItems='center'>
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">Book-out</Typography>
        </Box>
        <Box className="input" display='flex' alignItems='center'>
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">Domestic Package</Typography>
        </Box>
        <Box className="input" display='flex' alignItems='center'>
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">Hotel Refund</Typography>
        </Box>
        <Box className="input" display='flex' alignItems='center' borderBottom="1px solid grey" >
          <input type="checkbox" />
          <Typography ml={2} color="#252525" fontSize="12px" fontWeight="bold">Hotel Cancellation/Amendment</Typography>
        </Box>

        <Grid container alignItems="center">
          <Box display="flex" alignItems="center">
            <Box px={1}>
              <Typography mt={2} color="#252525" fontSize="12px" fontWeight="bold">
                Restrict By Request Id
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box mt={1}>
          <input className="input_value" type="text" />
        </Box>
        <Grid container alignItems="center" mt={2}>
          <Box display="flex" alignItems="center">
            <Box px={1}>
              <Typography color="#252525" fontSize="12px" fontWeight="bold">
                Restrict By Request Date
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box>
          <Typography mt={1} fontSize="12px" fontWeight='bold'  color="#252525">
            From:
          </Typography>
          <input className="input_date" type="date" />
        </Box>
        <Box>
          <Typography mt={1} fontSize="12px" fontWeight='bold'  color="#252525">
            To:
          </Typography>
          <input className="input_date" type="date" />
        </Box>
        <Grid container alignItems="center" mt={2}>
          <Box display="flex" alignItems="center">
            <Box px={1}>
              <Typography color="#252525" fontSize="12px" fontWeight="bold">
                Restrict By Reminder Date
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box>
          <Typography mt={1} fontSize="12px" fontWeight='bold' color="#252525">
            From:
          </Typography>
          <input className="input_date" type="date" />
        </Box>
        <Box>
          <Typography mt={1} fontSize="12px"  fontWeight='bold' color="#252525">
            To:
          </Typography>
          <input className="input_date" type="date" />
        </Box>
        <Box mt={3} display="flex">
          <form action="/">
          <button className="click" type="submit">Apply</button>
          </form>

          <form action="/services">
          <button className="click" type="submit">Reset</button>
          </form>
        </Box>





      </Box>
    </>
  );
};

export default ServicesFilter;
