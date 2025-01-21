let data = [3, 1, 16, 15, 20, 30, 5, 100, 99];

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: An array of 1 or fewer elements is already sorted.
    }

    let mid = Math.floor(arr.length / 2); // Find the middle index.
    let left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half.
    let right = mergeSort(arr.slice(mid));  // Recursively sort the right half.

    return merge(left, right); // Merge the two sorted halves.
}

function merge(left, right) {
    let sortedArr = []; // Array to store the sorted elements.

    while (left.length && right.length) {
        // Compare the first elements of both arrays and push the smaller one.
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    // Add any remaining elements from both arrays.
    return [...sortedArr, ...left, ...right];
}

console.log(mergeSort(data)); // Output: [1, 3, 5, 15, 16, 20, 30, 99, 100]
