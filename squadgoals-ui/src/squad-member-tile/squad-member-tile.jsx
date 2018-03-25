import React from 'react';

import { PLAYER_COLORS } from '../constants';

export const SquadMemberTile = ({number, name}) => {
    return (
        <div className="column squad-member is-half">
            <div className={`squad-member__icon ${PLAYER_COLORS[number]}`}>{number + 1}</div>&nbsp;{name}
        </div>
    )
}