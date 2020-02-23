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
                <div className="character-combat-stats__initiative">
                    <input type="text" className="character-combat-stats__input"/>
                    <span className="character-combat-stats__text">Initiative</span>
                </div>
                <div className="character-combat-stats__speed">
                    <input type="text" className="character-combat-stats__input"/>
                    <span className="character-combat-stats__text">Speed</span>
                </div>
            </div>
            <div className="character-combat-stats__hitpoints">
                <div className="character-combat-stats__hitpoints-current">
                    <div className="character-combat-stats__hitpoints-current-wrap">
                        <label className="character-combat-stats__hitpoints-current-text" htmlFor="hitpointsMax">Hit Point Maximum</label>
                        <input className="form-input-underline" type="text" name="hitpointsMax" id="hitpointsMax"/>
                    </div>
                    <textarea className="character-combat-stats__hitpoints-current-textarea" name="hitpointsMaxText" id="hitpointsMaxText" cols="30" rows="3"></textarea>
                    <span className="character-combat-stats__text">Current Hit Points</span>
                </div>
                <div className="character-combat-stats__hitpoints-temp">
                    <textarea className="character-combat-stats__hitpoints-temp-textarea" name="" id="" cols="30" rows="4"></textarea>
                    <span className="character-combat-stats__text">Temporary Hit Points</span>
                </div>
            </div>
            <div className="character-combat-stats-row">
                <div className="character-combat-stats__hit">
                    <div className="flex">
                        <label className="form-input-underline-label" htmlFor="hitDiceTotal">Total</label>
                        <input className="form-input-underline" type="text" name="hitDiceTotal" id="hitDiceTotal"/>
                    </div>
                    <span className="character-combat-stats__text">Hit Dice</span>
                </div>
                <div className="character-combat-stats__death-saves">
                    <textarea className="character-combat-stats__death-saves-textarea" name="" id="" cols="30" rows="4"></textarea>
                    <span className="character-combat-stats__text">Death Saves</span>
                </div>
            </div>
        </div>
    )
}
