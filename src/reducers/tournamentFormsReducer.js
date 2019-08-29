import { FORMS } from '../constants';

const tournamentFormsReducer = (state = {}, action) => {
    if (action.type === FORMS.FETCH_SUCCESS) {
      // reduce((acculumator, currentValue) => {}, initialState)
      return action.forms.reduce((stateObj, form) => {
        return {
          ...stateObj,
          [form.id]: form
        };
      }, state);
    }
    return state;
};

export default tournamentFormsReducer;
