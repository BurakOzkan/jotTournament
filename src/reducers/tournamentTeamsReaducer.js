import { TOURNAMENTFORMSUBMISSIONS } from '../constants';

const tournamentTeamsReducer = (state = {}, action) => {
    if (action.type === TOURNAMENTFORMSUBMISSIONS.FETCH_SUCCESS) {
      // reduce((acculumator, currentValue) => {}, initialState)
      return state;
    }
    return state;
};

export default tournamentTeamsReducer;
