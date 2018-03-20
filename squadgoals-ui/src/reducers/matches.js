export const matchesAreLoading = (state = false, action) => {
    switch(action.type) {
        case 'MATCHES_ARE_LOADING':
            return action.hasLoaded;
        default:
            return state;
    }
}

export const fetchingMatchesHasErrored = (state = false, action) => {
    switch(action.type) {
        case 'FETCHING_MATCHES_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export const matches = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MATCHES_SUCCESS':
            return action.matches;
        default:
            return state;
    }
}