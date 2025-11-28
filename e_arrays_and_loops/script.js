// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, "Hello", true, null,];
console.log(myArray.length);

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6];

const multiplyArrBy10 = mappedArray.map(item => item * 10);
console.log(multiplyArrBy10);

// ii - filter function of an array
// Implement your code here
const vowels = ["a", "e", "i", "o"];

const filteredVowels = vowels.filter(vowel => vowel === "a" || vowel === "u");
console.log(filteredVowels);


// iii - sort function of an array
// Implement your code here
const nums = [1, 2, 3, 4, 5, 6];
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by descending order
// Implement your code here
const decendNums = nums.sort((a,b) => a > b ? -1 : 1 );
console.log(decendNums);

const ascendNums = nums.sort((a,b) => a > b ? 1 : -1);
console.log(ascendNums)

// Sort by descending order
// Implement your code here
const descendNames = names.sort((a, b) => a > b ? -1 : 1);
console.log(descendNames)

const ascendNames = names.sort ();
console.log(ascendNames);

// iv - reduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);

const product_of_arr = numbers.reduce((a, b) => a * b);
console.log(product_of_arr);

// another approach of applying a reuduce function of an array
// Implement your code here
const arr = new Array(1, 2, 3, 4);

function product(a, b){

    return a * b;
}

const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct);

// append elements to an Existing array
const teamList = ["Tanna", "Shalyn", "Zhang", "Francis"];
teamList.push("Muhaimin");
console.log(teamList.length);
console.log(teamList);

// remove the last element of an EXISTING array
teamList.pop();
console.log(teamList.length);
console.log(teamList);

// shift and unshift elemnets of an array
const mag7 = ["FB. AMZN, AAPL, NFLX, GOOG"];
console.log(mag7.shift());
console.log(mag7);

// Unshift (prepend META, NVDA, MSFT)
mag7.unshift("META", "NVDA", "MSFT");
console.log(mag7);

// Slice data
const bballTeam = ["Jordan", "Pippen", "Bill"];
const index = 2;
const newPlayer = "Steve Carr";
bballTeam.splice(index, 0, newPlayer);
console.log(bballTeam);

bballTeam.splice(bballTeam.length -1, 1, "Rodman");
console.log(bballTeam);

// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here
const max = 10;
for (let index = 1; index <= max; index++) {
    console.log(index);
}

const max100 = 100;
for (let index = 10; index <= max100 ; index = index + 10) {
    console.log(index);
}

for (let index = max; index >= 0 ; index--) {

    if(index === 0)
        console.log("MERRY X'MAS");
    else
        console.log(index);
}



// ii - for-each loop
// Implement your code here
const tickerSymbols =  ["META", "AMZN", "GOOG", "MSFT"];

// Method 1: Using a standard for loop
for (let index = 0; index < tickerSymbols.length; index++) {
    console.log(`${index + 1}. ${tickerSymbols[index]}`);
}

// Method 2: Using the forEach array method
tickerSymbols.forEach((element, index) => { console.log(`${index + 1}. ${element}`) });

// iii - do-while loop (execute first, check for the condition later)
// Implement your code here

let i = 0;

do{
    console.log(i);
    i++;
}

while (i <= 5);

// iv - while loop (check the conditions first before running the while loop)
// Implement your code here

let j = 0;
while (j <= 10) {
    console.log (j);
    j++;
}