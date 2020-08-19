function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function toTitleCase(string) {
  return string[0].toUpperCase().concat(string.slice(1).toLowerCase());
}

function computerPlay() {
  switch (getRandomInt(3)) {
    case 0:
      return "rock";
    case 1:
      return "scissors";
    case 2:
      return "paper";
  }
}

function playRound(playerSelection, computerSelection) {
  const validMoves = ["rock", "paper", "scissors"];
  const wins = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  const playerMove = playerSelection.toLowerCase();

  if (!validMoves.includes(playerMove)) return ["Invalid move!", "invalid"];

  //Check for a tie
  if (playerMove === computerSelection)
    return [`Tie! You both chose ${playerMove}.`, "tie"];

  //Check for a win
  if (computerSelection === wins[playerMove])
    return [
      `You win! ${toTitleCase(playerMove)} beats ${computerSelection}.`,
      "win",
    ];

  //If it's not a win, and it's not a tie...
  return [
    `You lose! ${toTitleCase(computerSelection)} beats ${playerMove}.`,
    "lose",
  ];
}

function game() {
  let compWin = 0;
  let playerWin = 0;

  console.clear();

  while (playerWin < 3 && compWin < 3) {
    let move = window.prompt("Rock, paper, or scissors?");
    if (move) {
      let result = playRound(move, computerPlay());
      console.log(result[0]);
      if (result[1] === "win") playerWin++;
      else if (result[1] === "lose") compWin++;
      console.log(`${playerWin} - ${compWin}`);
    }
  }

  if (playerWin > compWin) console.log("You won!");
  else console.log("You lost :(");
  console.log(`Final score: ${playerWin} - ${compWin}`);

  while (1 < 2) {
    let playAgain = window.prompt("Play again?", "yes/no");
    if (playAgain === "no") return;
    if (playAgain === "yes") game();
  }
}

game();
