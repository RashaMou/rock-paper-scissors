import React from "react";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import RulesModal from "./components/RulesModal";
import Start from "./components/Start";

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="wrapper">
      <div className="App">
        <div className="header-container">
          <Logo />
          <div className="score-container">
            <h2 className="score-text">SCORE</h2>
            <h2 className="score">{score}</h2>
          </div>
        </div>
        {showModal && <RulesModal setShowModal={setShowModal} />}
        <Start setScore={setScore} score={score} />
      </div>
      <div className="footer-container">
        <h2 className="rules-text" onClick={handleShowModal}>
          RULES
        </h2>
      </div>
    </div>
  );
}

export default App;
