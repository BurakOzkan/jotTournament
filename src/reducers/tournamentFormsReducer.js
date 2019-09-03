import {
  FORMS,
  TEAMS,
  TOURNAMENTFORMSUBMISSIONS
} from '../constants';

const tournamentFormsReducer = (state = {}, action) => {
    switch (action.type) {
      case FORMS.FETCH_SUCCESS:
        return action.forms.reduce((stateObj, form) => {
          return {
            ...stateObj,
            [form.id]: form
          };
        }, state);
      case TOURNAMENTFORMSUBMISSIONS.FETCH_SUCCESS:
        // state[action.formid].teams = action.teams;
        // Object.assign(state ,  { [form.id]: action.teams })
        console.log(state, action);
        return {
          ...state,
          [action.formID]: {
            ...state[action.formID],
            teams: action.teams
          }
        };
      default:
          return state;
  }
};

export default tournamentFormsReducer;
