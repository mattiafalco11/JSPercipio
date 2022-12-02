"use strict"

let str_double_quotes = "JavaScript";
let str_single_quotes = 'programming language';

let str_back_sticks = `Is ${str_double_quotes} a ${str_single_quotes} ?`;
console.log("String with back sticks = ", str_back_sticks);

let sum = `${1+2+3}`;
console.log(`value of sum = ${sum}`);

let sentence = "I \"love\" pasta";
console.log("String with quotes : ", sentence);

let multiline_str = 
`               This is a
                string which
                spans multiple lines`;
console.log("A multi-line string : \n", multiline_str);

var namestr1 = "David";
var namestr2 = "David";

var nameobj1 = new String("David");
var nameobj2 = new String("David");

console.log("str/str : ", namestr1 == namestr2);
console.log("str/obj : ", namestr1 == nameobj1);
console.log("obj/obj : ", nameobj1 == nameobj2);
console.log("obj/obj with valoeOf() : ", nameobj1.valueOf() == nameobj2.valueOf());

console.log("str/str === : ", namestr1 === namestr2);
console.log("str/obj === : ", namestr1 === nameobj1);
console.log("obj/obj === : ", nameobj1 === nameobj2);
console.log("obj/obj === with valueOf() : ", nameobj1.valueOf() === nameobj2.valueOf());

let empName = "Jane Chang";

console.log("Number of characters : ", empName.length);
console.log("Index of h : ", empName.indexOf("h"));
console.log("'Ch' occurs at position : ", empName.search("Ch"));

var line = "Foundamentals of JavaScript";

console.log("Original line : ", line);
console.log("Slice (1, 12): ", line.slice(1, 12));
console.log("Slice (-23, -15): ", line.slice(-23, -15));
console.log("Slice (13): ", line.slice(13));

