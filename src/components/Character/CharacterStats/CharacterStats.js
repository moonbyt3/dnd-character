import React from 'react';
import './CharacterStats.scss';

import statBackground from '../../../img/stat-box.svg';

export default function CharacterStats() {
    return (
        <div className="character-stats">
            <div className="character-stats__item">
                <label htmlFor="" className="character-stats__item-label">Strength</label>
                <input type="text" className="character-stats__item-input"/>
            </div>
            <div className="character-stats__item">
                <label htmlFor="" className="character-stats__item-label">Dexterity</label>
                <input type="text" className="character-stats__item-input"/>
            </div>
            <div className="character-stats__item">
                <label htmlFor="" className="character-stats__item-label">Constitution</label>
                <input type="text" className="character-stats__item-input"/>
            </div>
            <div className="character-stats__item">
                <label htmlFor="" className="character-stats__item-label">Inteligence</label>
                <input type="text" className="character-stats__item-input"/>
            </div>
            <div className="character-stats__item">
                <label htmlFor="" className="character-stats__item-label">Wisdom</label>
                <input type="text" className="character-stats__item-input"/>
            </div>
            <div className="character-stats__item">
                <label htmlFor="" className="character-stats__item-label">Charisma</label>
                <input type="text" className="character-stats__item-input"/>
            </div>
        </div>
    )
}
