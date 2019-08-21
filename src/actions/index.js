import axios from "axios";

const API_KEY = "ade9c792cc4b870cbac321b22d6a89ee";
const FORM_ID = "92181413902956";
const FETCH_SUBMISSIONS = "https://api.jotform.com/form/";

export const fetchSubmissions = () => async dispatch => {
	const url = `${FETCH_SUBMISSIONS}/${FORM_ID}/submissions?apikey=${API_KEY}&orderby=id`;
	const { data } = await axios.get(url);

	const obj = data.content.map(resultSet => ({
		...resultSet.answers[3],
		done: resultSet.flag,
		id: resultSet.id
	}));

	dispatch({
		type: types.CREATE_FORM,
		payload: obj
	});
};
