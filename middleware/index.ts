import { fork } from "redux-saga/effects";
import bucketSaga from "./modules/bucket";

export default function* rootSaga() {

  yield fork(bucketSaga);
}