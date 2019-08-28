import { FORMS } from '../constants';

const tournamentFormsReducer = (state = {}, action) => {
    if (action.type === FORMS.FETCH_SUCCESS) {
      // set forms to reducers by their formID


      function toObject(arr) {
        var rv = {};
        for (var i = 0; i < arr.length; ++i)
          rv[arr[i].id] = arr[i].title;
        return rv;
      }

      let newState = toObject(action.forms);

        console.log(newState);
        return newState;
    }
    return state;
};

export default tournamentFormsReducer;
