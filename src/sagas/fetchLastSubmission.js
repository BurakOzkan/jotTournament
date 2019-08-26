import { put, call, takeEvery, select , delay } from 'redux-saga/effects';

import { setSubmission, setError } from '../actions';
import { SUBMISSION } from '../constants';
import questionConstants from '../constants/questionConstants';
import { fetchLastSubmission } from '../api';

export function* handleSubmissionLoad() {
    try {
        yield delay(1000);
        const lastSubmission = yield fetchLastSubmission();
        yield put(setSubmission(lastSubmission));

        const {
          tournamentName,
          tournamentType,
          participantsOrTeams,
          startDate,
          invitees
        } = questionConstants;

        const name = lastSubmission[tournamentName].answer;
        const type = lastSubmission[tournamentType].answer;
        const participantCount = lastSubmission[participantsOrTeams].answer;
        const start = lastSubmission[startDate].answer;
        const invites = lastSubmission[invitees].answer;

        // TODO:: Create form with the parameters below
        console.log({
          name, // static
          type, // static
          participantCount, // form submission limit on count
          start, // start - 15 gun, form submission limit on date
          invites, // email gonderme var ama sonra belki.
        });
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchSubmissionLoad() {
    yield takeEvery(SUBMISSION.LOAD, handleSubmissionLoad);
}
