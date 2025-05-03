// This file will contain the logic for snakes, ladders, and player movement
const snakes = {
  17: 7,
  54: 34,
  62: 19,
  98: 79,
};

const ladders = {
  3: 22,
  6: 25,
  20: 29,
  57: 76,
};

function movePlayer(position, diceValue) {
  let newPosition = position + diceValue;

  // Check for snakes
  if (snakes[newPosition]) {
    newPosition = snakes[newPosition];
  }

  // Check for ladders
  if (ladders[newPosition]) {
    newPosition = ladders[newPosition];
  }

  // Ensure the player does not exceed position 100
  return newPosition > 100 ? position : newPosition;
}

export { movePlayer };