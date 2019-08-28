import { FORMS } from '../constants';

const tournamentFormsReducer = (state = [], action) => {
    if (action.type === FORMS.FETCH_SUCCESS) {
      // TODO :: set forms to reducers by their formID
        return [...state, ...action.forms];
    }
    return state;
};

export default tournamentFormsReducer;
