import React from "react";
import Header from "./components/Header";
import RulesModal from "./components/RulesModal";
import Start from "./components/Start";

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="wrapper">
      <div className="App">
        <Header />
        {showModal && <RulesModal setShowModal={setShowModal} />}
        <Start />
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
