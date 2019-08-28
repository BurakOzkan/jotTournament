import { FORMS } from '../constants';

const tournamentFormsReducer = (state = [], action) => {
    if (action.type === FORMS.FETCH_SUCCESS) {
        return [...state, ...action.forms];
    }
    return state;
};

export default tournamentFormsReducer;
