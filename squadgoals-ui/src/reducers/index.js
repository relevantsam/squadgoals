import { combineReducers } from 'redux';

import { statusIsLoading, fetchingStatusHasErrored, status } from './status';
import { user } from './user';

const reducers = combineReducers({
    statusIsLoading,
    fetchingStatusHasErrored,
    status,
    user
});

export { reducers };