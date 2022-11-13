/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  let first = 0;
  let last = numbers.length - 1;
  let total = numbers[first] + numbers[last];
  while(total !== target) {
      if(total > target) {
          total = total - numbers[last] + numbers[last - 1];
          last--;
          
      } else {
          total = total - numbers[first] + numbers[first + 1];
          first++;
      }
  }
  return [first + 1, last + 1];
};