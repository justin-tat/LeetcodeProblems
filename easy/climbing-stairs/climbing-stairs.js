/**
 * @param {number} n
 * @return {number}
 */
//memoization
var climbStairs = function(n) {
  if (n <= 2) {
      return n;
  }
  arr = [1, 2];
  for(let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[arr.length - 1];
};