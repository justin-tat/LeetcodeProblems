/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let curr = 0;
  let first = 0;
  while(first < nums.length) {
      while(first < nums.length && nums[curr] === nums[first]) {
          first++;
      }
      curr++;
      if(curr < nums.length && first < nums.length) {
          nums[curr] = nums[first];
      }
  }
  return curr;
};