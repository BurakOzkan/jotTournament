import { TOURNAMENTFORMSUBMISSIONS } from '../constants';

const tournamentTeamsReducer = (state = {}, action) => {
    if (action.type === TOURNAMENTFORMSUBMISSIONS.FETCH_SUCCESS) {
      // reduce((acculumator, currentValue) => {}, initialState)
      return action.forms.reduce((stateObj, teams) => {
        return {
          ...stateObj,
          teams
        };
      }, state);
    }
    return state;
};

export default tournamentTeamsReducer;
