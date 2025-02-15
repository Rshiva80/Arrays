function findDuplicates(arr) {
    let duplicates = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]); // Add to duplicates list if not already added
            }
        }
    }
    
    return duplicates;
}


let stringArray = ["apple", "banana", "orange", "apple", "grape", "banana", "kiwi"];
console.log(findDuplicates(stringArray)); // Output: ["apple", "banana"]

// //his condition is used to check for duplicate elements in the array without counting them multiple times.

// 🔸 arr[i] === arr[j]
// This compares two elements in the array.
// If arr[i] and arr[j] are equal, it means we found a duplicate.
// 🔸 !duplicates.includes(arr[i])
// duplicates.includes(arr[i]) checks if the element is already added to the duplicates array.
// The ! (negation) ensures that the element is only added once to duplicates.
// Example Breakdown
 
// let arr = ["apple", "banana", "orange", "apple", "grape", "banana", "kiwi"];
// Loop Execution
// i	j	arr[i]	arr[j]	arr[i] === arr[j]	duplicates.includes(arr[i])	Condition Pass?	Action
// 0	3	apple	apple	✅ (True)	❌ (False)	✅ (Add)	duplicates.push("apple")
// 1	5	banana	banana	✅ (True)	❌ (False)	✅ (Add)	duplicates.push("banana")
// 3	-	apple	-	(Already found)	✅ (True)	❌ (Skip)	No action
// 5	-	banana	-	(Already found)	✅ (True)	❌ (Skip)	No action
// Final duplicates Array
// javascript
// Copy
// Edit
// ["apple", "banana"]
// This ensures that "apple" and "banana" are only added once, even if they appear multiple times.

// 🔹 Summary
// arr[i] === arr[j] → Finds duplicate elements.
// !duplicates.includes(arr[i]) → Prevents adding the same element multiple times.

// Using Map (ES6) as a Hash Map

let map = new Map();

map.set("name", "Alice");
map.set("age", 25);
map.set(1, "Number Key"); // Supports non-string keys

console.log(map.get("name")); // Output: Alice
console.log(map.get(1));      // Output: Number Key
console.log(map.size);        // Output: 3

//Using a Hash Map (Object) to track occurrences.
 


function findDuplicates(arr) {
    let elementCount = {};
    let duplicates = [];

    arr.forEach(item => {
        elementCount[item] = (elementCount[item] || 0) + 1;
    });

    for (let key in elementCount) {
        if (elementCount[key] > 1) {
            duplicates.push(key);
        }
    }

    return duplicates;
}

// Example Usage:
let arr = ["apple", "banana", "orange", "apple", "grape", "banana", "mango"];
console.log(findDuplicates(arr)); // Output: ['apple', 'banana']


// //Write a program to remove duplicate elements from an array. Example:
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

let arr1 = [1, 2, 2, 3, 4, 4];
let uniqueArr = [];
let Objnum = {};

arr1.forEach(element => {
    Objnum[element] = (Objnum[element]||0)+1;
});

 

for (let key in Objnum) {
    uniqueArr.push(Number(key)); // Convert string keys back to numbers
}

console.log(uniqueArr); // Output: [1, 2, 3, 4]