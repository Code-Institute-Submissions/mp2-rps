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

//KEY 1 = rock, 2 = paper, 3 = scissors

let playerChoice

choice1 = document.getElementById('rock-button').addEventListener('click', () => {
    playerChoice = parseInt('1')
    testFunc()
    getRandom()
    compare()
    console.log('player choise rock')
})

choice2 = document.getElementById('paper-button').addEventListener('click', () => {
    playerChoice = 'paper'
    //console.log(playerChoice)
})

choice3 = document.getElementById('scissors-button').addEventListener('click', () => {
    playerChoice = 'scissors'
   //console.log(playerChoice)
})

function testFunc() {
    if (playerChoice === 'rock') {
        //console.log('this works')
    }
}


function getRandom(){
    randomChoice = Math.floor(Math.random()*3+1)
    //console.log(randomChoice)
}

function compare() {
    console.log(playerChoice)
    console.log(randomChoice)
    if (playerChoice !== randomChoice) {
        console.log('no tie') 
    } else {
        console.log('tie')
    }
}