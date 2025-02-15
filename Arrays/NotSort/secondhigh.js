let data2 = [10, 1, 18, 11, 19, 7, 20];

let highest = -Infinity, secondHighest = -Infinity;

for (let num of data2) {
    if (num > highest) {
        secondHighest = highest;
        highest = num;
    } else if (num > secondHighest && num !== highest) {
        secondHighest = num;
    }
}

console.log("Second Highest Number:", secondHighest);

// //Why is highest = -Infinity Initially?

// In JavaScript, -Infinity is the lowest possible number.
// We initialize highest as -Infinity so that any number in the array will be greater than it, 
// allowing the algorithm to work correctly.
// Why -Infinity Works Well?
// If we initialized highest = 0, it would fail for arrays with all negative numbers.
// -Infinity ensures ANY number will be greater than it.
// // Now, we iterate through each number in the array:

// 1️⃣ First element = 10

// 10 > -Infinity → ✅ Update highest = 10, secondHighest remains -Infinity.
// 2️⃣ Next element = 1

// 1 > 10 → ❌ (no update)
// 1 > -Infinity → ✅ Update secondHighest = 1
// 3️⃣ Next element = 18

// 18 > 10 → ✅ Update secondHighest = 10, Update highest = 18
// 4️⃣ Next element = 11

// 11 > 18 → ❌
// 11 > 10 → ✅ Update secondHighest = 11
// 5️⃣ Next element = 19

// 19 > 18 → ✅ Update secondHighest = 18, Update highest = 19
// 6️⃣ Next element = 7

// 7 > 19 → ❌
// 7 > 18 → ❌ (no update)
// 7️⃣ Next element = 20

// 20 > 19 → ✅ Update secondHighest = 19, Update highest = 20


