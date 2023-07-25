
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const winnertext = document.getElementById('winner');
const playerscoretext = document.getElementById('player-score');
const computerscoretext = document.getElementById('computer-score');
const restartbtn = document.getElementById('restart');
const gamewinner = document.getElementById('gamewinner');

restartbtn.style.visibility = 'hidden'

rock.addEventListener('click', () => handleClick('Rock'))
paper.addEventListener('click', () => handleClick('Paper'))
scissors.addEventListener('click', () => handleClick('Scissors'))


function handleClick(playerSelection){
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection)
}


function getComputerChoice(){
    let randomNum= Math.random();
    let computerchoice = "";
    if(randomNum <= 0.33333){
        computerchoice = "Rock"
        
    }else if(randomNum >=0.33333 && randomNum <=0.66666){
        computerchoice = "Paper"
        
    }else if(randomNum >= 0.66666){
        computerchoice = "Scissors"
        
    }
    return computerchoice
}


let result = '';
let computerscore = 0;
let playerscore = 0;


function playRound(player,computer){
    if(player === computer){
        result = 'tie';
    }
    if((player === "Rock" && computer === "Scissors") || 
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper")
    ){
        result = "win"
        playerscore ++;
    }
    if((player === "Scissors" && computer === "Rock") || 
        (player === "Rock" && computer === "Paper") ||
        (player === "Paper" && computer === "Scissors")
    ){
        result = "lose"
        computerscore ++;
    }
    
    updateresult(result);
    
    updateScore(playerscore, computerscore);

    checkwinner(playerscore, computerscore);
}

function updateScore(playerscore, computerscore){
    playerscoretext.innerText = `player: ${playerscore}`;
    computerscoretext.innerText = `computer ${computerscore}`;
}


function updateresult(result){
    if(result === "tie"){
        winnertext.innerText = "Tie";
    } else if(result === "win"){
        winnertext.innerText = "You Win!"
    } else if(result === "lose"){
        winnertext.innerText = "You Lose";
    }
}


function checkwinner(playerscore, computerscore){
    if (playerscore == 5 || computerscore == 5){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        restartbtn.style.visibility = "visible"
        restartbtn.addEventListener('click', restartgame);
    }
    if(playerscore == 5){
        gamewinner.innerText = "You Won The Game!"
    } else if(computerscore == 5){
        gamewinner.innerText = "You Lost The Game!"
    }
    
}

function restartgame(){
    computerscore = 0;
    playerscore = 0;
    winnertext.innerText = "Choose weapon";

    updateScore(playerscore, computerscore);

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    
    restartbtn.style.visibility = "hidden";
    gamewinner.innerText = '';
}