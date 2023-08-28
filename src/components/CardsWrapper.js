import Card from "./Card";
import { BetaArsenal } from "../data.js";
import useRandom from "../hooks/useRandom.js";
import { useState } from "react";
import { useEffect } from "react";

const CardsWrapper = ({ cardsNumber }) => {
  const { randomValueFromArray } = useRandom();
  const cardNumbers = cardsNumber;
  const [scoreArray] = useState([]);

  useEffect(() => {
    console.log("numberArray", scoreArray);
  }, [scoreArray]);

  return (
    <div className="flex flex-wrap align-center justify-center">
      {[...Array(Number(cardNumbers))].map((_numb, index) => {
        index += 1;

        return (
          <div>
            
            <Card
              key={index}
              id={randomValueFromArray(BetaArsenal).id}
              playerId="0"
              scoreArray={scoreArray}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsWrapper;