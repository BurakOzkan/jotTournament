import { put, call, takeEvery, select , delay } from 'redux-saga/effects';

import { setSubmission, setError } from '../actions';
import { SUBMISSION } from '../constants';
import { fetchSubmission } from '../api';

export function* handleSubmissionLoad() {
    try {
        yield delay(10000);
        const lastSubmission = yield fetchSubmission();
        yield put(setSubmission(lastSubmission));
        console.log("lastSubmission"+ {lastSubmission} )
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchSubmissionLoad() {
    yield takeEvery(SUBMISSION.LOAD, handleSubmissionLoad);
}
