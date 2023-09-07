import { useEffect, useState } from "react";
import { useBattleSequence } from "../hooks/useBattleSequence";
import { useAIOpponent } from "../hooks/useAIOpponent";
import { Healthbar } from "./Healthbar";
import Card from "./Card";
import EnemyCard from "./EnemyCard";
import CardButtons from "./CardButtons";
import { BattleAnnouncer } from "./BattleAnnouncer";
import { wait } from "../shared/helpers";
import { Movepool } from "../shared/data";

export const Battle = ({ onGameEnd}) => {

    const [sequence, setSequence] = useState({});

    const {
        turn,
        inSequence,
        player,
        playerHealth,
        opponent,
        opponentHealth,
        announcerMessage,
    } = useBattleSequence(sequence);

    const aiChoice = useAIOpponent(turn);

    useEffect(() => {
        if (aiChoice && turn === 1 && !inSequence) {
            setSequence({ turn, mode: aiChoice });
        }
    }, [turn, aiChoice, inSequence]);

    useEffect(() => {
        if (playerHealth === 0 || opponentHealth === 0) {
            (async () => {
                await wait(1000);
                onGameEnd(playerHealth === 0 ? opponent : player);
            })();
        }
    }, [playerHealth, player, opponent, opponentHealth, onGameEnd]);

    return (
        <div className="flex flex-wrap p-5 justify-center align-center">
            <div className="pt-[14rem] px-5 flex">
                <div className="p-2 bg-gray-800 rounded-xl rounded-tr-none bg-opacity-90">
                    <Healthbar hp={playerHealth} maxHp={player.maxHealth} />
                    <div className="flex justify-center">
                        <Card
                            key={player.id}
                            playerId={0}
                            champion={player}
                        />                        
                    </div>
                </div>
                <div className="h-[100px] w-[280px] justify-end align-end p-2 bg-gray-800 rounded-xl rounded-l-none bg-opacity-90">
                    <div className="">
                        <BattleAnnouncer className="px-2" message={ announcerMessage || `O que você, ${player.name} fará?`}/>
                    </div>
                    <div className="w-[260px]">
                    <CardButtons onAttack={() => setSequence({ mode: 'attack', turn })} onHeal={() => setSequence({ mode: 'heal', turn })} onMagic={() => setSequence({ mode: 'magic', turn })} moveA={Movepool[player.moves[0]]} moveB={Movepool[player.moves[1]]} moveC={Movepool[player.moves[2]]}></CardButtons>
                    </div>
                </div>
            </div>
            <div className="overflow pb-[14rem] flex align-center justify-center">
                <div className="h-[100px] w-[280px] justify-center align-center p-2 bg-red-800 rounded-xl rounded-r-none bg-opacity-90">
                    <div className="w-[260px] pt-6">
                    <CardButtons moveA={Movepool[opponent.moves[0]]} moveB={Movepool[opponent.moves[1]]} moveC={Movepool[opponent.moves[2]]}></CardButtons>
                    </div>
                </div>
                <div className="p-2 bg-red-800 rounded-xl rounded-tl-none bg-opacity-90">
                    <Healthbar hp={opponentHealth} maxHp={opponent.maxHealth} />
                    <div className="flex justify-center">
                        <EnemyCard
                            key={opponent.id}
                            playerId={0}
                            champion={opponent}
                            onAttack={() => setSequence({ mode: 'attack', turn })}
                            onHeal={() => setSequence({ mode: 'heal', turn })}
                            onMagic={() => setSequence({ mode: 'magic', turn })}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};