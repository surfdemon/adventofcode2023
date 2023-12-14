const inputFile = './day1part1input.txt';
const { readFileSync } = require('fs');


const howManyNumbersInString = (str) => {
    return str.replace(/[^0-9]/g, '').length;
};

let count = 0; 
var result = readFileSync(inputFile).toString().split("\n");

for(i in result) {
    const numOfNumbers = howManyNumbersInString(result[i]);
    if(numOfNumbers > 1) {
        const firstNumber = result[i].replace(/[^0-9]/g, '')[0];
        const lastNumber = result[i].replace(/[^0-9]/g, '')[result[i].replace(/[^0-9]/g, '').length - 1];
        const number = firstNumber + lastNumber;
        count = count + parseInt(number);
    } else {
        count = count + parseInt(result[i].replace(/[^0-9]/g, '')[0] + result[i].replace(/[^0-9]/g, '')[result[i].replace(/[^0-9]/g, '').length - 1]);
    }
}
console.log(count);


        
