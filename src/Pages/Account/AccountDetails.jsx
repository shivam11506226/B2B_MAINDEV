import React from 'react';
import Stack from '@mui/material/Stack';
import { Button, Box, Typography, Input } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";




const label = { inputProps: { "aria-label": "Checkbox demo" } };
const AccountDetails = () => {
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
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px' }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'left', }}>
                                        <Box display="flex" alignItems="center">
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon style={{ color: '#FF8900' }} />}
                                            />
                                            <Box display="flex" justifyContent="space-between">
                                                <Typography color="#FF8900" fontSize="14px" fontWeight="bold">
                                                    Show Fare
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={8}>
                                    <Box display="flex" alignItems="center">
                                        <Checkbox
                                            {...label}
                                            icon={<RadioButtonUncheckedIcon />}
                                            checkedIcon={<RadioButtonCheckedIcon style={{ color: '#FF8900' }} />}
                                        />
                                        <Box display="flex" justifyContent="space-between">
                                            <Typography color="#FF8900" fontSize="14px" fontWeight="bold">
                                                Hide Fare
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <FormGroup>
                                <Box display='flex' alignItems='center'>
                                    <FormControlLabel control={<Checkbox defaultChecked />} /><Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }}>Show Agent Logo On Hotel Voucher</Typography>
                                </Box>
                                <Box display='flex' alignItems='center'>
                                    <FormControlLabel control={<Checkbox />} /><Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }}>Display Logo on E-Ticket</Typography>
                                </Box>
                                <Box display='flex' alignItems='center'>
                                    <FormControlLabel control={<Checkbox />} /><Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }}>Show Hotel Ad on E-Ticket</Typography>
                                </Box>
                            </FormGroup>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }}>Select if you want to display fare in form in e-ticket</Typography>
                        </Box>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px' }} my={2}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#006FFF' }} mb={2}>Service Charge</Typography>
                            <Box display='flex'>
                                <Box sx={{ textAlign: 'left', }}>
                                    <Box display="flex" alignItems="center">
                                        <Checkbox
                                            {...label}
                                            icon={<RadioButtonUncheckedIcon />}
                                            checkedIcon={<RadioButtonCheckedIcon style={{ color: '#FF8900' }} />}
                                        />
                                        <Box display="flex" justifyContent="space-between">
                                            <Typography color="#FF8900" fontSize="14px" fontWeight="bold">
                                                Show All Fares
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ textAlign: 'left', }}>
                                    <Box display="flex" alignItems="center">
                                        <Checkbox
                                            {...label}
                                            icon={<RadioButtonUncheckedIcon />}
                                            checkedIcon={<RadioButtonCheckedIcon style={{ color: '#FF8900' }} />}
                                        />
                                        <Box display="flex" justifyContent="space-between">
                                            <Typography color="#FF8900" fontSize="14px" fontWeight="bold">
                                                Show All Fares
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display='flex' alignItems='center'>
                                <FormControlLabel control={<Checkbox defaultChecked />} /><Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }}>Show Agent Logo On Hotel Voucher</Typography>
                            </Box>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'left', }}>
                                        <Typography sx={{ fontSize: '14px', color: '#006FFF', fontWeight: '600' }}>Airline</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={3}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>Air Arabia</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={3}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>Air Asia</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={3}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>Air Asia Corporate</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={3}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>Air Asia Coupon</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={3}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>GoAir API5</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={3}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>Air India</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={3}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>Indigo Marine</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={3}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>Air Arabia</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={3}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>Spice Jet API1</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={2}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>TruJet</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={2}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>AllianceAir</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={2}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>VietJet</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }} mt={3}>
                                        <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '600' }}>Private Fare</Typography>
                                    </Box>
                                    
                                </Grid>
                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#006FFF', fontWeight: '600' }}>Airline</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', }} my={1}>
                                        <Box className="input_area" >
                                            <FormControl>
                                                <NativeSelect
                                                    defaultValue={0}
                                                    inputProps={{
                                                        name: "price",
                                                    }}
                                                >
                                                    <option value={10}>Fixed</option>
                                                    <option value={20}>Fixed</option>
                                                    <option value={30}>Fixed</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Typography sx={{ fontSize: '14px', color: '#006FFF', fontWeight: '600' }}>Value</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right', }} my={1}>
                                        <Box className="input_area" >
                                            <Input type='text' placeholder='0' />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            
                        <Typography sx={{ fontSize: '12px', color: '#252525', fontWeight: '600' }}>The values that has to be set as service fee</Typography>
                        </Box>


                    </Grid>
                    <Grid item xs={2} sm={4} md={6}>
                        <Box sx={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', padding: '15px' }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={2} sm={4} md={4}>
                                    <Box sx={{ textAlign: 'left', }}>
                                        <Box display="flex" alignItems="center">
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon style={{ color: '#FF8900' }} />}
                                            />
                                            <Box display="flex" justifyContent="space-between">
                                                <Typography color="#FF8900" fontSize="14px" fontWeight="bold">
                                                    Show All Fares
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', }}>
                                        <Box display="flex" alignItems="center">
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon style={{ color: '#FF8900' }} />}
                                            />
                                            <Box display="flex" justifyContent="space-between">
                                                <Typography color="#FF8900" fontSize="14px" fontWeight="bold">
                                                    Show Only Published Fares
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={8}>
                                    <Box display="flex" alignItems="center">
                                        <Checkbox
                                            {...label}
                                            icon={<RadioButtonUncheckedIcon />}
                                            checkedIcon={<RadioButtonCheckedIcon style={{ color: '#FF8900' }} />}
                                        />
                                        <Box display="flex" justifyContent="space-between">
                                            <Typography color="#FF8900" fontSize="14px" fontWeight="bold">
                                                Hide All Fare
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <Checkbox
                                            {...label}
                                            icon={<RadioButtonUncheckedIcon />}
                                            checkedIcon={<RadioButtonCheckedIcon style={{ color: '#FF8900' }} />}
                                        />
                                        <Box display="flex" justifyContent="space-between">
                                            <Typography color="#FF8900" fontSize="14px" fontWeight="bold">
                                                Show Offer Fares
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <FormGroup>
                                <Box display='flex' alignItems='center'>
                                    <FormControlLabel control={<Checkbox defaultChecked />} /><Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }}>Hide Transaction fee for Non Lcc</Typography>
                                </Box>
                                <Box display='flex' alignItems='center'>
                                    <FormControlLabel control={<Checkbox />} /><Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }}>Hide Coupon Fares</Typography>
                                </Box>
                                <Box display='flex' alignItems='center'>
                                    <FormControlLabel control={<Checkbox />} /><Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }}>Required Origin/Destination List For Domestic Search</Typography>
                                </Box>
                            </FormGroup>
                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666666' }}>Select if you want fare (Offered and Published) during search results</Typography>
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

export default AccountDetails
