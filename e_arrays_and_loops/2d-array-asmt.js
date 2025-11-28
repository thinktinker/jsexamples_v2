// Example of a 2D array

const array2D =[
    [3, 2, 7], // row 1
    [2, 9, 5], // row 2
    [5, 1, 5], // row 3
];

console.log(array2D)

// Assessing the elements of an array
// array_name[row][col]
const element = array2D[1][1];
console.log(element);

// Assessing the elements of an array
// array_name[row][col]

// Printing all the columns in the first row
const e1 = array2D[0][0];
const e2 = array2D[0][1];
const e3 = array2D[0][2];

console.log(e1, e2, e3);

const e4 = array2D[1][0];
const e5 = array2D[1][1];
const e6 = array2D[1][2];

console.log( e4, e5, e6);

const e7 = array2D[2][0];
const e8 = array2D[2][1];
const e9 = array2D[2][2];

console.log( e7, e8,e9);

const myField = [
  ['░', '░', 'O', '░'],
  ['*', 'O', '░', 'O'],
  ['░', '^', '░', '░'],
];

console.log(myField);

const rows = 3;
const cols = 3;
const arr2D = [];

for (let i = 0; i < rows; i++) {
    arr2D[i] = [];

    for (let j = 0; j < cols; j++) {
        arr2D [i][j] = 0;
    }
}

console.log(arr2D);