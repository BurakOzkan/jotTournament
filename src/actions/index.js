import { SUBMISSION , FORMS } from "../constants";

const loadSubmission = () => ({
    type: SUBMISSION.LOAD
});

const fetchAllForms = () => ({
    type: FORMS.FETCH
});

const setForms = forms => ({
    type: FORMS.FETCH_SUCCESS,
    forms
});

const setFetchAllFormsError = error => ({
    type: FORMS.FETCH_FAIL,
    error
});

const setSubmission = submission => ({
    type: SUBMISSION.LOAD_SUCCESS,
    submission
});

const setError = error => ({
    type: SUBMISSION.LOAD_FAIL,
    error
});

// const loadShowStats = id => ({
//     type: STATS.LOAD,
//     id,
// });

// const setImageStats = (id, downloads) => ({
//     type: STATS.LOAD_SUCCESS,
//     id,
//     downloads,
// });

// const setImageStatsError = id => ({
//     type: STATS.LOAD_FAIL,
//     id,
// });

export {
    loadSubmission,
    fetchAllForms,
    setForms,
    setFetchAllFormsError,
    setSubmission,
    setError
    // loadImageStats,
    // setImageStats,
    // setImageStatsError,
};
