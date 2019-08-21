const reducer = (state = {}, action) => {
	switch (action.type) {
		case "GET_SUBMISSIONS":
			return { ...state, loading: true };
		case "SUBMISSION_RECEIVED":
			return { ...state, news: action.json[0], loading: false };
		default:
			return state;
	}
};
export default reducer;
