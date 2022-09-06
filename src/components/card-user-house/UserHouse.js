import React, { useEffect, useState } from "react";

export const UserHouse = ({ optionUser, back, setScore, score }) => {
  const [statusParty, setStatusParty] = useState("EMPATE");
  const [optionHouse, setOptionHouse] = useState("rock");
  const [responseHouse, setResponseHouse] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fuctionPLayVsHouse();
      setResponseHouse(true);
    }, 2000);
  }, []);

  const fuctionPLayVsHouse = () => {
    const result = getRandomInt(3);
    // 0 paper
    // 1 scissors
    // 2 rock

    if (result === 0) {
      setOptionHouse("paper");
    } else if (result === 1) {
      setOptionHouse("scissors");
    } else {
      setOptionHouse("rock");
    }

    if (optionUser === "paper") {
      if (result === 0) {
        setStatusParty("EMPATE");
      } else if (result === 1) {
        setStatusParty("YOU LOSE");
        setScore(score - 1);
      } else if (result === 2) {
        setStatusParty("YOU WIN");
        setScore(score + 1);
      }
    }

    if (optionUser === "scissors") {
      if (result === 0) {
        setStatusParty("YOU WIN");
        setScore(score + 1);
      } else if (result === 1) {
        setStatusParty("EMPATE");
      } else if (result === 2) {
        setStatusParty("YOU LOSE");
        setScore(score - 1);
      }
    }

    if (optionUser === "rock") {
      if (result === 0) {
        setStatusParty("YOU LOSE");
        setScore(score - 1);
      } else if (result === 1) {
        setStatusParty("YOU WIN");
        setScore(score + 1);
      } else if (result === 2) {
        setStatusParty("EMPATE");
      }
    }
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div className="RockPaperScissors">
      <div className="UserVsHouse" style={{ width: "100%" }}>
        <div className="userPicked">
          <div
            className={`background_icon background_${optionUser} ${
              statusParty === "YOU WIN" ? "win-party" : ""
            }`}
          >
            <figure className="containerPaper">
              <img
                src={require(`../../Assets/images/icon-${optionUser}.svg`)}
                alt="img"
              />
            </figure>
          </div>
          <p>YOU PICKED</p>
        </div>

        {responseHouse && (
          <div className="PlayAgainContainerDesktop">
            <div className="PlayAgain_container">
              <p>{statusParty}</p>
              <button className="button_playAgain" onClick={() => back(false)}>
                {" "}
                PLAY AGAIN
              </button>
            </div>
          </div>
        )}

        {responseHouse && (
          <div className="housePiked">
            <div
              className={`background_icon background_${optionHouse} ${
                statusParty === "YOU LOSE" ? "win-party" : ""
              }`}
            >
              <figure className="containerScissors">
                <img
                  src={require(`../../Assets/images/icon-${optionHouse}.svg`)}
                  alt="img"
                />
              </figure>
            </div>
            <p>THE HOUSE PICKED</p>
          </div>
        )}

        {!responseHouse && (
          <div className="housePiked">
            <div className="backgroundGrayContainer">
              <div className="backgroundGray"></div>
            </div>
          </div>
        )}
      </div>
      <div className="PlayAgainContainer">
        <div className="PlayAgain_container">
          <p>{statusParty}</p>
          <button className="button_playAgain" onClick={() => back(false)}>
            {" "}
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  );
};
