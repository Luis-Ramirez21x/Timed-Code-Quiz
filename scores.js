var clearBtn = document.querySelector('#clear-highscores');
var scoresContainer = document.querySelector('#highscores-container');
var newName = JSON.parse(localStorage.getItem('initials'));
var newScore = JSON.parse(localStorage.getItem('score'));
var storedNames=[];
var storedScores= [];
var clearArr = [];

storedNames[storedNames.length]= newName;
storedScores[storedScores.length] = newScore;


function displayScores(){
    scoresContainer.setAttribute('style', 'display:block');

    for(i = 0; i < storedNames.length; i++){
        var li = document.createElement('li');
        li.textContent = storedNames[i] + ' - ' + storedScores[i];
        scoresContainer.appendChild(li);
        
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