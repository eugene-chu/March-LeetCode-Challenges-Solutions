/**
 * @param {number[]} nums
 * @return {number}
 * 
 * I: array of num, ranging from [0, n], with 1 missing num. All num are unique.
 * O: return the missing unique num
 * C: O(1) space complexity and O(n) time complexity. n === num.length. n is 1 and greater. values in the array will always be 0 to n.
 * E: num = [3, 0, 1], returns 2; num = [0, 1], returns 2; num = [9,6,4,2,3,5,7,0,1], returns 8; num = [0], returns 1
 */
var missingNumber = function(nums) {
    // declare counter variable. And convert nums array to a Set
    let numsSet = new Set(nums);
    let i = 0;
    // loop, looping over the nums array
    while(i < nums.length){
      // check numSet.has for the counter variable.
      if(!numsSet.has(i)){
        // if counter variable is missing, return there
        return i; 
      }
      i++;
    }
    // if for loop ends, return the counter variable
    return i;
};

console.log(missingNumber([3, 0, 1])); // > 2 
console.log(missingNumber([0])); // > 1
console.log(missingNumber([0, 1])); // > 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // > 8
console.log(missingNumber([1, 2, 3])); // > 0