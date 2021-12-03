const { input } = require('./input');

function getLifeSupportRating(input) {
    let zerosAndOnes = calculateZerosAndOnes(input)
    let zeroArr = zerosAndOnes[0]
    let oneArr = zerosAndOnes[1]

    let o2 = parseInt(getO2rating(oneArr, zeroArr, input), 2)
    let co2 = parseInt(getCO2rating(oneArr, zeroArr, input), 2)
    
    return o2 * co2
}

function calculateZerosAndOnes(input) {
    let zeroArr = []
    let oneArr = []

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
    return [zeroArr, oneArr]
}

function getO2rating(oArr, zArr, input) {
    let arr = input
    let zeroArr = zArr
    let oneArr = oArr

    while (arr.length != 1) {
        for (let i = 0; i < oneArr.length; i++) {
            zerosAndOnes = calculateZerosAndOnes(arr)
            zeroArr = zerosAndOnes[0]
            oneArr = zerosAndOnes[1]

            if (oneArr[i] >= zeroArr[i]) {
                arr = arr.filter(s => s[i] == '1')
            
            } else {
                arr = arr.filter(s => s[i] == '0')
            }
        }
    }
    return arr[0]
}

function getCO2rating(oArr, zArr, input) {
    let arr = input
    let zeroArr = zArr
    let oneArr = oArr

    while (arr.length != 1) {
        for (let i = 0; i < oneArr.length; i++) {
            zerosAndOnes = calculateZerosAndOnes(arr)
            zeroArr = zerosAndOnes[0]
            oneArr = zerosAndOnes[1]

            if (oneArr[i] >= zeroArr[i]) {
                arr = arr.filter(s => s[i] == '0')
            
            } else {
                arr = arr.filter(s => s[i] == '1')
            }
        }
    }
    return arr[0]
}



console.log(getLifeSupportRating(input))