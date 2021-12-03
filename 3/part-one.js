const { input } = require('./input');

function getConsumption(input) {
    let zeroArr = []
    let oneArr = []
    let gamma = ''
    let epsilon = ''

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            const bit = input[i][j]
            if (bit == '1') {
                if (oneArr[j]) {
                    oneArr[j]++
                } else {
                    oneArr[j] = 1
                }
            } else {
                if (zeroArr[j]) {
                    zeroArr[j]++
                } else {
                    zeroArr[j] = 1
                }
            }
        }
    }
    
    for (let i = 0; i < oneArr.length; i++) {
        if (oneArr[i] > zeroArr[i]) {
            gamma += '1'
            epsilon += '0'
        } else {
            gamma += '0'
            epsilon += '1'
        }
    }

    return parseInt(gamma, 2) * parseInt(epsilon, 2)
}


console.log(getConsumption(input))