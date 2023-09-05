import { useEffect, useState } from 'react';
import { attack, heal, wait } from '../shared/helpers';
import { cebollurl, rasputin } from '../shared/characters';

export const useBattleSequence = sequence => {
  const [turn, setTurn] = useState(0);
  const [inSequence, setInSequence] = useState(false);
  const player = rasputin;
  const opponent= cebollurl;
  
  const [announcerMessage, setAnnouncerMessage] = useState('');
  const [playerHealth, setPlayerHealth] = useState(rasputin.maxHealth);
  const [opponentHealth, setOpponentHealth] = useState(cebollurl.maxHealth);

  useEffect(() => {
    const { mode, turn } = sequence;

    if (mode) {
      const attacker = turn === 0 ? player : opponent;
      const receiver = turn === 0 ? opponent : player;

      switch (mode) {
        case 'attack': {
          const damage = attack({ attacker, receiver });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} escolhe atacar!`);
            await wait(1000);

            turn === 0
              ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0));
            await wait(2000);

            setAnnouncerMessage(`Agora é a vez de ${receiver.name}!`);
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
            setAnnouncerMessage(`${attacker.name} escolhe se curar!`);
            await wait(1000);

            setAnnouncerMessage(`${attacker.name} recuperou a vida.`);
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
                ); 
            await wait(2500);

            setAnnouncerMessage(`Agora é a vez de ${receiver.name}!`);
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
  }, [sequence, player, opponent]);

  return {
    turn,
    inSequence,
    player,
    playerHealth,
    opponent,
    opponentHealth,
    announcerMessage,
  };
};