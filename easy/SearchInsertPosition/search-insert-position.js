/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let lower = 0;
    let higher = nums.length - 1;
    let mid = Math.floor((lower + higher) / 2);
    while(lower <= higher) {
        mid = Math.floor((lower + higher) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            higher = mid - 1;
        } else {
            lower = mid + 1;
        }
    }
    return lower;
    
};