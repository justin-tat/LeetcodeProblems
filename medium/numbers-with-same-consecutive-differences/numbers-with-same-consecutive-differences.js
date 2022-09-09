/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
 var numsSameConsecDiff = function(n, k) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let strings = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let result = [];
  for(let i = 1; i < arr.length; i++) {
      recur(n, k, result, arr, strings, strings[i]);
  }
  return result;
};

var recur = (n, k, result, arr, strings, currString) => {
  if(currString.length === n) {
      result.push(currString);
      return;
  }
  for(let i = 0; i < arr.length; i++) {
      let lastNum = parseInt(currString[currString.length - 1]);
      if (Math.max(arr[i], lastNum) - Math.min(arr[i], lastNum) === k) {
          recur(n, k, result, arr, strings, currString + strings[i])
      }
  }
}