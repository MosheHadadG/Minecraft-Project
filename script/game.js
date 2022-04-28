const gameBoard = document.querySelector('.game-board');
const pickAxe = document.querySelector('#pickAxe');
const shovel = document.querySelector('#shovel');
const axe = document.querySelector('#axe');
const storageElement = document.querySelector('#storage');


const state = {
  toolStatus: '',
  storage: [],
  storageStatus: ''
}

const worldsMatrix = [
[ 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0],
[0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
[0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 6, 6, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 6, 6, 6, 1],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
],
[
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 6],
[0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 6, 6],
[0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 6, 6, 6],
[1, 1, 0, 0, 4, 0, 0, 0, 0, 0, 1, 1, 1, 0, 4, 0, 1, 1, 1, 1, 1],
[3, 3, 1, 0, 4, 0, 1, 1, 0, 0, 3, 3, 3, 1, 4, 1, 3, 3, 3, 3, 3],
[3, 3, 3, 0, 4, 0, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 0, 4, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 0, 4, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 0, 4, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 1, 4, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
]
];


function randomWorldFunc() {
  const random = Math.floor(Math.random() * worldsMatrix.length) 
  return random;
}

const typeMatrix = {
  "0": 'sky',
  "1": 'grass',
  "2": 'cloud',
  "3": 'dirt',
  "4": 'tree',
  "5": 'leaf',
  "6": 'stone'
}

const tools = {
  pickAxe: ["stone"],
  shovel: ["dirt", "grass"],
  axe: ["tree", "leaf"]
}

function drawBoard() {
  const randomWorld = randomWorldFunc()
  for (let i = 0; i < worldsMatrix[randomWorld].length; i++) {
    const columns = worldsMatrix[randomWorld][i];
    for (let j = 0; j < columns.length; j++) {
      const element = columns[j]
     const typeOfElemnt = typeMatrix[`${element}`]
     const boxElement = document.createElement('div');
     boxElement.setAttribute(`data-element`,`${typeOfElemnt}`);
     boxElement.classList.add('box-item')
     gameBoard.appendChild(boxElement)

    }
  }
}



//* EventListener

// Click on pickAxe
pickAxe.addEventListener('click', (event) => {
  state.toolStatus = "pickAxe";
  pickAxe.style.backgroundColor = 'blue'
  shovel.style.backgroundColor = ''
  axe.style.backgroundColor = ''
})

// Click on Shovel
shovel.addEventListener('click', (event) => {
  state.toolStatus = "shovel";
  pickAxe.style.backgroundColor = ''
  shovel.style.backgroundColor = 'blue'
  axe.style.backgroundColor = ''
})

// Click on Axe
axe.addEventListener('click', (event) => {
  state.toolStatus = "axe";
  pickAxe.style.backgroundColor = ''
  shovel.style.backgroundColor = ''
  axe.style.backgroundColor = 'blue'
})

// Click on Storage
storageElement.addEventListener('click', (event) => {
  if(state.storage.length > 0) {
    state.toolStatus = "storage";
    pickAxe.style.backgroundColor = ''
    shovel.style.backgroundColor = ''
    axe.style.backgroundColor = ''
    state.storageStatus = state.storage[state.storage.length - 1]
  }
})

// Click on boardGame
gameBoard.addEventListener('click', (event) => {
  const typeElement = event.target.getAttribute("data-element");
  const storage = state.storage;
  switch(state.toolStatus) {

    case "pickAxe":
      if(tools.pickAxe.includes(typeElement)) {
        storage.push(typeElement)
        storageElement.setAttribute(`data-element`,`${storage[storage.length - 1]}`)
        event.target.setAttribute(`data-element`,`sky`);
      }
      else {
        pickAxe.style.backgroundColor = "red";
        setTimeout(() => {
          pickAxe.style.backgroundColor = "blue";
        }, 500);
      }
      break;

    case "shovel":
      if(tools.shovel.includes(typeElement)){
        storage.push(typeElement)
        storageElement.setAttribute(`data-element`,`${storage[storage.length - 1]}`)
        event.target.setAttribute(`data-element`,`sky`);
      }
      else {
        shovel.style.backgroundColor = "red";
        setTimeout(() => {
          shovel.style.backgroundColor = "blue";
        }, 500);
      }
      break;

    case "axe":
      if(tools.axe.includes(typeElement)) {
        storage.push(typeElement)
        storageElement.setAttribute(`data-element`,`${storage[storage.length - 1]}`)
        event.target.setAttribute(`data-element`,`sky`);
      }
      else {
        axe.style.backgroundColor = "red";
        setTimeout(() => {
          axe.style.backgroundColor = "blue";
        }, 500);
      }
      break;

    case "storage":
      if(typeElement === 'sky' && storage.length > 0) {
        event.target.setAttribute(`data-element`,`${storage[storage.length - 1]}`);
        storage.pop()
        storageElement.setAttribute(`data-element`,`${storage[storage.length - 1]}`)
      }
      
  }

})


drawBoard()
// console.log(gameBoard)

// console.log(state)

