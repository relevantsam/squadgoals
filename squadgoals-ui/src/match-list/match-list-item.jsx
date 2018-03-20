import React from 'react';

export const MatchListItem = ({match, user}) => {
    const roster = match.gameMode !== 'solo' ? match.rosters.find((r) => r.participants.find(p => p.stats.name === user.name)): [];
    return (
        <p>
            <strong>{match.gameMode.toUpperCase()}</strong>
            {match.gameMode !== 'solo' ? 
                <span><span> - </span>
                    {roster
                        .participants.map(p => p.stats.name !== user.name ?
                            <span>{p.stats.name} </span> : ""
                        )
                    }
                </span>
            :
            ""
            }
        </p>
    )
};