import { cebollurl, rasputin } from "./characters";

export const a = () => {
    const playerDeck = [rasputin];
    const opponentDeck = [cebollurl];

    const maxHealth = playerDeck.reduce((sum, item) => sum + item.maxHealth, 0);
    const opMaxHealth = opponentDeck.reduce((sum, item) => sum + item.maxHealth, 0);
    
    const mission = {
        name: 'Missão A',
        playerDeck,
        opponentDeck,
        maxHealth,
        opMaxHealth
    }
    return mission;
};

export default a;
