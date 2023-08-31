import { useState } from "react";
import { useEffect } from "react";

export function userChoice(turn) {

}

export function aiChoice(turn) {

  if(turn % 3 == 0) {

  }

}

export const gameIsOver = (turn) => {
  if(turn <= 0) return true;
}

function setCards(turn, choice) {

}

function dealDamage(stat, target) {
  target -= stat;
}

function healDamage(stat, target) {
  target += stat;
}

const enum PLAYER_TYPES {
  COMPUTER, HUMAN,
}

const gameConfig = [
  PLAYER_TYPES.HUMAN,
  PLAYER_TYPES.COMPUTER
];

const nextTurn = (turn) => {
  return (turn % gameConfig.length) + 1;
};

export const Game = () => {
  const [turn, setTurn] = useState(1);

  const actions = (turn) => {
    if (gameIsOver(turn)) {
      return;
    }

    const type = gameConfig[turn - 1];

    let choice;

    switch (type) {
      case PLAYER_TYPES.HUMAN: {
        choice = async() => { await userChoice(turn)};
        break;
      }

      case PLAYER_TYPES.COMPUTER: {
        choice = aiChoice(turn);
        break;
      }
    }

    setCards(turn, choice);
    setTurn(nextTurn(turn));
  };

  useEffect(() => {
    actions(turn);
  }, [turn]);
};

export default Game;