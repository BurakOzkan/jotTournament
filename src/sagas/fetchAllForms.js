import { 
        put,
        takeEvery,
        all
       } from "redux-saga/effects";

import { setForms , setFetchAllFormsError } from "../actions";
import { FORMS } from "../constants";

import { fetchAllForms , fetchExpireDate } from "../api";

export function* handleFetchForms() {
  try {
      const forms = yield fetchAllForms();

      yield all(forms.map((form) => {
        return fetchExpireDate(form.id).then((value) => {
          form.start = value.toString();
        });
      }));

      yield put(setForms(forms));
  } catch (error) {
    yield put(setFetchAllFormsError(error.toString()));
  }
}

export default function* watchSubmissionLoad() {
  yield takeEvery(FORMS.FETCH, handleFetchForms);
}
