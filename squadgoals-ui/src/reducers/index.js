import { combineReducers } from 'redux';
import * as MatchesReducers from './matches';
import * as StatusReducers from './status';
import * as UserReducers from './user';

const reducers = combineReducers({
    ...StatusReducers,
    ...UserReducers,
    ...MatchesReducers
});

export { reducers };