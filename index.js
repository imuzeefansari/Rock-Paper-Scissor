const message = document.querySelector('.message');
const score = document.querySelector('.score');
const btn = document.querySelectorAll('button');
const winnerScores = [0,0];


// for ( let i = 0 ; i < btn.length ; i++){
//     btn[i].addEventListener('click', playGame);
// }

for (let i = 0; i < btn.length; i++) {
   btn[i].addEventListener('click',playGame)
    
}

function playGame(e) {
    let playerSel = e.target.innerText;
    let computerSel = Math.random();

    if (computerSel < .34){
        computerSel = "Rock"
    }else if (computerSel <= .67){
        computerSel = "Paper"
    }else{
        computerSel = "Scissors"
    }

    let result = checkWinner(playerSel,computerSel);

    if(result === "Player"){
        result += "Wins!"
        winnerScores[0] ++;
    }if(result === "Computer"){
        result += "Wins!"
        winnerScores[1]++
    }if(result === "Draw"){
        result += "it/'s a Tie"
    }

    score.innerHTML = 'Player : ' + ' [ ' + winnerScores [0] + ' ] ' + " Computer : " + ' [ ' + winnerScores [1] + ' ] '

    messenger('Player: <strong>' + playerSel + '</strong> Computer: <strong>' + computerSel + '</strong><br>' + result);

    function messenger(selectionMessage) {
        message.innerHTML = selectionMessage;
    }
    
    function checkWinner(player, computer){
        if (player === computer){
            return 'Draw';
        }
    
        if (player === 'Rock'){
            if(computer === 'Paper'){
                return 'Computer';
            } else {
                return 'Player';
            }
        }
    
        if (player === 'Paper'){
            if (computer === 'Scissors'){
                return 'Computer';
            } else {
                return 'Player';
            }
        }
    
        if (player === 'Scissors'){
            if (computer === 'Rock'){
                return 'Computer';
            } else {
                return 'Player';
            }
        }
}
}