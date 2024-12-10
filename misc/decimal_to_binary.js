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



function binary_to_decimal(binary) {
    let result = 0;
    let multiplier = 1;
    for (let i = binary.length - 1; i >= 0; i--) {
        result += binary[i] * multiplier;
        multiplier *= 2;
    }
    return result;
}

myString = "1101010101010010101010101010";
//console.log(binary_to_decimal(myString));



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

// console.log(decimal_to_binary(process.argv[2]));


function NewArray(size, bit) {
    let x = [];
    for (let i = 0; i < size; i++) {
        x[i] = bit;
    }
    return x;
}


let lookUpTable = {
    b1: "0001",
    b2: "0010",
    b3: "0011",
    b4: "0100",
    b5: "0101",
    b6: "0110",
    b7: "0111",
    b8: "1000",
    b9: "1001",
    b10: "1010"
};

// console.log(lookUpTable.b1);
// console.log(0 || 0);

/* function binaryAddTwoBits(op1, op2, carry) {
    let result = 0;
    answer = [];
    if (op1 && op2) {
        result = 0, carry = 1;
    }
    else if (op1 || op2) {
        result = 1, carry = 0;
    }
    else {
        result = carry = 0;
    }
    answer = [carry, result];
    return answer;
}
 */


// console.log(binaryAddTwoBits(1, 1));
//console.log('0' && '0' && '0' && '0');

function addBinaryNumbers(op1, op2, carry = 0) {
    let result = 0;
    let tempResultArray = [carry, result];
    let resultStr = "";
    const bitlength = 4;
    function binaryAddTwoBits(op1, op2, carry = 0) {
        op1 = Number(op1);
        op2 = Number(op2);
        carry = Number(carry);
        if (op1 && op2 && carry) {
            result = '1', carry = '1';
        }
        else if (op1 && op2) {
            result = '0', carry = '1';
        }
        else if (op1 || op2) {
            result = '1', carry = '0';
        }
        else {
            result = carry = '0';
        }
        tempResultArray = [carry, result];
        return tempResultArray;
    }
    for (let i = bitlength-1; i >= 0; i--) {
        result = binaryAddTwoBits(op1[i], op2[i], tempResultArray[carry]);
        resultStr += result[1];
    }
    if (result[0] == '1') {
        resultStr += result[0]
    }
    return resultStr.split("").reverse().join("");

}


//console.log(binaryAddTwoBits(1, 0, 0));
console.log(addBinaryNumbers(lookUpTable.b1, lookUpTable.b3));