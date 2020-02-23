import React from 'react';
import './CharacterCombatStats.scss';

export default function CharacterCombatStats() {
    return (
        <div className="character-combat-stats">
            <div className="character-combat-stats-row">
                <div className="character-combat-stats__armor">
                    <input type="text" className="character-combat-stats__input"/>
                    <span className="character-combat-stats__text">Armor <br /> Class</span>
                </div>
            </div>
        </div>
    )
}
