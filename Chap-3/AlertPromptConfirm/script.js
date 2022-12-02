"use strict"

alert("This is an alert");

let name1 = prompt("the prompt message is: \nEnter your name: ");
console.log("You entered "+ name1);
let subject = prompt("Enter subject name", "Javascript");
console.log("You entered "+subject);

let a = prompt("Enter a number to get square");
let b = a * a;
alert("Square value of " + a + " is " + b);

let output = confirm("Confirmation message: \nReady to move to the next demo?");
if(output){
    console.log("You pressed ok");
}else{
    console.log("You pressed cancel");
}