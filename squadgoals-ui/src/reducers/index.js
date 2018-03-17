import { combineReducers } from 'redux';

import { statusIsLoading, fetchingStatusHasErrored, status } from './status';

const reducers = combineReducers({
    statusIsLoading,
    fetchingStatusHasErrored,
    status
});

export { reducers };