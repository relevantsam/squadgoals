export const statusIsLoading = (state = false, action) => {
    switch(action.type) {
        case 'STATUS_IS_LOADING':
            return action.hasLoaded;
        default:
            return state;
    }
}

export const fetchingStatusHasErrored = (state = false, action) => {
    switch(action.type) {
        case 'FETCHING_STATUS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export const status = (state = {releasedAt: null, version: null}, action) => {
    switch(action.type) {
        case 'FETCH_STATUS_SUCCESS':
            return action.versionInfo;
        default:
            return state;
    }
}