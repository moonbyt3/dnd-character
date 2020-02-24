import React from 'react';
import './scss/main.scss';

import CharacterHeader from './components/Character/CharacterHeader/CharacterHeader';
import CharacterStats from './components/Character/CharacterStats/CharacterStats';
import CharacterInspiration from './components/Character/CharacterInspiration/CharacterInspiration';
import CharacterProficiency from './components/Character/CharacterProficiency/CharacterProficiency';
import CharacterSavingThrows from './components/Character/CharacterSavingThrows/CharacterSavingThrows';
import CharacterSkillScores from './components/Character/CharacterSkillScores/CharacterSkillScores';
import CharacterPassiveWisdom from './components/Character/CharacterPassiveWisdom/CharacterPassiveWisdom';
import CharacterProficiencyOther from './components/Character/CharacterProficiencyOther/CharacterProficiencyOther';
import CharacterCombatStats from './components/Character/CharacterCombatStats/CharacterCombatStats';
import CharacterAttacksSpellcasting from './components/Character/CharacterAttacksSpellcasting/CharacterAttacksSpellcasting';
import CharacterEquipment from './components/Character/CharacterEquipment/CharacterEquipment';

function App() {
  return (
    <div className="container">
      <CharacterHeader />
      <div className="character-body">
        <div className="character-body-col">
          <div className="character-body-col-group">
            <CharacterStats />
            <div className="character-body-stats-col">
              <CharacterInspiration />
              <CharacterProficiency />
              <CharacterSavingThrows />
              <CharacterSkillScores />
            </div>
          </div>
          <CharacterPassiveWisdom />
          <CharacterProficiencyOther />
        </div>
        <div className="character-body-col">
          <CharacterCombatStats />
          <CharacterAttacksSpellcasting />
          <CharacterEquipment />
        </div>

      </div>
    </div>
  );
}

export default App;
