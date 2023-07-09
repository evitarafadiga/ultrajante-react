import Card from "./Card";
import { Arsenal } from "../data.js";

const CardsWrapper = ({ cardsNumber }) => {
  return (
    <div className="card-wrapper">
      {[...Array(Number(cardsNumber))].map((_numb, index) => {
        index+=1;
        
        const randomArse =
          Arsenal[Math.floor(Math.random() * Arsenal.length)];
        console.log(randomArse)

        return (
          <Card 
            id={index}
            

          />
        );                
      })}
    </div>
  );
};

export default CardsWrapper;