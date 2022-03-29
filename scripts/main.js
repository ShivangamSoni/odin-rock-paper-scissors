// Game Play Related Functions
import { scores, computerPlay, playerPlay, playRound, announceWinner } from "./modules/game.js";

// Background Colors
const bgColors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#845EC2", "#42C2FF"];

// Elements
const moveButtons = document.querySelectorAll(".move");
const result = document.querySelectorAll(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const playButton = document.querySelector("#playReset");
const splash = document.querySelector(".splash");

const handlePlyerMove = (e) => {
  const computerSelection = computerPlay();
  const playerSelection = playerPlay(e.target);

  const roundResult = playRound(playerSelection, computerSelection);
  result[0].textContent = roundResult;
  result[0].classList.add("show");

  displayScores();
};

const displayScores = () => {
  const { player, computer } = scores;
  playerScore.textContent = `Player: ${player}`;
  computerScore.textContent = `Computer: ${computer}`;

  if (player === 5 || computer === 5) {
    const resultString = announceWinner();
    result[1].textContent = resultString;

    playButton.textContent = "Play Again";
    splash.classList.add("show");

    moveButtons.forEach((button) => {
      button.removeEventListener("click", handlePlyerMove);
    });

    playButton.addEventListener("click", start);
  }
};

const setBackground = () => {
  const index = parseInt(Math.random() * bgColors.length);
  document.body.style.backgroundColor = bgColors[index];
};

const start = () => {
  moveButtons.forEach((button) => {
    button.addEventListener("click", handlePlyerMove);
  });

  playButton.removeEventListener("click", start);

  scores.player = 0;
  scores.computer = 0;

  result.forEach((r) => (r.textContent = ""));
  result[0].classList.remove("show");

  setBackground();

  splash.classList.remove("show");

  displayScores();
};

playButton.addEventListener("click", start);
