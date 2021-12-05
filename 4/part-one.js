const { input } = require('./input');

function startBingo(input) {
    let drawnNumbers = input[0].split(',')
    let boardHolder = []
    let resultSum = 0
    input.shift()

    boardHolder = getBoards(input)
    
    drawnNumbers.forEach(element => {
        let result = searchInBoards(element, boardHolder)
        if (result.length > 0 && resultSum == 0) {
            let res = 0
            for (let i = 0; i < result.length; i++) {
                const row = result[i];
                for (let j = 0; j < row.length; j++) {
                    const number = row[j];
                    if (number !== "#") {
                        res += parseInt(number)
                    }
                }
            }

            resultSum = res * element
            return result 
        }
    });
    
    return resultSum
}

function searchInBoards(numberToLook, boardHolder) {
    let winnerElement = []

    boardHolder.forEach(element => {
        element.forEach(row => {
            for (let i = 0; i < row.length; i++) {
                if (row[i] === numberToLook) {
                    row[i] = "#"
                }

                if (lookForOccurances(element)) {
                    winnerElement = element
                    return
                }
            }
        })
    });

    return winnerElement
}

function lookForOccurances(board) {
    let matchCounter = 0
    let cols = []

    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        

        /* Check if current row became a winner row */
        if(row.every(e => e == "#")) {
            return true
        }  

        /* Create cols to check */
        for (let j = 0; j < row.length; j++) {
            const element = row[j];
            if (!cols[j]) {
                cols[j] = []
            }
            cols[j].push(element)            
        }
    }

    for (let i = 0; i < cols.length; i++) {
        const col = cols[i];
        
        /* Check if current col became a winner row */
        if(col.every(e => e == "#")) {
            return true
        }  
    }
    return false
}

function getBoards(input) {
    let boardHolder = []
    let currentBoard = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] == '\r' && i !== 0) {
            boardHolder.push(currentBoard)
            currentBoard = []
        } else if(input[i] !== '\r') {
            let strToPush = input[i].replace("\r", "").replace(/\s+/g, ' ').trim()
            if (strToPush[0] == " ") {
                strToPush = strToPush.substring(1)
            }
            currentBoard.push(strToPush.split(" "))
        }
    }
    boardHolder.push(currentBoard)

    return boardHolder
}

console.log(startBingo(input))