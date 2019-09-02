import { combineReducers } from "redux";

import submissionReducer from "./submissionsReducers";
import fetchTournamentFormsReducer from "./fetchTournamentFormsReducer";
import tournamentFormsReducer from "./tournamentFormsReducer";
import tournamentTeamsReducer from "./tournamentTeamsReducer";

import createForm from './createformReducers';
// import errorReducer from './errorReducer';
// import pageReducer from './pageReducer';
// import statsReducer from './statsReducer';

const rootReducer = combineReducers({
	createForm: createForm,
	fetchTournamentFormsReducer,
	tournamentFormsReducer,
	submission: submissionReducer,
	tournamentTeam: tournamentTeamsReducer
	// error: errorReducer,
	// nextPage: pageReducer,
	// imageStats: statsReducer,
});

export default rootReducer;
