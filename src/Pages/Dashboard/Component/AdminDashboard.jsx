
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardActionArea, CardContent, Typography,Box } from '@mui/material';
import Groups3Icon from '@mui/icons-material/Groups3';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Groups2Icon from '@mui/icons-material/Groups2';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
const AdminDashboardData = () => {
  // State to hold dashboard data
  const [dashboardData, setDashboardData] = useState({});
  const icons = [CollectionsBookmarkIcon, CollectionsBookmarkIcon,CollectionsBookmarkIcon ,CollectionsBookmarkIcon,Groups3Icon,Diversity1Icon,AccountBoxIcon]; 

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch data from the API endpoint
        const response = await axios.get('http://localhost:8000/skytrails/api/admin/adminDashBoard');
        setDashboardData(response.data.result);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <Grid container spacing={3} style={{ marginTop: '50px' }}>
      {Object.keys(dashboardData).map((key, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{position: 'relative' , maxWidth: 345, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardActionArea>
            <CardContent>
                <Box position="absolute" top={0} right={0}>
                  {icons[index % icons.length] && React.createElement(icons[index % icons.length])}
                </Box>
                <Typography gutterBottom variant="h6" component="div">
                  {key}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dashboardData[key]}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AdminDashboardData;
