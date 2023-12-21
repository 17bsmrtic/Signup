
function getComputerSource(){
    choices = ["rock", "paper", "scissors"]


    compChoice = choices[Math.floor(Math.random()*choices.length)]
    return compChoice

}

function playRound(playerSelection, computerSource){

    if (computerSource == "rock"){
        if(playerSelection == "rock")
            return "You Tie"
        if(playerSelection == "paper")
            return "You Win"
        if(playerSelection == "scissors")
            return "You Lose"
    }

    if (computerSource == "paper"){
        if(playerSelection == "rock")
            return "You Lose"
        if(playerSelection == "paper")
            return "You Tie"
        if(playerSelection == "scissors")
            return "You Win"
    }

    if (computerSource == "scissors"){
        if(playerSelection == "rock")
            return "You Win"
        if(playerSelection == "paper")
            return "You Lose"
        if(playerSelection == "scissors")
            return "Tie"
    }
    
}




function game(){
score = 0 
    for(let i = 0; i < 5; i++){
        computerSource = getComputerSource()
        playerSelection = prompt("Choose either rock paper or scissors")
    
        if (playRound(playerSelection.toLowerCase(), computerSource) == "You Win"){
            score += 1
        }

        console.log("Player used " + playerSelection)
        console.log("Computer used " + computerSource)    
        console.log(playRound(playerSelection, computerSource))
        console.log(score)
        
    }
    return "Game Over"
}






