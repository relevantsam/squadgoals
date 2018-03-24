import React from 'react';
import { SquadMemberTile } from '../squad-member-tile/squad-member-tile';

export const MatchListItem = ({matchId, roster, gameMode, user}) => {
    const renderMembers = (participants) => {
        let results = [];
        for(var i = 0; i < participants.length; i+=2) {
            results.push(
                <div className="columns" key={participants[i].id}>
                    <SquadMemberTile key={`${i}-${participants[i].stats.name}`} number={i} name={participants[i].stats.name}/>
                    { participants.length >= i + 2 ? 
                        <SquadMemberTile key={`${i + 1}-${participants[i + 1].stats.name}`} number={i + 1} name={participants[i + 1].stats.name}/> 
                        : ""}
                </div>
            );
        }
        return results;
    }
    const calculateSuffix = (n) => {
        const s=["th","st","nd","rd"],
        v = n % 100;
        return (s[(v - 20) % 10] || s[v] || s[0]);
    }
    return (
        <div>
            <h3 className="squad-game-mode">{gameMode.toUpperCase().split('-')[0]} <small>
                ({gameMode.toUpperCase().split('-')[1] ? 
                    <span>1<sup>st</sup> </span>: <span>3<sup>rd</sup> </span>} person)</small> -
                    <span>{roster.stats.rank}<sup>{calculateSuffix(roster.stats.rank)}</sup></span>
            </h3>
            <section className="squad-members">
                {renderMembers(roster.participants)}
            </section>
        </div>
    )
};