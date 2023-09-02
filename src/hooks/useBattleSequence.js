import { useEffect, useState } from 'react';
import { BetaArsenal, Enemy } from '../shared/data';
import { attack, heal, wait } from '../shared/helpers';
import { playerStats, opponentStats } from '../shared/characters';

export const useBattleSequence = sequence => {
  const [turn, setTurn] = useState(0);
  const [inSequence, setInSequence] = useState(false);

  const [playerHealth, setPlayerHealth] = useState(/*BetaArsenal[0].stats.hp + BetaArsenal[1].stats.hp + BetaArsenal[2].stats.hp*/ playerStats.maxHealth);
  const [opponentHealth, setOpponentHealth] = useState(
    //Enemy[0].stats.hp
    opponentStats.maxHealth
  );

  const [announcerMessage, setAnnouncerMessage] = useState('');

  useEffect(() => {
    const { mode, turn } = sequence;

    if (mode) {
      const attacker = turn === 0 ? playerStats : opponentStats;
      const receiver = turn === 0 ? opponentStats : playerStats;

      switch (mode) {
        case 'attack': {
          const damage = attack({ attacker, receiver });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} has chosen to attack!`);
            await wait(1000);

            turn === 0
              ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
            await wait(2000);

            setAnnouncerMessage(`Now it's ${receiver.name} turn!`);
            await wait(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }

        case 'heal': {
          const recovered = heal({ receiver: attacker });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} has chosen to heal!`);
            await wait(1000);

            setAnnouncerMessage(`${attacker.name} has recovered health.`);
            turn === 0
              ? setPlayerHealth(h =>
                  h + recovered <= attacker.maxHealth
                    ? h + recovered
                    : attacker.maxHealth,
                )
              : setOpponentHealth(h =>
                  h + recovered <= attacker.maxHealth
                    ? h + recovered
                    : attacker.maxHealth,
                ); // We don't want to set HP more than the max
            await wait(2500);

            setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
            await wait(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }

        default:
          break;
      }
    }
  }, [sequence]);

  return {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    announcerMessage,
  };
};