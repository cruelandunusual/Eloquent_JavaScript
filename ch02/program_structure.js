/*
Contains code copied from the book, modified from the book's samples
or written from scratch by me while working through chapter 1: values, types and operators
*/

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
if (!Number.isNaN(num)) {
    console.log(num + " is the square root of " + num * num);
}
else {
    console.log("you should have entered a number");
}

// more branching stuff generally
// I know all this stuff but I'm being a good student
// and covering it again for completeness
let myNum = 1;
if (myNum < 10) {
    console.log("small");
}
else if (myNum < 50) {
    console.log("medium");
}
else {
    console.log("big");
}
 */

/* 
// looping
let number = 0;
while (number < 12) {
    
    number += 2;
    console.log(number);
}
 */


/* 
// looping to calculate powers of 2, starting from 1**2
let result = 1;
let counter = 0;
while (counter < 64) {
    result *= 2;
    counter++;
    if (counter == 32) // print this to compare 2^32 with 2^64
        console.log(result);
}
console.log(result);
 */

/* 
// looping to calulate powers of 2, starting from 1**2
// this time with a for loop
let result = 1;
for (let counter = 0; counter < 64; counter++) {
    result *= 2;
    if (counter == 31) //print this to compare 2^32 with 2^64
    console.log(result);
}
console.log(result);
 */


/* 
// using modulo to test for the first number greater than
// 20 that's also divisible by 7 with no remainder
for (let current = 20; ; current += 1) {
    if (current % 7 == 0) {
         // current only has scope inside loop so need to print result here
        console.log(current);
        break;
    }
}
 */


/* Exercises */

/*
 Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
 */
/* 
let stars = "";
let counter = 0;
for (let rows = 1; rows <= 7; rows++) {
    while (counter < rows) {
        stars += "*";
        counter++;
    }
    console.log(stars);
}
 */
const stars = [7, 3, 10, 15, 14, 12, 2, 1];
let max = 0;
for (let i = 0; i < stars.length; i++) {
    if (stars[i] > max) {
        max = stars[i];
    }
}
//build a string for printing each line
let starStr = "";
for (let down = max; down > 0; down--) {
    for (let across = 0; across < stars.length; across++) {
        if (stars[across] < down) {
            starStr += "-";
        }
        else {
            starStr += "*";
        }
        console.log(starStr);
        starStr = "";
    }

}

/* 
Some C code I wrote years ago to print a vertical histogram
*/


    /* print vertically */
    /* first need to find the largest value in the array */
/* 
    int max = 0;
    for (c = 0; c < SIZE; ++c) {
	if (vowels[c] > max) {
	    max = vowels[c];	// max stores highest value yet found
	}
    }

    for (c = max; c > 0; --c) {
	for (y = 0; y < SIZE; ++y) {
	    if (vowels[y] < c) {
		printf(" - ");
	    }
	    else printf(" * ");
	}
	printf("\n");
    }
*/
 

