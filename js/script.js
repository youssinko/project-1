// ======== DOM ======
const enterBtn = document.querySelector(".enter-btn")
const enter2Btn = document.querySelector(".enter2-btn")
const p1Name = document.querySelector("#p1Name")
const displayName = document.querySelector(".display-name")
const display2Name = document.querySelector(".display2-name")
const selection = document.querySelector("#symbols")
const player1Container = document.querySelector('.player1-container')
const player2Container = document.querySelector('.player2-container')
const p2Name = document.querySelector("#p2Name")
const ready = document.querySelector(".ready")
const gif = document.querySelector(".loader")

const playBtn = document.querySelector(".play-btn")
//FUNCTION OF ENTER BUTTON : Player 1 get to choose symbol and input name, then input field disappears and new input for player 2 appears
function enter(){

displayName.innerHTML = `Player 1 : ${p1Name.value.toUpperCase()} <br> Symbol : ${selection.value}`;//
player1Container.classList.add('hide');
player2Container.classList.toggle('hide');
enterBtn.classList.add('hide')
enter2Btn.classList.remove('hide')


//enterBtn.classList.add('hide')
//p;
 
ready.classList.toggle('hide')

}


enterBtn.addEventListener('click',enter)

function enter2(){

    ready.innerHTML =`READY TO PLAY ?1 <br> ${p1Name.value.toUpperCase()} VS ${p2Name.value.toUpperCase()}`
    display2Name.innerHTML = `Player 2 : ${p2Name.value.toUpperCase()} <br> Symbol : ${selection.value}`;
    enter2Btn.classList.add('hide')
    player2Container.classList.toggle('hide')
    playBtn.classList.remove('hide');
    gif.classList.add('hide')
}
enter2Btn.addEventListener('click',enter2)
