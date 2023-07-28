// import fs from "fs";
var fs = require('fs');

function addNumbersReducer(currentNumber, nextNumber) {
    return currentNumber + nextNumber;
}

const calculate = () => {
    fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) {
            throw new Error(err)
        }
        // console.log(addNumbersReducer);
        const result = data
            .split('\r\n')
            .filter(e => e)
            .map(parseFloat)
            .reduce(addNumbersReducer);
        console.log('RESULT: ', result);
    });
}

calculate();