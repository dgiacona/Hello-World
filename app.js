'use strict';

function popup(message){

    let userName = prompt(message);

    console.log(userName);
    
    if (userName.toLowerCase() === "dom") {
        console.log("Welcome Dom");
    } else {
        console.log("Hello Friend! Welcome!");
    }
    
    let place = prompt("Welcome " + userName + "! What is your favorite piece of tech?");
    console.log("First response = " + place);
    
    place = prompt("What else do you like?");
    console.log("Second response = " + place);
    
    document.querySelector(".username").innerHTML = "<p id='username'>" + userName + "<p>";
}
popup("Name Please:")
