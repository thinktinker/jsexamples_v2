// 1. Writing a function declaration

function ftnGreeting(salutation, user) {
    //   const msg = "Hi, " + salutation + " " + user;
    const msg = `Hi, ${salutation} ${user}`; // using interpolated strings to refactor code
    return msg;
}

// the 2 options below returns the same results
const result = ftnGreeting("Mr.", "Jones");
console.log(result);

console.log(ftnGreeting("Mr.", "Jones"));

// 2. Function returning the sum of 2 values
// Equip ftnTest to handle non-existent arguments by adding a default value to the parameters a and b
function ftnTest(a = 0, b = 0) {
    const result = a + b;
    return result;
}

console.log(ftnTest(10, 5));

console.log(ftnTest()); // will return 0 since the default values for the parameters are 0

// 3. Arrow Function
// Allow the function to handle non-existent arguments
const anotherftnGreeting = (salutation = "", name = "") => {
    // handle empty string values
    if (salutation.length == 0 && name.length == 0)
        return "Please enter your salutation and name";

    // otherwise return the greeting
    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp.`;
};

console.log(anotherftnGreeting());
console.log(anotherftnGreeting("Mr", "John"));
