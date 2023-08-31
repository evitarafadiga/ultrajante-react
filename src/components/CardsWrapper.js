import Card from "./Card";
import { BetaArsenal } from "../data.js";
import useRandom from "../hooks/useRandom.js";

const CardsWrapper = ({ cardsNumber }) => {
  const { randomValueFromArray } = useRandom();
  const cardNumbers = cardsNumber;

  return (
    <div role="list" className="flex flex-wrap align-center justify-center">
      {[...Array(Number(cardNumbers))].map((_numb, index) => {
        index += 1;

        return (
          <Card
            key={index}
            id={randomValueFromArray(BetaArsenal).id}
            playerId="0"
            className="group/item"
          />
        );
      })}
    </div>
  );
};

export default CardsWrapper;