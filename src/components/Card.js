import { Player, Arsenal } from "../data.js";

const Card = ({ id, playerId }) => {
    return (
      <div className="card-container">
        <div className={`card-border__player ${Player[playerId].border}`}>
          <div className={`card-content__inner ${Arsenal[id].number}`}>
            <div className={`card-content-inner__border-top ${Arsenal[id].number}`}>
              <div className="top-symbol ">
                <p>{Arsenal[id].number}</p>
                <span className="top-symbol-sigle"> {Arsenal[id].name}</span>
              </div>            
              <div />
            </div>
            
            <div className={`card-content-inner__center grid-${Arsenal[id].number} ${Arsenal[id].number}`}> 
              <span className="centerCard" key={Arsenal[id].id}>
                <span className="center-symbol-sigle">{Arsenal[id].number}</span>
              </span>  
            </div>            
              
            <div className={`card-content-inner__border-bottom ${Arsenal[id].description}`}>
              <div />
              <div className="bottom-symbol">
                <span className="bottom-symbol-sigle">{Arsenal[id].number}</span>
                <p>
                
                {Arsenal[id].class[0]}
                {Arsenal[id].class[1] ? (' | ') : ('')}              
                {Arsenal[id].class[1]}
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  
export default Card;