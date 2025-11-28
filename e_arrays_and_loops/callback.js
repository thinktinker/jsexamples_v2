// Using a Promise Objet that takes in callback function to create a delay
const sleep = (delay) => new Promise ((resolve) => setTimeout (() => {
    console.log("I'm sleeping for 2 seconds.");
    resolve();
}, delay));

await sleep(2000);



// When using setTimeout, we are essentially applying a callback function as well
// After two secs, setTimout should run the callback function with console.log(...)

setTimeout(() => {
    console.log("I've been waiting for 2 seconds");
}, 2000);