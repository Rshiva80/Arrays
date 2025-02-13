function findVowels(str) {
    let vowels = "aeiouAEIOU"; 
    let result = [];
    
    for (let char of str) {
        if (vowels.includes(char)) {
            result.push(char);
        }
    }
    
    return result;
}

// Example Usage
console.log(findVowels("Hello World")); // Output: ['e', 'o', 'o']
console.log(findVowels("JavaScript"));  // Output: ['a', 'a', 'i']
