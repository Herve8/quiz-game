///declaring the variables
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [] 
const MAX_HIGH_SCORES = 5;

//assigning mostRecentScore to the final  score
finalScore.innerText = mostRecentScore;

//an an eventlistener that whenever the key up is pressed it will enable the save button
username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
})
//prevent automatically refresh 
saveHighScore = e => {
    e.preventDefault();//allows to prevent auto refresh while clicking a button

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)//push scores onto high scores

    //sorting highscores in ascending order
    highScores.sort((a,b) =>{
        return b.score - a.score;
    })
    //removes elements from an array, and if necessary,  inserts new elements in their place,  returning the deleted item
    highScores.splice(5);

        //target the local storage to save the high scores
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
}