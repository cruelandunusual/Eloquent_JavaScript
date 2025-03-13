/*
Contains code copied from the book, modified from the book's samples
or written from scratch by me while working through chapter 4:
Data Structures: Objects and Arrays
*/

/////////////////////////////////////////////////////////////
/*
Arrays; creating, pushing and popping them
*/
/* 
let sequence = [1, 2, 3, 4];
console.log(sequence); // -> [ 1, 2, 3, 4 ]
sequence.push(5); // push 5 onto the array, i.e. add another element, storying value of 5
console.log(sequence); // -> [ 1, 2, 3, 4, 5 ]
sequence.pop(); // pop the last value from the array, i.e. remove the last element
console.log(sequence); // -> [ 1, 2, 3, 4 ]

 */
/*
Elements can themselves be arrays, recursively.
*/

/*
Recursive function to print each element of an array.
If an element is itself an array, the function is called and
passed that element/array. 
*/
/* 
let myArray = [[1, ["this", "that", "the other"], 2, 3, 4, 5], "work", "home", "jogging"];
let myArray2 = [[1, 2, 3], ["four", "five", "six"], [7,["eight", "nine", "ten"],11]];

function printArray(arraylist) {
    for (let i = 0; i < arraylist.length; i++) {
        if (typeof (arraylist[i]) == 'object') { // if an element is itself an array
            printArray(arraylist[i]); // call this function and pass it the element
        }
        else {
            console.log(arraylist[i]);
        }
    }
}
printArray(myArray);
 */



/*
Objects
*/
/* 
Objects are collections of different types of data,
stored together in a way that makes sense semantically to the user/programmer
 */
/* 
let myObject = {
    news: true, // true can be a value of a property
    "this is a true statement": "unverifiable" // if a property's name isn't a valid binding name or number then it
    // must be quoted, as above. This is also true for values of those properties
};

console.log(myObject.news); // prints the value for this property, i.e. true

if (myObject.news) {
    console.log(myObject["this is a true statement"]); // this array-style syntax necessary for quoted string-like names of properties
    // instead of the object-dot-property syntax
}
 */

// Properties can also be arrays of values
/* 
let day1 = {
    squirrel: false,
    events: ["work", "gym", "home"], // this prints the whole array to the console
};
console.log(day1.events);

if (day1.squirrel == false) {
    day1.events.forEach(element => {
        console.log(element); // same but different... this prints each element individually
        // You *could* loop over each element and do something different with each one
    });
}
else {
    console.log("it seems you were a wolf");
}


console.log(day1.events);
console.log(day1.events[1]);
console.log(typeof(day1.squirrel));

console.log(typeof(day1.events[0])); // array notation
day1.wolf = false; // creating an object property on the fly
console.log(day1); // wolf now appears as part of the object definition
console.log("it is " + ("squirrel" in day1) + " that squirrel is in day1"); // test if a property is in an obect. Use a string on the left of the in operator
 */

// The Object.keys function lists the properties of an object
// console.log(Object.keys(day1));
// console.log(Object.keys(myObject));

// Arrays are basically a kind of object specialised for storing sequences of things.
// See this by evaluating typeof[] -- it returns 'Object'.
// console.log(typeof[]);

/* 
// It makes sense that arrays can hold objects
let journal = [
    {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true},
];
// print each individual entry by using array[i] notation
console.log(journal[0], journal[1]);
 */



/*
Mutability
*/
/* 
let object1 = {value: 10};
let object2 = object1; // object1 and object2 bindings point to, or 'grasp' the same object
let object3 = {value: 10}; // object3 binding points to a different object,
// even though it has the same property with the same value as object 1

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
 */

/*
The Lycanthrope's log
*/

let journal = []; // an array to hold objects (not that this syntax says anything about it holding objects)

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}


monday = ["work", "television", "pizza", "touched tree"];
mondaySquirrel = false;

tuesday = ["work", "golf", "cauliflower", "football"];
tuesdaySquirrel = false;

wednesday = ["work", "television", "burger", "early to bed"];
wednesdaySquirrel = true;

addEntry(monday, mondaySquirrel);
addEntry(tuesday, tuesdaySquirrel);
addEntry(wednesday, wednesdaySquirrel);

function printJournal(journal) {
    console.log(journal);
}

printJournal(journal);
