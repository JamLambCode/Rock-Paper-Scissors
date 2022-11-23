

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
                return "You Lose! Paper beats Rock";
            }
            return "You Win! Rock beats Scissors";
        }
        else if(makeTitle(playerSelection) == "Paper"){
            if(computerSelection == "Rock"){
                return "You Win! Paper beats Rock"
            }
            return "You Lose! Scissors beats Paper"
        }
        else {
            if(computerSelection == "Paper"){
                return "You Win! Scissors beats Paper"
            }
            return "You Lose! Rock beats Scissors"
        }
    }
}



const btns = document.querySelectorAll(`.btn`);
btns.forEach(btn => btn.addEventListener("click", function(){
    console.log(playRound(btn.value, getComputerChoice()));
}));

