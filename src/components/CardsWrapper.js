import Card from "./Card";
import EnemyCard from "./EnemyCard";
import useRandom from "../hooks/useRandom.js";

const CardsWrapper = ({ cardsNumber, arsenal, isEnemy }) => {
  const { randomValueFromArray } = useRandom();
  const cardNumbers = cardsNumber;

  return (
    <div role="list" className="flex flex-wrap align-center justify-center">
      {[...Array(Number(cardNumbers))].map((_numb, index) => {
        index += 1;

        return (
          <div>
          {isEnemy === false && <>
          <Card
            key={index}
            id={randomValueFromArray(arsenal).id}
            playerId="0"
            arsenal={arsenal}
          />
          </>}
          {isEnemy === true && <>
            <EnemyCard
              key={index}
              id={randomValueFromArray(arsenal).id}
              playerId="0"
              arsenal={arsenal}
              />
          </>}
          </div>
        );
      })}
    </div>
  );
};

export default CardsWrapper;