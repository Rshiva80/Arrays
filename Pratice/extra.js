//Swap two integers present in variables num1 and num2 without using temporary variable

let a = 10;
let b = 20;
[a,b] = [b,a];
 // console.log(a,b);

//Write a function which returns true if given value of number is an integer without using any inbuilt functions

function checkInt(num){

    if(num % 1 == 0){
        return true;
    } else 
        return false;

}

//console.log(checkInt(5));

//Create a function which returns a random number in the given range of values both inclusive

function rannum(num1,num2){
 return num1 +  Math.round(Math.random()*(num2-num1));

}
console.log(rannum(10,20));

//Write a program to reverse a string

let str = "hello";
let reverseString = "";
for(let i=0;i<str.length;i++){
    
   
   reverseString = str.charAt(i) + reverseString
}
console.log(reverseString);

// Alternate way
let str2 = "reverse";
let reverseString2 = str2.split('').reverse().join('');
console.log(reverseString2);

// Write a program to reverse a string by words. Also show the reverse of each words in place

let str3 = "My boy is best";

// Step 1: Split the sentence into words
let newWord = str3
  .split(" ") // Split by space to get an array of words
  .map((word) => 
    word.split("").reverse().join("") // Reverse each word in place
  )
  .join(" "); // Join the reversed words back into a sentence

console.log(newWord);

//6. Write a program to reverse a given integer number
let numberx = 12345;

// Convert the number to a string, split it into characters, reverse the array, and join it back.
let reversedNumber = Number(String(numberx).split('').reverse().join(''));

console.log(reversedNumber); // Output: 54321
