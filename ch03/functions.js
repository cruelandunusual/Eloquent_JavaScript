/*
Contains code copied from the book, modified from the book's samples
or written from scratch by me while working through chapter 3: Functions
*/

/*
define a function with the const keyword, and bind a name
to the function definition. There should be a semi colon
after the curly bracket that closes the function definition,
although in practise it works without it
*/
/*
const square = function(x) {
    return x *x;
};

let result = square(4);
console.log(result);


const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(30,10));
 */



/* 
these two circularly defined functions will exceed the call stack (obviously)
*/
/*
function chicken() {
    return egg();
}

function egg(){
    return chicken();
}

console.log(chicken() + " came first");
*/

/*
a bunch of function definitions that replicate the basic arithmetic operators
*/
/*
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return NaN;
    }
    else {
        return a / b;
    }
}
*/

// console.log(minus(10, 4));
// console.log(add(5, add(5, add(5, 5))));
// console.log(multiply(5,multiply(5,5)));
// console.log(multiply(5,multiply(5,multiply(5,5))));
// console.log(divide(20,0.01));

/*
this parameter form (= 1) means if the second parameter is ignored
the function will supply 1 in its place. So you can call roundTo(24.3)
and it will treat it as roundTo(24.3, 1);
*/
/*
function roundTo(n, step = 1) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
}
*/
// console.log(roundTo(24.3));
