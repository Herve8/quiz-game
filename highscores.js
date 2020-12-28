const highScoresList =  document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

//target thenninner body of high score list in the html
highScoresList.innerHTML = 
//creating a new array of score
highScores.map(score =>{
    return `<li class="high-score">${score.name} - ${score.score}</li> `
}).join('');

