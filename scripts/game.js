//launches game section and hides welcome section
document.getElementById('launch-btn').addEventListener('click', () => {
    document.getElementById('game-section').style.display = 'block'
    document.getElementById('welcome-section').style.display = 'none'
});
//goes back to the welcome section on reset btn click
document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('game-section').style.display = 'none'
    document.getElementById('welcome-section').style.display = 'flex'
});


/*KEY 1 = rock, 2 = paper, 3 = scissors
1 beats 3   1 loses to 2
2 beats 1   2 loses to 3
3 beats 2   3 loses to 1
*/

let playerChoice

//event listers for option buttons
choice1 = document.getElementById('rock-button').addEventListener('click', () => {
    playerChoice = parseInt('1')
    computerChoice()
    compare()
    playerIcon.innerHTML = '<img class="basic-rock" src="/assets/images/basic-icons/rock.png" alt="rock">'
    //console.log('player choise rock')
});
choice2 = document.getElementById('paper-button').addEventListener('click', () => {
    playerChoice = parseInt('2')
    computerChoice()
    compare()
    playerIcon.innerHTML = '<img class ="basic-paper" src="/assets/images/basic-icons/paper.png" alt="paper">'
    //console.log('player choise papier')
});
choice3 = document.getElementById('scissors-button').addEventListener('click', () => {
    playerChoice = parseInt('3')
    computerChoice()
    compare()
    playerIcon.innerHTML = '<img class="basic-scissors" src="/assets/images/basic-icons/scissors.png" alt="scissors">'
    //console.log('player choise scissors')
});

//gets random number between 1 and 3
function computerChoice(){
    randomChoice = Math.floor(Math.random()*3+1)
    if (randomChoice === 1) {
        computerIcon.innerHTML = '<img class="basic-rock" src="/assets/images/basic-icons/rock.png" alt="rock">'
    } else if (randomChoice === 2) {
        computerIcon.innerHTML = '<img class ="basic-paper" src="/assets/images/basic-icons/paper.png" alt="paper">'
    } else if(randomChoice ===3) {
        computerIcon.innerHTML = '<img class="basic-scissors" src="/assets/images/basic-icons/scissors.png" alt="scissors">'
    }
}

function compare() {
    console.log(playerChoice)
    console.log(randomChoice)
    if (playerChoice === randomChoice) {
        tieFunc()
        console.log('you both chose the same')
    } else if (playerChoice === 1 && randomChoice === 2) {
        incrementcomputerScore()
        console.log('computer wins, you chose rock and the computer chose paper')
    } else if (playerChoice === 1 && randomChoice === 3) {
        incrementPlayerScore()
        console.log('user wins, you chose rock and the computer chose scissors')
    } else if (playerChoice === 2 && randomChoice === 3) {
        incrementcomputerScore()
        console.log('computer wins, you chose paper and the computer chose scissors')
    } else if (playerChoice === 2 && randomChoice === 1) {
        incrementPlayerScore()
        console.log('user wins, you chose paper and the computer chose rock')
    } else if (playerChoice === 3 && randomChoice === 1) {
        incrementcomputerScore()
        console.log('computer wins, you chose scissors and the computer chose rock')
    } else if (playerChoice === 3 && randomChoice === 2) {
        incrementPlayerScore()
        console.log('user wins, you chose scissors and the computer chose paper')
    }
}

//let addPlayerScore = document.getElementById('player-score').innerText = '0'
//let addComputerScore = document.getElementById('computer-score').innerText = '0'

//let playerScore = 0
//let computerScore = 0


function incrementPlayerScore() {
let playerScore = document.getElementById('player-score')
let playerNumber = playerScore.innerHTML
playerNumber++
playerScore.innerHTML = playerNumber
document.getElementById('user-message').innerHTML = '<p>You win!</p>'
setTimeout(function(){
    document.getElementById('user-message').innerHTML = "";
    },900);
}

function incrementcomputerScore() {
    letComputerScore = document.getElementById('computer-score')
    let computerNumber = letComputerScore.innerHTML
    computerNumber++
    letComputerScore.innerHTML = computerNumber
    document.getElementById('computer-message').innerHTML = '<p>Computer Wins!</p>'
    setTimeout(function(){
        document.getElementById('computer-message').innerHTML = "";
        },900);
       }


let playerIcon = document.getElementById('player-display')
let computerIcon = document.getElementById('computer-display')

function tieFunc() {
    document.getElementById('user-message').innerHTML = '<p>A Tie!</p>'
    setTimeout(function(){
        document.getElementById('user-message').innerHTML = "";
        },900);
    document.getElementById('computer-message').innerHTML = '<p>Nobody Wins!</p>'
    setTimeout(function(){
        document.getElementById('computer-message').innerHTML = "";
        },900);
}