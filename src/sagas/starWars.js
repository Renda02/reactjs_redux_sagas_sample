import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as Api from "../service/api";

function* fetchCharacters(action) {
  try {
    const characters = yield fetch("https://swapi.dev/api/people");
    yield put({
      type: "CHARACTER_SUCCEEDED",
      payload: {
        listCharacter:characters
      }
    });
  } catch (e) {
    yield put({ type: "CHARACTER_FAILED", message: e.message });
  }
}

function* rootSaga() {
  yield takeLatest("CHARACTER_REQUESTED", fetchCharacters);
}

export default rootSaga;
