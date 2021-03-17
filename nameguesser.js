let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () =>{
    return Math.floor(Math.random()+10);
}
const getAbsoluteDistance = (num1, num2) =>{
    let difference = Math.abs(num1 - num2);
    return difference;
}
const compareGuesses = (user, computer, target) =>{
    if (getAbsoluteDistance(target,user) > getAbsoluteDistance(target,computer)){
        return false;
    }
    
    else{
        return true;
    }
}
const updateScore = winner =>{
    if (winner === 'human'){
        humanScore += 1;
    }
    else {
        computerScore += 1;
    }
}
const advanceRound = () =>{
    currentRoundNumber += 1;
}
