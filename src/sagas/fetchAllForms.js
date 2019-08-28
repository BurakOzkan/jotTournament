import { put, call, takeEvery, select, delay } from "redux-saga/effects";

import { setForms , setFetchAllFormsError } from "../actions";
import { FORMS } from "../constants";
import questionConstants from "../constants/questionConstants";
// import joiningJSON from "../jsons/joiningForm";

import { fetchAllForms } from "../api";

export function* handleFetchForms() {
  try {
    yield delay(1000);
    const allForms = yield fetchAllForms();
    
    console.log( allForms );
    let data = allForms.filter(function (item) {
      return item.title.includes("__tournamentForm__");
    });
    const forms =  data ;

    yield put(setForms(forms));
    console.log(data);


  } catch (error) {
    yield put(setFetchAllFormsError(error.toString()));
  }
}

export default function* watchSubmissionLoad() {
  yield takeEvery(FORMS.FETCH, handleFetchForms);
}
