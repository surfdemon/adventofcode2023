const inputFile = './input.txt';
const { readFileSync } = require('fs');

const howManyNumbersInString = (str) => {
    return str.replace(/[^0-9]/g, '').length;
};

const stringNumbers = ['one', 'two', 'three', 'four', 'five','six','seven', 'eight', 'nine'];

let count = 0; 
var result = readFileSync(inputFile).toString().split("\n");

const stringToNumber = (stringToConvert) => {
    switch (stringToConvert) {  
        case 'one':
            return 1;
            break;
        case 'two': 
            return 2;
            break;
        case 'three': 
            return 3;
            break;
        case 'four': 
            return 4;
            break;
        case 'five': 
            return 5;
            break;
        case 'six': 
            return 6;
            break;
        case 'seven': 
            return 7; 
            break; 
        case 'eight': 
            return 8;
            break;
        case 'nine': 
            return 9;
            break;
        default:
            return false;
    }
}

function findNumbers(res) {
    const numOfNumbers = howManyNumbersInString(res);
    const numbers = [];

    // Handle if there is only one number in the string or if there is more than one number in the string
    if (numOfNumbers > 1) { 
        const firstNumber = res.replace(/[^0-9]/g, '')[0];
        const lastNumber = res.replace(/[^0-9]/g, '')[res.replace(/[^0-9]/g, '').length - 1];
        const firstNumberIndex = res.indexOf(firstNumber);
        const lastNumberIndex = res.lastIndexOf(lastNumber);
        numbers.push( {'number': parseInt(firstNumber), 'index': firstNumberIndex});
        numbers.push( {'number': parseInt(lastNumber), 'index': lastNumberIndex} );    
    } else if ( numOfNumbers == 1 ) {
        const onlyNumber = res.replace(/[^0-9]/g, '')[0];
        numbers.push( {'number': parseInt(onlyNumber), 'index': res.indexOf(onlyNumber)} );
    }
        
    // Check for numbers as words
    for ( let x = 0; x <= stringNumbers.length -1; x++ ) {
        if ( res.indexOf(stringNumbers[x]) !== -1 ) {
            numbers.push({'number': stringToNumber(stringNumbers[x]), 'index': res.indexOf(stringNumbers[x]) });
        }
    }
       
    // Sort the numbers in order by their index within the string
    numbers.sort((a, b) => a.index - b.index);
    return numbers;
}

getFirstNum = (str) => {
    return str[0]['number'];
}

getLastNum = (str) => {
    return str[str.length -1]['number'];
}

let TotalAmount = 0;    

for (i in result) {
    const nums = findNumbers(result[i]);
    sum = parseInt(getFirstNum(nums).toString() + getLastNum(nums).toString());
    //console.log(`${sum}`);
    TotalAmount = TotalAmount + sum;
}

console.log(`The total amount is ${TotalAmount}`);