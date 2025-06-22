
let score ={
  win:0,
  losses:0,
  ties:0
}
const scoreContainer = document.querySelector('.score-container');
const displayMsg = document.querySelector('.display-msg');
const restartButton = document.querySelector('.restart');


function playGame(playerMove){

const computerMove=PickComputerMove();
let results = '';

if(playerMove === 'rock'){
  if(computerMove=== 'rock'){
    results = 'you tie'
  }else if( computerMove === 'paper'){
    results = 'you win'
  }else if( computerMove === 'scissors'){
    results = 'you lose'
  }
}

if(playerMove === 'paper'){
  if(computerMove=== 'rock'){
    results = 'you win'
  }else if( computerMove === 'paper'){
    results = 'you tie'
  }else if( computerMove === 'scissors'){
    results = 'you lose'
  }
}

if(playerMove === 'scissors'){
  if(computerMove=== 'rock'){
    results = 'you lose'
  }else if( computerMove === 'paper'){
    results = 'you win'
  }else if( computerMove === 'scissors'){
    results = 'you tie'
  }
}

console.log(results);
if(results === 'you win'){
  score.win++;
}else if(results === 'you lose'){
  score.losses++;
}else if(results === 'you tie'){
  score.ties++;
}
console.log(score);
displayMsg.innerHTML = `you choose <img src="${playerMove}.jpeg" alt=".." class="img"> computer choose <img src="${computerMove}.jpeg" alt=".." class="img">

${results}`

scoreContainer.innerHTML = `wins = ${score.win}, loses = ${score.losses}, ties = ${score.ties}`
}


function PickComputerMove(){
let randomNumber = Math.random();
let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1/3 ){
  computerMove = 'rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3)
{ computerMove = 'paper';}
else if(randomNumber >= 2/3 && randomNumber < 1)
{ computerMove = 'scissors';}

return computerMove;
}
restartButton.addEventListener('click', function(){
  score.win = 0;
  score.losses = 0;
  score.ties = 0;
  scoreContainer.innerHTML = `wins = ${score.win}, loses = ${score.losses}, ties = ${score.ties}`;
  displayMsg.innerHTML = '';
});

