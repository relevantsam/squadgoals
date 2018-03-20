const axios = require('axios');

export function fetchMatchesError(bool) {
    return {
        type: 'FETCHING_MATCHES_HAS_ERRORED',
        hasErrored: bool
    }
}

export function matchesAreLoading(bool) {
    return {
        type: 'MATCHES_ARE_LOADING',
        hasLoaded: bool
    }
}

export function fetchMatchesSuccess(matches) {
    return {
        type: 'FETCH_MATCHES_SUCCESS',
        matches
    }
}

export function fetchMatches(shard, userName) {
    
    return(dispatch) => {
        dispatch(matchesAreLoading(true));
        axios.get(`/api/matches?shard=${shard}&player=${userName}`).then((data) => {
            if (data.status !== 200) {
                dispatch(matchesAreLoading(false));
                throw Error(data.statusText);
            }

            dispatch(matchesAreLoading(false));

            return data.data;
        })
        .then((data) => dispatch(fetchMatchesSuccess(data)))
        .catch((err) => {
            dispatch(fetchMatchesError(true));
        })
    }
}