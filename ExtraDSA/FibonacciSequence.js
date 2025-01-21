function fibo(n){

    let start = [0,1];
    let sum = 1;
    for(let i=2; i<=n ; i++){
       start[i] = (start[i-1])+(start[i-2]);
       sum = sum + start[i];
    }
    return {start,sum};
  
 }
 
 console.log(fibo(5));

// Another method

function Fibo(n)
{
    if (n <= 0) return "Invalid input"; // Handle invalid input
    if (n === 1) return 0; // The first Fibonacci number
    if (n === 2) return 1; // The second Fibonacci number

let prev = 0;
let current = 1;
let next ;

for(let i=2;i<=n;i++){
next = prev + current;
prev = current;
current = next;

}
return next;
}
console.log(Fibo(7));

// recursive method