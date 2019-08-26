import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setSubmission, setError } from '../actions';
import { SUBMISSION } from '../constants';
import { fetchSubmission } from '../api';


export function* handleSubmissionLoad() {
    try {

    } catch (error) {
    }
}
export default function* watchImagesLoad() {
    yield takeEvery(SUBMISSION.LOAD, handleSubmissionLoad);
}