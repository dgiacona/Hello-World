'use strict';

function popup(message){

    let userName = prompt(message);

    console.log(userName);
    
    if (userName.toLowerCase() === "dom") {
        console.log("Welcome Dom");
    } 

    let place = alert("Welcome " + userName + "! We are going to ask you a very imortant question and you must think very hard about it. There is only one corect answer. Press OK to continue");
    console.log("First response = " + place);

    let answer;
    while (answer !== "5") {
    answer = prompt("How many stars do you rate our tech store?").toLowerCase();
    console.log("User said: ", answer);
    }

    console.log("We're out of the loop!")
    
    document.querySelector(".username").innerHTML = "<p id='username'>" + userName + "<p>";
    }

    popup("Name Please:")
