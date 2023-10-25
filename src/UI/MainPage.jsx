import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Layout/Footer";
import InnerNavbar from "../Layout/InnerNavbar";
import Active from "../Pages/Activities/Active";
import Banner from "../Pages/Banner/Banner";
import "./MainPage.css";
import Flight from "../Pages/Flight/Flight";
import Hotel from "../Pages/Hotel/Hotel";
import OneWay from "../Pages/Flight/FlightForm/OneWay";
import OffShare from "../Pages/Flight/FlightForm/OffShare";
import MultiStop from "../Pages/Flight/FlightForm/MultiStop";
import Calander from "../Pages/Flight/FlightForm/Calendar";
import Return from "../Pages/Flight/FlightForm/Return";
import Flightresult from "../Pages/Flight/flightresult/Flightresult";
import Registration from "../Pages/registration/Registration";
import Login from "../Pages/login/Login";
import HotelSearch from "../Pages/Hotel/hotelsearch/HotelSearch";
import Booknow from "../Pages/Flight/booknow/Booknow";
import Passengerdetail from "../Pages/Flight/passengerdetail/Passengerdetail";
import FlightReviewbooking from "../Pages/Flight/flightreviewbooking/FlightReviewbooking";
import ReturnPassenger from "../Pages/Flight/flightresult/FlightresultReturn/ReturnPassenger/PassengerReturn";
import Flightbookingconfirmation from "../Pages/Flight/flightbookingconfirmation/Flightbookingconfirmation";
import HolidayPackage from "../Pages/holidayPackage/HolidayPackage";
import HolidayPackageResult from "../Pages/holidayPackage/holidaypackageresult/HolidayPackageResult";
import HolidayForm from "../Pages/holidayPackage/holidayform/HolidayForm";
import Holidaybooknow from "../Pages/holidayPackage/holidaybooknowpage/Holidaybooknow";
import HolidayGuestDetail from "../Pages/holidayPackage/holidayguestdetail/HolidayGuestDetail";
import Holidayreviewbooking from "../Pages/holidayPackage/holidayreviewbooking/Holidayreviewbooking";
import HolidayconfirmationDetail from "../Pages/holidayPackage/holidaybookingconfirmation/Holidaybookingconfirmation";
import Assistanceinssurance from "../Pages/assistance&inssurance/Assistanceinssurance";
import Sightseeing from "../Pages/sightseeing/Sightseeing";
import BusResult from "../Pages/Bus/BusResult/BusResult";

import BusPassengerDetail from "../Pages/Bus/busPassengerDetail/BusPassengerDetail";
import BusReviewBooking from "../Pages/Bus/busreviewbooking/BusReviewBooking";
import Busbookingconfirmation from "../Pages/Bus/busbookingconfirmation/Busbookingconfirmation";
import SightseeingResult from "../Pages/sightseeing/sightseeingresult/SightseeingResult";
import SightseeingGuestDetail from "../Pages/sightseeing/sightseeingGuestDetail/SightseeingGuestsalesummary";
import HotelBooknow from "../Pages/Hotel/hotelbokknow/HotelBooknow";
import Guestdetail from "../Pages/Hotel/guestdetail/Guestdetail";
import Reviewbooking from "../Pages/Hotel/hotelreviewbooking/Reviewbooking";
import Bus from "../Pages/Bus/Bus";
import SightseeingReviewBooking from "../Pages/sightseeing/sightseeingreviewbooking/SightseeingReviewBooking";
import SightseeingBookingConfirmation from "../Pages/sightseeing/sightseeingbookingconfirmation/SightseeingBookingConfirmation";
import Transfer from "../Pages/transfer/Transfer";
import TransferResult from "../Pages/transfer/TransferResult/TransferResult";
import TansferGuestDetail from "../Pages/transfer/tansferguestdetail/TansferGuestDetail";
import TransferReviewBooking from "../Pages/transfer/TransferReviewBooking/TransferReviewBooking";
import TransferConfirmation from "../Pages/transfer/transferconfirmation/TransferConfirmation";
import Forex from "../Pages/Forex/Forex";
import InsuranceSearchCriteria from "../Pages/assistance&inssurance/insuranceresult/InsuranceSearchCriteria";
import InsuranceResult from "../Pages/assistance&inssurance/insuranceresult/InsuranceResult";
import InsuranceGuestDetails from "../Pages/assistance&inssurance/insuranceguestdetails/InsuranceGuestDetails";
import InsuranceReviewBooking from "../Pages/assistance&inssurance/insurancereviewbooking/InsuranceReviewBooking";
import InsuranceBookingConfirmation from "../Pages/assistance&inssurance/insurancebookingconfirmation/InsuranceBookingConfirmation";
import Admin from "../Pages/admin/Admin";
import AdminUserForm from "../Pages/admin/AdminUserForm";
import Account from "../Pages/Account/Account";
import AccountDetails from "../Pages/Account/AccountDetails";
import Reports from "../Pages/reports/Reports";
import Services from "../Pages/services/Services";
import GSTform from "../Pages/gst/GSTform";
import Visaform from "../Pages/visa/Visaform";
import HotelbookingConfirmation from "../Pages/Hotel/hotelreviewbooking/HotelbookingConfirmation";
import Dashboard from "../Pages/Dashboard/Component/Dashboard";
import AdminLogin from "../Pages/AdminLogin/AdminLogin";
import CreateHolidayPackage from "../Pages/HotelPackage/createholidaypackage/CreateHolidayPackage";
import EditHolidayPackage from "../Pages/Dashboard/Component/Table/packageUpdate/EditPackage";

