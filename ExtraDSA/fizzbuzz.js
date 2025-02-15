// //“FizzBuzz” if i is divisible by 3 and 5,
// “Fizz” if i is divisible by 3,
// “Buzz” if i is divisible by 5
// “i” as a string, if none of the conditions are true.
//Input: n = 20
//Output: [“1”, “2”, “Fizz”, “4”, “Buzz”, “Fizz”, “7”, “8”, “Fizz”, “Buzz”, “11”, “Fizz”, “13”, “14”, “FizzBuzz”, “16”, “17”, “Fizz”, “19”, “Buzz”]


let n = 20;
for(let i =1 ;i<n;i++){
    if(i % 3 ==0 && i % 5 == 0){
        console.log(i ,"FizzBuzz");
    } else if(i % 3 ==0) 
        {
            console.log(i ,"Fizz");
        }
        else if(i % 5 ==0) 
            {
                console.log(i ,"Buzz");
            }
            else {
                console.log(i);
            }
}

// JavaScript program for Fizz Buzz Problem 
// by checking every integer individually 
// with string concatenation
function fizzBuzz(n1) {
    const res = []; 

    for (let i = 1; i <= n1; i++) {
    
        // Initialize an empty string for the current result
        let s = ""; 

        // Divides by 3, add Fizz
        if (i % 3 === 0) s += "Fizz";
        
        // Divides by 5, add Buzz
        if (i % 5 === 0) s += "Buzz";
        
        // Not divisible by 3 or 5, add the number
        if (s === "") s += i;
        
        // Append the current result to the array
        res.push(s); 
    }

    return res;
}

// Driver code
const n1 = 20;
const res = fizzBuzz(n); 
console.log(res.join(" "));
