import { useState } from "react";
import { ButtonFooter } from "./components/button-footer/ButtonFooter";
import { CardPlay } from "./components/card-play/CardPlay";
import { UserHouse } from "./components/card-user-house/UserHouse";
import { Header } from "./components/header/Header";

import close from "../src/Assets/images/icon-close.svg";
import rules from "../src/Assets/images/image-rules.svg";

function App() {
  const [modalRules, setModalRules] = useState(true);
  const [isOptionSelect, setisOptionSelect] = useState(false);
  const [optionUser, setOptionUser] = useState("");
  const [score, setScore] = useState(12);

  const slelectOption = (option) => {

    setisOptionSelect(true);

    switch (option) {
      case "rock":
        return setOptionUser(option);

      case "paper":
        return setOptionUser(option);

      case "scissors":
        return setOptionUser(option);

      default:
        break;
    }
  };

  return (
    <>
      {modalRules && (
        <div className="rulesContainer" id="rules">
          <div className="rules">
            <p className="rules_title">RULES</p>
            <figure className="rules-image-container">
              <img className="rules_image" src={rules} alt="rules" />
            </figure>
            <div className="container_close">
              <img
                className="rules_close"
                id="button_close"
                src={close}
                alt="close"
                onClick={() => {
                  setModalRules(!modalRules);
                }}
              />
            </div>
          </div>
        </div>
      )}

      <div
        className="gameOptionsContainer"
        id="gameOptions"
        style={{ display: "flex" }}
      >
        <div className="gameOptions">
          <Header score={score}/>
          {isOptionSelect ? <UserHouse optionUser={optionUser} back={setisOptionSelect} setScore={setScore} score={score}/> : <CardPlay slelectOption={slelectOption}/>}
          <ButtonFooter open={modalRules} opneModal={setModalRules} />
        </div>
      </div>
    </>
  );
}

export default App;
