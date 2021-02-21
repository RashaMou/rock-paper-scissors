import React, { useContext } from "react";
import { ReactComponent as Triangle } from "../assets/images/bg-triangle.svg";
import { ReactComponent as IconPaper } from "../assets/images/icon-paper.svg";
import { ReactComponent as IconRock } from "../assets/images/icon-rock.svg";
import { ReactComponent as IconScissors } from "../assets/images/icon-scissors.svg";
import { GameContext } from "../contexts/GameContext";

const Start = () => {
  const { handleSelection } = useContext(GameContext);

  return (
    <div className="main-start">
      <div className="triangle">
        <Triangle />
      </div>
      <div className="start-container">
        <div className="top-icon-container">
          <div className="icon-container paper">
            <IconPaper onClick={() => handleSelection("paper")} />
          </div>
          <div className="icon-container scissors">
            <IconScissors onClick={() => handleSelection("scissors")} />
          </div>
        </div>

        <div className="icon-container rock">
          <IconRock
            className="rock-svg"
            onClick={() => handleSelection("rock")}
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
