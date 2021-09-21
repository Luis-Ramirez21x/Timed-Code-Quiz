var time = document.querySelector('#timer');
var startBtn = document.querySelector('#start')
var questionsContainer = document.querySelector('#questions-container');
var questionEl = document.querySelector('#questions');
var questionNum = 0;
var timeLeft = 75;
var score = 0;
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
    renderOptions();
    startTimer();

}

function renderOptions(){
    questionsContainer.innerHTML="";
    for(var i =0; i < 4; i++){
        var li = document.createElement('li');
        li.textContent = optionsArr[questionNum][i];
        li.setAttribute('data-index' , i);

        questionsContainer.appendChild(li);
    }
}





startBtn.addEventListener('click', startQuiz);
questionsContainer.addEventListener('click', function(event){
    var element = event.target;
    console.log(event);

    //matching questions with answer 
    if (element.matches("li") === true){
        var index = element.getAttribute("data-index");
        console.log(questionNum);
        console.log(index);
        if (questionNum === 0 && index == 1){
            score += 10;
            questionNum++;
            console.log(score);
        } 
    }    
})
/*questionsContainer.addEventListener('click', function(event){
    var element = event.target;
})
if (questionNum === 0 && element.matches(choiceB)){
    score += 10;
    questionNum++;
    
}

*/
