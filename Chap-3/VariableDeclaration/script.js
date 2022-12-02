"use strict";

var price1 = 5;
var price2 = 10;
var total = price1 + price2;

console.log("Sum: ", total);

price1 = 21;
price2 = 14;
total = price1 + price2;

console.log("Updated sum: ", total);

var price1 = 12;
var price2 = 43;
var total = price1 + price2;

console.log("Redeclared var sum: ", total);

let dividend = 420;
let divisor = 20;

console.log("Division result: ", dividend/divisor);

dividend = 720;
divisor = 30;

console.log("Updated division result: ", dividend/divisor);

//Le variabili let si possono aggiornare ma non si possono ridichiarare!
//let dividend = 420;
//let divisor = 20;
//console.log("Division result: ", dividend/divisor);

const MY_BIRTHDAY = '11.10.2002';
console.log("Constant: ", MY_BIRTHDAY);

//Le costanti non si possono ne aggiornare ne ridichiarare!
//MY_BIRTHDAY = '11.09.1990';
//const MY_BIRTHDAY = '11.09.1990';


//Usando var la variabile si può utilizzare prima dell'inizializzazione
a = 5;
console.log("The value of a = ", a);
var a;
//Con let e const non è possibile!

var uninizialized_var;
console.log("uninizialized_var = ", uninizialized_var);
let uninizialized_let;
console.log("uninizialized_let = ", uninizialized_let);

var undefined_var = undefined;
console.log("undefined_var = ", undefined_var);
let undefined_let = undefined;
console.log("undefined_let = ", undefined_let);

var x = null;
console.log("value of x = ", x);

//Le operzioni vengono eseguite da sinistra verso destra!
var x = "5" + 2 + 3;
console.log("x = ", x);

var x = 5 + 2 + "7";
console.log("redefined x = ", x);

let y = "5" + 2 + 3;
console.log("y = ", y);

let z = 5 + 2 + "7";
console.log("z = ", z);