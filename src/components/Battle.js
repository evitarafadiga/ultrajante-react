import { useEffect, useState } from "react";
import useRandom from "../hooks/useRandom";
import { useBattleSequence } from "../hooks/useBattleSequence";
import { useAIOpponent } from "../hooks/useAIOpponent";
import { useTypedMessage } from "../hooks/useTypedMessage";
import { opponentStats, playerStats } from "../shared/characters";
import { Healthbar } from "./Healthbar";
import BetaArsenal, { Enemy } from "../shared/data";
import Card from "./Card";
import EnemyCard from "./EnemyCard";
import { BattleAnnouncer } from "./BattleAnnouncer";
import { wait } from "../shared/helpers";

export const Battle = ({ onGameEnd }) => {

    const [sequence, setSequence] = useState({});

    const {
        turn,
        inSequence,
        playerHealth,
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
                onGameEnd(playerHealth === 0 ? opponentStats : playerStats);
            })();
        }
    }, [playerHealth, opponentHealth, onGameEnd]);

    return (
        <div className="px-5 w-screen h-screen py-5 justify-center align-center">
            <div className="flex align-center justify-center py-[10px]">
                <Healthbar width={300} datatotal={opponentStats.maxHealth} datavalue={opponentHealth} />
                <div className="bg-red-800 rounded-xl p-3 bg-opacity-90">
                    <div className="flex justify-end">
                        <EnemyCard
                            key={1}
                            id={0}
                            playerId="0"
                            arsenal={Enemy}
                        />
                    </div>
                </div>
                <div className="absolute px-5 pt-[12rem] pr-[30rem] flex align-center justify-center py-[10px]">
                    <div className="bg-gray-800 rounded-xl p-3 bg-opacity-90">
                        <Healthbar width={100} datatotal={playerStats.maxHealth} datavalue={playerHealth} />
                        <div className="flex justify-start">
                            <Card
                                key={0}
                                id={0}
                                playerId="0"
                                arsenal={BetaArsenal}
                                onAttack={() => setSequence({ mode: 'attack', turn })}
                            />
                            <Card
                                key={1}
                                id={1}
                                playerId="0"
                                arsenal={BetaArsenal}
                                onAttack={() => setSequence({ mode: 'attack', turn })}
                            />
                            <Card
                                key={2}
                                id={2}
                                playerId="0"
                                arsenal={BetaArsenal}
                                onAttack={() => setSequence({ mode: 'attack', turn })}
                            />
                        </div>
                        <BattleAnnouncer
                            message={
                                announcerMessage || `What will ${playerStats.name} do?`
                            }
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};