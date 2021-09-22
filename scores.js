var clearBtn = document.querySelector('#clear-highscores');
var scoresContainer = document.querySelector('#highscores-container');
var storedNames = JSON.parse(localStorage.getItem('initials'));
var storedScores = JSON.parse(localStorage.getItem('score'));
var clearArr = [];

function displayScores(){
    scoresContainer.setAttribute('style', 'display:block');

    for(i = 0; i < storedNames.length; i++){
        var li = document.createElement('li');
        li.textContent = storedNames[i] + ' - ' + storedScores[i];
        scoresContainer.appendChild(li);
        console.log(li);
    }
}

function clearScores(){
    localStorage.setItem('initials', JSON.stringify(clearArr));
    localStorage.setItem('score', JSON.stringify(clearArr));
    storedNames = [];
    storedScores =[];
    scoresContainer.innerHTML = "";

}

displayScores();
clearBtn.addEventListener('click', clearScores);