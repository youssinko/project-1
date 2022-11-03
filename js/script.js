// ================================ DOM ===========================
const enterBtn = document.querySelector(".enter-btn")
const enter2Btn = document.querySelector(".enter2-btn")
const p1Name = document.querySelector("#p1Name")
const displayName = document.querySelector(".display-name")
const display2Name = document.querySelector(".display2-name")
const selectionEl = document.querySelector("#symbols")
const player1Container = document.querySelector('.player1-container')
const player2Container = document.querySelector('.player2-container')
const p2Name = document.querySelector("#p2Name")
const gif = document.querySelector(".loader")
const gameEl = document.querySelector(".game-container")
const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
// const restartBtn = document.querySelector("#.restartBtn")
const playBtn = document.querySelector(".play-btn")
const secondSymbol = document.querySelector("#secondSymbol")
const xEl = document.querySelector(".xEl")
const oEl = document.querySelector(".oEl")

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

let options = ['', '', '', '', '', '', '', '', '']
let currentPlayer = "X"

let gameIsRunning = false;

//ENTER BUTTON FUNCTION : Player 1 get to choose symbol and input name, then input field disappears and new input for player 2 appears *
// 2 "enter" buttons were created for each player and one play button to start the game

//====================== first enter button function ======================
function enter() {

    displayName.innerHTML = `Player 1 : ${p1Name.value.toUpperCase()} <br> Symbol : ${selectionEl.value}`;//
    player1Container.classList.add('hide');
    player2Container.classList.toggle('hide');
    enterBtn.classList.add('hide')
    enter2Btn.classList.remove('hide')

}


enterBtn.addEventListener('click', enter)

//========================= second enter button function ================

function enter2() {

    display2Name.innerHTML = `Player 2 : ${p2Name.value.toUpperCase()} <br> Symbol : ${selectedSymbol}`;
    enter2Btn.classList.add('hide')
    player2Container.classList.toggle('hide')
    playBtn.classList.remove('hide');
    gif.classList.add('hide')

}

enter2Btn.addEventListener('click', enter2)
//====================== Play button ===========
function play() {
    gameEl.classList.remove('hide')
    // document.querySelector('body').style.background = "URL(./images/stick-figure.gif)";
    playBtn.classList.add('hide')
}
playBtn.addEventListener('click', play)
//========================= create function when player 1 select symbol, player 2 assigned automatically to the second symbol =========
let selectedSymbol = ''
function disableSymbol(disableOption) {
    console.log(disableOption.value)
    if (disableOption.value == 'X') {
        selectedSymbol = 'O'
        secondSymbol.textContent = `Your Symbol is ${selectedSymbol} `
    } else {
        selectedSymbol = 'X'
        secondSymbol.textContent = `Your Symbol is ${selectedSymbol} `

    }

}
//================================= game functions =========================

//function to check each cell and pass on cellclicked function to clicked cell
startGame()
function startGame() {
    cells.forEach((cell) => {
        cell.addEventListener('click', cellclicked);
        // restartBtn.addEventListener('click', restartGame);
        statusText.textContent = `${currentPlayer}'s turn`;
        gameIsRunning = true
    })
}

//function where we can get attribute of each cell to check if cell is empty and only update cell if it's empty

function cellclicked() {

    const cellIndex = this.getAttribute('cellIndex')

    //if cell is emply or game is not running, don't do anything
    if (options[cellIndex] !== '' || !gameIsRunning) {
        return
    }
    else {
        updatecell(this, cellIndex)
        winner()

    }
}
function updatecell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}


function switchPlayer() {
    if (currentPlayer == 'X') {
        currentPlayer = 'O'
        statusText.textContent = `${currentPlayer}'s Turn`
    } else {
        currentPlayer = 'X'
        statusText.textContent = `${currentPlayer}'s Turn`
    }

}
function winner() {
    let roundWon = false;
    //iterate winCondition
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        console.log(winConditions)
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]
        if (cellA == '' || cellB == '' || cellC == '') {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }
    //outside for loop
    if (roundWon === true) {
        statusText.textContent = `${currentPlayer} wins!`
        gameIsRunning = false
    }
    else if (!options.includes('')) {
        statusText.textContent = 'Draw!'
        gameIsRunning = false;
    }
    else{
        switchPlayer()
    }
}


function restartGame() {
   options = ['', '', '', '', '', '', '', '', '']
    currentPlayer = "X";
    statusText.textContent = `${currentPlayer}'s turn`
cells.forEach(cell => 
    cell.textContent = '')
    gameIsRunning = true
}