const { input } = require('./input');

function getMinFuel(input) {
    let fuelSumMin = undefined

    for (let i = 0; i < input.length; i++) {
        const numTo = input[i]
        let fuelSum = 0

        for (let j = 0; j < input.length; j++) {
            const numFrom = input[j]

            if (i !== j) {
                fuelSum += Math.abs(numFrom - numTo)
            }
        }

        if (!fuelSumMin || fuelSum < fuelSumMin) {
            fuelSumMin = fuelSum
        }
    }

    return fuelSumMin
}


console.log(getMinFuel(input))