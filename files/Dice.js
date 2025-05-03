import React, { useState } from 'react';

function Dice() {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    setDiceValue(value);
  };

  return (
    <div className="dice">
      <button onClick={rollDice}>Roll Dice</button>
      <p>Dice Value: {diceValue}</p>
    </div>
  );
}

export default Dice;