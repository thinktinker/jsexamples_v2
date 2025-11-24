// 4. Type Casting

// Converting values to numbers using the Number object
console.log(Number("3.142")); /* 3.142 */
console.log(Number(Math.PI)); /* 3.141592653589793 */
console.log(Number("     ")); /* 0 */
console.log(Number("")); /* 0 */
console.log(Number("88 88")); /* NaN */
console.log(Number("Steve")); /* NaN */

// Converting values to strings using the String objects
console.log(String(new Date())); /* Today's date and time */
console.log(String("98765")); /* 98765 */
console.log(String(98765)); /* 98765 */

// Converting values into boolean
console.log(
  Boolean("1")
); /* true (truthy response because it is considered as a value) */
console.log(Boolean(1)); /* true */
console.log(
  Boolean("0")
); /* true (truthy response because it is considered as a value) */
console.log(Boolean(0)); /* false */
console.log(
  Boolean(" ")
); /* true (truthy response because it is considered as a value) */
console.log(Boolean("")); /* false */
console.log(Boolean("John")); /* true */

// Test this function in a browser
function greetUser() {
  let userName = prompt("please enter your name");
  if (userName.trim()) {
    alert(`Welcome to FSD ${userName}!!!!!`);
  } else {
    alert("We did not receive your name");
  }
}
greetUser();
