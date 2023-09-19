import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import userApi from "../API/api";
import { busSearch } from "../busSearch/busSearchAction";
import { BUS_SEARCH_REQUEST } from "../busSearch/actionType";

function* busSearchSaga(action) {
  try {
    const user = yield call(userApi.getBusSearch, action.payload);
    yield put(busSearch(user));
  } catch (error) {
    console.log(error);
  }
}
export function* busSearchWatcher() {
  yield takeLatest(BUS_SEARCH_REQUEST, busSearchSaga);
}
