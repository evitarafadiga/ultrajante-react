import { Player, BetaArsenal, Movepool } from "../data.js";
import CardButtons from "./CardButtons.js";

const Card = ({ id, playerId }) => {
  return (
    <div className="bg-fuchsia-900 rounded-lg m-[10px] border border-black hover:border-slate-200 group">
      <div className={`bg-cover rounded-lg w-[14rem] h-[25rem] ${BetaArsenal[id].splashart}`} alt={BetaArsenal[id].splashart} >
        <div className={`rounded-lg bg-cover w-[14rem] h-[25rem] ${Player[playerId].border}`}>
          <div className={`text-xl subpixel-antialiased italic text-white`}>
            <div className="flex flex-col justify-between align-center">
              <div className="flex flex-row justify-between">
                <p className="font-bold pt-[4px] pl-[10px] text-black">{/*{BetaArsenal[id].number} */}</p>
                  
              </div>
              <div className="h-[9rem]"/>
              <div className="p-[10px] align-center">
                <div className={`-mt-[1rem] font-extrabold`}>
                  <span className="pl-[5px]">
                    {/*<span className="text-7xl text-gray-100">{BetaArsenal[id].number}</span>*/}
                  </span>
                </div>
              </div>
              <div className="h-[6.5rem]"/>
              <div className="justify-end align-center flex -pt-[10px]">
                <span className="font-thin text-white text-2xl pt-[32px] pr-[22px]"> {BetaArsenal[id].name}</span>
              </div>
              <div className="justify-end text-sm text-yellow-400 p-[5px] m-[2px]">
                {/* <span className="text-white font-extrabold">{BetaArsenal[id].number}</span>*/}
                <p>
                  {BetaArsenal[id].class[0]}
                  {BetaArsenal[id].class[1] ? (' | ') : ('')}
                  {BetaArsenal[id].class[1]}
                </p>
                <span className="font-extrabold text-xs text-fuchsia-700">{BetaArsenal[id].description}</span>
                <CardButtons className="" moveA={Movepool[BetaArsenal[id].moves[0]]} moveB={Movepool[BetaArsenal[id].moves[1]]}></CardButtons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;