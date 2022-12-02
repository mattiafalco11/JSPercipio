"use strict"

let n = 123;
console.log("integer : ", n);

n = 12.345;
console.log("new value of n foating point : ", n);


console.log("145e4 = ", 145e4);
console.log("145e-4 = ", 145e-4);

console.log("20 * '20' = ", 20 * "20");
console.log("'20' * 20 = ", "20" * 20);

console.log("Infinity = ", Infinity);

console.log("POSITIVE INFINITY return : ", Number.POSITIVE_INFINITY);
console.log("1 / 0 = ", 1/0);

console.log("NEGATIVE INFINITY return : ", Number.NEGATIVE_INFINITY);
console.log("-1 / 0 = ", -1/0);

console.log("String divided by integer: ", "A string" / 2);

console.log("Value of hexadecimal OxEF : ", 0xEF);

var num = 16;

console.log("binary of 16 : ", num.toString(2));
console.log("octal of 16 : ", num.toString(8));
console.log("decimal of 16 : ", num.toString(10));
console.log("hexadecimal of 16 : ", num.toString(16));
console.log("base-32 of 16 : ", num.toString(32));

var a = 10;
console.log("Typeof : ", typeof a);

var b = a.toString();
console.log("Typeof before toString() : ", typeof b);

var x = 3.4567;
console.log("3.4567 rounded to 0 decimals : ", x.toFixed(0));
console.log("3.4567 rounded to 2 decimals : ", x.toFixed(2));
console.log("3.4567 rounded to 5 decimals : ", x.toFixed(5));


