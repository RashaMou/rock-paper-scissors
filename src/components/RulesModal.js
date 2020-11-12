import { ReactComponent as Close } from "../assets/images/icon-close.svg";
import { ReactComponent as Rules } from "../assets/images/image-rules.svg";

const RulesModal = (props) => {
    const closeModal = () => {
        props.setShowModal(false);
    };

    return (
        <div className="rules-modal">
            <div className="rules-modal-title">
                <h2 className="rules-title">RULES</h2>
                <Close className="close" onClick={closeModal} />
            </div>
            <Rules />
        </div>
    );
};

export default RulesModal;
