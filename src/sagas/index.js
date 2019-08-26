import { all } from 'redux-saga/effects';

import fetchLastSubmission from './fetchLastSubmission.js';
import createForm from './createForm.js';

export default function* rootSaga() {
    yield all([fetchLastSubmission(), createForm()]);
}
