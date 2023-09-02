import CardsWrapper from "./components/CardsWrapper";
import { useEffect, useState } from "react";
import useRandom from "./hooks/useRandom";
import BetaArsenal, { Enemy, Messages } from "./shared/data";
import { Topbar } from "./components/TopBar";
import { Healthbar } from "./components/Healthbar";
import { useBattleSequence } from "./hooks/useBattleSequence";
import { useAIOpponent } from "./hooks/useAIOpponent";
import { useTypedMessage } from "./hooks/useTypedMessage";
import { wait } from "./shared/helpers";
import { opponentStats, playerStats } from "./shared/characters";

function App() {

  const message = 'This is a message';
  const onGameEnd = '';

  const { randomValueFromArray } = useRandom();

  const [mode, setMode] = useState('battle');

  const [sequence, setSequence] = useState({});

  const {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
  } = useBattleSequence(sequence);

  const aiChoice = useAIOpponent(turn);
  const typedMessage = useTypedMessage(message);

  useEffect(() => {
    if (aiChoice && turn === 1 && !inSequence) {
      setSequence({ turn, mode: aiChoice });
    }
  }, [turn, aiChoice, inSequence]);

  useEffect(() => {
    if (playerHealth === 0 || opponentHealth === 0) {
      (async () => {
        await wait(1000);
        onGameEnd(playerHealth === 0 ? opponentStats : playerStats);
      })();
    }
  }, [playerHealth, opponentHealth, onGameEnd]);

  return (
    <div>
      {mode === 'start' && <>
        <div className="min-h-screen bg-hero-pattern bg-cover text-white">
        </div>
        <div className="flex justify-center align-center">
          <span className="-mt-[34rem] text-bold text-5xl text-yellow-400 fixed">
            {randomValueFromArray(Messages).name}
          </span>
          <button onClick={() => setMode('battle')} type="button" className="animate-pulse -mt-[20rem] text-bold text-xl w-[200px] h-[80px] bg-gradient-to-r from-red-900 to-red-700 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 border-none rounded-xl">
            Jogar
          </button>
        </div>
      </>}

      {mode === 'battle' && <>
        <div className="min-h-screen bg-hero-pattern bg-cover text-white">
          <div className="px-5 w-screen h-screen py-5 justify-center align-center">
            <div className="flex align-center justify-center py-[10px]">
              <Healthbar width={600} datatotal={100} datavalue={100} />
              <div className="bg-red-800 rounded-xl p-3 bg-opacity-90">
                <div className="flex justify-end">
                  <CardsWrapper className="block" cardsNumber="1" arsenal={Enemy} isEnemy={true} />
                </div>
                <span>{typedMessage}</span>
              </div>
              <div className="absolute px-5 pt-[12rem] pr-[30rem] flex align-center justify-center py-[10px]">
                <div className="bg-gray-800 rounded-xl p-3 bg-opacity-90">
                  <Healthbar width={200} datatotal={100} datavalue={100} />
                  <div className="flex justify-start">
                    <CardsWrapper className="" cardsNumber="3" arsenal={BetaArsenal} isEnemy={false} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>}

      {mode === 'gameOver' && <>
        <div className="min-h-screen bg-hero-pattern bg-cover text-white">
          <Topbar />
          <div className="flex align-center justify-center flex-column w-full h-full p-[20px]">
            <div className="bg-gray-800 rounded-xl p-3 bg-opacity-90">
              <div className="">
                GAME OVER
              </div>
            </div>
          </div>
        </div>
      </>}
    </div>
  );
}

export default App;