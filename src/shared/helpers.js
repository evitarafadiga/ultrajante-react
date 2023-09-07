export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const attack = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 0.15;

  let finalDamage = receivedDamage - receiver.defense / 2;
  if (finalDamage<0) finalDamage *= -1;

  console.log('finalDamage',finalDamage)

  return finalDamage;
};

export const magic = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.magic - (attacker.level - receiver.level) * 0.55;

  let finalDamage = receivedDamage - receiver.magicDefense / 2;
  if (finalDamage<0) finalDamage *= -1;

  console.log('finalDamage',finalDamage)

  return finalDamage;
};

export const heal = ({ receiver }) => {
  return receiver.magic + (receiver.level / 2) * 0.25;
};