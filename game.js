//const questionEl = document.querySelector('#question');

//declaring  the  variables
const choices = Array.from(document.querySelectorAll('.choice-text')); 
const progressText = document.querySelector('#progressText'); 
const scoreText = document.querySelector('#score'); 
const progressBarFull = document.querySelector('#progressBarFull');  
const timerEl = document.getElementById('timer');
const startButton = document.getElementById('.btn');

let currentQuestion = {};//empty object
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];//empty array
let seconds = 60;
let interval;
 
//a questions object which containers an array of  questions  and answers
let questions = [
{
    question: 'How many megabytes are there in 1 Gigabytes?',
    choice1: '1000',
    choice2: '100',
    choice3: '10000',
    choice4: '1000000',
    answer:  3,
},
{
    question: 'What is C#?',
    choice1: 'OOP-programming',
    choice2: 'Procedural language',
    choice3: 'A functional programming language',
    choice4: 'A modular programming language',
    answer:  1,
},
{
    question: 'What do you call a group of memory location containing the same data type?',
    choice1: 'A loop',
    choice2: 'Data structure',
    choice3: 'An array',
    choice4: 'Assignment',
    answer:  3,
},
{
    question: 'In C++ which keyword must you use to display and answer on the screen?',
    choice1: 'printf',
    choice2: 'printout',
    choice3: 'msgout',
    choice4: 'All the above',
    answer:  1,
},
{
    question: 'What is a constructor?',
    choice1: 'A method used when creating an object of a class',
    choice2: 'A methos used when adding two objects',
    choice3: 'A pointer',
    choice4: 'Passing a fucntion',
    answer:  1,
}
    
]
//a fucntionwhichh executes the timer
function startTimer(){
    timerEl.textContent = seconds;
    interval = setInterval(function(){
        seconds--;
        timerEl.textContent = seconds;
        if (seconds === 0) {
            clearInterval(interval);
        }
        //renderTime is calld here once every second
    }, 1000);
}

//declaring two constants and assigning them with integers
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

//start game function
startGame = () => {
questionCounter = 0;
score = 0;
availableQuestions = [...questions];
getNewQuestion()

}
//function to get the next question
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter> MAX_QUESTIONS){
        
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html');
    }

    //question counter which increments after a questionhas been answered
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    //declaring question index which indicates the position the question in an array
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //for each loop which gets  data attribute through the dataset object
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' +number];
    })

    availableQuestions.splice(questionIndex, 1)


    acceptingAnswers = true;

}
//a for each loopwhich creates an event listener to each  answers  clicked
choices.forEach(choice => {
    //add an event listener to clicking the answers
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }
        else{
            classToApply === 'incorrect';
            seconds = seconds - 2;
        }
        // use the classList API to remove and add classes
        selectedChoice.parentElement.classList.add(classToApply);
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();

      

      

    })
})
//incrementingthe scores
incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame()
    //startTimer()

    //a timer which starts when the page loads
    window.onload = startTimer;
    
  
    






