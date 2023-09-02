import { useEffect, useState } from "react";
import { useBattleSequence } from "../hooks/useBattleSequence";
import { useAIOpponent } from "../hooks/useAIOpponent";
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
        <div className="flex p-5 justify-center align-center">
            <div className="pt-[14rem] px-5 flex align-center justify-center">
                <div className="p-2 bg-gray-800 rounded-xl bg-opacity-90">
                    <Healthbar hp={playerHealth} maxHp={playerStats.maxHealth} />
                    <div className="flex justify-start">
                        <Card
                            key={0}
                            id={0}
                            playerId="0"
                            arsenal={BetaArsenal}
                            onAttack={() => setSequence({ mode: 'attack', turn })}
                            onHeal={() => setSequence({ mode: 'heal', turn })}
                        />
                        <Card
                            key={1}
                            id={1}
                            playerId="0"
                            arsenal={BetaArsenal}
                            onAttack={() => setSequence({ mode: 'attack', turn })}
                            onHeal={() => setSequence({ mode: 'heal', turn })}
                        />
                        <Card
                            key={2}
                            id={2}
                            playerId="0"
                            arsenal={BetaArsenal}
                            onAttack={() => setSequence({ mode: 'attack', turn })}
                            onHeal={() => setSequence({ mode: 'heal', turn })}
                        />
                    </div>
                    <BattleAnnouncer
                        message={
                            announcerMessage || `O que você, ${playerStats.name} fará?`
                        }
                    />
                </div>
            </div>
            <div className="pb-[14rem] flex align-center justify-center">
                <div className="p-2 bg-red-800 rounded-xl bg-opacity-90">
                    <div className="flex justify-end">
                        <Healthbar hp={opponentHealth} maxHp={opponentStats.maxHealth} />
                        <EnemyCard
                            key={1}
                            id={0}
                            playerId="0"
                            arsenal={Enemy}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};