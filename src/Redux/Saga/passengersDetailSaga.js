import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import userApi from "../API/api";
import { fetchPassengersDetails } from "../Passengers/passenger";
import { PASSENGERS_REQUEST } from "../Passengers/passengerActionType";

function* passengersRequest(action) {
  try {
    const data = yield call(userApi.passengerData, action.payload);
    yield put(fetchPassengersDetails(data));
  } catch (error) {
    console.log(error);
  }
}
export function* passengersWatcher() {
  yield takeLatest(PASSENGERS_REQUEST, passengersRequest);
}
