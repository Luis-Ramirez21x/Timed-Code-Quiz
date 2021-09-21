var time = document.querySelector('#timer');
var startBtn = document.querySelector('#start')
var questionsContainer = document.querySelector('#questions-container');
var questionEl = document.querySelector('#questions');
var questionNum = 0;
var choiceA = document.querySelector('#a');
var choiceB = document.querySelector('#b');
var choiceC = document.querySelector('#c');
var choiceD = document.querySelector('#d');


var timeLeft = 75;
var score = 0;
var questionsArr = ['The process of restructuring computer code without changing or adding to its external behavior and functionality is known as _____. ',
'Which of the following correctly declares a variable with a number value?',
'Which of the following will correctly call upon the id on this code <button id = ”start”></button>?', 
'When declaring an array, what do you wrap your values in?', 
'How do you prevent function (event){} from bubbling?']
var questionNumber = 0;




function startTimer() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0){
            time.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
        }
    },1000 )
}

function startQuiz(){
    startBtn.setAttribute('style', 'display:none')
    questionsContainer.setAttribute('style', 'display:block')
    document.querySelector('p').setAttribute('style', 'display:none');
    questionEl.textContent = questionsArr[questionNum];

}

function renderQuestion(){

}



startBtn.addEventListener('click', startTimer);
startBtn.addEventListener('click', startQuiz);