import { useLocation, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { ipAction, tokenAction } from "../Redux/IP/actionIp";
import Slider from "../Pages/Banner/Slider";
import GotoTopBtn from "../Components/GotoTopBtn";
import FlightresultReturn from "../Pages/Flight/flightresult/FlightresultReturn/FlightresultReturn";
import FlightReturnInternational from "../Pages/Flight/flightresult/FlightresultReturn/FlightReturnInternational";
const MainPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const reducerState = useSelector((state) => state);
  const isLoginRoute = location.pathname === "/Login";
  const isRegisterRoute = location.pathname === "/Registration";
  const isLogin = location.pathname === "/adminLogin";
  const isDashboard = location.pathname === "/admin/dashboard";
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !reducerState?.logIn?.loginData?.data &&
      location.pathname !== "/Registration" &&
      location.pathname !== "/adminLogin"
    ) {
      navigate("/Login");
    } else if (location.pathname == "/admin/dashboard") {
      if (!reducerState?.adminAuth?.adminData?.data) {
        navigate("/admin/dashboard");
      } else {
        navigate("/adminLogin");
      }
    }
  }, []);

  useEffect(() => {
    dispatch(ipAction());
  }, []);

  useEffect(() => {
    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
    };
    dispatch(tokenAction(payload));
  }, [reducerState?.ip?.ipData]);

  return (
    <>
      {!isLoginRoute && !isRegisterRoute && !isDashboard && !isLogin && (
        <div className="mainBox">
          {/* header of main dashboard */}
          <div className="header_section">
            <Header />
            {/* inner navbar contain all pages */}
            <InnerNavbar />
          </div>

          {/* all routes of inner navbar */}
          <div className="componentsContainer">
            <Routes>
              <Route
                element={<Active />}
                style={{ color: "inherit", textDecoration: "inherit" }}
              />
              <Route
                path="/Hotel"
                element={<Hotel />}
                style={{ color: "inherit", textDecoration: "inherit" }}
              />
              <Route exact path="flightresult" element={<Flightresult />} />

              <Route
                exact
                path="FlightresultReturn"
                element={<FlightresultReturn />}
              />
              <Route
                exact
                path="FlightResultInternational"
                element={<FlightReturnInternational />}
              />
              <Route
                exact
                path="/hotel/hotelsearch"
                element={<HotelSearch />}
              />
              <Route exact path="/Flightresult/booknow" element={<Booknow />} />
              <Route path="/flights/*" element={<Flight />}>
                <Route exact path="oneway" element={<OneWay />} />
                <Route exact path="offShare" element={<OffShare />} />
                <Route exact path="multiStop" element={<MultiStop />} />
                <Route exact path="calenderfare" element={<Calander />} />
                <Route exact path="return" element={<Return />} />
              </Route>

              {/* <Route path="/" element={<Banner />} /> */}

              <Route path="/" element={<Slider />} />

              <Route
                exact
                path="/hotel/hotelsearch/HotelBooknow"
                element={<HotelBooknow />}
              />
              <Route exact path="/Guestdetail" element={<Guestdetail />} />
              <Route
                exact
                path="/hotel/hotelsearch/HotelBooknow/Reviewbooking"
                element={<Reviewbooking />}
              />
              <Route
                exact
                path="/passengerdetail"
                element={<Passengerdetail />}
              />
              <Route
                exact
                path="/FlightresultReturn/Passengerdetail"
                element={<ReturnPassenger />}
              />
              <Route
                exact
                path="/Flightresult/passengerdetail/flightreviewbooking"
                element={<FlightReviewbooking />}
              />
              <Route
                exact
                path="/Flightbookingconfirmation"
                element={<Flightbookingconfirmation />}
              />

              <Route
                exact
                path="/holidaypackage"
                element={<HolidayPackage />}
              />
              <Route
                exact
                path="/holidaypackage/HolidaypackageResult"
                element={<HolidayPackageResult />}
              />
              <Route
                exact
                path="/holidaypackage/HolidaypackageResult/HolidayPackage"
                element={<HolidayPackage />}
              />
              <Route
                exact
                path="/holidaypackage/Holidaybooknow"
                element={<Holidaybooknow />}
              />

              <Route
                exact
                path="/HolidayGuestDetail"
                element={<HolidayGuestDetail />}
              />
              <Route
                exact
                path="/Holidayreviewbooking"
                element={<Holidayreviewbooking />}
              />
              <Route
                exact
                path="/Reviewbooling"
                element={<HotelbookingConfirmation />}
              />
              <Route
                exact
                path="/HolidayconfirmationDetail"
                element={<HolidayconfirmationDetail />}
              />
              <Route exact path="/Bus" element={<Bus />} />
              <Route
                exact
                path="/assistance&inssurance"
                element={<Assistanceinssurance />}
              />
              <Route exact path="/sightseeing" element={<Sightseeing />} />
              <Route exact path="/BusResult" element={<BusResult />} />
              <Route
                exact
                path="/BusPassengerDetail"
                element={<BusPassengerDetail />}
              />
              <Route
                exact
                path="/BusReviewBooking"
                element={<BusReviewBooking />}
              />
              <Route
                exact
                path="/Busbookingconfirmation"
                element={<Busbookingconfirmation />}
              />
              <Route
                exact
                path="/SightseeingResult"
                element={<SightseeingResult />}
              />
              <Route
                exact
                path="/SightseeingGuestDetail"
                element={<SightseeingGuestDetail />}
              />
              <Route
                exact
                path="/SightseeingReviewBooking"
                element={<SightseeingReviewBooking />}
              />
              <Route
                exact
                path="/SightseeingBookingConfirmation"
                element={<SightseeingBookingConfirmation />}
              />
              <Route exact path="Transfer" element={<Transfer />} />
              <Route exact path="TransferResult" element={<TransferResult />} />
              <Route
                exact
                path="TansferGuestDetail"
                element={<TansferGuestDetail />}
              />
              <Route
                exact
                path="TransferReviewBooking"
                element={<TransferReviewBooking />}
              />
              <Route
                exact
                path="TransferConfirmation"
                element={<TransferConfirmation />}
              />
              <Route exact path="/Forex" element={<Forex />} />
              <Route
                exact
                path="/InsuranceSearchCriteria"
                element={<InsuranceSearchCriteria />}
              />
              <Route
                exact
                path="/InsuranceResult"
                element={<InsuranceResult />}
              />
              <Route
                exact
                path="/InsuranceGuestDetails"
                element={<InsuranceGuestDetails />}
              />
              <Route
                exact
                path="/InsuranceReviewBooking"
                element={<InsuranceReviewBooking />}
              />
              <Route
                exact
                path="/InsuranceBookingConfirmation"
                element={<InsuranceBookingConfirmation />}
              />
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/AdminUserForm" element={<AdminUserForm />} />
              <Route exact path="/account" element={<Account />} />
              <Route
                exact
                path="/AccountDetails"
                element={<AccountDetails />}
              />
              <Route exact path="/reports" element={<Reports />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/gst" element={<GSTform />} />
              <Route exact path="/visa" element={<Visaform />} />
              <Route
                exact
                path="/CreateHolidayPackage"
                element={<CreateHolidayPackage />}
              ></Route>
              <Route
                exact
                path="/EditHolidayPackage"
                element={<EditHolidayPackage />}
              ></Route>
            </Routes>
          </div>

          {/* main page footer */}
          {/* {!isLoginRoute && <Footer />} */}
        </div>
      )}
      <GotoTopBtn />
      <div>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route
            exact
            path="/admin/dashboard/*"
            element={<Dashboard />}
          ></Route>
          <Route exact path="/adminLogin" element={<AdminLogin />}></Route>
        </Routes>
      </div>
      {/* main page footer */}
      {/* {!isLoginRoute && reducerState?.adminAuth?.adminData?.data ? (
        <FooterAdmin />
      ) : ( */}
      <Footer />
      {/* )} */}
    </>
  );
};

export default MainPage;
