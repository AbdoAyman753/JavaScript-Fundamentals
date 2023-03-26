/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var p_1Score = 0;
var p_2Score = 0;
var turn = 0;
var currentScore = 0;

// Roll dice
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// Call roll dice
function rollDice(randVal){
    changeDice(randVal);
    if(randVal == 1){
        currentScore = 0;
        //reset Score
        endTurn();
    }
    else{
        currentScore += randVal;
        updateCurrentScore(turn);
    } 
}
// Hold
function endTurn(){
    if(turn){
        p_2Score += currentScore;
        
    }else{
        p_1Score += currentScore; 
    }
    currentScore = 0;
    updateCurrentScore(turn);
    updateScore();
    checkGameEnd();
    if(turn == 0){
        disableP(turn);
        turn = 1;
        activateP(turn);

    }
        
    else {
        disableP(turn);
        turn = 0;
        activateP(turn);
    }
        
}
//new Game
function newGame(){
    p_1Score = 0;
    p_2Score = 0;
    turn = 0;
    currentScore = 0;
    updateCurrentScore(0);
    updateCurrentScore(1);
    updateScore();
    turn = 1; updateScore(); turn = 0;

}
// Check if there is a winner
function checkGameEnd(){
    if(p_1Score >= 100){
        // player one wins
        displayWin(0);
    }
    else if(p_2Score >= 100){
        //player two wins
        displayWin(1);
    }
}

////////////////////////////// HTML Functions ////////////////////////////////////
function changeDice(x){
    document.getElementsByClassName("dice")[0].src = "dice-"+x+".png";
}
function updateCurrentScore(x){
    document.getElementById("current-"+x.toString()).innerHTML = currentScore;
}

function updateScore(){
    var id = "score-" + turn.toString();
    //console.log(id);
    if(turn){
        document.getElementById(id).innerText = p_2Score;
    }
    else {
        document.getElementById(id).innerText = p_1Score;
    }
    
}

function activateP(x){
    document.getElementsByClassName("player-"+x+"-panel")[0].classList.add("active");
}
function disableP(x){
    document.getElementsByClassName("player-"+x+"-panel")[0].classList.remove("active");
}
function displayWin(x){
    document.getElementsByClassName("player-"+x+"-panel")[0].classList.add("winner");
    window.setTimeout(showAlert,500);
}
function showAlert(){
    alert("Game Over");
    newGame();
}