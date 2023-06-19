var state = { board: [], currentGame: [], savedGames: [] };

function start() {
  createBoard();

  console.log(state.board);
}
function createBoard() {
  state.board = [];

  for (var i = 1; (i = 60); i++) {
    state.board.push(i);
  }
}
function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error('Numero Invalido', numberToAdd);
    return;
  }

  if (state.currentGame.length >= 6) {
    console.error('O jogo já está completo.');
    return;
  }

  if (isNumberInGame(numberToAdd)) {
    console.error('Este numero já está no jogo.', numberToAdd);
    return;
  }

  state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numbertoRemove) {
  if (numbertoRemove < 1 || numbertoRemove > 60) {
    console.error('Numero Invalido', numbertoRemove);
    return;
  }

  var newGame = [];

  for (var i = 0; i < state.currentGame.length; i++) {
    var currentNumber = state.currentGame[i];

    if (currentNumber === numbertoRemove) {
      continue;
    }
    newGame.push(currentNumber);
  }
  state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {
  //if (state.currentGame.includes(numberToCheck)) {
  //return true;
  //}
  //return false;

  return state.currentGame.includes(numberToCheck);
}

function saveGame() {
  if (!isGameComplete()) {
    console.error('O jogo não está completo!');
    return;
  }
  state.savedGames.push(state.currentGame);
}
function isGameComplete() {
  return state.currentGame.length === 6;
}
function resetGame() {
  state.currentGame = [];
}
start();
