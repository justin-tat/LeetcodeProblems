/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let hash = {};
    let sums = [];
    for(let i = 0; i < nums.length - 1; i++) {
        let end = nums.length - 1;
        let start = i + 1;
        while(start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if(sum < 0) {
                start++;
            } else if (sum > 0) {
                end--;
            } else {
                let a = nums[i];
                let b = nums[start] ;
                let c = nums[end];
                if(hash[  [a, b, c] ] !== 1) {
                    sums.push([ nums[i], nums[start], nums[end] ]);
                    hash[ [a, b, c] ] = 1;
                }
                start++;
            }
        }
    }
    return sums;
};