/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  let n = nums.length;
  let offset = k % n;
  var arr = [];
  for(let i = 0; i < n; i++) {
      arr.push(nums[(n - offset + i) % n]);
  }
  for(let i = 0; i < n; i++) {
      nums[i] = arr[i];
  }
};