'use strict';

let userName = prompt("What is your name?");

console.log(userName);

if (userName === "dom") {
    console.log("Welcome_Dom");
} else {
    console.log("Hello Friend! Welcome!");
}

let place = prompt("Welcome" + userName + "!What is your favorite piece of tech?");
console.log("First response = " + place);

place = prompt("What else do you like?");
console.log("Second response = " + place);

document.querySelector(".username").innerHTML = "<p id='username'>" + userName + "<p>";