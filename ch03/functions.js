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
 */


/*
this is just given as an example in the book
as a way to define a function with the const keyword
but I thought it was pretty clever so I copied it here
*/
/* 
const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(32,10));
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
console.log(wrapValue(4));
console.log(wrap1());
console.log(wrap2());
 */

/////////////////////////////////////////////////////////////

/*
And lo, this example shows the usefulness of closures pretty clearly.
This is actually really clever and I can see how this could
be used in production.
*/

function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

let thrice = multiplier(3);
console.log(thrice(5));

let half = multiplier(0.5);
console.log(half(10));


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

/////////////////////////////////////////////////////////////

/* Exercises */

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
divisible by 5, but will sometimes be divisible by 3
* starting from 1 and multiplying by 3 (and only ever multiplying by 3) will
always produce a result that's divisible by 3
*/

/* 
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
 */

/* 
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
 */

//console.log(multByThree(1, 3));
//console.log(addQuotient(1, 5));
/* 
function findResultFromMult3orAdd5(num) {
    result = false;
    if (num < 8 && num != 3) {
        return result;
    }
    if (num / 3 == 5) {
        return result;
    }
    if (num % 3 != 0) {
        findResultFromMult3orAdd5(num - 5);
    } // need to satisfy logical test of num % 3 == 0 but where
    // the starting number isn't one that can be reached, e.g. 12
    else {
        result = true;
    }
    return result;
}
 */
// console.log(findResultFromMult3orAdd5(Number(process.argv[2])));
 
/*
Here is the author's solution, which I had avoided looking at for a while
in the hope that I'd find my own solution, but I can't...
*/
/* 
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        }
        else if (current > target) {
            return null;
        }
        else {
            return find(current + 5, `(${history} + 5)`) ??
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));
 */

/*
Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can write a function like that ourselves now. Define
the function min that takes two arguments and returns their minimum.
*/
/* 
function PMSmin(a, b) {
    return a < b ? a : b;
}
 */
//console.log(PMSmin(4, 4));

/*
Recursion
We’ve seen that we can use % (the remainder operator) to test whether a number
is even or odd by using % 2 to see whether it’s divisible by two. Here’s another
way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?
*/
/* 
function isEven(num) {
    function abs(number){
        return number < 0 ? -number : number;
    }
    num = abs(num);
    result = false;
    if (num == 0) {
        result = true;
    }
    else if (num == 1) {
        result = false;
    }
    else {
        return isEven(num - 2);
    }
    return result;
}

console.log(isEven(Number(process.argv[2])));
 */

/*
Bean counting
You can get the Nth character, or letter, from a string by writing [N] after the
string (for example, string[2]). The resulting value will be a string containing
only one character (for example, "b"). The first character has position 0, which
causes the last one to be found at position string.length - 1. In other words,
a two-character string has length 2, and its characters have positions 0 and 1.
Write a function called countBs that takes a string as its only argument and
returns a number that indicates how many uppercase B characters there are in
the string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase B characters). Rewrite countBs to make
use of this new function.
*/
/* 
function countChars(str, char) {

    let c = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            c++;
        }
    }
    return c;
}



//console.log(countChars("bbbBBBbb", 'b'));
console.log(countChars(process.argv[2], process.argv[3]));
 */