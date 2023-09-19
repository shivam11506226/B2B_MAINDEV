import axios from "axios";
import { apiURL } from "../../Constants/constant";

function api() {
  const userIP = (formData) => {
    return axios.get("https://api.ipify.org?format=json");
  };

  const usersTableData = () => {
    return axios.get("http://localhost:8000/travvolt/user/getallusers");
  };

  const userB2BToken = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/token",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const setVendorAmount = (payload) => {
    const { data, key } = payload;
    return axios({
      method: "PUT",
      url: `travvolt/wallet/update_amount/${key.wallet_Id}`,
      baseURL: `${apiURL.baseURL}`,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const passengerData = (payload) => {
    console.log("Passenger payload", payload);
    return payload;
  };
  const userB2BLogin = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/b2b/login",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const userB2BRegistration = (formData1) => {
    return axios({
      method: "POST",
      url: "/travvolt/b2b/register",
      baseURL: `${apiURL.baseURL}`,
      data: formData1,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const adminAuth = (payload) => {
    return axios({
      method: "POST",
      url: "/api/auth/signin",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const adminSignOut = (payload) => {
    return axios({
      method: "POST",
      url: "/api/auth/signout",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const activeStatus = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/user/update",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const markUpStatus = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/user/setmarkup",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  //Flight API's Start

  const oneWaySearch = async (payload) => {
    // console.log({ payload, emtPayload });
    return axios({
      method: "POST",
      url: "/travvolt/flight/search/oneway",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  };

  const oneWayEMTSearch = (payload) => {
    console.log("Paayload EMT Search", payload);
    return axios({
      method: "POST",
      url: "/emt/flight/search/oneway",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  };

  const flightRuleSearch = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/flight/farerule",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const flightQuoteSearch = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/flight/farequote",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const flightBookGDS = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/flight/booking",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const flightGetTicketLcc = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/flight/getticketlcc",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const flightGetTicketNonLcc = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/flight/getticketnonlcc",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  //Flight API's End

  const createPackage = (formData2) => {
    return axios({
      method: "POST",
      url: "/travvolt/international/create",
      baseURL: `${apiURL.baseURL}`,
      data: formData2,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const searchPackage = (payload) => {
    console.log("searchPackage" + payload.destination);
    console.log("searchPackage" + payload.days);
    const { destination, days } = payload;
    // ?filter=${days}&keyword=${destination}
    return axios.get(
      `http://localhost:8000/travvolt/international/getAll?filter=${days}&keyword=${destination}`
    );
  };

  const getOnePackage = (payload) => {
    console.log("getOnePacked", payload);
    const { id } = payload;
    return axios.get(
      `http://localhost:8000/travvolt/international/getone/${id}`
    );
  };

  // GET holiday Booking Request

  const bookingHolidayRequest = (payload) => {
    console.log("bookingHolidayRequest api", payload);
    return axios({
      method: "POST",
      url: "/travvolt/international/pakageBookingrequest",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const bookingHoliday = (payload) => {
    console.log("bookingHolidayRequest api", payload);
    return axios({
      method: "POST",
      url: "/travvolt/international/pakageBooking/",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const createForex = (formData3) => {
    console.log(formData3);
    return axios({
      method: "POST",
      url: "/travvolt/forex/createForex",
      baseURL: `${apiURL.baseURL}`,
      data: formData3,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const createForexForCustomer = (formData3) => {
    return axios({
      method: "POST",
      url: "travvolt/forex/createCustomerforex",
      baseURL: `${apiURL.baseURL}`,
      data: formData3,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  // Forex data for dashboard
  const forexData = () => {
    return axios.get("https://api.travvolt.com/travvolt/forex/getAllForex");
  };
  const forexCustomerData = () => {
    return axios.get(
      "https://api.travvolt.com/travvolt/forex/getAllCustomerforex"
    );
  };

  // visa data for dashboard
  const visaData = () => {
    return axios.get("https://api.travvolt.com/travvolt/visa/getAllVisa");
  };

  // create Visa
  const visaRequest = (formData4) => {
    console.log("api.js", formData4.payload);
    return axios({
      method: "POST",
      url: "travvolt/visa/createVisa",
      baseURL: `${apiURL.baseURL}`,
      data: formData4,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  // Bus Search
  const getBusSearch = (payload) => {
    console.log("bus result api", payload);
    return axios({
      method: "POST",
      url: "/travvolt/bus/search",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  //Hotel API's Start
  const hotelSearch = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/hotel/search/dedup",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const hotelSearchInfo = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/hotel/searchinfo",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const hotelRoomInfo = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/hotel/room",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const hotelBlockRoom = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/hotel/blockroom",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const hotelBookRoom = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/hotel/bookroom",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  //Bus API's Start

  return {
    userB2BRegistration,
    userIP,
    usersTableData,
    userB2BToken,
    adminAuth,
    adminSignOut,
    activeStatus,
    markUpStatus,
    passengerData,
    oneWaySearch,
    oneWayEMTSearch,
    userB2BLogin,
    flightRuleSearch,
    flightQuoteSearch,
    flightBookGDS,
    flightGetTicketLcc,
    flightGetTicketNonLcc,
    setVendorAmount,
    createPackage,
    searchPackage,
    getOnePackage,
    hotelSearch,
    hotelSearchInfo,
    hotelRoomInfo,
    hotelBlockRoom,
    hotelBookRoom,
    bookingHolidayRequest,
    bookingHoliday,
    createForex,
    createForexForCustomer,
    forexData,
    forexCustomerData,
    visaRequest,
    getBusSearch,
    visaData,
  };
}

const userApi = api();

export default userApi;
