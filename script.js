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

   

    console.log(`Player chooses: ${playerSelection}`);
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
function playGame()
{   for (let i = 0; i < 5; i++){
    let playerSelection=getPlayerselection()
    let computerSelection=getComputerchoice()
     
    result=playRound(playerSelection,computerSelection)
    console.log(result)
    }
    
}
function getPlayerselection()
{
   let playerSelection=prompt("Select Rock,Paper or Scissors")
   return(playerSelection=playerSelection.toLowerCase())
}

playGame()