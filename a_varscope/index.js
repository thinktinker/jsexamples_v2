// 1. Primitive Types

let pi = 3.142; /* Variable with a number of 3.142 */
console.log(pi);

let piType = 3.142;
console.log(typeof piType); /* Checks the data type of the value */

let strValue = "Hello"; /* Variable with a string value of "Hello" */
console.log(strValue);

let boolValue = true; /* Variable with a Boolean value of true */
console.log(boolValue);

let nullValue = null; /* Variable with a Null value (object) */
console.log(typeof nullValue);

let undefinedValue; /* Variable with an Undefined value that is declared but uninitialized */
console.log(undefinedValue);

// 2. Non-primitive Types

let arr = [
  "a",
  "b",
  "c",
]; /* Array with 3 elements, starting from index 0, 1, 2 */
console.log(arr);

let faang = new Array(); /* Declare a new instance of an array */
faang[0] =
  "Facebook"; /* Store the value of "Facebook" to index 0 of the array */
faang[1] = "Amazon"; /* Store the value of "Amazon" to index 1 of the array */
console.log(faang);
console.log(faang[0]); /* Prints only index 0 */

let person = {
  name: "Sam",
  age: "42",
}; /* Create a JS object with 2 key values */
console.log(person.name, "is", person.age, "years old");

let vehicle = new Object(); /* Declaring a new instance of an object */
vehicle.name =
  "Suzuki"; /* Gives the object a property called "name" and assigning a value of "Suzuki" */
vehicle.model = "Swift";

let announce = function () {
  /* Declaring a new object as a function */
  console.log("Hello JS");
};
announce(); /* Invoke the new object as a function */

let announce2 = () => {
  /* Declaring a new object as an arrow function */
  console.log("Hello JS again");
};
announce2();

// 3. Declaring variables using var, let, const

const piConst = 3.14159; /* Declare an immutable variable that cannot change values */
console.log(piConst);

let piLet = 3.14159; /* Declare a mutable variable */
piLet = 3.142; /* Mutable variables can change their values */
console.log(piLet);

function greet() {
  let greeting =
    "Welcome FSD learners"; /* Let variable is locally scoped, only accessible in the function */
  console.log(greeting);
}
greet();

var localMsg = "Welcome FSD Developers"; /*  */

function welcome() {
  var localMsg = "Welcome to Full Stack Development";
  console.log(localMsg);
}

console.log(localMsg);