const { input } = require('./input');

function getIncreasesByWindow(input) {
    let increaseCounter = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i - 1] && input[i - 2]) {
            let windowBefore = input[i - 2] + input[i - 1] + input[i]
            let currentWindow = input[i - 1] + input[i] + input[i + 1]

            if (currentWindow > windowBefore) {
                increaseCounter++
            }
        }
    }

    return increaseCounter
}


console.log(getIncreasesByWindow(input))