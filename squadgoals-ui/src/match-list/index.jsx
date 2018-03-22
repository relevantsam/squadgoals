import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

import { MatchListItem } from './match-list-item';

const MatchList = ({matches, loading, user}) => {
  return ( 
        <article className="match-list">
            <div className="card">
                <div className="card-content">
                    {loading ? 
                        <div>
                            <p>Loading ...</p>
                        </div>
                        :
                        <section>
                            <p>You've played <strong>{matches.length}</strong> games recently:</p>
                            <section>
                                {matches.map((match) => 
                                    <div className="squad" key={match.id}>
                                        <MatchListItem match={match} user={user} />
                                    </div>
                                )}
                            </section>
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