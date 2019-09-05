import { all } from 'redux-saga/effects';

import fetchLastSubmission from './fetchLastSubmission.js';
import fetchAllForms from './fetchAllForms';
import fetchTournamentTeams from './fetchTournamentTeams';


export default function* rootSaga() {
    yield all([
        fetchLastSubmission(),
        fetchAllForms(),
        fetchTournamentTeams()
    ]);
}
