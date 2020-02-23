import React from 'react'
import './CharacterHeader.scss';

export default function CharacterHeader() {
    return (
        <div className="character-header">
            <div className="character-header__name">
                <div className="form-input-wrap">
                    <input type="text" name="character-name" className="form-input"/>
                    <label htmlFor="character-name">Character name</label>
                </div>
            </div>
            <div className="character-header__info">
                <div className="character-header__info-row">
                    <div className="form-row">
                        <div className="form-input-wrap">
                            <input type="text" className="form-input"/>
                            <label htmlFor="" className="form-input-label">Class & Level</label>
                        </div>
                        <div className="form-input-wrap">
                            <input type="text" className="form-input"/>
                            <label htmlFor="" className="form-input-label">Background</label>
                        </div>
                        <div className="form-input-wrap">
                            <input type="text" className="form-input"/>
                            <label htmlFor="" className="form-input-label">Player Name</label>
                        </div>
                    </div>
                </div>
                <div className="character-header__info-row">
                    <div className="form-row">
                        <div className="form-input-wrap">
                            <input type="text" className="form-input"/>
                            <label htmlFor="" className="form-input-label">Race</label>
                        </div>
                        <div className="form-input-wrap">
                            <input type="text" className="form-input"/>
                            <label htmlFor="" className="form-input-label">Alignment</label>
                        </div>
                        <div className="form-input-wrap">
                            <input type="text" className="form-input"/>
                            <label htmlFor="" className="form-input-label">Experience Points</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
