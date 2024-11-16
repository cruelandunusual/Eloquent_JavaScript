/*
console.log("-----------");

let x = Math.round(Math.random()*100);
let y = Math.round(Math.random()+1);
if (x < (100/y))
{
    console.log(x + " is less than " + 100/y);
}
else
{
    console.log("ha ha, x is way too big");
}

console.log("-----------");
*/
/* 
function factorial(n)
{
    if (n == 0)
    {
        return 1;
    }
    else
    {
        return factorial(n - 1) * n;
        
    }
}

var num = 5;
console.log(factorial(num));
 */
let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);
resultStr = x + " > " + y;
console.log(x>y ? resultStr + " = true" : resultStr + " = false");

console.log("-----------");

console.log(!(x>y));

/*if (x > y) {
    console.log(resultStr + " = true");
}
else console.log(resultStr + " = false");
*/

