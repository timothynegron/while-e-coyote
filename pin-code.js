const getInput = require('./get-input.js');

// Your code here!

let guessedCorrectly = false;
let numberOfGuess = 0;
let iteration = 1;

while(!guessedCorrectly && getInput(iteration) !== undefined){
    if(getInput(iteration) === '1234'){
        guessedCorrectly = true;
        numberOfGuess++;
        console.log('That is correct. You took ' + numberOfGuess + ' guess(es).')
    }else{
        numberOfGuess++;
        iteration++;
    }
}

if(guessedCorrectly === false){
    console.log('None of the entered pin codes are correct.');
}