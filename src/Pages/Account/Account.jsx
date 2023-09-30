import React from 'react';
import Stack from '@mui/material/Stack';
import { Button, Box, Typography, Input } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import color from "../../color/color"
const Account = () => {
    return (
        <div className='flightContainer'>
            <Stack spacing={2} direction="row">
                <Button variant="contained" type='submit' sx={{ backgroundColor:color.bluedark, borderRadius: '10px', color: 'white', boxShadow: '0px 3px 6px #00000029' }}>Text</Button>
                <Button variant="contained" type='submit' sx={{ backgroundColor:color.bluedark, borderRadius: '10px', color: 'white', boxShadow: '0px 3px 6px #00000029' }}>Contained</Button>
                <Button variant="contained" type='submit' sx={{ backgroundColor:color.bluedark, borderRadius: '10px', color: 'white', boxShadow: '0px 3px 6px #00000029' }}>Outlined</Button>
            </Stack>
            <Box sx={{ flexGrow: 1 }} my={2}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={2} sm={4} md={6}>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px', margin: '0 auto', marginTop: '20px' }}>
                            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color:color.bluedark }} mb={2}>Change Password</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500', width: '150px', marginLeft: '10px' }}>Enter Old Password*</Typography>
                                <Input type="password" border="none" name='enter old password' sx={{ flexGrow: 1, padding: '10px', borderRadius: '5px', backgroundColor: 'white' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500', width: '150px', marginLeft: '10px' }}>Enter New Password*</Typography>
                                <Input type="password" border="none" name='enter new password' sx={{ flexGrow: 1, padding: '10px', borderRadius: '5px', backgroundColor: 'white' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '500', width: '150px', marginLeft: '10px' }}>Confirm Password*</Typography>
                                <Input type="password" border="none" name='enter confirm password' sx={{ flexGrow: 1, padding: '10px', borderRadius: '5px', backgroundColor: 'white' }} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }} my={2}>
                                <Button variant='contained'  sx={{ borderRadius: '10px', color: 'white',  fontSize: '16px',backgroundColor:color.bluedark }}>Change Password</Button>
                            </Box>
                        </Box>

                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '20px', margin: '0 auto', marginTop: '20px' }}>
                            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color:color.bluedark, marginBottom: '15px' }}>Agency Detail</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>User Name:</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>Agency:</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left', }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color: '#252525', fontWeight: '500' }}>VURY234</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#252525', fontWeight: '500' }}>Skd tours and travels private limited</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>


                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '20px', margin: '0 auto', marginTop: '20px' }}>
                            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color:color.bluedark, marginBottom: '15px' }}>Agency Address</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left' }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>Address:</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>Pin Code:</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>State:</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left' }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color: '#252525', fontWeight: '500' }}>45 DR JIBAN RATAN DHAR ROAD</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#252525', fontWeight: '500' }}>124154</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#252525', fontWeight: '500' }}>West Bengal</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>



                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '20px', margin: '0 auto', marginTop: '20px' }}>
                            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color:color.bluedark, marginBottom: '15px' }}>Residence Address</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left' }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>Address:</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>Pin Code:</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>State:</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left' }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color: '#252525', fontWeight: '500' }}>45 DR JIBAN RATAN DHAR ROAD</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#252525', fontWeight: '500' }}>124154</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#252525', fontWeight: '500' }}>West Bengal</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>



                    </Grid>
                    <Grid item xs={2} sm={4} md={6}>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '20px' }} my={2}>
                            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color:color.bluedark, marginBottom: '15px' }}>Email Address</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left' }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>Current Email:</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left' }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color: '#252525', fontWeight: '500' }}>skdtourtravels@gmail.com</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500', marginTop: '15px' }}>Please contact Travvolt if you want to change your EmailId</Typography>
                        </Box>

                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '20px' }} my={2}>
                            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color:color.bluedark, marginBottom: '15px' }}>Mobile Number</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left' }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>Mobile :</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>Agency Phone :</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left' }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color: '#252525', fontWeight: '500' }}>+91 68789 87974</Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#252525', fontWeight: '500' }}>+91 68789 87974</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500', marginTop: '15px' }}>
  Please contact Travvolt if you want to change your Mobile Number
</Typography>

                          
                       
                        </Box>

                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '20px' }} my={2}>
                            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color:color.bluedark, marginBottom: '15px' }}>Threshold Balance</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left' }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500' }}>Cash Amount :</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ textAlign: 'left' }} my={1}>
                                        <Typography sx={{ fontSize: '16px', color:color.red1, fontWeight: '500' }}>₹ 564,654</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Typography sx={{ fontSize: '16px', color: '#666666', fontWeight: '500', marginTop: '15px' }}>Email me when my balance is below the threshold Limit</Typography>
                        </Box>

                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '20px', display: 'flex' }} my={2}>
                            <form action='/'>
                                <Button type='submit' color='primary' variant='contained' sx={{ borderRadius: '10px', boxShadow: '0px 3px 6px #00000029', marginLeft: 'auto',backgroundColor:color.bluedark}}>Save Change</Button>
                            </form>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Account
