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
            <div className="squad-game-info">
                <div className="squad-game-place">
                    {roster.stats.rank}<small className="suffix">{calculateSuffix(roster.stats.rank)}</small>
                </div>
                <div className="squad-game-mode">                    
                    {gameMode.toUpperCase().split('-')[0]} {gameMode.toUpperCase().split('-')[1] ? "FPP": "TPP"}
                </div>
            </div>
            <section className="squad-members">
                {renderMembers(roster.participants)}
            </section>
        </div>
    )
};