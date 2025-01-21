function Factorial(n){


let result = 1;
if (n < 0) return "Invalid input"; // Factorial is not defined for negative numbers
if (n === 0 || n === 1) return 1; // Factorial of 0 or 1 is 1


for(let i = 2; i<=n;i++ )
{
    result = result *i;
    //console.log(result);
}
return result;
}

console.log(Factorial(8))
// recursive method 
function factorial(y){

    if(y==0){
        return 1;

    }

    return y*factorial(y-1);

}
let data2 = 5;

console.warn(factorial(data2))