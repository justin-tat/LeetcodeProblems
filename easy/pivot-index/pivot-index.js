/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  let left = 0;
  let right = nums.reduce((firstVal, secondVal) => {
      return firstVal + secondVal
  }, 0) - nums[0];
  let pivot = 0;
  while(pivot < nums.length) {
      if(left === right) {
          return pivot;
      }
      left += nums[pivot];
      pivot++;
      right -= nums[pivot];
  }
  return -1;
};