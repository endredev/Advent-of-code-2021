const { input } = require('./input');

function getDigits(input) {
    let count = 0;
    for (let { outputs } of input) {
        for (let signal of outputs) {
            const number_of_segments = signal.trim().length;
            if (number_of_segments === 2) {
                console.log("its a 1");
                // |
                // '
                count++
            } else if (number_of_segments === 4) {
                console.log("its a 4");


                // '_|
                //   '
                count++
            } else if (number_of_segments === 3) {
                console.log("its a 7");


                // _
                //  |
                //  '
                count++
            } else if (number_of_segments === 7) {
                console.log("its a 8");

                
                //  _
                // '_'
                // '_'
                count++
            }
        }
    }

    return count
}


console.log(getDigits(input))