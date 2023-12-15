const inputFile = './input.txt';
const { readFileSync } = require('fs');
const { isFloat32Array } = require('util/types');

const REDLIMIT = 12;
const GREENLIMIT = 13;
const BLUELIMIT = 14;

const maxAllowed = { 
    red: 12, 
    green: 13,
    blue: 14
};

const prepareData = () => {
    var dataFromFile = readFileSync(inputFile).toString().split("\n");
    return dataFromFile;
}

const data = prepareData();
console.log(data);
const goodGames = [];
data.forEach((line) => { 
    console.log(line);
    const gameID = line.split(":")[0].split(" ")[1];
    const gems = line.split(": ")[1];
    const res = gems.split("; ")
        .map((hands) => {
        return hands.trim().split(', ').every((hand) => { 
            const [count, colour] = hand.split(" ");
            return maxAllowed[colour] >= count;
        });
        });
        
        if(res.includes(false)){
            console.log(`game ${gameID} has failed!`);
        } else { 
            goodGames.push(gameID);
        }
});
console.log(goodGames);

const sum = goodGames.reduce((s, v) => Number(s) + Number(v));
console.log(sum);