// Create a variable my_num and assign it a number. Convert my_num into a string using a toString() method.
let my_num = 56;
let a = my_num.toString();
console.log(a);

// Create a variable myString and assign it a value of "2.3". Now create 2 more new variables. One integer and assign it a value of parsInt(myString) and another float and assign it a value of parseFloat(myString). Check the value and type of integer and float in the console.

let myString = "2.3";

let integer = parseInt(myString);

console.log(integer);
typeof(integer);

let float = parseFloat(myString);
typeof(float);
