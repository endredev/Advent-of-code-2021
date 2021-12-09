const { input } = require('./input');

function getIncreases(input) {
    let fuelSumMin = undefined

    for (let i = 1; i < input.length; i++) {
        const numTo = i
        let fuelSum = 0

        for (let j = 0; j < input.length; j++) {
            const numFrom = input[j]
            fuelSum += fuelCalc(Math.abs(numFrom - numTo))
        }

        if (!fuelSumMin || fuelSum < fuelSumMin) {
            fuelSumMin = fuelSum
        }
    }

    return fuelSumMin
}

function fuelCalc(to) {
    let fuelSum = 0
    for (let i = 0; i <= to; i++) {
        fuelSum += i
    }

    return fuelSum
}

console.log(getIncreases(input))