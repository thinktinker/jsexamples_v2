// import the prompt-sync library
const prompt = require("prompt-sync")({ sigint: true }); // allows CTRL+C to terminate the app

function greetUser() {
  let userName = prompt("please enter your name");
  if (userName.trim()) {
    console.log(`Welcome to FSD ${userName}!!!!!`);
  } else {
    console.log("We did not receive your name");
  }
}
greetUser();
