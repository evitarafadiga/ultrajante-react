import { Player, Movepool } from "../shared/data.js";
import CardButtons from "./CardButtons.js";

const Card = ({ playerId, champion, onAttack, onHeal }) => {

  return (
    <div className="w-[10.1rem] h-[18.1rem] transition-transform hover:-translate-y-5 ease-in-out delay-50 bg-fuchsia-900 rounded-lg m-[10px] border border-black hover:border-slate-200 group">
      <div className={`bg-cover rounded-lg w-[10rem] h-[15rem] ${champion.img}`} alt={'Splash art de '+ champion.img} >
        <div className={`rounded-lg bg-cover w-[10rem] h-[17.8rem] ${Player[playerId].border}`}>
          <div className={`text-xl subpixel-antialiased italic text-white`}>
            <div className="flex flex-col justify-between align-center">
              <div className="flex flex-row justify-between">
                <p className="font-bold pt-[4px] pl-[10px] text-black">{}</p>
              </div>
              <div className="p-[10px] align-center">
                <div className={`-mt-[1rem] font-extrabold`}>
                  <span className="pl-[5px]">
                    {/*<span className="text-7xl text-gray-100"> </span>*/}
                  </span>
                </div>
              </div>
              <div className="h-[8.4rem]" />
              <div className="justify-end align-center flex -pt-[10px]">
                <span className="font-bold text-white pt-[32px] pr-[22px]"> {champion.name}</span>
              </div>
              <div className="justify-end text-xs text-yellow-400 p-[5px] m-[2px]">
                {/* <span className="text-white font-extrabold"> </span>*/}
                <p>
                  {champion.class[0]}
                  {champion.class[1] ? (' | ') : ('')}
                  {champion.class[1]}
                </p>
                <span className="text-xs text-fuchsia-700">{champion.description}</span>
                <div className="hidden group-hover:block">
                  <CardButtons className="flex" onAttack={onAttack} onHeal={onHeal} moveA={Movepool[champion.moves[0]]} moveB={Movepool[champion.moves[1]]}></CardButtons>
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