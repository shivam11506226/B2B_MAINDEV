import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import OneWay from './FlightForm/OneWay';
import Return from './FlightForm/Return';
import OffShare from './FlightForm/OffShare';
import MultiStop from './FlightForm/MultiStop';
import Calander from './FlightForm/Calendar';
import AdvanceSearch from './FlightForm/AdvanceSearch';
// import { styled } from '@mui/system'; // Import from @mui/system
import Slide from '@mui/material/Slide';
import "./flightFormContainer.css"


const StyledTabs = styled(Tabs)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  borderRadius: theme.spacing(2), // Adjust the border radius as needed
  overflow: 'hidden',
  '& .MuiTabs-indicator': {
    display: 'none', // Hide the active indicator
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({

  // '&.Mui-selected': {
  //   background: '#FFFBFB',
  //   padding: "5px 60px",
  //   color: 'black',
  //   border: '2px solid #21325D',
  // },
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Slide direction="up" in={value === index} >
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} style={{ marginTop: "-2px" }}>
        <Box style={{ backgroundColor: "#F8F3F3", marginTop: "-60px", width: "100%", margin: "auto", borderRadius: "12px", border: "2px solid #d5d4d4", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", }}>
          <Typography>{children}</Typography>
        </Box>
      </div>
    </Slide>
  );
}


CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function StyledTabsExample() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', margin: "auto" }}>
      <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example" style={{ width: "100%", margin: "auto", marginTop: "-40px", }} >
        <StyledTab label="One Way" {...a11yProps(0)} className='btn' />
        <StyledTab label="Return" {...a11yProps(1)} className='btn' />
        {/* <StyledTab label="Off Share" {...a11yProps(2)} />
        <StyledTab label="Multi Stop" {...a11yProps(3)} />
        <StyledTab label="Calendar Fare" {...a11yProps(4)} />
        <StyledTab label="Advance Search" {...a11yProps(5)} /> */}
      </StyledTabs>
      <CustomTabPanel value={value} index={0}>
        <OneWay />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Return />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <OffShare />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <MultiStop />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Calander />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <AdvanceSearch />
      </CustomTabPanel>
    </Box>
  );
}
