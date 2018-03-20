import React from 'react';
import { connect } from 'react-redux';

import { MatchListItem } from './match-list-item';

const MatchList = ({matches, loading, user}) => {
  return ( 
        <article className="match-list">
            <div className="card">
                <div className="card-content">
                    {loading ? 
                        <p>Loading ...</p> 
                        :
                        <section>
                            <p>You've played <strong>{matches.length}</strong> games recently:</p>
                            <ul>
                                {matches.map((match) => 
                                    <li>
                                        <MatchListItem match={match} user={user} />
                                    </li>
                                )}
                            </ul>
                        </section>
                    }
                </div>
            </div>
        </article>
    );
}

const mapStateToProps = (state) => {
    return {
        matches: state.matches,
        loading: state.matchesAreLoading,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchList);