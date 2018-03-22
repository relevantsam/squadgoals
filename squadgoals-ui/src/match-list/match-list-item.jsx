import React from 'react';

export const MatchListItem = ({match, user}) => {
    const roster = match.gameMode !== 'solo' ? match.rosters.find((r) => r.participants.find(p => p.stats.name === user.name)): [];
    const colors = ["yellow", "red", "blue", "green"];
    const squadMember = (counter, name) => (
        <div className="column squad-member is-half" key={`${counter}-${name}`}>
            <div className={`squad-member__icon ${colors[counter]}`}>{counter + 1}</div>&nbsp;{name}
        </div>
    );
    const renderMembers = (participants) => {
        let results = [];
        for(var i = 0; i < participants.length; i+=2) {
            results.push(
                <div className="columns" key={participants[i].id}>
                    {squadMember(i, participants[i].stats.name)}
                    {squadMember(i + 1, participants[i + 1].stats.name)}
                </div>
            );
        }
        return results;
    }
    return (
        <div>
            <h3 className="squad-game-mode">{match.gameMode.toUpperCase().split('-')[0]} <small>({match.gameMode.toUpperCase().split('-')[1]})</small> {roster.won === "true" ? "WINNERS" : ""}</h3>
            {match.gameMode !== 'solo' ?
                <section className="squad-members">
                    {renderMembers(roster.participants)}
                </section>
            :
            ""
            }
        </div>
    )
};