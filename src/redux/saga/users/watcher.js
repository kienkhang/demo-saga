import { takeLatest } from "redux-saga/effects";
import { getUsers, addUsers, deleteUsers } from "@/redux/slice/users";
import { getUsersWorker, addUsersWorker, deleteUsersWorker } from "./worker";

export default function* usersWatcher() {
  // Every time the action "getGenres" is called,
  // go to the worker and execute the "getUsersWorker" function.
  yield takeLatest(getUsers.type, getUsersWorker);
  yield takeLatest(addUsers.type, addUsersWorker);
  yield takeLatest(deleteUsers.type, deleteUsersWorker);
}
