function getCPUChoice(){
    let choice = (Math.floor(Math.random()* 10 % 3));
    if(choice == 0){
        return "rock";
    }
    else if(choice == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
var uScoreDisplay = document.getElementById('userScore');
var cpuScoreDisplay = document.getElementById('cpuScore');
var winnerDisplay = document.getElementById('winnerDisplay');
var userScore = 0;
var cpuScore = 0;
updateScores();
function updateScores(){
    uScoreDisplay.innerHTML = 'User Score: ' + userScore;
    cpuScoreDisplay.innerHTML = 'CPU Score: ' + cpuScore;
}

function playRound(userChoice){
    let cpuChoice = getCPUChoice();
    if(winnerDisplay.innerHTML == "YOU WIN" || winnerDisplay.innerHTML == "YOU LOSE"){
        userScore = 0;
        cpuScore = 0;
        winnerDisplay.innerHTML = "";
        uScoreDisplay.innerHTML = 'User Score: ' + userScore;
        cpuScoreDisplay.innerHTML = 'CPU Score: ' + cpuScore;
    }
    if(cpuChoice == userChoice){
        console.log(cpuChoice)
        winnerDisplay.innerHTML = "CPU chose: " + cpuChoice;
    }
    else if (userChoice == "paper" && cpuChoice == "rock"){
        console.log(cpuChoice)
        userScore++;
        winnerDisplay.innerHTML = "CPU chose: " + cpuChoice;
        uScoreDisplay.innerHTML = 'User Score: ' + userScore;
    }
    else if (userChoice == "rock" && cpuChoice == "scissors"){
        console.log(cpuChoice)
        userScore++;
        winnerDisplay.innerHTML = "CPU chose: " + cpuChoice;
        uScoreDisplay.innerHTML = 'User Score: ' + userScore;
    }
    else if (userChoice == "scissors" && cpuChoice == "paper"){
        console.log(cpuChoice)
        userScore++;
        winnerDisplay.innerHTML = "CPU chose: " + cpuChoice;
        uScoreDisplay.innerHTML = 'User Score: ' + userScore;
    }
    else if (cpuChoice == "paper" && userChoice == "rock"){
        console.log(cpuChoice)
        cpuScore++;
        winnerDisplay.innerHTML = "CPU chose: " + cpuChoice;
        cpuScoreDisplay.innerHTML = 'CPU Score: ' + cpuScore;
    }
    else if (cpuChoice == "rock" && userChoice == "scissors"){
        console.log(cpuChoice)
        cpuScore++;
        winnerDisplay.innerHTML = "CPU chose: " + cpuChoice;
        cpuScoreDisplay.innerHTML = 'CPU Score: ' + cpuScore;
    }
    else if (cpuChoice == "scissors" && userChoice == "paper"){
        console.log(cpuChoice)
        cpuScore++;
        winnerDisplay.innerHTML = "CPU chose: " + cpuChoice;
        cpuScoreDisplay.innerHTML = 'CPU Score: ' + cpuScore;
    }
    if(userScore >= 5){
        winnerDisplay.innerHTML = "YOU WIN";
    }
    else if(cpuScore >= 5){
        winnerDisplay.innerHTML = "YOU LOSE";
    }
}

function rock(){
    let userChoice = "rock";
    playRound(userChoice)
}

function paper(){
    let userChoice = "paper";
    playRound(userChoice)
}

function scissors(){
    let userChoice = "scissors";
    playRound(userChoice)
}

// function game(){
//     cpuScore = 0;
//     playerScore = 0;
//     while(cpuScore < 5 && playerScore < 5){
//         let cpuChoice = getCPUChoice();
//         if(cpuChoice == userChoice){
//             console.log("draw")
//         }
//         else if (userChoice == "paper" && cpuChoice == "rock"){
//             console.log("user wins")
//         }
//         else if (userChoice == "rock" && cpuChoice == "scissors"){
//             console.log("user wins")
//         }
//         else if (userChoice == "scissors" && cpuChoice == "paper"){
//             console.log("user wins")
//         }
//         else if (cpuChoice == "paper" && userChoice == "rock"){
//             console.log("cpu wins")
//         }
//         else if (cpuChoice == "rock" && userChoice == "scissors"){
//             console.log("cpu wins")
//         }
//         else if (cpuChoice == "scissors" && userChoice == "paper"){
//             console.log("cpu wins")
//         }
//     }
// }
// game();