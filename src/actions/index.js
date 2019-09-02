import { SUBMISSION , FORMS, TOURNAMENTFORMSUBMISSIONS ,TEAMS } from "../constants";

const loadSubmission = () => ({
    type: SUBMISSION.LOAD
});

const fetchAllForms = () => ({
    type: FORMS.FETCH
});

const setForms = (forms) => ({
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

const fetchAllTournamentSubmissions = formid  => ({
    type: TOURNAMENTFORMSUBMISSIONS.FETCH,
    formid

});
const setTournamentTeams = (teams,formid) => ({
    type: TOURNAMENTFORMSUBMISSIONS.FETCH_SUCCESS,
    teams,
    formid
});

const fetchAllTeams = (formID) => ({
    type: TEAMS.FETCH,
    formID
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
    setError,
    fetchAllTournamentSubmissions,
    setTournamentTeams,
    fetchAllTeams
    // loadImageStats,
    // setImageStats,
    // setImageStatsError,
};
