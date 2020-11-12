import React from "react";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
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
                <div className="header-container">
                    <Logo />
                    <div className="score-container">
                        <h2 className="score-text">SCORE</h2>
                        <h2 className="score">12</h2>
                    </div>
                </div>
                {showModal && <RulesModal />}
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
