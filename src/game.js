export const game = (userChoice) => {
  const options = ["rock", "paper", "scissors"];
  let score = 0;
  const randomNum = Math.floor(Math.random() * 3);
  const computerChoice = options[randomNum];

  // console.log(
  //   `User choice is ${userChoice}, the computer's choice is ${computerChoice}.`
  // );

  const userChoiceIndex = options.indexOf(userChoice);

  const results = [
    ["t", "c", "u"],
    ["u", "t", "c"],
    ["c", "u", "t"],
  ];

  let userResult = results[randomNum][userChoiceIndex];

  const resultMap = {
    t: "Tie",
    u: "You win",
    c: "You lose",
  };

  const result = resultMap[userResult];

  return {
    result: resultMap[userResult],
    computerChoice: computerChoice,
    userChoice: userChoice,
    userResult: userResult,
  };
};

export const calculateScore = (score, result) => {
  if (result === "u") {
    return (score += 1);
  } else if (result === "c") {
    return (score -= 1);
  }
  return score;
};
