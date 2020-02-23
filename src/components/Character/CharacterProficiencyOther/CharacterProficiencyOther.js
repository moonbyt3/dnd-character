import React from 'react';
import './CharacterProficiencyOther.scss';

export default function CharacterProficiencyOther() {
    return (
        <div className="character-proficiency-other">
            <textarea className="character-proficiency-other__textarea" name="characterProficiencyOther" id="characterProficiencyOther" cols="30" rows="16"></textarea>
            <span className="character-proficiency-other__text">Other Proficiencies & Languages</span>
        </div>
    )
}
