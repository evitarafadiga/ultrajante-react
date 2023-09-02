import { useEffect, useState } from "react";
import useRandom from "./hooks/useRandom";
import { Messages } from "./shared/data";
import { Topbar } from "./components/TopBar";
import { Battle } from "./components/Battle";
import { EndMenu } from "./components/EndMenu";

function App() {

  const { randomValueFromArray } = useRandom();
  
  const [winner, setWinner] = useState();
  const [mode, setMode] = useState('battle');

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
          <button onClick={() => setMode('battle')} type="button" className="animate-pulse -mt-[20rem] text-bold text-xl w-[200px] h-[80px] bg-gradient-to-r from-red-900 to-red-700 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 border-none rounded-xl">
            Jogar
          </button>
        </div>
      </>}

      {mode === 'battle' && <>
        <div className="min-h-screen bg-hero-pattern bg-cover text-white">
          <Battle onGameEnd={winner => {
            setWinner(winner);
            setMode('gameOver');
          }}></Battle>
        </div>
      </>}

      {mode === 'gameOver' && !!winner && <>
        <div className="min-h-screen bg-hero-pattern bg-cover text-white">
          <Topbar />
          <div className="flex align-center justify-center flex-column w-full h-full p-[20px]">
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