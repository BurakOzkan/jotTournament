import { put, call, takeEvery, select, delay } from "redux-saga/effects";

import { setTournamentTeams, setError } from "../actions";
import { TEAMS } from "../constants";

import { fetchTournamentSubmissions } from "../api";

export function* handleSubmissionLoad(action) {
  try {
    const { formID } = action;
    const tournamentTeams = yield fetchTournamentSubmissions(formID);
    yield put(setTournamentTeams(tournamentTeams,formID));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchSubmissionLoad() {
  yield takeEvery(TEAMS.FETCH, handleSubmissionLoad);
}
