const choices = ['rock','paper','scissors'];

let pw = 0;
let cw = 0;
let td = 0;

let gamesPlayed = 0;

const buttons = document.querySelectorAll('.round');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const rounds = this.value;
        bestOf(rounds);
        buttons.forEach(btn => {
            btn.disabled = true;  
        });
    });
});

const reset = document.querySelector('button#reset');
reset.addEventListener('click', function() {
    location.reload();
})

function bestOf(rounds) {
    const playButton = document.getElementById('play');
    const messageDisplay = document.getElementById('message'); 
    playButton.addEventListener('click', function() {
        gamesPlayed++;
        if (gamesPlayed >= rounds) {
            let winner = determineWinner(); 
            messageDisplay.textContent = winner + ' wins the match!'; 
            playButton.disabled = true; 
        }
    });
}



function determineWinner() {
    if (pw > cw) {
        return 'Player';
    } else if (cw > pw) {
        return 'Computer';
    } else {
        return 'No clear winner'; 
    }
}




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

