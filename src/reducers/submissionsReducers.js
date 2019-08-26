import { SUBMISSION } from '../constants';

const submissionReducer = (state = false, action) => {
    switch (action.type) {
        case SUBMISSION.LOAD:
            return true;
        case SUBMISSION.LOAD_SUCCESS:
            return false;
        case SUBMISSION.LOAD_FAIL:
            return false;

        default:
            return state;
    }
};

export default submissionReducer;