// writing a function declaration
function ftnGreeting(salutation, user){

    const msg = 'Hi, ${salutation} ${user}.';
    return msg;
}

console.log(ftnGreeting("Mr", "Jones"));

//2. function returning a sum of two values
//2.1 Equip ftnAdd to handle non-existent ARGUMENTS (passed to it's parameters)
function ftnAdd(a = 0, b = 0){
    const result = a + b;
    return result;
};

const sum = ftnAdd(10,5); // ftn will send over 2 arguments
console.log(sum);           // 15

const anothersum = ftnAdd();    // passing in zero arguments
console.log(typeof anothersum);

//3. arrow function
// allow the function to handle non-existent arguments
const anotherftnGreeting = (salutation = "", name = "") => {
    //handle empty string values
    if (salutation.length == 0 && name.length == 0)
        return "please enter your salutation and name.";

    return msg =`Hello, ${salutation} ${name}. Welcome to generation bootcamp.`;

};

console.log(anotherftnGreeting ("Mr.", "James"));
console.log(anotherftnGreeting());

function ftnSalutation(){
    return new Array("Mr.", "Mrs.", "Ms.");

}