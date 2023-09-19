import Divider from "@mui/material/Divider";
import { Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import Flightaccordian from "./Flightaccordian";

const Flightbookingdetail = (props) => {
  const { ticket } = props;
  const ticket1 = {
    PNR: "JWSFIB",
    BookingId: 1839811,
    SSRDenied: false,
    SSRMessage: null,
    Status: 1,
    IsPriceChanged: false,
    IsTimeChanged: false,
    FlightItinerary: {
      CommentDetails: null,
      JourneyType: 1,
      TripIndicator: 1,
      BookingAllowedForRoamer: true,
      BookingId: 1839811,
      IsCouponAppilcable: true,
      IsManual: false,
      PNR: "JWSFIB",
      IsDomestic: true,
      ResultFareType: "RegularFare",
      Source: 4,
      Origin: "DEL",
      Destination: "AMD",
      AirlineCode: "UK",
      LastTicketDate: "2023-09-07T00:00:00",
      ValidatingAirlineCode: "UK",
      AirlineRemark: "test uk remarks",
      IsLCC: false,
      NonRefundable: true,
      FareType: "RP",
      CreditNoteNo: null,
      Fare: {
        Currency: "INR",
        BaseFare: 2377,
        Tax: 687,
        TaxBreakup: [
          {
            key: "K3",
            value: 128,
          },
          {
            key: "YR",
            value: 170,
          },
          {
            key: "INTax",
            value: 62,
          },
          {
            key: "OtherTaxes",
            value: 327,
          },
          {
            key: "TotalTax",
            value: 687,
          },
        ],
        YQTax: 0,
        AdditionalTxnFeeOfrd: 0,
        AdditionalTxnFeePub: 0,
        PGCharge: 0,
        OtherCharges: 0,
        ChargeBU: [
          {
            key: "TBOMARKUP",
            value: 0,
          },
          {
            key: "GLOBALPROCUREMENTCHARGE",
            value: 0,
          },
          {
            key: "OTHERCHARGE",
            value: 0,
          },
          {
            key: "CONVENIENCECHARGE",
            value: 0,
          },
        ],
        Discount: 0,
        PublishedFare: 3064,
        CommissionEarned: 40.41,
        PLBEarned: 72.87,
        IncentiveEarned: 114.96,
        OfferedFare: 2835.76,
        TdsOnCommission: 16.16,
        TdsOnPLB: 29.15,
        TdsOnIncentive: 45.98,
        ServiceFee: 0,
        TotalBaggageCharges: 0,
        TotalMealCharges: 0,
        TotalSeatCharges: 0,
        TotalSpecialServiceCharges: 0,
      },
      CreditNoteCreatedOn: null,
      Passenger: [
        {
          BarcodeDetails: null,
          DocumentDetails: null,
          GuardianDetails: null,
          PaxId: 3037639,
          Title: "Mr",
          FirstName: "kamal",
          LastName: "singh",
          PaxType: 1,
          DateOfBirth: "1996-12-10T00:00:00",
          Gender: 2,
          IsPANRequired: false,
          IsPassportRequired: false,
          PAN: "",
          PassportNo: "",
          AddressLine1: "rajapuri,uttamnagar,delhi,110059",
          Fare: {
            Currency: "INR",
            BaseFare: 2377,
            Tax: 687,
            TaxBreakup: [
              {
                key: "K3",
                value: 128,
              },
              {
                key: "YR",
                value: 170,
              },
              {
                key: "INTax",
                value: 62,
              },
              {
                key: "OtherTaxes",
                value: 327,
              },
              {
                key: "TotalTax",
                value: 687,
              },
            ],
            YQTax: 0,
            AdditionalTxnFeeOfrd: 0,
            AdditionalTxnFeePub: 0,
            PGCharge: 0,
            OtherCharges: 0,
            ChargeBU: [
              {
                key: "TBOMARKUP",
                value: 0,
              },
              {
                key: "GLOBALPROCUREMENTCHARGE",
                value: 0,
              },
              {
                key: "OTHERCHARGE",
                value: 0,
              },
              {
                key: "CONVENIENCECHARGE",
                value: 0,
              },
            ],
            Discount: 0,
            PublishedFare: 3064,
            CommissionEarned: 40.41,
            PLBEarned: 72.87,
            IncentiveEarned: 114.96,
            OfferedFare: 2835.76,
            TdsOnCommission: 16.16,
            TdsOnPLB: 29.15,
            TdsOnIncentive: 45.98,
            ServiceFee: 0,
            TotalBaggageCharges: 0,
            TotalMealCharges: 0,
            TotalSeatCharges: 0,
            TotalSpecialServiceCharges: 0,
          },
          City: "delhi",
          CountryCode: "IN",
          Nationality: "India",
          ContactNo: "+91- 08006105318",
          Email: "kamal000rawat@gmail.com",
          IsLeadPax: true,
          FFAirlineCode: null,
          FFNumber: "",
          Ssr: [],
          GSTCompanyAddress: "",
          GSTCompanyContactNumber: "",
          GSTCompanyEmail: "",
          GSTCompanyName: "",
          GSTNumber: "",
        },
      ],
      CancellationCharges: null,
      Segments: [
        {
          Baggage: "15 KG",
          CabinBaggage: null,
          CabinClass: 2,
          SupplierFareClass: null,
          TripIndicator: 1,
          SegmentIndicator: 1,
          Airline: {
            AirlineCode: "UK",
            AirlineName: "Air Vistara",
            FlightNumber: "979",
            FareClass: "V",
            OperatingCarrier: "UK",
          },
          AirlinePNR: "JWSFIB",
          Origin: {
            Airport: {
              AirportCode: "DEL",
              AirportName: "Indira Gandhi Airport",
              Terminal: "3",
              CityCode: "DEL",
              CityName: "Delhi",
              CountryCode: "IN",
              CountryName: "India",
            },
            DepTime: "2023-09-09T13:20:00",
          },
          Destination: {
            Airport: {
              AirportCode: "AMD",
              AirportName: "Ahmedabad",
              Terminal: "1",
              CityCode: "AMD",
              CityName: "Ahmedabad",
              CountryCode: "IN",
              CountryName: "India",
            },
            ArrTime: "2023-09-09T15:00:00",
          },
          AccumulatedDuration: 100,
          Duration: 100,
          GroundTime: 0,
          Mile: 0,
          StopOver: false,
          FlightInfoIndex: "",
          StopPoint: "",
          StopPointArrivalTime: "0001-01-01T00:00:00",
          StopPointDepartureTime: "0001-01-01T00:00:00",
          Craft: "320",
          Remark: null,
          IsETicketEligible: true,
          FlightStatus: "Confirmed",
          Status: "HK",
          FareClassification: null,
        },
      ],
      FareRules: [
        {
          Origin: "DEL",
          Destination: "AMD",
          Airline: "UK",
          FareBasisCode: "V0GRPRYS",
          FareRuleDetail:
            "<b>These Are Non Refundable Fares.</b></br><ul><li><b>There is no Minimum Stay requirement</b><br><li><b>There is no Maximum Stay requirement</b><br><fieldset><legend><b><b>Adult</b><br></b></legend><ul><li><b>Revalidation/Reissue</b><br>Fare Component <b>V0GRPRYS</b>&emsp; Sector <b>DEL-AMD</b> &nbsp;<ul><li>Revalidation before/after departure, including failure to show at first/subsequent flight(s) : <b>Not Allowed</b></li><li>Reissue, including failure to show at first flight : <b>Allowed with Restrictions</b></li><li>Revalidation/Reissue request, including failure to show at first flight, must be made prior to <b>07SEP24  0000</b></li><li><b>Prior to Departure of journey</b><ul><u>Reissue</u><li>Penalty fee between : <b>2500 INR/9000 INR</b></li><li>Maximum reissue penalty fee for entire ticket (per reissue) : <b>9000 INR</b></li></ul></li><li><b>Failure to show at first flight</b><ul><u>Reissue</u><li>Penalty fee : <b>9000 INR(at today exchange rates 9000 INR) </b></li><li>Maximum reissue penalty fee for entire ticket (per reissue) : <b>9000 INR</b></li></ul></li><li><b>After departure of journey</b><ul><li>Revalidation/Reissue request must be made prior to : <b>No restriction</b></li></ul></li><li><b>Failure to show at subsequent flight(s)</b><ul><li>Revalidation/Reissue request must be made prior to : <b>No restriction</b></li></ul></li></ul></li><li><b>Refund</b><br>Fare Component <b>V0GRPRYS</b>&emsp; Sector <b>DEL-AMD</b> &nbsp;<ul><li>Refund before/after departure, including failure to show at first/subsequent flight(s) : <b>Not Allowed</b></li><li><b>Prior to Departure of journey</b><ul><li>Refund request must be made prior to : <b>No restriction</b></li></ul></li><li><b>Failure to show at first flight</b><ul><li>Refund request must be made prior to : <b>No restriction</b></li></ul></li><li><b>After departure of journey</b><ul><li>Refund request must be made prior to : <b>No restriction</b></li></ul></li><li><b>Failure to show at subsequent flight(s)</b><ul><li>Refund request must be made prior to : <b>No restriction</b></li></ul></li></ul></li><br><b>* Revalidation is a modification of the original ticket without any reissue of a new ticket.</b><br><b>* For Reissue, Penalty fees are in addition to any difference in fare.</b><br><b>* For Refund, certain Taxes are non-refundable.</b></ul></fieldset></ul><br/> <br/><b>These Are Non Refundable Fares.</b><br />RateClass : V0GRPRYS<br/>FareClass : V0GRPRYS<br/>marketing Company : UK<br/>Booking Class : V<br/>Origin : DEL<br/>destination : AMD<br/>ruleSectionLocalId : 1<br/>ruleCategoryCode : (5)<br/>AP.ADVANCE RES/TKT  RESERVATIONS FOR EACH SECTOR ARE REQUIRED FOR DEPARTURE OF  EACH TRIP ON THE FARE COMPONENT.  RESERVATIONS AND TICKETING MUST BE COMPLETED AT THE SAME  TIME.  WAITLIST AND STANDBY NOT PERMITTED.         NOTE -          WAITLIST STANDBY AND OPENDATED TICKETS NOT          PERMITTED.<br/>ruleSectionLocalId : 2<br/>ruleCategoryCode : (16)<br/>PE.PENALTIESFOR V0GRPRYS TYPE FARES  CHANGES    CHARGE INR 2500 FOR REISSUE.         NOTE -          ABOVE CHARGES ARE EXCLUSIVE OF GST K3.          APPLICABLE GST RATE TO BE COLLECTED AND SHOWN          SEPARATELY UNDER TAX CODE K3.          CHARGE INR 3000 WITHIN 24 HOURS AND BEFORE 2          HOURS OF DEPARTURE OF FLIGHT.          -----------------------------------------------          THE CHANGE/REISSUE CHARGE IS NON - REFUNDABLE          --------------------------------------------------          FOR ALL CHANGES 24 HOURS BEFORE DEPARTURE OF A          FLIGHT A CHARGE OF 2500 INR MUST BE COLLECTED FOR          CHANGE OF RESERVATION. THIS APPLIES PER          SECTOR/ROUTE FOR DATE/FLIGHT CHANGE.          --------------------------------------------------          IN CASE OF CHANGE TO HIGHER RBD FOR TRAVEL ON THE          SAME DAY/SAME FLIGHT/RE-ISSUANCE FEE WILL NOT BE          APPLICABLE.ONLY DIFFERENCE IN TOTAL FARE IS TO BE          COLLECTED.          --------------------------------------------------          CHARGE APPLIES TO ADULT AND CHILD.          INFANT NOT OCCUPYING A SEAT IS EXEMPTED.          --------------------------------------------------          WHEN FARES ARE COMBINED THE MOST RESTRICTIVE          CONDITIONS APPLY FOR THE ENTIRE JOURNEY.  CANCELLATIONS    CHARGE INR 3000 FOR CANCEL/REFUND.         NOTE -          ABOVE CHARGES ARE EXCLUSIVE OF GST K3 AND APPLIES          PER FARE COMPONENT.          APPLICABLE GST RATE TO BE COLLECTED AND          ADDED TO THE PENALTY AMOUNT.          CHARGE INR 3500 WITHIN 24 HOURS AND BEFORE 2          HOURS OF DEPARTURE OF FLIGHT.          --------------------------------------------------          CANCELLATION / NO-SHOW FEE APPLICABLE ON REFUNDS          IS SUBJECT TO THE BELOW APPLICABLE CONDITION -S-          BEING SATISFIED.          A. BASE FARE OR CANCELLATION/REFUND FEES          WHICHEVER IS LOWER WILL BE DEDUCTED WHEN          PROCESSING REFUND.          B. ALL UNUTILIZED TAXES INCLUDING YR SHALL BE          REFUNDED. SERVICE TAX -K3- GOODS AND SERVICE TAX          SHALL BE REFUNDED AS RECALCULATED ON THE          REFUNDABLE BALANCE.          --------------------------------------------------          CHARGE APPLIES TO ADULT AND CHILD.          INFANT NOT OCCUPYING A SEAT IS EXEMPTED.          --------------------------------------------------          WHEN FARES ARE COMBINED THE MOST RESTRICTIVE          CONDITIONS APPLY FOR THE ENTIRE JOURNEY.          --------------------------------------------------          CANCELLATION/REFUND FEE OF PARTLY USED TICKET          DEDUCT ONEWAY FARE AND LEVIES FOR THE TRAVELLED          SECTOR PLUS CANCELLATION/REFUND FEE          --------------------------------------------------          FARES WHEN COMBINED ON A HALF ROUND TRIP BASIS          SHALL BE GOVERNED  BY THE CORRESPONDING          APPLICABLE TICKETED FARE PER SECTOR AND ITS          APPLICABLE TERMS AND CONDITIONS          --------------------------------------------------          OUT OF SEQUENCE TRAVEL NOT PERMITTED          THERE WILL BE NO REFUND FOR OUT OF SEQUENCE COUPON          EXCEPT THE STATUTARY TAXES.          --------------------------------------------------    CHARGE INR 6000 FOR NO-SHOW.         NOTE -          ABOVE CHARGES ARE EXCLUSIVE OF GST K3 AND APPLIES          PER FARE COMPONENT.          APPLICABLE GST RATE TO BE COLLECTED AND          ADDED TO THE PENALTY AMOUNT.          --------------------------------------------------          NO SHOW IS WHEN A PAX FAILS TO CHANGE/CANCEL          BOOKING ATLEAST 02 HOURS BEFORE DEPARTURE OF THE          FLIGHT BEING CHANGED/CANCELLED.          IF A NO SHOW TICKET IS PROCESSED FOR ANY          CHANGES/CANCELLATION/REFUND THEN THE PENALTIES          APPLICABLE FOR CHANGE/CANCELLATION/REFUND SHALL          BE APPLICABLE IN ADDITION TO THE NO SHOW PENALTY.          -------------------------------------------------          CANCELLING THE RESERVATION WITH NO ACTION ON THE          TICKET WILL LEAD TO NO-SHOW PENALTY FEES.          --------------------------------------------------          CHARGE APPLIES TO ADULT AND CHILD.          INFANT NOT OCCUPYING A SEAT IS EXEMPTED.          --------------------------------------------------          WHEN FARES ARE COMBINED THE MOST RESTRICTIVE          CONDITIONS APPLY FOR THE ENTIRE JOURNEY.          --------------------------------------------------          VOID IS NOT ALLOWED WHERE THE FLIGHT DEPARTURE OF          THE FIRST LEG IS LESS THAN 7 DAYS FROM THE DATE          OF FRESH ISSUE SALE.          --------------------------------------------------          RESERVATIONS BOOKED MORE THAN 7 DAYS PRIOR TO          COMMENCEMENT OF TRAVEL MAY BE REFUND OR REISSUED          WITHIN 24 HOURS OF BOOKING OF TICKET WITHOUT          PENALTY.RESERVATIONS BOOKED WITHIN 7 DAYS OF          COMMENCEMENT OF TRAVEL ARE SUBJECT TO THE          APPLICABLE CANCELLATION PENALTY.          FOR EXAMPLE A PASSENGER BOOKED A TICKET ON DEL-          BOM SECTOR ON 12/02/20 AT 1000 AM AND HIS DATE OF          DEPARTURE IS 20/02/2020 FROM DEL. NOW PASSENGER          CAN AMEND THE TICKET TILL 13/02/2020 UP TO 0959          AM. A PASSENGER BOOKED A TICKET ON DEL BOM SECTOR          12/02/2020 AND HIS DATE OF TRVEL IS WITHIN 7 DAYS          16/02/2020 FROM DEL THEN PENALTY FEE WILL BE          APPLICABLE AS PER THE RULES.          NOTE - THE MENTIONED ABOVE LOOK IN OPTION CAN NOT          BE PROCESSED THROUGH AUTOMATED CHANGES AND          CANCELLATION CAT31/CAT33 HENCE KINLDY PROCESS          MANUALLY.<br/><ul><li>APART FROM AIRLINE CHARGES,GST+RAF+ APPLICABLE CHARGES IF ANY, WILL BE CHARGED.</li><li>MENTIONED FEE ARE PER PAX AND PER SECTOR.</li><li>FOR DOMESTIC BOOKINGS, PASSENGERS ARE REQUIRED TO SUBMIT THE CANCELLATION OR REISSUE REQUEST TO TBO AT LEAST 2 HOURS BEFORE THE AIRLINES CANCELLATION AND REISSUE POLICY.</li><li>FOR INTERNATIONAL BOOKINGS, PASSENGERS ARE REQUIRED TO SUBMIT THE CANCELLATION OR REISSUE REQUEST TO TBO AT LEAST 4 HOURS BEFORE THE AIRLINES CANCELLATION AND REISSUE POLICY.</li></ul>",
          FareRestriction: "Y",
          FareFamilyCode: "ECOYS",
          FareRuleIndex: "",
        },
      ],
      MiniFareRules: [
        {
          JourneyPoints: "DEL-AMD",
          Type: "Reissue",
          From: null,
          To: null,
          Unit: null,
          Details: "INR 2500",
        },
        {
          JourneyPoints: "DEL-AMD",
          Type: "Cancellation",
          From: null,
          To: null,
          Unit: null,
          Details: "REFER TO DETAILED FARE RULES",
        },
      ],
      PenaltyCharges: {
        ReissueCharge: "INR 2500",
      },
      Status: 1,
      IsWebCheckInAllowed: false,
    },
  };
  function createMarkup(data) {
    return { __html: data };
  }
  const dateFormat = (d) => {
    let input_date = d;
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let date_obj = new Date(input_date);
    let day = date_obj.getDate();
    let month = monthNames[date_obj.getMonth()];
    let year = date_obj.getFullYear();
    let hours = date_obj.getHours();
    let minutes = date_obj.getMinutes();
    console.log(day, month, year, date_obj, `${hours} ${minutes}`);
    return { date: `${month} ${day}, ${year}`, time: `${hours}:${minutes}` };
  };
  return (
    <Box>
      <Box className="mid_header" px={5} py={2} my={2}>
        <Box textAlign="left" display="flex" justifyContent="space-between">
          <Typography color="#252525" fontSize="18px" fontWeight="bold">
            The Sky Trails Pvt. Ltd.
          </Typography>
          <Typography color="#0052D0" fontWeight="bold" fontSize="18px">
            PNR: {ticket?.PNR}
          </Typography>
        </Box>
        <Box
          textAlign="left"
          display="flex"
          justifyContent="space-between"
          mt={1}
        >
          <Typography color="#252525" fontSize="14px" fontWeight="bold">
            {ticket?.FlightItinerary?.Origin} -{" "}
            {ticket?.FlightItinerary?.Destination}
          </Typography>
          <Typography color="#252525" fontWeight="bold" fontSize="14px">
            Ticket Confirmed
          </Typography>
        </Box>
        <Box textAlign="left" display="flex" justifyContent="space-between">
          <Typography color="#252525" fontSize="14px" fontWeight="bold">
            Phone No. {ticket?.FlightItinerary?.Passenger[0]?.ContactNo}
          </Typography>
          <Typography color="#252525" fontWeight="bold" fontSize="14px">
            Book on: {dateFormat(ticket?.FlightItinerary?.LastTicketDate).date}
          </Typography>
        </Box>
        <Box textAlign="left" display="flex" justifyContent="space-between">
          <Typography color="#252525" fontSize="14px" fontWeight="bold">
            Phone No. {ticket?.FlightItinerary?.Passenger[0]?.ContactNo}
          </Typography>
          <Typography
            color="#252525"
            className="text-end"
            fontWeight="bold"
            fontSize="14px"
          >
            Travel Date:{" "}
            {
              dateFormat(ticket?.FlightItinerary?.Segments[0]?.Origin?.DepTime)
                ?.date
            }
            <br />
            Travel Time:{" "}
            {
              dateFormat(ticket?.FlightItinerary?.Segments[0]?.Origin?.DepTime)
                ?.time
            }{" "}
            hrs
          </Typography>
        </Box>
      </Box>
      <Box className="mid_header" px={5} py={2} my={2}>
        <Typography color="#252525" fontWeight="bold" fontSize="16px" mb={2}>
          Flight Information
        </Typography>
        {ticket?.FlightItinerary?.Segments?.map((flight, key) => (
          <Grid key={key} container spacing={3}>
            <Grid item md={2}>
              <Box className="mid_header" p={1}>
                <Typography
                  sx={{
                    color: "#252525",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Flight No.
                </Typography>
                <Divider color="gray" mar />
                <Typography
                  sx={{
                    color: "#3D7AD9",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  pt={1}
                >
                  {flight?.Airline?.AirlineCode}-{flight?.Airline?.FlightNumber}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className="mid_header" p={1}>
                <Typography
                  sx={{
                    color: "#252525",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Origin
                </Typography>
                <Divider color="gray" mar />
                <Typography
                  sx={{
                    color: "#3D7AD9",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  pt={1}
                >
                  {flight?.Origin?.Airport?.AirportCode}
                  {/* <br />
                  {flight.Origin.Airport.AirportName} */}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className="mid_header" p={1}>
                <Typography
                  sx={{
                    color: "#252525",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Destination
                </Typography>
                <Divider color="gray" mar />
                <Typography
                  sx={{
                    color: "#3D7AD9",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  pt={1}
                >
                  {flight?.Destination?.Airport?.AirportCode}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className="mid_header" p={1}>
                <Typography
                  sx={{
                    color: "#252525",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Dep Date Time
                </Typography>
                <Divider color="gray" mar />
                <Typography
                  sx={{
                    color: "#3D7AD9",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  pt={1}
                >
                  {dateFormat(flight?.Origin?.DepTime)?.date}
                  <br />
                  {dateFormat(flight?.Origin?.DepTime)?.time} hrs
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className="mid_header" p={1}>
                <Typography
                  sx={{
                    color: "#252525",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Arr Date Time
                </Typography>
                <Divider color="gray" mar />
                <Typography
                  sx={{
                    color: "#3D7AD9",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  pt={1}
                >
                  {dateFormat(flight?.Destination?.ArrTime)?.date}
                  <br />
                  {dateFormat(flight?.Destination?.ArrTime)?.time} hrs
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className="mid_header" p={1}>
                <Typography
                  sx={{
                    color: "#252525",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Class
                </Typography>
                <Divider color="gray" mar />
                <Typography
                  sx={{
                    color: "#3D7AD9",
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  pt={1}
                >
                  {flight?.Airline?.FareClass}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
      {ticket?.FlightItinerary?.Passenger.map((passenger, key) => (
        <Box className="mid_header" key={key} px={5} py={2} my={2}>
          <Box>
            <Typography
              color="#6B6B6B"
              fontWeight="bold"
              fontSize="16px"
              mb={2}
            >
              Passenger {key + 1} (
              {passenger?.PaxType === 1
                ? "Adult"
                : passenger?.PaxType === 2
                ? "Child"
                : "Infant"}
              )
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item md={3}>
              <Typography color="#3D7AD9" fontWeight="bold" fontSize="16px">
                Name:
              </Typography>
              <Typography color="#3D7AD9" fontWeight="bold" fontSize="16px">
                Gender:
              </Typography>
              {passenger.AddressLine1 && (
                <Typography color="#3D7AD9" fontWeight="bold" fontSize="16px">
                  Address:
                </Typography>
              )}
              <Typography color="#3D7AD9" fontWeight="bold" fontSize="16px">
                Seat Preferences:
              </Typography>
            </Grid>
            <Grid item md={9}>
              <Typography color="#FF8900" fontWeight="bold" fontSize="16px">
                {passenger.Title} {passenger.FirstName} {passenger.LastName}
              </Typography>
              <Typography color="#FF8900" fontWeight="bold" fontSize="16px">
                {passenger.Gender == 1
                  ? "Female"
                  : passenger.Gender == 2
                  ? "Male"
                  : "Transgender"}
              </Typography>
              {passenger.AddressLine1 && (
                <Typography color="#FF8900" fontWeight="bold" fontSize="16px">
                  {passenger.AddressLine1}, {passenger.City},{" "}
                  {passenger.Nationality}
                </Typography>
              )}
              <Typography color="#FF8900" fontWeight="bold" fontSize="16px">
                8D
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
      <Box className="Top_header" p={5}>
        {ticket.FlightItinerary.FareRules.map((rule) => (
          <Box>
            <Typography
              color="#008FCC"
              fontSize="30px"
              fontWeight="bold"
              textAlign="center"
            >
              Fare Rule
            </Typography>
            <Typography
              color="#707070"
              fontSize="20px"
              fontWeight="bold"
              textAlign="center"
            >
              {rule.Origin} - {rule.Destination}
            </Typography>
            <div
              className="fs-6 mt-3"
              dangerouslySetInnerHTML={createMarkup(rule.FareRuleDetail)}
            />
          </Box>
        ))}
      </Box>
      <Box mt={2}>
        <Flightaccordian />
      </Box>
      <Box textAlign="center">
        <form action="" className="formFlightSearch" textAlign="center">
          <Box width="171px" margin="auto">
            <Button
              my={1}
              colorScheme="teal"
              className="btn_booknow"
              variant="contained"
              type="submit"
            >
              {" "}
              View invoice{" "}
            </Button>
          </Box>
        </form>
        <Typography color="#005778" fontWeight="bold" fontSize="18px" mt={5}>
          Copyright © 2022 THE SKY TRAILS All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Flightbookingdetail;
