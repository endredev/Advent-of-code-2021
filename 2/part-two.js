const { input } = require('./input');

function getPosition(input) {
    let horizontal = 0
    let vertical = 0
    let aim = 0

    for (let i = 0; i < input.length; i++) {
        const wordArr = input[i].split(" ")
        let direction = wordArr[0]   
        let amount = wordArr[1]   

        switch (direction) {
            case "forward":
                horizontal += parseInt(amount)
                vertical += (aim * amount)
                break
            
            case "up":
                aim -= parseInt(amount)
                break

            case "down":
                aim += parseInt(amount)
                break
            
            default:
                break
        }
    }
    return horizontal * vertical
}


console.log(getPosition(input))