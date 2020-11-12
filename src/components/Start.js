import React from "react";
import { ReactComponent as Triangle } from "../assets/images/bg-triangle.svg";
import { ReactComponent as IconPaper } from "../assets/images/icon-paper.svg";
import { ReactComponent as IconRock } from "../assets/images/icon-rock.svg";
import { ReactComponent as IconScissors } from "../assets/images/icon-scissors.svg";

const Start = () => {
    return (
        <div className="main-start">
            <div className="triangle">
                <Triangle />
            </div>
            <div className="start-container">
                <div className="top-icon-container">
                    <div className="icon-container paper">
                        <IconPaper />
                    </div>
                    <div className="icon-container scissors">
                        <IconScissors />
                    </div>
                </div>
                <div className="icon-container rock">
                    <IconRock />
                </div>
            </div>
        </div>
    );
};

export default Start;
