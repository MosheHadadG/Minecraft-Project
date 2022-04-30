// Start Game screen background & button
export const startGameBackground = document.querySelector('.startGame')
export const startGameBtn = document.querySelector('#startGameBtn');
export const containerGame = document.querySelector('.container');

// Click on Start Game
export function buttonStartGame() {
startGameBtn.addEventListener('click', (event) => {
  startGameBackground.style.animation = 'myAnim 1s ease 0s 1 normal forwards'
  setTimeout(() => {
    startGameBackground.style.display = 'none'
  }, 150);
  containerGame.style.display = 'flex'
})
}

// How To Play Box & button
export const boxHowToPlay = document.querySelector(".boxHowToPlay");
export const howToPlayBtn = document.querySelector("#howToPlayBtn");
export const closeBoxHowToPlay = document.querySelector('.closeBoxHowToPlay');

export function howToPlay(){
howToPlayBtn.addEventListener('click', () => {
  boxHowToPlay.style.display = "block";
})

closeBoxHowToPlay.addEventListener('click', () => {
  boxHowToPlay.style.display = "none";
})

window.addEventListener('click', (event) => {
  if (event.target == boxHowToPlay) {
    boxHowToPlay.style.display = "none"
  }
})
}

