const fs = require('fs');
const readline = require("readline");

var frequencies = {};
var currentFrequency = 0;

calculateFrequency();


function calculateFrequency() {
  var found = false;
  const rl = readline.createInterface({
    input: fs.createReadStream('input.dat'),
    crlfDelay: Infinity
  });
  rl.on('line', (line) => {
    var frequency = parseFloat(line);
    currentFrequency += frequency;
    storeIntervalFreq(currentFrequency);
    if (checkFreqDuplicate(currentFrequency)) {
      found = true;
      rl.close();
    }
  });

  rl.on('close', () => {
    if (found){
      console.log("found it " + currentFrequency);
      return currentFrequency;
    } else {
      console.log("did not find it");
      return calculateFrequency();
    }
  });


}
function storeIntervalFreq(freq) {
  freq = freq.toString();
  if (frequencies[freq] != null) {
    frequencies[freq] += 1;
  } else {
    frequencies[freq] = 1;
  }
}

function checkFreqDuplicate(freq) {
  freq = freq.toString();
  if (frequencies[freq] == 2) {
    return true;
  } else {
    return false;
  }
}