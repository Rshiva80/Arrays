const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
let inputString = "hello world";  // Example input

for (let char of inputString.toLowerCase()) {  // Convert to lowercase to handle uppercase vowels
    if (vowels.includes(char)) {
        count++;
    }
}

console.log("Vowel count:", count); // Output: Vowel count: 3
