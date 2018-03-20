const axios = require('axios');

export function fetchStatusError(bool) {
    return {
        type: 'FETCHING_STATUS_HAS_ERRORED',
        hasErrored: bool
    }
}

export function statusIsLoading(bool) {
    return {
        type: 'STATUS_IS_LOADING',
        hasLoaded: bool
    }
}

export function fetchStatusSuccess(versionInfo) {
    return {
        type: 'FETCH_STATUS_SUCCESS',
        versionInfo
    }
}

export function fetchStatus() {
    
    return(dispatch) => {
        axios.get('/api/status').then((data) => {
            if (data.status !== 200) {
                dispatch(statusIsLoading(false));
                throw Error(data.statusText);
            }

            dispatch(statusIsLoading(false));

            return data.data;
        })
        .then((data) => dispatch(fetchStatusSuccess(data.attributes)))
        .catch((err) => {
            dispatch(fetchStatusError(true));
        })
    }
}