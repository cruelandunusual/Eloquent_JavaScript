/*
Contains code copied from the book, modified from the book's samples
or written from scratch by me while working through chapter 3: Functions
*/

/////////////////////////////////////////////////////////////

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



/*
this is just given as an examplein the book
as a way to define a function with the const keyword
but I thout it was pretty clever so I copied it here
*/
/* 
const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(30,10));
 */

/////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////

/*
global and local scope examples
*/
/* 
let x = 10; // global
if (true) {
    let y = 20; // local to block
    var z = 30; // also global
}
console.log(x);
// console.log(y); // will fail because y no longer in scope
console.log(z);
 */

/////////////////////////////////////////////////////////////

/*
functions can be defined within functions
*/
/* 
const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);
 */

/////////////////////////////////////////////////////////////

/*
Arrow function definition syntax
*/
/* 
const roundTo = (n, step = 1) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(874.4));
 */

/////////////////////////////////////////////////////////////

/*
Closures.
Not entirely sure what's going on here.
I see that the function names wrap1 and wrap2 are assigned
to what's returned by wrapValue(n). Not sure of the usefulness of this though...?
*/
/* 
function wrapValue(n){
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
 */

/////////////////////////////////////////////////////////////

/*
And lo, this example shows the usefulness of closures pretty clearly.
This is actually really clever and I can see how this could
be used in production.
*/
/* 
function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

let thrice = multiplier(3);
console.log(thrice(5));

let half = multiplier(0.5);
console.log(half(10));
 */

/////////////////////////////////////////////////////////////

/*
Recursion.
*/
/*
Copied straight from the book. There's a few
neat examples of recursion peppered throughout it (so far)
*/
/* 
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    else {
        return base * power(base, exponent - 1);
    }
}
 */
//console.log(power(27, 3));



/*
Consider this puzzle: by starting from the number 1 and repeatedly either
adding 5 or multiplying by 3, an infinite set of numbers can be produced. How
would you write a function that, given a number, tries to find a sequence of
such additions and multiplications that produces that number? For example,
the number 13 could be reached by first multiplying by 3 and then adding 5
twice, whereas the number 15 cannot be reached at all.
*/

/*
some inital thoughts before I attempt a solution...
* starting from 1 and adding 5 will always produce a result that's not
divisible by 5
* starting from 1 and multiplying by 3 (and only ever multiplying by 3) will
always produce a result that's divisible by 3
* 
*/
// here's a temp function I wrote to see
// the results of 3 * (result of 3 * prev_num)
function multByThree(base, mult) {
    myString = base.toString() + " * " + mult.toString() + " = " + base * mult + "\n";
    base *= mult;
    for (let i = 1; i <= 12; i++) {
        myString += base.toString() + " * " + mult.toString() + " = " + base * mult + "\n";
        base *= mult;
    }
    return myString;
}

// here's a temp function I wrote to see
// the results of 1 + (result of 1 + prev_num)
function addQuotient(base, quot){
    myString = base.toString() + " + " + quot + " = " + (base + quot) + "\n";
    base += 5;
    for (let i = 1; i <= 12; i++) {
        myString += base.toString() + " + " + quot + " = " + (base + quot) + "\n";
        base += 5;
    }
    return myString;
}


//console.log(multByThree(1, 3));
//console.log(addQuotient(1, 5));

function dontKnowWhatToCallThisYet(num) {
    result = false;
    if (num < 8 && num != 3) {
        return result;
    }
    if (num / 3 == 5) {
        return result;
    }
    if (num % 3 != 0) {
        dontKnowWhatToCallThisYet(num - 5);
    } // need to satisfy logical test of num % 3 == 0 but where
    // the starting number isn't one that can be reached, e.g. 12
    else {
        result = true;
    }
    return result;
}

console.log(dontKnowWhatToCallThisYet(Number(process.argv[2])));
