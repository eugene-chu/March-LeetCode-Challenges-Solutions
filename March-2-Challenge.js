/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * I: a number array with a set of numbers where 1 to n, and one of the number is duplicated.
 * O: a number array where we find the duplicate number and the number it replaced it with.
 * C: 2 <= nums.length <= 10^4; 1 <= nums[i] <= 10^4. Can guarantee all values inside the array is positive, and will contain more than 2 numbers.
 * E: nums = [1,2,2,4] return: [2, 3]; nums = [1, 1], return: [1, 2]; nums = [3, 2, 3, 4], return: [3, 1]; nums = [1, 2, 3, 1], return: [1, 4]
 */
var findErrorNums = function(nums) {
  let set = new Set();
  let result = [];

  for(let i = 0; i < nums.length; i++){
    if(set.has(nums[i])){
      result.unshift(nums[i]);
    }
    if(!nums.includes(i+1)){
      result.push(i+1);
    }
    if(result.length === 2){
      return result;
    }
    set.add(nums[i]);
  }
};

console.log(findErrorNums([1,2,2,4])); // > [2,3]
console.log(findErrorNums([1,1])); // > [1,2]
console.log(findErrorNums([3,2,3,4])); // > [3,1]
console.log(findErrorNums([1,2,3,1])); // > [1,4]
console.log(findErrorNums([3,2,2])); // > [2,1]

// optimal/most common code:
/**
 var findErrorNums = function(nums) {
    let left;

    nums.unshift(0);
    
    for(let i=1;i<nums.length;i++){
        let idx=Math.abs(nums[i])

        if(nums[idx]<0) left=idx;
        else nums[idx]*=-1;
    }

    return [left,nums.findIndex(n => n>0)];
  };
 */

 // What I was actually trying to do:
 /**
  var findErrorNums = function(nums) {
    const set = new Set();
    let duplicate;
    let missing;

    for (let num of nums) {
      if (set.has(num)) {
        // Duplicate if the number is in the set
        duplicate = num;
      }
      // Add the number to the set
      set.add(num);
    }

    for (let i = 1; i <= nums.length; i++) {
      // Missing if the number is not in the set
      if (!set.has(i)) {
        missing = i;
        break;
      }
    }

    return [duplicate, missing];
  };
  */