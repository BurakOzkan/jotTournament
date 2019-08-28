import { put, call, takeEvery, select, delay } from "redux-saga/effects";

import { setForms , setFetchAllFormsError } from "../actions";
import { FORMS } from "../constants";
import questionConstants from "../constants/questionConstants";
// import joiningJSON from "../jsons/joiningForm";

import { fetchAllForms } from "../api";

export function* handleFetchForms() {
  try {
    const forms = yield fetchAllForms();
    // below action will set the tourno forms to the reducer by their IDs

  
    console.log(  forms);

    yield put(setForms(forms));

    // call a new action that will query each formID in the reducer,
    // get their formProperties and update the reducer in that key
    // startDate,

    // calling yield from the inside of a for loops is a little problematic
    // one solution is `for of` loop. other is `yield all` prefer this.

    // example code block for `yield all`
    // yield all(uploadedFiles.map((file) => {
    //   return put(request);
    // }));
  } catch (error) {
    yield put(setFetchAllFormsError(error.toString()));
  }
}

export default function* watchSubmissionLoad() {
  yield takeEvery(FORMS.FETCH, handleFetchForms);
}
