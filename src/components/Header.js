import React, { useContext } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { GameContext } from "../contexts/GameContext";

const Header = () => {
  const { score } = useContext(GameContext);

  return (
    <div className="header-container">
      <Logo />
      <div className="score-container">
        <h2 className="score-text">SCORE</h2>
        <h2 className="score">{score}</h2>
      </div>
    </div>
  );
};

export default Header;
