import { Player, BetaArsenal } from "../data.js";

const Card = ({ id, playerId }) => {
    return (
      <div className="card-container">
        <div className={`card-border__player ${Player[playerId].border}`}>
          <div className={`card-content__inner ${BetaArsenal[id].number}`}>
            <div className={`card-content-inner__border-top ${BetaArsenal[id].number}`}>
              <div className="top-symbol ">
                <p>{BetaArsenal[id].number}</p>
                <span className="top-symbol-sigle"> {BetaArsenal[id].name}</span>
              </div>            
              <div />
            </div>
            
            <div className={`card-content-inner__center grid-${BetaArsenal[id].number} ${BetaArsenal[id].number}`}> 
              <span className="centerCard" key={BetaArsenal[id].id}>
                <span className="center-symbol-sigle">{BetaArsenal[id].number}</span>
              </span>  
            </div>            
              
            <div className={`card-content-inner__border-bottom ${BetaArsenal[id].description}`}>
              <div />
              <div className="bottom-symbol">
                <span className="bottom-symbol-sigle">{BetaArsenal[id].number}</span>
                <p>
                
                {BetaArsenal[id].class[0]}
                {BetaArsenal[id].class[1] ? (' | ') : ('')}              
                {BetaArsenal[id].class[1]}
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  
export default Card;