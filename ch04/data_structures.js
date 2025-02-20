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
console.log(sequence);
sequence.push(5);
console.log(sequence);
//sequence = sequence.push(6);
//console.log(sequence);
sequence.pop();
//console.log(sequence.pop());
console.log(sequence);
 */

/*
Elements can themselves be arrays, recursively.
*/

/*
Recursive function to print the each element of an array.
If an element is itself an array, the function is called and
passed that element/array. 
*/
/* 
let myArray = [[1, ["this", "that", "the other"], 2, 3, 4, 5], "work", "home", "jogging"];

function printArray(arraylist) {
    for (let i = 0; i < arraylist.length; i++) {
        if (typeof (arraylist[i]) == 'object') {
            printArray(arraylist[i]);
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
let myObject = {
    news: true
};
let day1 = {
    squirrel: false,
    events: [[1, ["this", "that", "the other"], 2, 3, 4, 5], "work", "home", "jogging"],
    myObject
};

/*
console.log(day1.events);
console.log(day1.events[1]);
console.log(typeof(day1.squirrel));

console.log(typeof(day1.events[0][1][2])); // array notation
day1.wolf = false; // creating an object property on the fly
console.log(day1.wolf);
console.log(day1);
console.log("squirrel" in day1); // test if a property is in an obect. Use a string on the left of the in operator
*/

console.log(Object.keys(day1));
