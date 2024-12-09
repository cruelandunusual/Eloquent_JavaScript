function binary_to_decimal(num_as_bin) {
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
}

myString = "10";
console.log(binary_to_decimal(myString));
