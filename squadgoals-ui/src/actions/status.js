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
        isLoading: bool
    }
}

export function fetchStatusSuccess(data) {
    return {
        type: 'FETCH_STATUS_SUCCESS',
        data
    }
}

export function fetchStatus() {
    return(dispatch) => {
        axios.get('/api/status').then((data) => {
            if (data.status !== 200) {
                throw Error(data.statusText);
            }

            dispatch(statusIsLoading(false));

            return data;
        })
        .then((response) => response.json())
        .then((data) => dispatch(fetchStatusSuccess(data)))
        .catch((err) => {
            dispatch(fetchStatusError(true));
        })
    }
}