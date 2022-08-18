/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  arr = [];
  var swap = (array, first, second) => {
      let temp = array[first];
      array[first] = array[second];
      array[second] = temp;
  }
  var generate = (n, array) => {
      if (n === 1) {
          arr.push(array.slice());
          return;
      }
      
      generate(n - 1, array);
      
      for(let i = 0; i < n - 1; i++) {
          if (n % 2 === 0) {
              swap(array, i, n - 1)
              //array[i], array[n - 1] = array[n - 1], array[i];
          } else {
              swap(array, 0, n - 1)
              //array[0], array[n - 1] = array[n - 1], array[0];
          }
          generate(n - 1, array);
      }
  }
  generate(nums.length, nums.slice());
  return arr;
};