import { useState } from "react";
import { useBattleSequence } from "../hooks/useBattleSequence.js";
import { Player, Movepool } from "../shared/data.js";
import CardButtons from "./CardButtons.js";

const Card = ({ id, playerId, arsenal, onAttack }) => {

  const [sequence, setSequence] = useState({});

  const {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    playerAnimation,
    opponentAnimation,
    announcerMessage,
  } = useBattleSequence(sequence);

  return (
    <div className="w-[10.1rem] h-[18.1rem] transition-transform hover:-translate-y-5 ease-in-out delay-50 bg-fuchsia-900 rounded-lg m-[10px] border border-black hover:border-slate-200 group">
      <div className={`bg-cover rounded-lg w-[10rem] h-[15rem] ${arsenal[id].splashart}`} alt={arsenal[id].splashart} >
        <div className={`rounded-lg bg-cover w-[10rem] h-[17.8rem] ${Player[playerId].border}`}>
          <div className={`text-xl subpixel-antialiased italic text-white`}>
            <div className="flex flex-col justify-between align-center">
              <div className="flex flex-row justify-between">
                <p className="font-bold pt-[4px] pl-[10px] text-black">{/*{arsenal[id].number} */}</p>
              </div>
              <div className="p-[10px] align-center">
                <div className={`-mt-[1rem] font-extrabold`}>
                  <span className="pl-[5px]">
                    {/*<span className="text-7xl text-gray-100">{arsenal[id].number}</span>*/}
                  </span>
                </div>
              </div>
              <div className="h-[8.4rem]" />
              <div className="justify-end align-center flex -pt-[10px]">
                <span className="font-bold text-white pt-[32px] pr-[22px]"> {arsenal[id].name}</span>
              </div>
              <div className="justify-end text-xs text-yellow-400 p-[5px] m-[2px]">
                {/* <span className="text-white font-extrabold">{arsenal[id].number}</span>*/}
                <p>
                  {arsenal[id].class[0]}
                  {arsenal[id].class[1] ? (' | ') : ('')}
                  {arsenal[id].class[1]}
                </p>
                <span className="text-xs text-fuchsia-700">{arsenal[id].description}</span>
                <div className="hidden group-hover:block">
                  <CardButtons className="flex" onAttack={onAttack} moveA={Movepool[arsenal[id].moves[0]]} moveB={Movepool[arsenal[id].moves[1]]}></CardButtons>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;