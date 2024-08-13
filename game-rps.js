




function getHumanChoice(){
    let validChoice= false;
    while (validChoice==false){
        const myChoice= prompt("Enter: ROCK or PAPER or SCISSORS", '');
        if(myChoice==null){
            continue;
        }
        const capital= myChoice.toUpperCase();
        if(chioces.includes(capital)){
            validChoice== true;
            return capital;
        }
    }    
}

function playGame(){
    let humanScore= 0;
    let computerScore= 0;
    console.log("Welcome PLAYER!");
    for(let i=0; i<5; i++){
        const humanChoice= getHumanChoice();
        const computerChoice= getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log("===================");
        if(checkWinner(humanChoice, computerChoice) == "player"){
            humanScore++;
        }else if(checkWinner(humanChoice, computerChoice) == "computer"){
            computerScore++;
        }
    }   
    console.log("Game Over");
    if(humanScore > computerScore){
        console.log("YOU'RE THE WINNER!");
    }else if(computerScore > humanScore){
        console.log("COMPUTER WINS!");
    }else{
        console.log("WE HAVE A TIE!");
    }
 
}
// playGame()
let playerChoice= document.querySelector(".playerChoice input");
let computerChoice= document.querySelector(".computerChoice input");
let round= document.querySelector(".round input");
round.value= 0;

const chioces=["ROCK","PAPER","SCISSORS"];

function getComputerChoice(){
    let comChoice=chioces[Math.floor(Math.random()*chioces.length)];
    return comChoice;
}

function checkWinner(humanChoice, computerChoice){
    if(humanChoice==computerChoice){
        return "draw";
    }else if(
        humanChoice=="ROCK"&& computerChoice=="SCISSORS"||
        humanChoice=="SCISSORS"&&computerChoice=="PAPER"||
        humanChoice=="PAPER"&&computerChoice=="ROCK"
    ){
        return "player";
    }else{
        return "computer";
    }
}

const firstButton= document.querySelector(".firstBtn");
const secondButton= document.querySelector(".midBtn");
const lastButton= document.querySelector(".lastBtn");


firstButton.addEventListener("click", fstButtonClick);

function fstButtonClick(){
    const firstBtnClicked= 'ROCK';
    playerChoice.value= firstBtnClicked;
    computerChoice.value= getComputerChoice();
    round.value ++
}

secondButton.addEventListener("click", secButtonClick);

function secButtonClick(){
    const secondBtnClicked= 'PAPER';
    playerChoice.value= secondBtnClicked;
    computerChoice.value= getComputerChoice();
    round.value ++
}

lastButton.addEventListener("click", lstButtonClick);

function lstButtonClick(){
    const lastBtnClicked= 'SCISSORS';
    playerChoice.value= lastBtnClicked;
    computerChoice.value= getComputerChoice();
    round.value ++
}

function playRound(humanChoice, computerChoice){
    const result= checkWinner(humanChoice, computerChoice);
    if(result=="draw"){
        return "It's a DRAW";
    }else if(result=="player"){
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }else{
        return `You loss! ${computerChoice} beats ${humanChoice}`;
    }
}