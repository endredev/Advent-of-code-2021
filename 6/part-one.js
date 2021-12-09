const { input } = require('./input');

function getFishes(lanternFish) {
    for (let i = 0; i < 80; i++) {
        const newLanternFish = []
        for (let i = 0; i < lanternFish.length; i++) {
            if (lanternFish[i] === 0) {
                lanternFish[i] = 6
                newLanternFish.push(8)
            } else {
                lanternFish[i] -= 1
            }
        }
        lanternFish.push(...newLanternFish)
        console.log(lanternFish.length);
    }
}


console.log(getFishes(input))