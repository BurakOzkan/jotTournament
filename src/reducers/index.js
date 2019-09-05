import { combineReducers } from "redux";

import submissionReducer from "./submissionsReducers";
import fetchTournamentFormsReducer from "./fetchTournamentFormsReducer";
import tournamentFormsReducer from "./tournamentFormsReducer";



const rootReducer = combineReducers({
	fetchTournamentFormsReducer,
	tournamentFormsReducer,
	submission: submissionReducer
});

export default rootReducer;
