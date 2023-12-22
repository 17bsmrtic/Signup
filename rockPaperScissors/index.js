
// create three buttons 
const rock = document.createElement('button'); 
const paper = document.createElement('button'); 
const scissors = document.createElement('button'); 

rock.textContent = "rock"
paper.textContent = "paper"
scissors.textContent = "scissors"


rock.addEventListener('click', () => {playRound('rock', getComputerSource())})
paper.addEventListener('click', () => {playRound('paper', getComputerSource())})
scissors.addEventListener('click', () => {playRound('scissors', getComputerSource())})

// add buttons to the DOM

const container = document.querySelector('#container');

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);


// capture text from DOM

const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const final = document.querySelector('#final');

function getComputerSource(){
    choices = ["rock", "paper", "scissors"]


    compChoice = choices[Math.floor(Math.random()*choices.length)]
    return compChoice

}

function playRound(playerSelection, computerSource){

    player.textContent = "Player Used: " + playerSelection
    computer.textContent = "Computer Used: " + computerSource


    if (computerSource == "rock"){
        if(playerSelection == "rock")
            final.textContent = "You Tie"
            console.log("You Tie")
        if(playerSelection == "paper")
            final.textContent = "You Win"
            console.log("You Win")
        if(playerSelection == "scissors")
            final.textContent = "You Lose"
            console.log("You Lose")
    }

    if (computerSource == "paper"){
        if(playerSelection == "rock")
            final.textContent = "You Lose"
            console.log("You Lose")
        if(playerSelection == "paper")
            final.textContent = "You Tie"
            console.log("You Tie")
        if(playerSelection == "scissors")
            final.textContent = "You Win"
            console.log("You Win")
    }

    if (computerSource == "scissors"){
        if(playerSelection == "rock")
            final.textContent = "You Win"
            console.log("You Win")
        if(playerSelection == "paper")
            final.textContent = "You Lose"
            console.log("You Lose")
        if(playerSelection == "scissors")
            final.textContent = "You Tie"
            console.log("You Tie")
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






