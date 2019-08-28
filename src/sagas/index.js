import { all } from 'redux-saga/effects';

import fetchLastSubmission from './fetchLastSubmission.js';
import createForm from './createForm.js';
import fetchAllForms from './fetchAllForms';

export default function* rootSaga() {
    yield all([
        fetchLastSubmission(),
        createForm(),
        fetchAllForms()
    ]);
}
