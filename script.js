function getComputerchoice()
{
    let compChoice= Math.floor(Math.random() * 3) + 1;
    if (compChoice ===1)
    {
        return ("rock");
    }
    else if  (compChoice===2)
    {
       return ("paper");

    }
    else if (compChoice==3)
    {
        return("Scissors");
    }
}
function playRound(playerSelection, computerSelection) {

   

    console.log(`Computer chooses: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}


    function playGame() {
        let buttons = document.querySelectorAll('button');
    
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                let playerSelection = button.textContent.toLowerCase();
                console.log(`Player selects: ${playerSelection}`);
                
                let computerSelection = getComputerchoice();
                let result = playRound(playerSelection, computerSelection);
                console.log(result);
            });
        });
    }

    function functionToExec() {
     
        playGame();}