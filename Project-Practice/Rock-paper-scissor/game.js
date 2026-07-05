// In this game we need to create two move 
//1-Where user picks a move by clicking a btn.
//2-Where computer picks random move using Math.random().

//Using local storage we will set the value.
let score={
  wins:0,
  lose:0,
  Tie:0
}

//Create how user picks a move.
function playerMove(button){
    let playerclick='';
    playerclick=button.querySelector('img').alt;
    return playerclick;
}

//Now creating a move which picks the computer move randomly.
function computerMove(){
    let computerpick='';
    let number=Math.random();

    if(number>=0 && number<=1/3){
        computerpick='rock'
    }else if(number>=1/3 && number<2/3){
        computerpick='paper'
    }else if(number>=2/3 && number<1){
        computerpick='scissors'
    }
    return computerpick;
}

// Now we will create a playGame function.

function playGame(button){
    let playerchoice=playerMove(button);
    let computerchoice=computerMove();

     let result = "";

        if (playerchoice === "scissors") {
          if (computerchoice === "rock") {
            result = "You lose.";
          } else if (computerchoice === "paper") {
            result = "You win.";
          } else if (computerchoice === "scissors") {
            result = "Tie.";
          }
        } else if (playerchoice === "paper") {
          if (computerchoice === "rock") {
            result = "You win.";
          } else if (computerchoice === "paper") {
            result = "Tie.";
          } else if (computerchoice === "scissors") {
            result = "You lose.";
          }
        } else if (playerchoice === "rock") {
          if (computerchoice === "rock") {
            result = "Tie.";
          } else if (computerchoice === "paper") {
            result = "You lose.";
          } else if (computerchoice === "scissors") {
            result = "You win.";
          }
        }

        if(result==='You win.'){
          score.wins++;
        }else if(result==='You lose.'){
          score.lose++;
        }else if(result==='Tie.'){
          score.Tie++;
        }
        document.querySelector('.result-value').innerHTML=result;

        document.querySelector('.score-display').innerHTML=`Wins:${score.wins} Lose:${score.lose} Tie:${score.Tie}`;
       
        document.querySelector('.moves').innerHTML= `<img src='images/${playerchoice}-emoji.png'>
        <img src='images/${computerchoice}-emoji.png'>`
}
//Now creating a variable which updates the score.
function resetScore(){
  score.wins=0,
  score.lose=0,
  score.Tie=0
}

