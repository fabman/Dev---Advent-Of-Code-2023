let textValues = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let numValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let sum = 0;
let lineNumbers = [];

const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("puzzle_01_input");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // LOOP THROUGH EACH LINE
  for await (const line of rl) {
    lineNumbers = [];    

    // LOOP THROUGH EACH ELEMENT
    for (let index = 0; index < line.length; index++) {
      const element = line[index];
      let currentNumber = Number.parseInt(element);
      if (currentNumber >= 0 || currentNumber <= 9) {
        lineNumbers.push(currentNumber);
      }
    }

    let elementConcat = lineNumbers[0]+""+lineNumbers[lineNumbers.length-1];
    sum += Number.parseInt(elementConcat);
    
}

// Solution: 56042
console.log(`${sum}`);    

}

processLineByLine();
