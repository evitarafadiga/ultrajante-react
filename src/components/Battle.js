import { useEffect, useState } from "react";
import { useBattleSequence } from "../hooks/useBattleSequence";
import { useAIOpponent } from "../hooks/useAIOpponent";
import { Healthbar } from "./Healthbar";
import Card from "./Card";
import EnemyCard from "./EnemyCard";
import { BattleAnnouncer } from "./BattleAnnouncer";
import { wait } from "../shared/helpers";

export const Battle = ({ onGameEnd }) => {

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
        <div className="flex p-5 justify-center align-center">
            <div className="pt-[14rem] px-5 flex align-center justify-center">
                <div className="p-2 bg-gray-800 rounded-xl bg-opacity-90">
                    <Healthbar hp={playerHealth} maxHp={player.maxHealth} />
                    <div className="flex justify-start">
                        <Card
                            key={player.id}
                            playerId={0}
                            champion={player}
                            onAttack={() => setSequence({ mode: 'attack', turn })}
                            onHeal={() => setSequence({ mode: 'heal', turn })}
                        />
                    </div>
                    <BattleAnnouncer
                        message={
                            announcerMessage || `O que você, ${player.name} fará?`
                        }
                    />
                </div>
            </div>
            <div className="pb-[14rem] flex align-center justify-center">
                <div className="p-2 bg-red-800 rounded-xl bg-opacity-90">
                    <div className="flex justify-end">
                        <Healthbar hp={opponentHealth} maxHp={opponent.maxHealth} />
                        <EnemyCard
                            key={opponent.id}
                            playerId={0}
                            champion={opponent}
                            onAttack={() => setSequence({ mode: 'attack', turn })}
                            onHeal={() => setSequence({ mode: 'heal', turn })}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};