import { put, takeLatest, all } from "redux-saga/effects";
function* fetchNews() {
	const json = yield fetch(
		"https://api.jotform.com/form/92181413902956/submissions?apiKey=ade9c792cc4b870cbac321b22d6a89ee"
	).then(response => response.json());
	yield put({ type: "SUBMISSION_RECEIVED", json: json.articles });
}
function* actionWatcher() {
	yield takeLatest("GET_SUBMISSION", fetchNews);
}
export default function* rootSaga() {
	yield all([actionWatcher()]);
}
