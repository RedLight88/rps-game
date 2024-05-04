const choices = ['rock','paper','scissors'];

let pw = 0;
let cw = 0;
let td = 0;

function getComputerChoice() {
    
    const i= Math.floor(Math.random() * 3);
    return choices[i];
}
function getPlayerChoice(){
    const selectElement = document.getElementById('playerChoice');
    return selectElement.value
}

function win_condition(){
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    document.getElementById('computerChoice').innerHTML = 'The computer chose: ' + computerChoice;
    if(playerChoice === computerChoice){
        td++;
        return "It's a draw!";
    } else if ((playerChoice === 'rock' && computerChoice==='scissors') ||
            (playerChoice=== 'paper' && computerChoice==='rock') ||
            (playerChoice==='scissors' && computerChoice==='paper')) {
                pw++;
                return "Player wins!";
            } else {
                cw++;
                return "Computer wins!";
            }
}



function display(){
    document.getElementById('play').innerHTML = win_condition();
    document.getElementById('win').innerHTML = 'Total wins: ' + pw;
    document.getElementById('lose').innerHTML = 'Total losses: ' + cw;
    document.getElementById('draw').innerHTML = 'Total draws: ' + td;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('play').addEventListener('click', display);
    
});

