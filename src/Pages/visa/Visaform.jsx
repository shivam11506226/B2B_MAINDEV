import React, { useState } from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createVisaAction } from "../../Redux/visaRequest/actionVisaRequest"

const Visaform = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: null,
        destination: "",
        visaType: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleVisaRequest = (event) => {
        event.preventDefault();

        const payload = {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            destination: formData.destination,
            visaType: formData.visaType,
        };
        console.log("formData", formData);
        dispatch(createVisaAction(payload));

        event.target.reset();
    };
    return (
        <div className='flightContainer'>
            <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#252525' }} textAlign='center'>Apply for Visa Online</Typography>
            <form onSubmit={handleVisaRequest}>
                <div className="container" style={{ width: '90%', margin: 'auto' }}>
                    <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {/* For all screen sizes, display one column */}
                        <div className="col-xs-12" style={{ flex: '1', minWidth: '200px' }}>
                            <div className="form_input">
                                <label className="form_lable">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Enter Your Name'
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className="col-xs-12" style={{ flex: '1', minWidth: '200px' }}>
                            <div className="form_input">
                                <label className="form_lable">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Enter Email'
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className="col-xs-12" style={{ flex: '1', minWidth: '200px' }}>
                            <div className="form_input">
                                <label className="form_lable">Mobile Number</label>
                                <input
                                    type="number"
                                    name="mobile"
                                    placeholder='Enter Mobile Number'
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className="col-xs-12" style={{ flex: '1', minWidth: '200px' }}>
                            <div className="form_input">
                                <label className="form_lable">Select Destination</label>
                                <select
                                    name="destination"
                                    className="form_input_select"
                                    value={formData.destination}
                                    onChange={handleChange}
                                >
                                    <option defaultChecked>Select Destination</option>
                                    <option value="India">India</option>
                                    <option value="US">US</option>
                                    <option value="Russia">Russia</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xs-12" style={{ flex: '1', minWidth: '200px' }}>
                            <div className="form_input">
                                <label className="form_lable">Select Visa Type</label>
                                <select
                                    name="visaType"
                                    className="form_input_select"
                                    value={formData.visaType}
                                    onChange={handleChange}
                                >
                                    <option defaultChecked>Select Visa Type</option>
                                    <option value="Tourist Visa">Tourist Visa</option>
                                    <option value="Employment Visa">Employment Visa</option>
                                    <option value="Student Visa">Student Visa</option>
                                    <option value="Business Visa">Business Visa</option>
                                    <option value="Transit Visa">Transit Visa</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-xs-12">
                            <Typography sx={{ fontSize: '13px', color: '#FF8900', fontWeight: 'bold' }} textAlign='left'>Note : All Document Required</Typography>
                            <Box display="flex" justifyContent="center">
                                <Button
                                    variant="contained"
                                    my={4}
                                    colorScheme="teal"
                                    type="submit"
                                    m
                                    sx={{ backgroundColor: "#00BDC4", borderRadius: "20px" }}
                                >
                                    Apply now →
                                </Button>
                            </Box>
                        </div>
                    </div>
                </div>
            </form>

            <Box sx={{ flexGrow: 1 }} mb={5}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={5}>
                        <Typography sx={{ fontSize: '16px', color: 'black', fontWeight: 'bold' }} textAlign='left'>Popular Visa Destinations</Typography>
                        <Box sx={{ backgroundColor: '#d2cece29', padding: '20px', borderRadius: '5px' }} my={3}>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Dubai Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>UK Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>USA Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Singapore Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Qatar Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Thailand Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Sri Lanka Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Turkey Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Malaysia Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Hong Kong Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Vietnam Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Denmark Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>New Zealand Visa</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '16px', color: 'black', fontWeight: 'bold' }} textAlign='left'>Popular Visa Types</Typography>
                        <Box sx={{ backgroundColor: '#d2cece29', padding: '20px', borderRadius: '5px' }}>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>96 Hours Dubai Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>14 Days Dubai Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>30 Days Dubai Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Thailand Business Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Thailand Tourist Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Sri Lanka Business Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Sri Lanka Tourist Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Turkey Business Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Turkey Tourist Visa</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Visa At Your Doorstep</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Uk Visa At Your Doorstep</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography sx={{ fontSize: '16px', color: 'black', fontWeight: 'bold' }} textAlign='left'>Types of Visa</Typography>
                        <Box sx={{ backgroundColor: '#d2cece29', padding: '20px', borderRadius: '5px' }} my={3}>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}>Here's defining the various categories of visa depending on your purpose of visit.</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Single Entry Visa :</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}>A single entry visa is valid for only one visit to the destination country.
                                Whatever the purpose of your visit, you shall be eligible for just one entry through the validity of your visa. For instance your visa
                                validity date has not expired but you have already visited the country once, you shall still not qualify for another trip to the said
                                country.
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Multiple Entry Visa:</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}>This entitles you to multiple visits to the country through your visa's
                                validity tenure. This means you can re-enter the country several times without applying for a fresh visa as long as your within the
                                validity tenure of your visa. Multiple entry visas are largely preferred by businessmen for they can never be certain of the number of
                                visits it might take to close a business deal.
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Tourist Visa :</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}>This kind of visa is allocated to tourists alone when the purpose of your
                                visit is travelling only and not engaging in any form of commerce. When you plan on a holiday to a foreign location solo or with your
                                family, you will be applying for a tourist visa. It is still easier to get such visas. Other than the requisite documents, you need to
                                provide a proof of your hotel stays and return flight tickets aside from showing a certain specified amount in your bank account to
                                ensure to the local authorities that you will be in charge of yourself during your visit to their country.
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Residence Visa : </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}>While a residence visa doesn't give you the permit to take up employment in a given
                                country, it entitles you to stay for an extended period of time in a particular country. A residence permit or a residence visa is given to a
                                foreign national to stay for an extended though definite period of time. In many cases, a person may have family residing in a foreign country
                                and by applying for a residence visa you can stay with them for a prolonged duration, several months on end. Of course, it does not entitle you
                                to seek any sort of employment in the foreign country in the interim.
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Work Visa :</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}> A work permit visa entitles you to take up residence as well as employment for a
                                definite period in a given foreign country. You could either be hired for a specific period of time from 6 months to 1 year, depending on your
                                contract, to perform a job in a foreign country offering you the subsequent right to take up residence in the interim. But in case your stay is
                                prolonged, you need to apply for renewal of your work permit visa. Several Indian companies have tie-ups abroad with their counterparts, and you
                                could be send to accomplish a task to the said foreign country for a specific period of time under a work permit visa.
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Student Visa : </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}> A student visa is issued to students enrolled at qualified educational
                                institutes world wide. These are non-immigrant visa that does not require its holder to acquire citizenship. Any student with the
                                prospect of attaining higher education in a foreign country needs to get a student visa from that country. Though most countries
                                issue student visa to foreign students to let them attend school within their territory, students still need to primarily enroll
                                at a post-secondary institute for higher learning. So, for instance, you need to go to the United States to study, you would
                                require a student visa as well as a non-immigrant visa for temporary stay or an immigrant visa for permanent residence
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Transit Visa :  </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}> For those people who wish to transit through Australia shall not qualify
                                for a transit without a transit visa. You need a transit visa even if you fly out of the same airport in which you arrived and on
                                the same aircraft. You need a transit visa even if you remain in the transit lounge and do not leave the airport. A transit visa
                                in case of Australia allows you a maximum stay of 72 hours. A transit visa is very different from a 3-day visitor visa. A transit
                                visa establishes the principal purpose of visit of the applicant before transiting to another country through theirs. The support
                                documents needed to get a transit visa comprise an income proof, employment proof, evidence of travel outside the said country,
                                among other related documents.
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: '16px', color: 'black', fontWeight: 'bold' }} textAlign='left'>FAQs on Visa Online</Typography>
                        <Box sx={{ backgroundColor: '#d2cece29', padding: '20px', borderRadius: '5px' }} my={3}>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Q. What is a visa and why is it important?</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}> A Visa is an official certificate of endorsement on your passport giving you the permission to enter, stay and leave a particular country, whether permanently or for a specific period of time. A visa is issued to you by the immigration authorities of the country you intend to travel to after verifying your credentials, the accuracy of your submitted visa form and other necessary documents. Many countries such as UK and USA among others grant you visa only after an in-person interview with the immigration officers. Of all kinds of visas, tourist visas are less hassle and always easy to gain. Where no physical interview is required a visa is even sent to you electronically. Although, the visa is a grant to entry, your actual entry into a foreign country is only subject to approval from the immigration officer at the point of entry.
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Q. Do I need a visa for travel?</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}>Yes, you do by all means for every international trip you make. Even if you are a passport holder, the absence of a visa to your destination country may not even qualify you to board a flight, far less get to your destination. You need to have a valid visa to travel to any foreign destination. Though some countries like Thailand, Cambodia, Indonesia among others offer visa-on-arrival. In such a case you will have to carry all the essential documents including proofs of your hotel stay, your return flight tickets and presence of a pre-stated amount in your bank account, only then will you be granted a visa-on-arrival. So, for any international travel, you cannot bypass the visa process.
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Q. Does it cost to have a visa processed?</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}>Yes, there is a visa processing fee charged by the government of the country you are planning to travel to. The sum varies from one country to the next. This processing fee applies to both regular and e-visas. Now, if you plan to get your visa done through an agent, the agent will charge his commission over and above the pre-fixed processing fee that applies in addition to taxes among others.
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Q. How long does it take to process a visa?</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}>Typically an e-visa takes 72 hours for processing, and in case more documents are required on your visa you will be intimated of the same within 48 hours and you need to comply in the next 72 hours. In case you take any longer than that, your visa application will be deemed cancelled. For a visa within Asia, you can expect it processed in 5 working days, but for a US visa you will have to wait for 3 to 5 weeks for your visa application to be processed. After processing, you can expect a positive response to your application and the consulate will deliver the document in two working days. Generally, it takes about 5 working days for you to receive your passport once your visa interview is a success. But for a US visa this could be about 10 days. A UK visa, on the other hand, is normally processed within 15 days. Though you are advised to apply about a month prior to your date of travel. You can always track your e-visa application status online.
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Q. What is a visa on arrival?</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}> Visa on Arrival is an authorisation document provided by the consulate or immigration department of the country you are travelling to only after you have arrived at the destination. This saves you the hassle of going through a lengthy visa application form submission process. In a visa-on-arrival too you need to keep all necessary identification documents handy along with photographs so that the immigration desk can quickly put it together and hand you over your visa-on-arrival. Without the necessary id proofs you shall not be entitled to a visa-on-arrival. Countries that offer the facility of visa-on-arrival to Indian citizens include Thailand, Cambodia, Maldives, Bhutan, Sri Lanka, Indonesia, Myanmar, Laos, Macau in Asia. Serbia in Europe, Bolivia and El Salvador in America, Jordan and Armenia in the Middle East and Kenya, Mauritius, Seychelles and Tanzania in Africa among others.
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Q. How do I get a travel visa? </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}>When filling up your visa application form you need to establish your purpose of visit, whether it is casually for travel or for business or studies. All travel-related visas qualify as tourist visas which is granted to an individual visiting the country with the sole intention of travelling. To enter the United States, you need to first get a visa which could either be a non-immigrant visa for temporary stay or an immigrant one for permanent residence. The tourist visas are always of the former category for those wishing to enter the United States for purposes of tourism alone, the visa category being B-2. An e-tourist visa could have a one-month validity, a one-year validity, five-year validity or for a continuous stay that does not exceed more than 90 days. For USA, UK, Canada and Japan you can stay continuously provided your stay doesnât exceed beyond 180 days.
                            </Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>Q. What is the process of online visa booking with Yatra.com?</Typography>
                            <Typography sx={{ color: '#707070', fontSize: '12px', }}>For any international ticket booked, Yatra will assist you with the visa application process, by helping you fill up the form, apprising you of the support documents, checking the accuracy of the documents before sending it ahead to the consulate of the country you wish to travel to. It will intimate you of the interview date, if there is one involved, and give you an update of the visa processing status until to finally receive the visa.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


        </div>
    )
}

export default Visaform
