
const prompt = require("prompt-sync")({sigint: true});

/* 
let getName = prompt("Please enter your name: ");

// 1. While loop
// If a condition is to be checked first, before running a while loop

while(getName === ""){                                  // Check first
    getName = prompt("Please enter your name: ");       // Do later
}

console.log(`Welcome, ${getName}`);   
*/


// 2. Do-while loop
// Since it is a must to obtain the user's name, do the executable block AT LEAST ONCE

/* 
let getName2 = "";

do {
    getName2 = prompt("Please enter your name: ");   // Do first
} while (getName2 === "");                           // Ask later

console.log(`Welcome, ${getName2}`);   
*/

// 3. Game input
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

let move = "";

function updateMove(m=""){
    if (m===UP) return console.log("You moved up.");
    if (m===DOWN) return console.log("You moved down.");
    if (m===LEFT) return console.log("You moved left.");
    if (m===RIGHT) return console.log("You moved right.");
    if (m===QUIT) return console.log("Quitting the game...");

    console.log("Invalid value. Please try again.");
}

do {
    move = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit: ");

    switch(move.toLowerCase()) {
        case UP:
            updateMove (UP);
            break;
        case DOWN:
            updateMove (DOWN);
            break;
        case LEFT:
            updateMove (LEFT);
            break;
        case RIGHT:
            updateMove (RIGHT);
            break;
        case QUIT:
            updateMove (QUIT);
            break;
        default:
            updateMove ();
            break;
    }
} while (move !== 'QUIT');