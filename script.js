let rock_btn=document.querySelector(".rock");
let paper_btn=document.querySelector(".paper");
let scissors_btn=document.querySelector(".scissors");
let result=document.querySelector(".result");
let number_player=document.querySelector(".number_player");
let number_com=document.querySelector(".number_com");

let computerChoice;
const getComChoice = () => {
    let randomNumber = Math.random();
    if(randomNumber < 0.33) {
        computerChoice = "rock";
    }
    else if(randomNumber < 0.66) {
        computerChoice = "paper";
    } 
    else {
        computerChoice = "scissors";
    }
};

let playerChoice;
const getPlayerChoice = () => {
    rock_btn.addEventListener("click",() => {
        playerChoice = "rock";
        getComChoice();
        displayResult();
    })
    paper_btn.addEventListener("click",() => {
        playerChoice = "paper";
        getComChoice();
        displayResult();
    })
    scissors_btn.addEventListener("click",() => {
        playerChoice = "scissors";
        getComChoice();
        displayResult();
    })
}

getPlayerChoice();
let countp=0;
let countc=0;
const displayResult = () => {
    if(playerChoice == computerChoice) {
        result.innerHTML = "It's a tie!";
        result.style.backgroundColor = "gray";
    }
    else if(playerChoice == "rock" && computerChoice == "scissors" || 
            playerChoice == "paper" && computerChoice == "rock" || 
            playerChoice == "scissors" && computerChoice == "paper") {
            countp++;
            number_player.innerHTML = countp;
            result.innerHTML = `You win! ${playerChoice} beats ${computerChoice}`;
            result.style.backgroundColor = "green";
    }
    else
    {
        countc++;
        number_com.innerHTML = countc;
        result.innerHTML = `You lose! ${computerChoice} beets ${playerChoice}`;
        result.style.backgroundColor = "red";
    }
}
