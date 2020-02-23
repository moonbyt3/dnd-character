import React from 'react';
import './CharacterAttacksSpellcasting.scss';

export default function CharacterAttacksSpellcasting() {
    return (
        <div className="character-attack-spellcasting">
            <div className="character-attack-spellcasting__table">
                <div className="character-attack-spellcasting__table-head">
                    <span className="character-attack-spellcasting__table-item character-attack-spellcasting__table-head-text">Name</span>
                    <span className="character-attack-spellcasting__table-item character-attack-spellcasting__table-head-text">Atk Bonus</span>
                    <span className="character-attack-spellcasting__table-item character-attack-spellcasting__table-head-text">Damage/Type</span>
                </div>
                <div className="character-attack-spellcasting__table-body">
                    <div className="character-attack-spellcasting__table-body-row">
                        <input className="character-attack-spellcasting__table-item" name="atkSpellName1" id="atkSpellName1"/>
                        <input className="character-attack-spellcasting__table-item" name="atkSpellBonus1" id="atkSpellBonus1"/>
                        <input className="character-attack-spellcasting__table-item" name="atkSpellDmg1" id="atkSpellDmg1"/>
                    </div>
                    <div className="character-attack-spellcasting__table-body-row">
                        <input className="character-attack-spellcasting__table-item" name="atkSpellName2" id="atkSpellName2"/>
                        <input className="character-attack-spellcasting__table-item" name="atkSpellBonus2" id="atkSpellBonus2"/>
                        <input className="character-attack-spellcasting__table-item" name="atkSpellDmg2" id="atkSpellDmg2"/>
                    </div>
                    <div className="character-attack-spellcasting__table-body-row">
                        <input className="character-attack-spellcasting__table-item" name="atkSpellName3" id="atkSpellName3"/>
                        <input className="character-attack-spellcasting__table-item" name="atkSpellBonus3" id="atkSpellBonus3"/>
                        <input className="character-attack-spellcasting__table-item" name="atkSpellDmg3" id="atkSpellDmg3" />
                    </div>
                </div>
                <textarea className="character-attack-spellcasting__textarea" name="" id="" cols="30" rows="13"></textarea>
                <span className="character-attack-spellcasting__text">Attack & Spellcasting</span>
            </div>
        </div>
    )
}
