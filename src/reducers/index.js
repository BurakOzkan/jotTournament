import { combineReducers } from "redux";

import submissionReducer from "./submissionsReducers";

import createForm from './createformReducers';
// import errorReducer from './errorReducer';
// import pageReducer from './pageReducer';
// import statsReducer from './statsReducer';

const rootReducer = combineReducers({
	createForm: createForm,
	submission: submissionReducer,
	// error: errorReducer,
	// nextPage: pageReducer,
	// imageStats: statsReducer,
});

export default rootReducer;
