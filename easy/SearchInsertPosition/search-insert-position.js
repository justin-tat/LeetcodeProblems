/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let lower = 0;
  let higher = nums.length - 1;
  while(lower <= higher) {
      let mid = Math.floor((lower + higher) / 2);
      let middle = nums[mid];
      if (middle === target) {
          return mid;
      } else if (middle > target) {
          higher = mid - 1;
      } else {
          lower = mid + 1;
      }
  }
  return lower;
  
};