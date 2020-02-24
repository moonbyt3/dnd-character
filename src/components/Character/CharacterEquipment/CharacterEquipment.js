import React from 'react';
import './CharacterEquipment.scss';

export default function CharacterEquipment() {
    return (
        <div className="character-equipment">
            <div className="character-equipment-wrap">
                <div className="character-equipment__stats">
                    <div className="character-equipment__stats-item">
                        <span className="character-equipment__stats-item-text">CP</span>
                        <input type="text" className="character-equipment__stats-item-input"/>
                    </div>
                    <div className="character-equipment__stats-item">
                        <span className="character-equipment__stats-item-text">SP</span>
                        <input type="text" className="character-equipment__stats-item-input"/>
                    </div>
                    <div className="character-equipment__stats-item">
                        <span className="character-equipment__stats-item-text">EP</span>
                        <input type="text" className="character-equipment__stats-item-input"/>
                    </div>
                    <div className="character-equipment__stats-item">
                        <span className="character-equipment__stats-item-text">GP</span>
                        <input type="text" className="character-equipment__stats-item-input"/>
                    </div>
                    <div className="character-equipment__stats-item">
                        <span className="character-equipment__stats-item-text">PP</span>
                        <input type="text" className="character-equipment__stats-item-input"/>
                    </div>
                </div>
                <div className="character-equipment__textarea">
                    <textarea name="" id="" cols="30" rows="19"></textarea>
                </div>
            </div>
            <span className="character-attack-spellcasting__text">Equipment</span>
        </div>
    )
}
