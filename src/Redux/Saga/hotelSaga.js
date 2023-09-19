import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import userApi from "../API/api";
import {
  fetchBlockRoomHotel,
  fetchBookRoomHotel,
  fetchHotel,
  fetchRoomHotel,
  fetchSearchInfoHotel,
} from "../Hotel/hotel";
import {
  HOTEL_B0OKROOM_REQUEST,
  HOTEL_BLOCKROOM_REQUEST,
  HOTEL_REQUEST,
  HOTEL_ROOM_REQUEST,
  HOTEL_SEARCH_INFO_REQUEST,
} from "../Hotel/hotelActionType";

function* hotelRequest(action) {
  try {
    const data = yield call(userApi.hotelSearch, action.payload);
    yield put(fetchHotel(data));
  } catch (error) {
    console.log(error);
  }
}

function* hotelSearchInfo(action) {
  try {
    const data = yield call(userApi.hotelSearchInfo, action.payload);
    yield put(fetchSearchInfoHotel(data));
  } catch (error) {
    console.log(error);
  }
}

function* hotelRoomRequest(action) {
  try {
    const data = yield call(userApi.hotelRoomInfo, action.payload);
    yield put(fetchRoomHotel(data));
  } catch (error) {
    console.log(error);
  }
}

function* hotelBlockRoomRequest(action) {
  try {
    const data = yield call(userApi.hotelBlockRoom, action.payload);
    yield put(fetchBlockRoomHotel(data));
  } catch (error) {
    console.log(error);
  }
}

function* hotelBookRoomRequest(action) {
  try {
    const data = yield call(userApi.hotelBookRoom, action.payload);
    yield put(fetchBookRoomHotel(data));
  } catch (error) {
    console.log(error);
  }
}

export function* hotelSearchWatcher() {
  yield takeLatest(HOTEL_REQUEST, hotelRequest);
  yield takeLatest(HOTEL_SEARCH_INFO_REQUEST, hotelSearchInfo);
  yield takeLatest(HOTEL_ROOM_REQUEST, hotelRoomRequest);
  yield takeLatest(HOTEL_BLOCKROOM_REQUEST, hotelBlockRoomRequest);
  yield takeLatest(HOTEL_B0OKROOM_REQUEST, hotelBookRoomRequest);
}
