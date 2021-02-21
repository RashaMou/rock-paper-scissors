export const game = (userChoice) => {
  const options = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  const computerChoice = options[randomNum];

  const userChoiceIndex = options.indexOf(userChoice);

  const results = [
    ["t", "c", "u"],
    ["u", "t", "c"],
    ["c", "u", "t"],
  ];

  let result = results[userChoiceIndex][randomNum];

  return {
    result: result,
    computerChoice: computerChoice,
    userChoice: userChoice,
  };
};
