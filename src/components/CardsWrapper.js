import Card from "./Card";
import { Arsenal } from "../data.js";
import useRandom from "../hooks/useRandom.js";

const CardsWrapper = ({ cardsNumber }) => {
  const { randomValueFromArray } = useRandom();

  return (
    <div className="card-wrapper">
      {[...Array(Number(cardsNumber))].map((_numb, index) => {       
        index += 1;
        
        return (
          <Card
            key={index}
            id={randomValueFromArray(Arsenal).id}
            playerId="0"
          />
        );                
      })}
    </div>
  );
};

export default CardsWrapper;