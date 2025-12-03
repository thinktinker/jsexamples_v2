/**
 * Application: Find Your Hat Game
 * Author: Kuo Sheng Clement ANG
 */

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(rows, columns, difficulty) {
        this._maskedField = Field.generateMaskedField(rows, columns);
        this._unmaskedField = Field.generateMaskedField(rows, columns);
        this._currentPos = this.generateStartingPosition(rows, columns);
        this.generateField(rows, columns, difficulty);
        this.print(this._maskedField);
        this.startGame();
    }

    // initialize the game field
    static generateMaskedField(rows, columns) {
        let maskedField = [];
        for (let i = 0; i <= rows - 1; i++) {
            let newRow = [];
            for (let j = 0; j <= columns - 1; j++) {
                newRow.push(fieldCharacter);
            }
            maskedField.push(newRow);
        }
        return maskedField;
    }

    // places hat on the field and holes based on difficulty
    generateField(rows, columns, difficulty) {
        let diffPercentage;
        if (difficulty === 'E') {
            diffPercentage = 0.1;
        } else if (difficulty === 'M') {
            diffPercentage = 0.2;
        } else {
            diffPercentage = 0.3;
        }

        // adds hat to the field
        let hatsLeft = 1;
        while (hatsLeft !== 0) {
            const randRow = Math.floor(Math.random() * rows);
            const randColumn = Math.floor(Math.random() * columns);
            if (this._unmaskedField[randRow][randColumn] === fieldCharacter) {
                this._unmaskedField[randRow][randColumn] = hat;
                hatsLeft--;
            }
        }

        // adds holes to the field based on difficulty
        let holesLeft = Math.floor(rows * columns * diffPercentage);
        while (holesLeft !== 0) {
            const randRow = Math.floor(Math.random() * rows);
            const randColumn = Math.floor(Math.random() * columns);
            if (this._unmaskedField[randRow][randColumn] === fieldCharacter) {
                this._unmaskedField[randRow][randColumn] = hole;
                holesLeft--;
            }
        }
    }

    // placing player starting position on a random edge tile
    generateStartingPosition(rows, columns) {
        let startRow;
        let startColumn;
        const rowOrColumn = () => {
            if (Math.floor(Math.random() * 2) === 0) {
                return 'row';
            } else {
                return 'column';
            }
        }
        if (rowOrColumn() === 'row') {
            startRow = Math.floor(Math.random() * rows);
            if (Math.floor(Math.random() * 2) === 0) {
                startColumn = 0;
            } else {
                startColumn = columns - 1;
            }
        } else {
            startColumn = Math.floor(Math.random() * rows);
            if (Math.floor(Math.random() * 2) === 0) {
                startRow = 0;
            } else {
                startRow = rows - 1;
            }
        }
        this._maskedField[startRow][startColumn] = pathCharacter;
        this._unmaskedField[startRow][startColumn] = pathCharacter;
        return [startRow, startColumn];
    }


    // prints the field for the current game
    print(field) {
        console.log('');
        for (let i in field) {
            console.log(/*'\n' + */field[i].join(' '));
        }
        console.log('');
    }


    validateMove(currentMove) {
        switch (currentMove) {
            case 'U':
                if (this._currentPos[0] - 1 >= 0) {
                    let newLoc = [this._currentPos[0] - 1, this._currentPos[1]];
                    return this.winLossCondition(newLoc);
                } else {
                    console.log('You fell off the edge of the map! Game over.');
                    return true;
                }
            case 'D':
                if (this._currentPos[0] + 1 < this._unmaskedField.length) {
                    let newLoc = [this._currentPos[0] + 1, this._currentPos[1]];
                    return this.winLossCondition(newLoc);
                } else {
                    console.log('You fell off the edge of the map! Game over.');
                    return true;
                }
            case 'L':
                if (this._currentPos[1] - 1 >= 0) {
                    let newLoc = [this._currentPos[0], this._currentPos[1] - 1];
                    return this.winLossCondition(newLoc);
                } else {
                    console.log('You fell off the edge of the map! Game over.');
                    return true;
                }
            case 'R':
                if (this._currentPos[1] + 1 < this._unmaskedField[0].length) {
                    let newLoc = [this._currentPos[0], this._currentPos[1] + 1];
                    return this.winLossCondition(newLoc);
                } else {
                    console.log('You fell off the edge of the map! Game over.');
                    return true;
                }
        }
    }

    // checks if any win or loss conditions have been met
    winLossCondition(newLoc) {
        if (this._unmaskedField[newLoc[0]][newLoc[1]] === fieldCharacter) {
            this._unmaskedField[newLoc[0]][newLoc[1]] = pathCharacter;
            this._maskedField[newLoc[0]][newLoc[1]] = pathCharacter;
            this._currentPos = newLoc;
            this.print(this._maskedField);
            return false;
        } else if (this._unmaskedField[newLoc[0]][newLoc[1]] === hole) {
            this.print(this._unmaskedField);
            console.log('You fell into a hole! Game over.');
            return true;
        } else {
            this.print(this._unmaskedField);
            console.log('You found your hat! YOU WIN!!!');
            return true;
        }
    }

    // runs the current game in progress
    startGame() {
        let isGameOver = false;
        let currentMove;
        while (!isGameOver) {
            currentMove = prompt('Make a move (U for Up, D for Down, L for Left, R for Right): ').toUpperCase();
            if (currentMove === 'U' || currentMove === 'D' || currentMove === 'L' || currentMove === 'R') {
                isGameOver = this.validateMove(currentMove);
            } else {
                console.log('Invalid move.')
            }
        }
    }
}

function startGame() {
    let rows;
    let columns;
    let difficulty;

    // prompts user to input on game level
    difficulty = prompt('Set your difficulty (E for Easy, M for Medium, H for Hard): ').toUpperCase();
    // checks for valid input
    while (difficulty !== 'E' && difficulty !== 'M' && difficulty !== 'H') {
        console.log('Invalid entry.');
        difficulty = prompt('Set your difficulty (E for Easy, M for Medium, H for Hard): ').toUpperCase();
    }

    // prompts user for number of rows
    rows = Number(prompt('Enter number of rows (minimum 4 and maximum 10): '));
    // checks for valid input, row minimum, and row maximum
    while (Number.isNaN(rows) || rows < 4 || rows > 10) {
        console.log('Invalid entry.');
        rows = Number(prompt('Enter number of rows (minimum 4 and maximum 10): '));
    }

    // prompts user for number of columns
    columns = Number(prompt('Enter number of columns (minimum 4 and maximum 10): '));
    // checks for valid input, column minimum, and column maximum
    while (Number.isNaN(columns) || columns < 4 || columns > 10) {
        console.log('Invalid entry.');
        columns = Number(prompt('Enter number of columns (minimum 4 and maximum 10): '));
    }

    const newGame = new Field(rows, columns, difficulty);
}

startGame();
