import { Typography, Box, Paper, Grid, styled, Input, Button, Stack } from '@mui/material';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { background } from '@chakra-ui/react';
import "./gstform.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const GSTform = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='flightContainer'>
            <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#252525' }} textAlign='center'>Submit GST Input Invoice</Typography>
            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#252525' }} textAlign='left' my={2}>Details of Receiver (Billed To):</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={6}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>Company Name:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <input type='text' className='gst_input' placeholder='Travvolt (Skd Tour & Travel)'></input>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>Company State:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <select name="company state" style={{ border: 'none', textDecoration: 'none', width: '100%', borderRadius: '10px', paddingY: '10px' }}>
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>Company Premises Code:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <input type='text' className='gst_input' ></input>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>State Code:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <input type='text' className='gst_input' ></input>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>Company GSTIN:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <input type='text' name='company gstin' className='gst_input' ></input>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>Company Address:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <input type='text' name='company address' className='gst_input' ></input>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#252525' }} textAlign='left' my={2}>Details of Source (Billed From):</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={6}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>Company State:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <select name="company state" style={{ border: 'none', textDecoration: 'none', width: '100%', borderRadius: '10px', paddingY: '10px' }}>
                                    <option>Supplier Invoice</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'></Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <select name="company state" style={{ border: 'none', textDecoration: 'none', width: '100%', borderRadius: '10px', paddingY: '10px' }}>
                                    <option>Invoice for GST Rembursm..</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={5}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>Select Source:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <select name="company state" style={{ border: 'none', textDecoration: 'none', width: '100%', borderRadius: '10px', paddingY: '10px' }}>
                                    <option>Agency</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>Select Agency</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <select name="select agency" style={{ border: 'none', textDecoration: 'none', width: '100%', borderRadius: '10px', paddingY: '10px' }}>
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>Account Code</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <select name="account code" style={{ border: 'none', textDecoration: 'none', width: '100%', borderRadius: '10px', paddingY: '10px' }}>
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'></Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <select name="cash a/c" style={{ border: 'none', textDecoration: 'none', width: '100%', borderRadius: '10px', paddingY: '10px' }}>
                                    <option>Cash A/C</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'></Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <input type='text' name='company address' className='gst_input' ></input>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={6}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>GST Flag:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <select name="gst flag" style={{ border: 'none', textDecoration: 'none', width: '100%', borderRadius: '10px', paddingY: '10px' }}>
                                    <option>GST Paid</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>State Name:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <select name="state name" style={{ border: 'none', textDecoration: 'none', width: '100%', borderRadius: '10px', paddingY: '10px' }}>
                                    <option>State Name</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>State Name:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <input type='text' name='state name' className='gst_input' ></input>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>State Code:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <select name="state code" style={{ border: 'none', textDecoration: 'none', width: '100%', borderRadius: '10px', paddingY: '10px' }}>
                                    <option>State Code</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>GSTIN:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <input type='text' name='gstin' className='gst_input' ></input>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>Invoice Date:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <input type='date' name='invoice date' className='gst_input' ></input>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left'>Submitted On:</Typography>
                            <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                                <input type='text' name='submission on' className='gst_input' ></input>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#252525' }} textAlign='left' my={2}>Details of Goods/Service:</Typography>





            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>

                    <Box my={2}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#252525' }} textAlign='left' my={2}>Remarks:</Typography>
                        <Box sx={{ width: '50%', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: 'auto' }}>
                            <textarea type='text' name='state name' className='gst_input' />
                        </Box>
                    </Box>
                    <Box my={2}>
                        <input type='file' name='state name' />
                    </Box>
                    <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color: '#252525' }}>Upload Supporting Docs(.pdf,.png,.jpg,.jpeg,.bmp)</Typography>

                </Grid>
                <Grid item xs={6}>
                    <Box display='flex' justifyContent='space-between' my={2}>
                        <Box>
                            <Typography></Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left' mx={2}>Taxable Value:</Typography>
                            <Box sx={{ width: '150px', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: '40px' }}>
                                <input type='text' name='taxable value:' className='gst_input' ></input>
                            </Box>
                            <Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='space-between' my={2}>
                        <Box>
                            <Typography>Add</Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left' mx={2}>(CCST Rate: %) CGST Amount:</Typography>
                            <Box sx={{ width: '150px', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: '40px' }}>
                                <input type='text' name='taxable value:' className='gst_input' ></input>
                            </Box>
                            <Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='space-between' my={2}>
                        <Box>
                            <Typography>Add</Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left' mx={2}>(SGST/UTGST Rate: %) SGST/UTGST Amount:</Typography>
                            <Box sx={{ width: '150px', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: '40px' }}>
                                <input type='text' name='taxable value:' className='gst_input' ></input>
                            </Box>
                            <Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='space-between' my={2}>
                        <Box>
                            <Typography>Add</Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left' mx={2}>(IGST Rate: %) IGST Amount:</Typography>
                            <Box sx={{ width: '150px', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: '40px' }}>
                                <input type='text' name='taxable value:' className='gst_input' ></input>
                            </Box>
                            <Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='space-between' my={2}>
                        <Box>
                            <Typography>Add</Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left' mx={2}>(CESS Rate: %) CESS Amount:</Typography>
                            <Box sx={{ width: '150px', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: '40px' }}>
                                <input type='text' name='taxable value:' className='gst_input' ></input>
                            </Box>
                            <Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='space-between' my={2}>
                        <Box>
                            <Typography>Less</Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left' mx={2}>TDS Amount:</Typography>
                            <Box sx={{ width: '150px', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: '40px' }}>
                                <input type='text' name='taxable value:' className='gst_input' ></input>
                            </Box>
                            <Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='space-between' my={2}>
                        <Box>
                            <Typography></Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left' mx={2}>Total Value Amount:</Typography>
                            <Box sx={{ width: '150px', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: '40px' }}>
                                <input type='text' name='taxable value:' className='gst_input' ></input>
                            </Box>
                            <Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='space-between' my={2}>
                        <Box>
                            <Typography></Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left' mx={2}>Invoice Value:</Typography>
                            <Box sx={{ width: '150px', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', height: '40px' }}>
                                <input type='text' name='taxable value:' className='gst_input' ></input>
                            </Box>
                            <Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='space-between' my={2}>
                        <Box>
                            <Typography></Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }} textAlign='Left' mx={2}>Total Invoice Value(in words):point Zero Zero</Typography>
                            
                            <Box>

                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box display='flex' alignItems='center'>
                <FormControlLabel control={<Checkbox defaultChecked />} />
                <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#252525' }}>I hereby declare that the above written particulars are true and correct to the best of my knowledge and belief.</Typography>
            </Box>
            <Box textAlign='center' display='flex' justifyContent='center' my={3}>
                <Stack spacing={2} direction="row" textAlign='center'>
                    <Button variant='contained' type='submit'>Reset</Button>
                    <Button variant='contained' type='submit'>Submit</Button>
                </Stack>
            </Box>
        </div>
    )
}

export default GSTform;
