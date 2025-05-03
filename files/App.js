import React from 'react';
import './styles.css';
import Board from './Board';
import Dice from './Dice';
import Player from './Player';
import GameLogic from './GameLogic';

function App() {
  return (
    <div className="app">
      <h1>Snake and Ladder</h1>
      <div className="game-container">
        <Board />
        <div className="game-controls">
          <Dice />
          <Player />
        </div>
      </div>
    </div>
  );
}

export default App;