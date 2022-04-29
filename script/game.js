const gameBoard = document.querySelector('.game-board');
const pickAxe = document.querySelector('#pickAxe');
const shovel = document.querySelector('#shovel');
const axe = document.querySelector('#axe');
const storageBoxes = document.querySelector('.storageBoxes');
const startGameBtn = document.querySelector('#startGameBtn');
const startGameBackground = document.querySelector('.startGame')
const containerGame = document.querySelector('.container')
const state = {
  toolStatus: '',
  storage: [[], [], [], [], []],
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
      boxElement.setAttribute(`data-element`, `${typeOfElemnt}`);
      boxElement.classList.add('box-item')
      gameBoard.appendChild(boxElement)
    }
  }
}
drawBoard()

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
    console.log(storageObj[i])
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
// Amount Storage Element

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
        console.log(typeStorage, i)
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
    // Tools Cases
    case "pickAxe":
      storagePushChangeElement(pickAxe, tools.pickAxe, typeElement, event);
      break;

    case "shovel":
      storagePushChangeElement(shovel, tools.shovel, typeElement, event);
      break;

    case "axe":
      storagePushChangeElement(axe, tools.axe, typeElement, event);
      break;
    // Storages Cases
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
  // if (state.storage.length > 0) {
  //   state.toolStatus = "storage";
  //   pickAxe.style.backgroundColor = ''
  //   shovel.style.backgroundColor = ''
  //   axe.style.backgroundColor = ''
  //   state.storageStatus = state.storage[state.storage.length - 1]
  // }
})

// Click on Start Game
startGameBtn.addEventListener('click', (event) => {
  startGameBackground.style.display = 'none'
  containerGame.style.display = 'flex'
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

