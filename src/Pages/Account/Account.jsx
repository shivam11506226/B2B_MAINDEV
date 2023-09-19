import React from 'react';
import Stack from '@mui/material/Stack';
import { Button, Box, Typography, Input } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';






const Account = () => {
    return (
        <div className='flightContainer'>
            <Stack spacing={2} direction="row">
                <Button variant="contained" type='submit' sx={{ backgroundColor: '#006FFF', borderRadius: '10px', color: 'white', boxShadow: '0px 3px 6px #00000029' }}>Text</Button>
                <Button type='submit' sx={{ backgroundColor: '#fff', borderRadius: '10px', color: '#006FFF', boxShadow: '0px 3px 6px #00000029' }}>Contained</Button>
                <Button type='submit' sx={{ backgroundColor: '#fff', borderRadius: '10px', color: '#006FFF', boxShadow: '0px 3px 6px #00000029' }}>Outlined</Button>
            </Stack>
            <Box sx={{ flexGrow: 1 }} my={2}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={2} sm={4} md={6}>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px' }} my={2}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#252525' }} mb={2}>Change Password</Typography>
                            <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center' }} my={1}>
                                <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Enter Old Password*</Typography>
                                <Box className="input_area" ml={3}>
                                    <Input type="password" border="none" name='enter old password' />
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center' }} my={1}>
                                <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Enter New Password*</Typography>
                                <Box className="input_area" ml={2}>
                                    <Input type="password" border="none" name='enter new password' />
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center' }} my={1}>
                                <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Confirm Password*</Typography>
                                <Box className="input_area" ml={4}>
                                    <Input type="password" border="none" name='enter confirm password' />
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} my={2}>
                                <Button variant='contained' color="warning" sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', color: 'white', fontWeight: 'bold', fontSize: '12px' }} textAlign="center">Change Password</Button>
                            </Box>
                        </Box>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px' }} my={2}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#006FFF' }} mb={2}>Agency Detail</Typography>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>User Name:</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Agency :</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={8}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>VURY234</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Skd tours and travels private limited</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px' }} my={2}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#006FFF' }} mb={2}>Agency Address</Typography>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Address :</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Pin Code :</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>State :</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={8}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>45 DR JIBAN RATAN DHAR ROAD</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>124154</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>West Bangal</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px' }} my={2}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#006FFF' }} mb={2}>Residence Address</Typography>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Address :</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Pin Code :</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>State :</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={8}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>45 DR JIBAN RATAN DHAR ROAD</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>124154</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>West Bangal</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6}>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px' }} my={2}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#006FFF' }} mb={2}>Email Address</Typography>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Current Email:</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={8}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>skdtourtravels@gmail.com</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px' }} my={2}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#006FFF' }} mb={2}>Mobile Number</Typography>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Mobile :</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Agency Phone :</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={8}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>+91 68789 87974</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>+91 68789 87974</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Please contact Travvolt if you want to change your EmailId</Typography>
                        </Box>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px' }} my={2}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#006FFF' }} mb={2}>Threshold Balance</Typography>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Cash Amount :</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={8}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#FF8900', fontWeight: '500' }}>₹ 564,654</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Email me when my balance is below the threshold Limit</Typography>
                        </Box>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px' }} my={2}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#006FFF' }} mb={2}>Other Details</Typography>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>Pan Card No. :</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={8}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500' }}>SDFE485XD</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ padding: '15px', display: 'flex', justifyContent: 'right' }} my={2} >
                            <form action='/'>
                                <Button type='submit' color='primary' variant='contained' sx={{ borderRadius: '10px', boxShadow: '0px 3px 6px #00000029' }}>Save Change</Button>
                            </form>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Account
