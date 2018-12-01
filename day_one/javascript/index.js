const fs = require('fs');
const readline = require("readline");

var currentFrequency = 0;
const rl = readline.createInterface({
    input: fs.createReadStream('input.dat'),
    crlfDelay: Infinity
  });


  rl.on('line', (line) => {
    var frequency = parseFloat(line);
    console.log("Frequency change = " + frequency);
    currentFrequency += frequency;
    console.log("New Frequency = " + currentFrequency);
  });
  
  rl.on('close', ()=> {
    console.log("Hey! We finisehd calculating the frequency! It is " + currentFrequency);
  });
