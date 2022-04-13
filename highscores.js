const highSCoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highSCoresList.innerHTML =
highScores.map(score => {
    return `<li class=:"high-score">${score.name} - ${score.score}</li>`
}).join('')