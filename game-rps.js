// function getHumanChoice(){
//     let validChoice= false;
//     while (validChoice==false){
//         const myChoice= prompt("Enter: ROCK or PAPER or SCISSORS", '');
//         if(myChoice==null){
//             continue;
//         }
//         const capital= myChoice.toUpperCase();
//         if(chioces.includes(capital)){
//             validChoice== true;
//             return capital;
//         }
//     }    
// }

// function playGame(){
//     let humanScore= 0;
//     let computerScore= 0;
//     console.log("Welcome PLAYER!");
//     for(let i=0; i<5; i++){
//         const humanChoice= getHumanChoice();
//         const computerChoice= getComputerChoice();
//         console.log(playRound(humanChoice, computerChoice));
//         console.log("===================");
//         if(checkWinner(humanChoice, computerChoice) == "player"){
//             humanScore++;
//         }else if(checkWinner(humanChoice, computerChoice) == "computer"){
//             computerScore++;
//         }
//     }   
//     console.log("Game Over");
//     if(humanScore > computerScore){
//         console.log("YOU'RE THE WINNER!");
//     }else if(computerScore > humanScore){
//         console.log("COMPUTER WINS!");
//     }else{
//         console.log("WE HAVE A TIE!");
//     }
 
// }
// playGame()
const myButton= document.getElementsByTagName("button");

const container= document.querySelector(".container");

let playerChoice= document.querySelector(".playerChoice input"); 

let computerChoice= document.querySelector(".computerChoice input");

let round= document.querySelector(".round input");

round.value= 0;
let playerScore= document.querySelector(".playerScore input");

let computerScore= document.querySelector(".computerScore input");

let draw= document.querySelector(".draw input");

draw.value=0;
playerScore.value= 0;
computerScore.value= 0;

let message= document.querySelector(".myPrompt");

let myInput= document.querySelector(".myInput");

const chioces=["ROCK","PAPER","SCISSORS"];




const firstButton= document.querySelector(".firstBtn");
const secondButton= document.querySelector(".midBtn");
const lastButton= document.querySelector(".lastBtn");


firstButton.addEventListener("click", fstButtonClick);

function fstButtonClick(e){
    for(let i=0; i< myButton.length; i++){
        myButton[i].style.backgroundColor= '#f0084e';
        myButton[i].style.color= 'white';
    }
    
    const firstBtnClicked= 'ROCK';
    playerChoice.value= firstBtnClicked;
    computerChoice.value= getComputerChoice();
    round.value ++;
    const humanChoice= playerChoice.value;
    const computer= computerChoice.value;
    message.innerHTML= '<h4>'+playRound(humanChoice, computer)+'</h4>';
    if(checkWinner(humanChoice, computer) == "player"){
        playerScore.value ++;
    }else if(checkWinner(humanChoice, computer) == "computer"){
        computerScore.value ++;
    }else{
        draw.value ++;
    }
    if(playerScore.value == 5 || computerScore.value == 5){
        myInput.children[0].value= 'GAME OVER';
    }
    if(playerScore.value == 5){
        myInput.children[1].value= 'YOU WIN!';
    }else if(computerScore.value == 5){
        myInput.children[1].value= 'YOU LOSE!';
    }

    console.log(round.value)
    let checkerPlayer;
    let checkerComputer;
    let checkerRound;
    let n=1;
    let m;

    if(playerScore.value == 5 || computerScore.value == 5){
        // const playerScored= playerScore.value;
        // const computerScored= computerScore.value;
        // const roundValue= round.value;
        checkerRound= round.value;
        console.log(checkerRound)
        m= +checkerRound + n
        
       console.log(m)
        
        
       
        
        // console.log(computerScored)
        // console.log(playerScored)

        // if(playerScore.value++> playerScored ||
        //      computerScore.value++> computerScored ||
        //     round.value++> roundValue
        // ){
        //     playerScore.value= 0;
        //     computerScore.value= 0;
        //     round.value= 0;
        //     myInput.children[0].value= 'WELCOME'
        // }
        
    }
    if(checkerRound < round.value){
        console.log("working")
    } 
}

secondButton.addEventListener("click", secButtonClick);

function secButtonClick(e){
    for(let i=0; i< myButton.length; i++){
        myButton[i].style.backgroundColor= '#2ea05c';
        myButton[i].style.color= 'white';
    }
    const secondBtnClicked= 'PAPER';
    playerChoice.value= secondBtnClicked;
    computerChoice.value= getComputerChoice();
    round.value ++;
    const humanChoice= playerChoice.value;
    const computer= computerChoice.value;
    message.innerHTML= '<h4>'+playRound(humanChoice, computer)+'</h4>';
    if(checkWinner(humanChoice, computer) == "player"){
        playerScore.value ++;
    }else if(checkWinner(humanChoice, computer) == "computer"){
        computerScore.value ++;
    }else{
        draw.value ++;
    }
    if(playerScore.value == 5 || computerScore.value == 5){
        myInput.children[0].value= 'GAME OVER';
    }
    if(playerScore.value == 5){
        myInput.children[1].value= 'YOU WIN!';
    }else if(computerScore.value == 5){
        myInput.children[1].value= 'YOU LOSE!';
    }
}

lastButton.addEventListener("click", lstButtonClick);

function lstButtonClick(e){
    for(let i=0; i< myButton.length; i++){
        myButton[i].style.backgroundColor= '#0754ab';
        myButton[i].style.color= 'white';
    }
    const lastBtnClicked= 'SCISSORS';
    playerChoice.value= lastBtnClicked;
    computerChoice.value= getComputerChoice();
    round.value ++;
    const humanChoice= playerChoice.value;
    const computer= computerChoice.value;
    message.innerHTML= '<h4>'+playRound(humanChoice, computer)+'</h4>';
    if(checkWinner(humanChoice, computer) == "player"){
        playerScore.value ++;
    }else if(checkWinner(humanChoice, computer) == "computer"){
        computerScore.value ++;
    }else{
        draw.value ++;
    }
    if(playerScore.value == 5 || computerScore.value == 5){
        myInput.children[0].value= 'GAME OVER';
    }
    if(playerScore.value == 5){
        myInput.children[1].value= 'YOU WIN!';
    }else if(computerScore.value == 5){
        myInput.children[1].value= 'YOU LOSE!';
    }
}

function getComputerChoice(){
    let comChoice=chioces[Math.floor(Math.random()*chioces.length)];
    return comChoice;
}

function checkWinner(humanChoice, computer){
    if(humanChoice==computer){
        return "draw";
    }else if(
        humanChoice=="ROCK"&& computer=="SCISSORS"||
        humanChoice=="SCISSORS"&&computer=="PAPER"||
        humanChoice=="PAPER"&&computer=="ROCK"
    ){
        return "player";
    }else{
        return "computer";
    }
}

function playRound(humanChoice, computer){
    const result= checkWinner(humanChoice, computer);
    if(result=="draw"){
        return "It's a DRAW";
    }else if(result=="player"){
        return `You win! ${humanChoice} beats ${computer}`;
    }else{
        return `You loss! ${computer} beats ${humanChoice}`;
    }
}