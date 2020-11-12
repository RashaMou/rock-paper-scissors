const rps = (userChoice, computerChoice, randomNum) => {
    const options = ["rock", "paper", "scissors"];

    console.log(
        `User choice is ${userChoice}, the computer's choice is ${computerChoice}.`
    );
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

    console.log(resultMap[userResult]);
};

export default rps;
