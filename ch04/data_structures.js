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

let myObject = {
    news: true, // true can be a value of a property
    "forgot my name": "verifiable" // if a property's name isn't a valid binding name or number then it
    // must be quoted, as above. This is also true for values of those properties
};

if (myObject.news) {
console.log(myObject["forgot my name"]);
}


let day1 = {
    squirrel: false,
    events: ["work", "gym", "home"],
};

if (day1.squirrel == false) {
    day1.events.forEach(element => {
        console.log(element);
    });
}
else {
    console.log("it seems you were a wolf");
}

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

//console.log(Object.keys(day1));
