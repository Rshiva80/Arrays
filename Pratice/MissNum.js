let nums = [5, 6, 8, 9];

function missingNum(nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  // XOR for the range of numbers
  let rangeXOR = 0;
  for (let i = min; i <= max; i++) {
    rangeXOR ^= i;
  }

  // XOR for the given numbers
  let arrXOR = 0;
  for (let num of nums) {
    arrXOR ^= num;
  }

  // The missing number is the XOR difference
  return rangeXOR ^ arrXOR;
}

console.log(missingNum(nums)); // Output: 7

 // https://www.youtube.com/watch?v=3y25EaWckO4&ab_channel=EngineeringDigest