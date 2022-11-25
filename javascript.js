
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
            return "Pikachu";
        case 1:
            return "Squirtle";
        case 2:
            return "Eevee";
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
        if(makeTitle(playerSelection) == "Pikachu") {
            if(computerSelection == "Squirtle"){
                updateScore("computer");
                return "You Lose! Squirtle beats Pikachu";
            }
            updateScore("human");
            return "You Win! Pikachu beats Eevee";
        }
        else if(makeTitle(playerSelection) == "Squirtle"){
            if(computerSelection == "Pikachu"){
                updateScore("human");
                return "You Win! Squirtle beats Pikachu"
            }
            updateScore("computer");
            return "You Lose! Eevee beats Squirtle"
        }
        else {
            if(computerSelection == "Squirtle"){
                updateScore("human");
                return "You Win! Eevee beats Squirtle"
            }
            updateScore("computer");
            return "You Lose! Pikachu beats Eevee"
        }
    }
}


const container = document.querySelector("#container");
const content = document.createElement('div');
content.classList.add('content');
const score = document.createElement('div');
const winner = document.createElement('div');

const btns = document.querySelectorAll(`.btn`);


btns.forEach(btn => btn.addEventListener("click", function(){ 
    

    if(humanPoints < 5 && computerPoints < 5){
    //we are saying that whenever one of these buttons is clicked on we call this function
        content.textContent = playRound(btn.value, getComputerChoice());
        container.appendChild(content);
        score.textContent = `\n ${humanPoints} - ${computerPoints}`;
        container.appendChild(score);
    }

    if(humanPoints >= 5 || computerPoints >= 5){
        if(humanPoints > computerPoints){
            winner.textContent = `YOU WON`
            score.textContent = `${humanPoints} - ${computerPoints}`;
            container.appendChild(winner);
            container.appendChild(score);
        }
        else {
            winner.textContent = `YOU LOST`
            score.textContent = `${humanPoints} - ${computerPoints}`;
            container.appendChild(winner);
            container.appendChild(score);
        }
    }
    /*
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
    */
    //I'm gonna add something to catch if you have 5
}));

