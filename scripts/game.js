//launches game section and hides welcome section
document.getElementById('launch-btn').addEventListener('click', () => {
    document.getElementById('game-section').style.display = 'flex'
    document.getElementById('welcome-section').style.display = 'none'
});
//goes back to the welcome section on reset btn click
document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('game-section').style.display = 'none'
    document.getElementById('welcome-section').style.display = 'flex'
});