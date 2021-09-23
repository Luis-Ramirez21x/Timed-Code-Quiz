var time = document.querySelector('#timer');
var startBtn = document.querySelector('#start')
var questionsContainer = document.querySelector('#questions-container');
var questionEl = document.querySelector('#questions');
var pEl = document.querySelector('p');
var userInput = document.querySelector('#userInitials');
var submitBtn = document.querySelector('#submit');
var questionNum = 0;
var timeLeft = 75;
var score = 0;
var initials = JSON.parse(localStorage.getItem('initials'));
var highscores = JSON.parse(localStorage.getItem('score'));
var objectIndex = 0;
var questionsArr = ['The process of restructuring computer code without changing or adding to its external behavior and functionality is known as _____. ',
    'Which of the following correctly declares a variable with a number value?',
    'Which of the following will correctly call upon this id in JS on this code <button id = ”start”></button>?', 
    'When declaring an array, what do you wrap your values in?', 
    'How do you prevent function(event){} from bubbling?']
var optionsArr = [
    ['Code Sautéing', 'Code Refactoring', 'Threading-the-needle', 'Hoisting'],
    ['var num = "7"' , 'var num = []' , 'var letter = 7', 'var letter = "number"'],
    ["document.querySelector('#start')" , "document.querySelector('.start')" , 'javaScript.pleaseHelpMeFind(start)', 'none of the above'],
    ['Square Brackets' , 'Parentheses' , 'Dashes', 'Angle Brackets'],
    ['event`(stopPropogation());' , 'event.preventHateCrimes();' , 'There is no way to stop bubbling', 'event.stopPropagation();'],
]



function startTimer() {
    var timeInterval = setInterval(function() {
        if (questionNum ===5){
            clearInterval(timeInterval);
            time.textContent = "";
        } else if (timeLeft > 0){
            time.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            time.textContent = "";
            gameFinished();
        }
    },1000 )
}

function startQuiz(){
    startBtn.setAttribute('style', 'display:none')
    questionsContainer.setAttribute('style', 'display:block')
    pEl.setAttribute('style', 'display:none');
    
    renderOptions();
    startTimer();

}

function renderOptions(){
    questionsContainer.innerHTML="";
    questionEl.textContent = questionsArr[questionNum];
    for(var i =0; i < 4; i++){
        var li = document.createElement('li');
        li.textContent = optionsArr[questionNum][i];
        li.setAttribute('data-index' , i);

        questionsContainer.appendChild(li);
    }
}

function gameFinished(){
    questionsContainer.setAttribute('style', 'display:none');
    questionEl.textContent = "Finished!"
    pEl.textContent = "Your final score is: " + score;
    questionEl.setAttribute('style', 'display:block');
    pEl.setAttribute('style' , 'display:block');
    userInput.setAttribute('style', 'display:inline-block');
    submitBtn.setAttribute('style', 'display:inline-block');
}

function storeHighscores(){

}

startBtn.addEventListener('click', startQuiz);
questionsContainer.addEventListener('click', function(event){
    event.preventDefault();
    var element = event.target;
    console.log(event);

    //matching questions with answer 
    if (element.matches("li") === true){
        var index = element.getAttribute("data-index");
        console.log(questionNum);
        console.log(index);
        //if (questionNum < 5){
            if ((questionNum === 0 && index == 1) || 
            (questionNum === 1 && index == 2) || 
            (questionNum === 2 && index == 0) || 
            (questionNum === 3 && index == 0) || 
            (questionNum === 4 && index == 3)){
                score += 10;
                questionNum++;
                if (questionNum === 5) {gameFinished(); }
                 else{renderOptions();
                console.log(score);}
            } else {
                timeLeft -= 10;
                questionNum++;
                if (questionNum === 5) {gameFinished();}
                else {renderOptions();}
            }
}
})
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    initials[initials.length] = document.querySelector('#userInitials').value;
    highscores[highscores.length] = score.toString();

    localStorage.setItem('initials', JSON.stringify(initials));
    localStorage.setItem('score', JSON.stringify(highscores));


})
