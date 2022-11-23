
let humanPoints = 0;
let computerPoints = 0;

function updateScore(winner){
    if(winner == "human"){
        humanPoints++;
    }
    else{
        computerPoints++;
    }
}

function getComputerChoice() {
    let compNum = Math.floor(Math.random() * 3);
    switch(compNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function makeTitle(someString){
    let newString = someString.toLowerCase();
    return newString.charAt(0).toUpperCase() + newString.slice(1) 
}


function playRound(playerSelection, computerSelection){

    if(makeTitle(playerSelection) == computerSelection){
        return "You tied!"
    }
    //gonna be converting everything to uppercase
    else{
        if(makeTitle(playerSelection) == "Rock") {
            if(computerSelection == "Paper"){
                updateScore("computer");
                return "You Lose! Paper beats Rock";
            }
            updateScore("human");
            return "You Win! Rock beats Scissors";
        }
        else if(makeTitle(playerSelection) == "Paper"){
            if(computerSelection == "Rock"){
                updateScore("human");
                return "You Win! Paper beats Rock"
            }
            updateScore("computer");
            return "You Lose! Scissors beats Paper"
        }
        else {
            if(computerSelection == "Paper"){
                updateScore("human");
                return "You Win! Scissors beats Paper"
            }
            updateScore("computer");
            return "You Lose! Rock beats Scissors"
        }
    }
}


const container = document.querySelector("#container");
const content = document.createElement('div');
content.classList.add('content');
const score = document.createElement('div');

const btns = document.querySelectorAll(`.btn`);


btns.forEach(btn => btn.addEventListener("click", function(){ 
    if(humanPoints < 5 && computerPoints < 5){
    //we are saying that whenever one of these buttons is clicked on we call this function
        content.textContent = playRound(btn.value, getComputerChoice());
        container.appendChild(content);
        score.textContent = `\n ${humanPoints} - ${computerPoints}`;
        container.appendChild(score);
    }
    else{
       
        if(humanPoints > computerPoints){
            score.textContent = `The Game is Over, YOU WON\n ${humanPoints} - ${computerPoints}`;
            container.appendChild(score);
        }
        else {
            score.textContent = `The Game is Over, YOU LOST\n ${humanPoints} - ${computerPoints}`;
            container.appendChild(score);
        }
    }
}));

