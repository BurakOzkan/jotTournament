import { FORMS } from '../constants';

const submissionReducer = (state = false, action) => {
    switch (action.type) {
        case FORMS.FETCH:
            return true;
        case FORMS.FETCH_SUCCESS:
            return false;
        case FORMS.FETCH_FAIL:
            return false;

        default:
            return state;
    }
};

export default submissionReducer;