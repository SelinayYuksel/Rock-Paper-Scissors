const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DRAW = "DRAW";
const COMPUTER_WIN = "COMPUTER-WIN";
const PLAYER_WIN = "PLAYER-WIN";

function getComputerChoice() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

function getWinner(pChoice, cChoice) {
  if (pChoice === cChoice) {
    return DRAW;
  } else if (
    (pChoice === ROCK && cChoice === PAPER) ||
    (pChoice === PAPER && cChoice === SCISSORS) ||
    (pChoice === SCISSORS && cChoice === ROCK)
  ) {
    return COMPUTER_WIN;
  } else {
    return PLAYER_WIN;
  }
}

function play(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = getWinner( playerChoice,computerChoice);

  let message = `
    Senin seçimin: <img src="${playerChoice.toLowerCase()}.png" width="80"
     ${playerChoice === PAPER ? 'style="border-radius:50%;"' : ''}>
    <br> Bilgisayarın seçimi: <img src="${computerChoice.toLowerCase()}.png" width="80"
     ${computerChoice === PAPER ? 'style="border-radius:50%;"' : ''}><br>
  `;

  if (winner === DRAW) {
    message += "👉 Berabere!";
  } else if (winner === COMPUTER_WIN) {
    message += "👉 Kaybettin! 😢";
  } else {
    message += "👉 Kazandın! 🎉";
  }

  document.getElementById("result").innerHTML = message;
}
 