/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  let list = [];
  for(const row of matrix) {
      list = list.concat(row);
  }
  
  return bs(list, target, 0, list.length - 1);
  
  // let high = list.length - 1;
  // let low = 0;
  // while (low <= high) {
  //     let mid = Math.floor((low + high) / 2);
  //     if (list[mid] === target) {
  //         return true;
  //     } else if (list[mid] < target) {
  //         low = mid + 1;
  //     } else {
  //         high = mid - 1;
  //     }
  // }
  // return false;
};

var bs = (arr, target, low, high) => {
  if (low > high) {
      return false;
  }
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
      return true;
  } else if (arr[mid] < target) {
      return bs(arr, target, mid + 1, high);
  } else {
      return bs(arr, target, low, mid - 1);
  }
}