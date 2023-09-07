import { useEffect, useState } from "react";
import useRandom from "./hooks/useRandom";
import { Messages } from "./shared/data";
import { Battle } from "./components/Battle";
import { EndMenu } from "./components/EndMenu";
import CardsWrapper from "./components/CardsWrapper";

function App() {

  const { randomValueFromArray } = useRandom();

  const [winner, setWinner] = useState('');
  const [mode, setMode] = useState('start');
  const [battleOpponent, setBattleOpponent] = useState('');

  function op(mode, battleOpponent) {
    console.log('battleOpponent', battleOpponent);
    console.log('mode', mode);
    setMode('battle');
    setBattleOpponent(battleOpponent);
  }

  useEffect(() => {
    if (mode === 'battle') {
      setWinner(undefined);
    }
  }, [mode]);

  return (
    <div>
      {mode === 'start' && <>
        <div className="min-h-screen bg-hero-pattern bg-cover text-white">
        </div>
        <div className="flex justify-center align-center">
          <span className="-mt-[34rem] text-bold text-5xl text-yellow-400 fixed">
            {randomValueFromArray(Messages).name}
          </span>
          <button onClick={() => setMode('select')} type="button" className="animate-pulse -mt-[20rem] text-bold text-xl w-[200px] h-[80px] bg-gradient-to-r from-red-900 to-red-700 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 border-none rounded-xl">
            Jogar
          </button>
        </div>
      </>}

      {mode === 'select' && <>
        <div className="min-h-screen bg-hero-pattern bg-cover text-white">
          <div className="p-5 justify-center flex">
            <div className="p-2 bg-gray-800 rounded-xl bg-opacity-90">
              <div className="justify-center">
                <div className="flex flex-wrap p-5 h-[80px]">
                  <span className="text-bold text-3xl text-yellow-400 fixed">
                    Selecione um oponente...
                  </span>
                </div>
                <div>
                  <CardsWrapper 
                  cardsNumber={4} 
                  setOpponent={battleOpponent => {
                    op('battle', battleOpponent);
                  }} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </>}

      {mode === 'battle' && <>
        <div className="min-h-screen bg-hero-pattern bg-cover text-white">
          <Battle
            onGameEnd={winner => {
              setWinner(winner);
              setMode('gameOver');
            }}
            battleOpponent={battleOpponent}
          />
        </div>
      </>}

      {mode === 'gameOver' && !!winner && <>
        <div className="min-h-screen bg-hero-pattern bg-cover text-white">
          <div className="flex align-center justify-center flex-column w-full h-full p-[150px]">
            <div className="bg-gray-800 rounded-xl p-3 bg-opacity-90">
              <div className="">
                GAME OVER
                <EndMenu winner={winner} onStartClick={() => setMode('battle')} />
              </div>
            </div>
          </div>
        </div>
      </>}
    </div>
  );
}

export default App;