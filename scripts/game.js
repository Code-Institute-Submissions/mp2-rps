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


//game button event listenners
const rock = document.getElementById('rock-button').addEventListener('click', () => {
    alert('player chose rock')
    return 1
});
const paper = document.getElementById('paper-button').addEventListener('click', () => {
    alert('player chose paper')
    return 2
});
const scissors = document.getElementById('scissors-button').addEventListener('click', () => {
    alert('player chose scissors')
    return 3
});
let computerChoice = randomNumber()
function randomNumber() {
    let random = Math.floor(Math.random()*3+1)
    return random
}

console.log(computerChoice)