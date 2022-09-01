/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let total = 0;
  let result = nums[0];
  for(let i = 0; i < nums.length; i++) {
      total = Math.max(nums[i] + total, nums[i]);
      if (result < total) {
          result = total;
      }
  }
  return result;
};