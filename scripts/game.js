//launches game section and hides welcome section
document.getElementById('launch-btn').addEventListener('click', () => {
    document.getElementById('game-section').style.display = 'block'
    document.getElementById('welcome-section').style.display = 'none'
});
//goes back to the welcome section on reset btn click
document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('welcome-section').style.display = 'flex'
    document.getElementById('game-section').style.display = 'hidden'
});