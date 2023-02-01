import { call, put } from "redux-saga/effects";
import { addUsers, getUsers, setUsers } from "@/redux/slice/users";
import { addUserApi, deleteUserApi, getUserApi } from "@/api/instance";

// Get user
export function* getUsersWorker() {
  try {
    //Call API to GET data
    const response = yield call(getUserApi);
    const data = yield response.data;
    // After having data, call redux and put it in users state
    yield put(setUsers(data));
  } catch (error) {
    throw error;
  }
}
// Add user
export function* addUsersWorker(action) {
  // Call API to POST data
  try {
    const response = yield call(addUserApi, action.payload);
    const message = yield response.statusText;
    alert(`🐔🦢 ~ ${message}`);
    // After add -> Refresh users
    yield put(getUsers());
  } catch (error) {
    throw error;
  }
}
// Delete user
export function* deleteUsersWorker(action) {
  // Call API to POST data
  try {
    const response = yield call(deleteUserApi, action.payload);
    const message = yield response.statusText;
    alert(`🐔🦢 ~ ${message}`);
    // After add -> Refresh users
    yield put(getUsers());
  } catch (error) {
    throw error;
  }
}
