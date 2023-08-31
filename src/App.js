import CardsWrapper from "./components/CardsWrapper";
import { useState } from "react";
import useRandom from "./hooks/useRandom";
import { Messages } from "./data";

function App() {

  const { randomValueFromArray } = useRandom();

  const [mode, setMode] = useState('start');

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
        <div className="flex align-center justify-center flex-column w-full h-full p-[20px]">
          <div className="bg-gray-800 rounded-xl p-3 bg-opacity-90">
            <div className="">
              <CardsWrapper className="card-wrapper" cardsNumber="3" />
            </div>
          </div>
        </div>
      </div>
      </>}
      {mode === 'gameOver' && <>
        <div className="min-h-screen bg-hero-pattern bg-cover text-white">
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