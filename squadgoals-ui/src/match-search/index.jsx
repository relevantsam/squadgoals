import React from 'react';
import { connect } from 'react-redux';
import { updateUser, fetchMatches } from '../actions';

const _ = require('lodash');

const MatchSearch = ({searchActive, user, fetchMatchesForUser, updateUser}) => {
    const search = (username) => {
        updateUser({...user, name: username})
        searchActive()
        fetchMatchesForUser(`${user.platform}-${user.region}`, username);
    }
    const debouncedSearch = _.debounce((searchValue) => search(searchValue), 750);
    return ( 
        <article className="match-search">
            <div className="card">
                <div className="card-content">
                    <form>
                        <div className="columns">
                            <div className="field column">
                                <label className="label">Enter your PUBG Name:</label>
                                <div className="control">
                                    <div className="text">
                                        <input className="input" type="text" placeholder="ChickenDinnerWinner" onChange={(e) => debouncedSearch(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </article>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        fetchMatchesForUser: (shard, user) => dispatch(fetchMatches(shard, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchSearch);