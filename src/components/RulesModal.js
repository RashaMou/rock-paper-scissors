import { ReactComponent as Close } from "../assets/images/icon-close.svg";
import { ReactComponent as Rules } from "../assets/images/image-rules.svg";

const RulesModal = () => {
    return (
        <div className="rules-modal">
            <div className="rules-modal-title">
                <h2 className="rules-title">RULES</h2>
                <Close className="close" />
            </div>
            <Rules />
        </div>
    );
};

export default RulesModal;
