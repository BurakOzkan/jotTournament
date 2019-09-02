import { put, call, takeEvery, select, delay } from "redux-saga/effects";

import { setTournamentTeams, setError } from "../actions";
import { TEAMS } from "../constants";

import { fetchTournamentSubmissions } from "../api";

export function* handleSubmissionLoad(action) {
  try {
    const { formID } = action;
    yield delay(1000);
    const tournamentTeams = yield fetchTournamentSubmissions(formID);
    yield put(setTournamentTeams(tournamentTeams));
    //convert to an object

    // TODO:: Create form with the parameters below

  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchSubmissionLoad() {
  yield takeEvery(TEAMS.FETCH, handleSubmissionLoad);
}
