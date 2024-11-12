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