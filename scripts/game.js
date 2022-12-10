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
    if (playerChoice === randomChoice) {
        tieFunc()
    } else if (playerChoice === 1 && randomChoice === 2) {
        incrementcomputerScore()
    } else if (playerChoice === 1 && randomChoice === 3) {
        incrementPlayerScore()
    } else if (playerChoice === 2 && randomChoice === 3) {
        incrementcomputerScore()
    } else if (playerChoice === 2 && randomChoice === 1) {
        incrementPlayerScore()
    } else if (playerChoice === 3 && randomChoice === 1) {
        incrementcomputerScore()
    } else if (playerChoice === 3 && randomChoice === 2) {
        incrementPlayerScore()
    } 
}

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

//Konami code copied and modified from gomakethings.com full citation in README
konami()

function konami() {
let pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let current = 0;
let keyHandler = function (event) {
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}
	current++;
	if (pattern.length === current) {
		current = 0;
		window.alert('Easter Egg Found!');
        choice1 = document.getElementById('rock-button').addEventListener('click', () => {
            playerChoice = parseInt('1')
            computerChoice()
            incrementPlayerScore()
            playerIcon.innerHTML = '<img class="basic-rock" src="/assets/images/anime-mode-images/anime-rock.png" alt="anime rock">'
        })
        
        choice2 = document.getElementById('paper-button').addEventListener('click', () => {
            playerChoice = parseInt('2')
            computerChoice()
            incrementPlayerScore()
            playerIcon.innerHTML = '<img class="basic-rock" src="/assets/images/anime-mode-images/anime-paper.png" alt="anime paper">'
        });
        choice3 = document.getElementById('scissors-button').addEventListener('click', () => {
            playerChoice = parseInt('3')
            computerChoice()
            incrementPlayerScore()
            playerIcon.innerHTML = '<img class="basic-rock" src="/assets/images/anime-mode-images/anime-scissors.png" alt="anime scissors">'
        });
	}
};
document.addEventListener('keydown', keyHandler, false);
}
