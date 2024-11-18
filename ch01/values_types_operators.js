
/* 
// Simple logial test and if else structure
 
let x = Math.round(Math.random()*100);
let y = Math.round(Math.random()+1);
if (x < (100/y))
{
    console.log(x + " is less than " + 100/y);
}
else
{
    console.log("ha ha, x is way too big");
}
 */


/* 
// Factorial function, just to remind myself how recursion works
function factorial(n)
{
    if (n == 0)
    {
        return 1;
    }
    else
    {
        return factorial(n - 1) * n;
        
    }
}

var num = 5;
console.log(factorial(num));
 */


/* 
// Building a string up from various substrings based on result of logical test.
// Also refresher on using ternary logical operator
let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);
resultStr = x + " > " + y;
console.log(x>y ? resultStr + " = true" : resultStr + " = false");

console.log("-----------");

console.log(!(x>y));
 */

/* 
// NaN -- somehow this doesn't work for values that aren't a number.
// e.g. the test !Number.isNaN(num) printed inside a console.log will
// print the properly expected result, but the test inside an if/else
// just enters the if block every time...
let num = 5;
if (!Number.isNaN(num)){
    console.log(num + " is the square root of " + num * num);
}
else {
    console.log("you should have entered a number");
}

// more branching stuff generally
// I know all this stuff but I'm being a good student
// and covering it again for completeness
let myNum = 1;
if (myNum < 10){
    console.log("small");
}
else if (myNum < 50){
    console.log("medium");
}
else {
    console.log("big");
}
 */


// looping
let number = 0;
while (number < 12){
    
    number += 2;
    console.log(number);
}
