// 
import { worldsMatrix } from './matrix-worlds.js';
// Start Game Screen
import { buttonStartGame, howToPlay, containerGame } from './start-screen.js';
buttonStartGame()
howToPlay();

const gameBoard = document.querySelector('.game-board');
const pickAxe = document.querySelector('#pickAxe');
const shovel = document.querySelector('#shovel');
const axe = document.querySelector('#axe');
const storageBoxes = document.querySelector('.storageBoxes');


const state = {
  toolStatus: '',
  storage: [[], [], [], [], []],
  storageStatus: ''
}

function randomWorldFunc() {
  const random = Math.floor(Math.random() * worldsMatrix.length)
  return random;
}

// Types of elements
const typeMatrix = {
  "0": 'sky',
  "1": 'grass',
  "2": 'cloud',
  "3": 'dirt',
  "4": 'tree',
  "5": 'leaf',
  "6": 'stone',
  "7": 'water',
}

// Each tool can be used for specific elements only.
const tools = {
  pickAxe: ["stone"],
  shovel: ["dirt", "grass"],
  axe: ["tree", "leaf"]
}

// draw board game with matrix
function drawBoard() {
  const randomWorld = randomWorldFunc()
  for (let i = 0; i < worldsMatrix[randomWorld].length; i++) {
    const columns = worldsMatrix[randomWorld][i];
    for (let j = 0; j < columns.length; j++) {
      const element = columns[j]
      const typeOfElemnt = typeMatrix[`${element}`]
      const boxElement = document.createElement('div');
      boxElement.setAttribute(`data-element`, `${typeOfElemnt}`);
      boxElement.classList.add('box-item')
      gameBoard.appendChild(boxElement)
    }
  }
}
drawBoard()

// elements on storage
const storageObj = {
  0: "grass",
  1: "dirt",
  2: "tree",
  3: "leaf",
  4: "stone"
}

//* Create Storage Boxes

function createStorageBoxes() {
  for (let i = 0; i < state.storage.length; i++) {
    const typeOfStorage = storageObj[i];
    const storageBox = document.createElement('div');
    storageBox.setAttribute('id', `${typeOfStorage}`);
    storageBox.classList.add('storage');
    const amountStorage = document.createElement('h2');
    amountStorage.setAttribute('data-amount', `${typeOfStorage}`)
    amountStorage.innerText = '0'
    storageBox.appendChild(amountStorage)
    storageBoxes.appendChild(storageBox);

  }
}
createStorageBoxes()

// push the element to array storage and show the current amount.
// change the element in board game to sky element.
function storagePushChangeElement(toolElement, toolArr, typeElement, event) {
  const storage = state.storage;
  if (toolArr.includes(typeElement)) {
    for (let i = 0; i < state.storage.length; i++) {
      let typeStorage = storageObj[i];
      if (typeStorage === typeElement) {
        storage[i].push(typeElement)
        let amountStorageUp = document.querySelector(`[data-amount=${typeElement}`);
        amountStorageUp.innerText = `${storage[i].length}`
        const storageElement = document.querySelector(`#${typeStorage}`)
        storageElement.setAttribute(`data-element`, `${storage[i][0]}`)
        event.target.setAttribute(`data-element`, `sky`);
      }
    }
  }
  else {
    toolElement.style.backgroundColor = "red";
    setTimeout(() => {
      toolElement.style.backgroundColor = "blue";
    }, 500);
  }
}

// Remove the element from array storage and show the current amount.
// change the  element in board game to current element
function removeStorageItem(nameStorage, idxStorage, storage, typeElement, event) {
  if (typeElement === 'sky' && storage[idxStorage].length > 0) {
    event.target.setAttribute(`data-element`, `${storage[idxStorage][0]}`);
    storage[idxStorage].pop()
    let elementStorage = document.querySelector(`#${nameStorage}`)
    elementStorage.setAttribute(`data-element`, `${storage[idxStorage][0]}`)
    let amountStorageDown = document.querySelector(`[data-amount=${nameStorage}`);
    amountStorageDown.innerText = `${storage[idxStorage].length}`
  }
}

// Click on boardGame
gameBoard.addEventListener('click', (event) => {
  const typeElement = event.target.getAttribute("data-element");
  const storage = state.storage;
  switch (state.toolStatus) {
    //* Tools Cases
    case "pickAxe":
      storagePushChangeElement(pickAxe, tools.pickAxe, typeElement, event);
      break;

    case "shovel":
      storagePushChangeElement(shovel, tools.shovel, typeElement, event);
      break;

    case "axe":
      storagePushChangeElement(axe, tools.axe, typeElement, event);
      break;
    //* Storages Cases
    case "storageGrass":
      removeStorageItem("grass", 0, storage, typeElement, event);
      break;
    case "storageDirt":
      removeStorageItem("dirt", 1, storage, typeElement, event);
      break;
    case "storageTree":
      removeStorageItem("tree", 2, storage, typeElement, event);
      break;
    case "storageLeaf":
      removeStorageItem("leaf", 3, storage, typeElement, event);
      break;
    case "storageStone":
      removeStorageItem("stone", 4, storage, typeElement, event);
      break;
  }
})

//* EventListeners
//* Click on Storage
storageBoxes.addEventListener('click', (event) => {
  const storageId = event.target.getAttribute("id");
  switch (storageId) {
    case "grass":
      if (state.storage[0].length > 0) {
        state.toolStatus = "storageGrass";
        pickAxe.style.backgroundColor = ''
        shovel.style.backgroundColor = ''
        axe.style.backgroundColor = ''
      }
      break;
    case "dirt":
      if (state.storage[1].length > 0) {
        state.toolStatus = "storageDirt";
        pickAxe.style.backgroundColor = ''
        shovel.style.backgroundColor = ''
        axe.style.backgroundColor = ''
      }
      break;
    case "tree":
      if (state.storage[2].length > 0) {
        state.toolStatus = "storageTree";
        pickAxe.style.backgroundColor = ''
        shovel.style.backgroundColor = ''
        axe.style.backgroundColor = ''
      }
      break;
    case "leaf":
      if (state.storage[3].length > 0) {
        state.toolStatus = "storageLeaf";
        pickAxe.style.backgroundColor = ''
        shovel.style.backgroundColor = ''
        axe.style.backgroundColor = ''
      }
      break;
    case "stone":
      if (state.storage[4].length > 0) {
        state.toolStatus = "storageStone";
        pickAxe.style.backgroundColor = ''
        shovel.style.backgroundColor = ''
        axe.style.backgroundColor = ''
      }
      break;
  }
})



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


// console.log(gameBoard)

// console.log(state)

