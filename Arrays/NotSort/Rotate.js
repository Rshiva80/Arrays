function rotateInPlace(arr, steps) {
    let n = arr.length;
    steps = steps % n; // Handle cases where steps > array length

    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    reverse(0, n - 1);        // Reverse the entire array
    reverse(0, steps - 1);    // Reverse the first 'steps' elements
    reverse(steps, n - 1);    // Reverse the remaining elements
}

// Example usage
let arr2 = [1, 2, 3, 4, 5];
rotateInPlace(arr2, 2);
console.log(arr2); // Output: [4, 5, 1, 2, 3]
