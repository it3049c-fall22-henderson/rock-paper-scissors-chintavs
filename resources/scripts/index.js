// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  let username = userName.value, userScore = game.score.user, cpuScore = game.score.cpu;
  let scoreString = username + `: ` + userScore + ` v CPU: ` + cpuScore;
  scoreParagraph.textContent = scoreString;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.textContent = ``;
  gameHistoryParagraph.textContent = game.gameHistoryLog.join(`\r\n`);
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (e) {
  e.preventDefault();
  const username = userName.value;
  // eslint-disable-next-line no-undef
  game = new RockPaperScissors(username);
  welcomeScreen.classList.add(`d-none`);
  gameScreen.classList.remove(`d-none`);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function (e) {
  e.preventDefault();

  let user_selection = userSelection.options[userSelection.selectedIndex].value;
  game.play(user_selection);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });