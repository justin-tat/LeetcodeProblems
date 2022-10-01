/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
  let arr = [nums[0]];
  for(let i = 1; i < nums.length; i++) {
      arr.push(arr[arr.length - 1] + nums[i]);
  }
  return arr;
};