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
console.log(binary_to_decimal(myString));



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

console.log(decimal_to_binary(35541));

function NewArray(size, bit) {
    let x = [];
    for (let i = 0; i < size; i++) {
        x[i] = bit;
    }
    return x;
}
