const inputFile = './input.txt';
const { readFileSync } = require('fs');
const { isFloat32Array } = require('util/types');


const prepareData = () => {
    var dataFromFile = readFileSync(inputFile).toString().split("\n");
    return dataFromFile;
}

const data = prepareData();
const goodGames = [];
const power = data.map((line) => { 
    const gameID = line.split(":")[0].split(" ")[1];
    const gems = line.split(": ")[1];
    const maxFound = { 
        red: 0, 
        green: 0,
        blue: 0
    };
    const res = gems.split("; ")
        .forEach((hands) => {
            return hands.trim().split(', ').forEach((hand) => { 
                const [count, colour] = hand.split(" ");
                if (maxFound[colour] < Number(count)){
                    maxFound[colour] = Number(count);
                }
            });
        });
    return maxFound.red * maxFound.green * maxFound.blue;
}).reduce((s, v) => s + v);
console.log(power);

