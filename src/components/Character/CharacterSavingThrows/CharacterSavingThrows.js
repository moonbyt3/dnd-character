import React from 'react';
import './CharacterSavingThrows.scss';

export default function CharacterSavingThrows() {
    return (
        <div className="check-group character-saving-throws">
            <span className="check-input">
                <input type="checkbox" name="saving-throw" className="check-input__checkbox" id=""/>
                <span className="checkmark"></span>
                <div className="check-input__input-wrap">
                    <input type="text" className="check-input__input"/>
                </div>
                <span className="check-input__text">Strength</span>
            </span>
            <span className="check-input">
                <input type="checkbox" name="saving-throw" className="check-input__checkbox" id=""/>
                <span className="checkmark"></span>
                <div className="check-input__input-wrap">
                    <input type="text" className="check-input__input"/>
                </div>
                <span className="check-input__text">Dexterity</span>
            </span>
            <span className="check-input">
                <input type="checkbox" name="saving-throw" className="check-input__checkbox" id=""/>
                <span className="checkmark"></span>
                <div className="check-input__input-wrap">
                    <input type="text" className="check-input__input"/>
                </div>
                <span className="check-input__text">Constitution</span>
            </span>
            <span className="check-input">
                <input type="checkbox" name="saving-throw" className="check-input__checkbox" id=""/>
                <span className="checkmark"></span>
                <div className="check-input__input-wrap">
                    <input type="text" className="check-input__input"/>
                </div>
                <span className="check-input__text">Inteligence</span>
            </span>
            <span className="check-input">
                <input type="checkbox" name="saving-throw" className="check-input__checkbox" id=""/>
                <span className="checkmark"></span>
                <div className="check-input__input-wrap">
                    <input type="text" className="check-input__input"/>
                </div>
                <span className="check-input__text">Wisdom</span>
            </span>
            <span className="check-input">
                <input type="checkbox" name="saving-throw" className="check-input__checkbox" id=""/>
                <span className="checkmark"></span>
                <div className="check-input__input-wrap">
                    <input type="text" className="check-input__input"/>
                </div>
                <span className="check-input__text">Charisma</span>
            </span>
            <span className="check-group__text">Saving Throws</span>
        </div>
    )
}
