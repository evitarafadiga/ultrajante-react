import Card from "./Card";
import useRandom from "../hooks/useRandom.js";
import { cebollurl, marry, marryada, northon, rasputin } from "../shared/characters";
import { SelectButton } from "./SelectButton";

const CardsWrapper = ({ cardsNumber, setOpponent, battleOpponent }) => {
  const { randomValueFromArray } = useRandom();
  const cardNumbers = cardsNumber;

  const arsenal = [rasputin, cebollurl, marry, marryada, northon];

  return (
    <div role="list" className="flex flex-wrap align-center justify-center justify-center align-center">
      {[...Array(Number(cardNumbers))].map((_numb, index) => {
        index += 1;

        return (
          <div className="group justify-center align-center" key={arsenal[index].number}>
            <div className="flex justify-center align-center">
            <Card              
              id={randomValueFromArray(arsenal).id}
              playerId="0"
              champion={arsenal[index]}
            />
            </div>
            <div className="flex justify-center align-center">
              <SelectButton setOpponent={setOpponent} battleOpponent={arsenal[index]} />
            </div>            
          </div>
        );
      })}
    </div>
  );
};

export default CardsWrapper;