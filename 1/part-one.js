const { input } = require('./input');

function getIncreases(input) {
    let increaseCounter = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i-1] && (input[i-1] < input[i])) {
            increaseCounter++
        }
    }

    return increaseCounter
}


console.log(getIncreases(input))