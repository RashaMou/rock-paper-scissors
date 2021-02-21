import React, { createContext, useReducer } from "react";
import { game } from "./game";

export const GameContext = createContext([]);

const initialState = {
  score: 0,
  result: "",
  computerChoice: "",
  userChoice: "",
};

const recordSelection = "RECORD_SELECTION";
const playAgain = "PLAY_AGAIN";

const reducer = (state, action) => {
  switch (action.type) {
    case recordSelection: {
      const { result, computerChoice, userChoice } = game(action.payload);
      console.log(
        `User choice is ${userChoice}, the computer's choice is ${computerChoice}, result is ${result}.`
      );
      if (result === "u") {
        // console.log(state.score++);
        return {
          score: state.score++,
          result: "You win!",
          computerChoice: computerChoice,
          userChoice: userChoice,
        };
      } else if (result === "c") {
        // console.log(state.score--);
        return {
          score: state.score--,
          result: "Computer wins :(",
          computerChoice: computerChoice,
          userChoice: userChoice,
        };
      } else if (result === "t") {
        return {
          ...state,
          result: "It's a tie.",
          computerChoice: computerChoice,
          userChoice: userChoice,
        };
      }
    }
    case playAgain: {
      return { ...state, result: "", computerChoice: "", userChoice: "" };
    }
    default: {
      return state;
    }
  }
};

export const GameProvider = ({ children }) => {
  const [{ score, result, computerChoice, userChoice }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleSelection = (selection) => {
    console.log(score);
    dispatch({
      type: recordSelection,
      payload: selection,
    });
  };

  const rePlay = () => {
    dispatch({
      type: playAgain,
    });
  };

  const value = {
    handleSelection,
    score,
    result,
    computerChoice,
    userChoice,
    rePlay,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
