const moves = {
  1: "Rock",
  2: "Scissors",
  3: "Paper",
};

const scores = {
  computer: 0,
  player: 0,
};

const computerPlay = () => {
  let selection = parseInt(Math.random() * 3) + 1;
  return selection;
};

const playerPlay = () => {
  let selection = parseInt(prompt("Options:\n\t1. Rock\n\t2. Scissors\n\t3. Paper\n\nEnter Your Move:"));
  return selection;
};

const playRound = (player, computer) => {
  if ((player === 1 && computer === 2) || (player === 2 && computer === 3) || (player === 3 && computer === 1)) {
    console.log(`You Win this Round! ${moves[player]} beats ${moves[computer]}`);
    scores.player++;
  } else if ((computer === 1 && player === 2) || (computer === 2 && player === 3) || (computer === 3 && player === 1)) {
    console.log(`You Lose this Round! ${moves[computer]} beats ${moves[player]}`);
    scores.computer++;
  } else {
    console.log(`Its a Tie! Both Selected ${moves[player]}`);
  }
};

const announceWinner = () => {
  const { player, computer } = scores;

  const scoreBoard = `Player: ${player} | Computer: ${computer}`;

  if (player > computer) {
    console.log(`${scoreBoard}\nYou Win the Game`);
  } else if (computer > player) {
    console.log(`${scoreBoard}\nYou Loose the Game`);
  } else {
    console.log(`${scoreBoard}\nIts a Tie`);
  }
};

for (let i = 1; i <= 5; i++) {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  console.log(`Round #${i}`);
  playRound(playerSelection, computerSelection);
}

announceWinner();
