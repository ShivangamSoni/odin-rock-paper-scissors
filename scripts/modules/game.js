const MOVES = {
  1: "Rock",
  2: "Scissors",
  3: "Paper",
};

const scores = {
  computer: 0,
  player: 0,
};

const computerPlay = () => {
  const selection = parseInt(Math.random() * 3) + 1;
  return selection;
};

const playerPlay = (btn) => {
  const selection = parseInt(btn.dataset.option);
  return selection;
};

const playRound = (player, computer) => {
  if ((player === 1 && computer === 2) || (player === 2 && computer === 3) || (player === 3 && computer === 1)) {
    scores.player++;
    return `You Win this Round! ${MOVES[player]} beats ${MOVES[computer]}`;
  } else if ((computer === 1 && player === 2) || (computer === 2 && player === 3) || (computer === 3 && player === 1)) {
    scores.computer++;
    return `You Lose this Round! ${MOVES[computer]} beats ${MOVES[player]}`;
  } else {
    return `Its a Tie! Both Selected ${MOVES[player]}`;
  }
};

const announceWinner = () => {
  const { player, computer } = scores;

  if (player > computer) {
    return "You Win the Game";
  } else if (computer > player) {
    return "You Loose the Game";
  } else {
    return "Its a Tie";
  }
};

export { computerPlay, playerPlay, playRound, announceWinner, scores };
