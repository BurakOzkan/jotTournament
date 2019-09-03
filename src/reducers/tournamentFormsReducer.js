import { FORMS,TEAMS,TOURNAMENTFORMSUBMISSIONS } from '../constants';

const tournamentFormsReducer = (state = {}, action) => {
    switch (action.type) {
      case FORMS.FETCH_SUCCESS:        // reduce((acculumator, currentValue) => {}, initialState)
        return action.forms.reduce((stateObj, form) => {
          return {
            ...stateObj,
            [form.id]: form
          };
        }, state);      
          
      case TOURNAMENTFORMSUBMISSIONS.FETCH_SUCCESS:
        // state[action.formid].teams = action.teams;
        Object.assign(state[action.formid] ,  { teams: action.teams })
      return state;
      
      
      default:
          return state;
  }
};

export default tournamentFormsReducer;
