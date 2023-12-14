const inputFile = './input.txt';
const { readFileSync } = require('fs');

const howManyNumbersInString = (str) => {
    return str.replace(/[^0-9]/g, '').length;
};

let count = 0; 
var result = readFileSync(inputFile).toString().split("\n");

// Add number into the middle of string numbers to make them easier to find
const changeStringsToNumbers = (res) => {
    res = res.replaceAll('one', 'o1e');
    res = res.replaceAll('two', 't2o');
    res = res.replaceAll('three', 't3e');
    res = res.replaceAll('four', 'f4r');
    res = res.replaceAll('five', 'f5e');
    res = res.replaceAll('six', 's6x');
    res = res.replaceAll('seven', 's7n');
    res = res.replaceAll('eight', 'e8t');
    res = res.replaceAll('nine', 'n9e');
    return res;
}

const findNumbers = (res) => {
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
       
    // Sort the numbers in order by their index within the string
    numbers.sort((a, b) => a.index - b.index);
    return numbers;
}

getFirstNum = (str) => str[0]['number'];
getLastNum = (str) => str[str.length -1]['number'];

let TotalAmount = 0;    
c = 1;
for (i in result) {
    const res = changeStringsToNumbers(result[i]);
    const nums = findNumbers(res);
    sum = parseInt(getFirstNum(nums).toString() + getLastNum(nums).toString());
    //console.log(`${c} + ${res} + ${getFirstNum(nums)} + ${getLastNum(nums)} + ${sum}`, nums);
    TotalAmount = TotalAmount + sum;
    c++;
}

console.log(`The total amount is ${TotalAmount}`);