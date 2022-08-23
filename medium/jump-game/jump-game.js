/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  let current = 0;
  let maxReach = nums[0];
  while(current < nums.length && current <= maxReach) {
      maxReach = Math.max(current + nums[current], maxReach);
      current++;
  }
  if (current === nums.length) {
      return true;
  }
  return false;
};