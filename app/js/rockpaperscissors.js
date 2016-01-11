////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if(move){
        return move;
    } else {
        return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if(move){
        return move;
    } else {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove){
        winner = "tie";
    } else if (playerMove == "rock" && computerMove == "paper") {
        winner = "computer";
    } else if (playerMove == "rock" && computerMove == "scissors") {
        winner = "player";
    } else if (playerMove == "paper" && computerMove == "scissors") {
        winner = "computer";
    } else if (playerMove == "paper" && computerMove == "rock") {
        winner = "player";
    } else if (playerMove == "scissors" && computerMove == "rock") {
        winner = "computer";
    } else if (playerMove == "scissors" && computerMove == "paper") {
        winner = "player";
    }

    return winner;
}

function playToX() {
    console.log("Let's play Rock, Paper, Scissors");
    console.log("How many wins needed?");
    var x = prompt();
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < x) && (computerWins < x)){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove)
        if(winner === 'player'){
            playerWins += 1;
            console.log('You chose ' + playerMove + ' and the computer chose ' + computerMove);
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        } else if(winner === 'computer'){
            computerWins += 1;
            console.log('You chose ' + playerMove + ' and the computer chose ' + computerMove);
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        } else if(winner === 'tie')
            console.log('Tie. Play again.\n')
    }
    if(playerWins > computerWins){
        console.log("Congrats, you won!");
    } else {
        console.log("Bummer, you lost.");
    }
    return [playerWins, computerWins];
}



