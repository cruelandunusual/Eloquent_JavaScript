/*
Contains code copied from the book, modified from the book's samples
or written from scratch by me while working through chapter 2: Program Structure
*/

/* 
// Simple logical test and if else structure
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
// This is my solution - I think it's different from what the author
// is expecting as the hint mentions using .length of a string and
// I haven't used that. I'm pleased with my solution though.
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


/* 
// Working on that exercise above prompted me to dig out
// the old C code I wrote to print a histogram vertically
const histogram = [4, 3, 7, 10, 3, 9, 2, 1];
let max = 0;
for (let i = 0; i < histogram.length; i++) {
    if (histogram[i] > max) {
        max = histogram[i]; // store the largest number in the array
    }
}

let starStr = ""; // initialise a string for printing each line
for (let y = max; y > 0; y--) { // loop down from highest value to lowest
    for (let x = 0; x < histogram.length; x++) {
        if (histogram[x] < y) {
            starStr += "  "; // append space if current element is less than max
        }
        else {
            starStr += "* "; // else append a star
        }
    }
    console.log(starStr);
    starStr = "";
}
 */


/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/
/* 
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0 && !(i % 3 == 0)) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
 */
/*
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
*/
/* 
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && !(i % 5 == 0)) {
        console.log("Fizz");
    }
    else if (i % 5 == 0 && !(i % 3 == 0)) {
        console.log("Buzz");
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }
}
 */

/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
*/
/* 
let boardWid = 13;
let chessStr = "";
let blank = true; // start the grid with a blank square
for (let y = 0; y < boardWid; y++) {
    for (let x = 0; x < boardWid; x++) {
        if (blank) {
            chessStr += " ";
        }
        else {
            chessStr += "#";
        }
        blank = !blank;
    }
    chessStr += "\n";
    if (boardWid % 2 == 0) {
        // if the board is an even x*x then flip blank back again for the next line
        blank = !blank;
    }
    // if it's an odd x*x then leave blank flipped for the next line
}
console.log(chessStr);
 */
