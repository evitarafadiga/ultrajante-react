export const wait = ms =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });

export const attack = ({ move, receiver, isCritical = false }) => {

    const crit = Math.floor(Math.random() * 6);
    if (crit === 6) isCritical = true;
    const finalDamage = receiver.hp - move.base * (0,crit);

    return finalDamage, isCritical;
};

export const heal = ({ move, receiver }) => {
    return move.base + receiver.hp + (0,(Math.floor(Math.random() * 2)));
};