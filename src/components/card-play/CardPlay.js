import React from "react";
import paper from "../../Assets/images/icon-paper.svg";
import scissors from "../../Assets/images/icon-scissors.svg"
import rock from "../../Assets/images/icon-rock.svg"

export const CardPlay = ({slelectOption}) => {
  return (
    <div className="RockPaperScissors">
      <div className="RockPaperScissors_Triangulo">
        <div className="background_icon background_paper"  onClick={()=>{slelectOption("paper")}}>
          <figure class="containerPaper">
            <img src={paper} alt="paper" />
          </figure>
        </div>
        <div className="background_icon background_scissors"  onClick={()=>{slelectOption("scissors")}}>
          <figure class="containerScissors">
            <img src={scissors} alt="Scissors" />
          </figure>
        </div>
        <div className="background_icon background_rock" onClick={()=>{slelectOption("rock")}}>
          <figure class="containerRock">
            <img src={rock} alt="Rock" />
          </figure>
        </div>
      </div>
    </div>
  );
};
