const { input } = require('./input');

function getFishes(lanternFish) {
    let ageGroups = Array.from({ length: 9 }, () => 0);
    lanternFish.forEach((age) => (ageGroups[age] += 1));

    for (let i = 0; i < 256; i++) {
        const newAgeGroups = Array.from({ length: 9 }, () => 0);
        newAgeGroups[8] = ageGroups[0]
        newAgeGroups[6] = ageGroups[0]
        for (let age = 1; age < 9; age++) {
            newAgeGroups[age - 1] += ageGroups[age]
        }
        ageGroups = newAgeGroups
    }

    console.log(ageGroups.reduce((a, b) => a + b));
}


console.log(getFishes(input))