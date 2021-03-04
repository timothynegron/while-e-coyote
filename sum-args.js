const getInput = require('./get-input.js');

// Your code here!

function addInputNumbers(){
    let x = 0;
    let count = 1;
    while(getInput(count) !== undefined){
        x += Number(getInput(count));
        count++;
    }
    console.log(x);
}

addInputNumbers();
