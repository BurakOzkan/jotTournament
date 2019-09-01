import { put, call, takeEvery, select, delay } from "redux-saga/effects";

import { setSubmission, setError, setTournamentTeams } from "../actions";
import { SUBMISSION , TOURNAMENTFORMSUBMISSIONS} from "../constants";
import questionConstants from "../constants/questionConstants";
import joiningJSON from "../jsons/joiningForm";

import { fetchTournamentSubmissions } from "../api";
import { create } from "istanbul-reports";

export function* handleSubmissionLoad(action) {
  try {
    yield delay(1000);
    const tournamentTeams = yield fetchTournamentSubmissions(action.formId);
    yield put(setTournamentTeams(tournamentTeams));
    console.log(tournamentTeams);

    //convert to an object

    // TODO:: Create form with the parameters below
    console.log({
      name, // static
      type, // static
      participantCount, // form submission limit on count ok 
      start, // start - 15 gun, form submission limit on date
      invites // email gonderme var ama sonra belki.
    });
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchSubmissionLoad() {
  yield takeEvery(TOURNAMENTFORMSUBMISSIONS.FETCH, handleSubmissionLoad);
}
