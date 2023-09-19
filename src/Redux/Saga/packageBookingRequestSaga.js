import { takeLatest, call, put } from "redux-saga/effects";
import userApi from "../API/api";
import { packageBooking } from "../HolidayBookingRequest/actionBooking";
import {PACKAGE_REQUEST} from "../HolidayBookingRequest/actionType";

function* getHolidayBookRequest(action) {
  try {
    const user = yield call(userApi.bookingHolidayRequest,action.payload);
    yield put(packageBooking(user));
  } catch (error) {
    console.log(error);
  }
}
export function* getHolidayBookingRequestWatcher() {
  yield takeLatest(PACKAGE_REQUEST, getHolidayBookRequest);
}
