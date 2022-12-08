//launches game section and hides welcome section
document.getElementById('launch-btn').addEventListener('click', () => {
    document.getElementById('game-section').style.display = 'flex'
    document.getElementById('welcome-section').style.display = 'none'
});
//goes back to the welcome section on reset btn click
//document.getElementById('reset-btn').addEventListener('click', () => {
//    document.getElementById('game-section').style.display = 'none'
//    document.getElementById('welcome-section').style.display = 'flex'
//});


/*KEY 1 = rock, 2 = paper, 3 = scissors
1 beats 3   1 loses to 2
2 beats 1   2 loses to 3
3 beats 2   3 loses to 1



*/
let playerChoice

choice1 = document.getElementById('rock-button').addEventListener('click', () => {
    playerChoice = parseInt('1')
    getRandom()
    compare()
    //console.log('player choise rock')
})

choice2 = document.getElementById('paper-button').addEventListener('click', () => {
    playerChoice = parseInt('2')
    getRandom()
    compare()
    //console.log('player choise papier')
})

choice3 = document.getElementById('scissors-button').addEventListener('click', () => {
    playerChoice = parseInt('3')
    getRandom()
    compare()
    //console.log('player choise scissors')
})



function getRandom(){
    randomChoice = Math.floor(Math.random()*3+1)
    //console.log(randomChoice)
}

function compare() {
    console.log(playerChoice)
    console.log(randomChoice)
    if (playerChoice === randomChoice) {
        console.log('you both chose the same')
    } else if (playerChoice === 1 && randomChoice === 2) {
        console.log('computer wins, you chose rock and the computer chose paper')
    } else if (playerChoice === 1 && randomChoice === 3) {
        console.log('user wins, you chose rock and the computer chose scissors')
    } else if (playerChoice === 2 && randomChoice === 3) {
        console.log('computer wins, you chose paper and the computer chose scissors')
    } else if (playerChoice === 2 && randomChoice === 1) {
        console.log('user wins, you chose paper and the computer chose rock')
    } else if (playerChoice === 3 && randomChoice === 1) {
        console.log('computer wins, you chose scissors and the computer chose rock')
    } else if (playerChoice === 3 && randomChoice === 2) {
        console.log('user wins, you chose scissors and the computer chose paper')
    }
}