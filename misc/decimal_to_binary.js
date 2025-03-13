/*
Aborted attempt at using recursion to split a
string recursively into chunks of two cells,
compute the results of each two-cell unit,
and then compute the result of the whole thing.
I might return to this, it's an interesting challenge.
*/
/* function binary_to_decimal(num_as_bin) {
    let left = "";
    let right = ""
    let split = num_as_bin.length / 2;
    for (let i = 0; i < split; i++) {
        left += num_as_bin[i];
        right += num_as_bin[i + split];
    }
    left = Number(left);
    right = Number(right);
    return (2 * left) + right;
} */

/////////////////////////////////////////////////////////////

/*
Classic binary to decimal algorithm,
multiplying the value of each position
by an increasing power of two.
*/

function binary_to_decimal(binary) {
    let result = 0;
    let multiplier = 1;
    for (let i = binary.length - 1; i >= 0; i--) {
        result += binary[i] * multiplier;
        multiplier *= 2;
    }
    return result;
}

// myString = "1101010101010010101010101010";
// console.log(binary_to_decimal(myString));


/////////////////////////////////////////////////////////////

/*
I think this algorithm comes from K&R.
The NewArray function is something I found on stackexchange.
*/
/*
function decimal_to_binary(decimal) {
    const bitlength = 16;
    let bit = '0';
    const binary = NewArray(bitlength, bit);
    for (let i = bitlength-1; i >= 0; decimal = Math.floor(decimal / 2), i--) {
        if (decimal % 2 == 0) {
            bit = '0';
        }
        else {
            bit = '1';
        }
        binary[i] = bit;
    }
    let binaryStr = '';
    for (let i = 0; i < bitlength; i++) {
        binaryStr += binary[i];
    }
    return binaryStr;
}

function NewArray(size, data) {
    let x = [];
    for (let i = 0; i < size; i++) {
        x[i] = data;
    }
    return x;
}

// console.log(decimal_to_binary(process.argv[2]));
*/

/////////////////////////////////////////////////////////////

/*
My idea here was to use a lookup table containing strings storing the first 10 whole
numbers as bit patterns. The algorithm adds the least significant bit for each
operand, stores the result incrementally in a string; after computation is finished
the string is reversed so that the least significant bit is correctly at the rightmost side.
Operands can be stacked up by calling the function as a parameter to another instance
of calling the function, to overcome the limitation of adding just two operands at once.
*/
let lookUpTable = {
    b0: "0000",
    b1: "0001",
    b2: "0010",
    b3: "0011",
    b4: "0100",
    b5: "0101",
    b6: "0110",
    b7: "0111",
    b8: "1000",
    b9: "1001"
};

console.log(lookUpTable.b1);
console.log("print the results of 0 || 1: ", 0 || 1);
console.log(0 || 1);


const INDEX_RESULT = 0;
const INDEX_CARRY = 1;

function addBinaryNumbers(op1, op2, carry = 0) {
    let result = 0;
    let finalArray = [];
    let tempResultArray = [result, carry];
    let resultStr = "";
    const bitlength = 4;
    function binaryAddTwoBits(op1, op2, carry) {
        op1 = Number(op1);
        op2 = Number(op2);
        carry = Number(carry);
    if (op1 && op2 && carry) {
        result = '1', carry = '1';
    }
    else if (op1 && op2) {
        result = '0', carry = '1';
    }
    else if ((op1 || op2) && carry) {
        result = '0', carry = '1';
    }
    else if (op1 || op2) {
        result = '1', carry = '0';
    }
    else if (carry) {
        result = '1', carry = '0';
    }
    else {
        result = carry = '0';
    }
        tempResultArray = [result, carry];
        return tempResultArray;
    }
    for (let i = bitlength-1; i >= 0; i--) {
        finalArray = binaryAddTwoBits(op1[i], op2[i], tempResultArray[INDEX_CARRY]);
        resultStr += finalArray[INDEX_RESULT];
    }
    if (finalArray[1] == '1') {
        resultStr += finalArray[INDEX_CARRY]
    }
    return resultStr.split("").reverse().join("");
}

console.log(binary_to_decimal((addBinaryNumbers(lookUpTable.b5,addBinaryNumbers(lookUpTable.b2, addBinaryNumbers(lookUpTable.b1, lookUpTable.b6))))));

//console.log((addBinaryNumbers(lookUpTable.b5,addBinaryNumbers(lookUpTable.b2, addBinaryNumbers(lookUpTable.b1, lookUpTable.b6)))));


/*
pass the whole multiplicand and one digit from the multiplier
compute the result for each multiplier
add the results together (using my add function above?)
*/
function multiplyBinaryNumbers(multiplier, multiplicand, carry = 0) {
    let result = 0;
    let finalArray = [];
    let tempResultArray = [result, carry];
    let resultStr = "";
    const bitlength = 4;
    function binaryMultiplyTwoBits(op1, op2, carry) {
        op1 = Number(op1);
        op2 = Number(op2);
        carry = Number(carry);
    if (op1 && op2 && carry) {
        result = '1', carry = '1';
    }
    else if (op1 && op2) {
        result = '0', carry = '1';
    }
    else if ((op1 || op2) && carry) {
        result = '0', carry = '1';
    }
    else if (op1 || op2) {
        result = '1', carry = '0';
    }
    else if (carry) {
        result = '1', carry = '0';
    }
    else {
        result = carry = '0';
    }
        tempResultArray = [result, carry];
        return tempResultArray;
    }
    for (let i = bitlength-1; i >= 0; i--) {
        finalArray = binaryMultiplyTwoBits(op1[i], op2[i], tempResultArray[INDEX_CARRY]);
        resultStr += finalArray[INDEX_RESULT];
    }
    if (finalArray[1] == '1') {
        resultStr += finalArray[INDEX_CARRY]
    }
    return resultStr.split("").reverse().join("");
}