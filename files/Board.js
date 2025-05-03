import React from 'react';
import './styles.css';

function Board() {
  // Create a 10x10 grid for the game board
  const cells = Array.from({ length: 100 }, (_, index) => 100 - index);

  return (
    <div className="board">
      {cells.map((cell) => (
        <div key={cell} className="cell">
          {cell}
        </div>
      ))}
    </div>
  );
}

export default Board;