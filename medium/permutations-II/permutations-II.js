var permuteUnique = function(nums) {
  let unique = {};
  var swap = (arr, i1, i2) => {
      let temp = arr[i1];
      arr[i1] = arr[i2];
      arr[i2] = temp;
  }
  var generate = (n, array) => {
      if (n === 1) {
          unique[array] = array.slice();
          return;
      }
      generate(n - 1, array);
      for(let i = 0; i < n - 1; i++) {
          if(n % 2 === 0) {
              swap(array, i, n - 1);
          } else {
              swap(array, 0, n - 1);
          }
          generate(n - 1, array);
      }
  }
  generate(nums.length, nums.slice());
  return Object.values(unique);
};