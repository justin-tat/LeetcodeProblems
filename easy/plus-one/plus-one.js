/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  return rec(digits, digits.length - 1, 1);
};

var rec = (arr, index, offset) => {
  if(index === -1) {
      return arr;
  } else {
      if(arr[index] + offset === 10) {
          arr[index] = 0;
          if (index === 0) arr.unshift(1);
          offset = 1;
      } else {
          arr[index] = arr[index] + offset;
          offset = 0;
      }
      return rec(arr, index - 1, offset);
  }
}