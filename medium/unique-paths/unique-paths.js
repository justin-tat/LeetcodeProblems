/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  let arr = [];
  //Filling in arr where any cell represents the number of unique paths you can take from the source to reach that spot.
  for(let row = 0; row < m; row++) {
      let rowArr = [];
      for(let col = 0; col < n; col++) {
          rowArr.push(0);
      }
      arr.push(rowArr);
  }
  
  //There is only one way you can reach anything in the top row (since you cannot go up or right, only left or down)
  for(let col = 0; col < arr[0].length; col++) {
      arr[0][col] = 1;
  }
  //There is only one way you can reach anything in the leftmost column (since you cannot go up or right, only left or down)
  for(let row = 0; row < arr.length; row++) {
      arr[row][0] = 1;
  }
  
  //To compute every cell, just compute all the ways you could have gotten the cell before, by looking at the value in the cell above and the one to the left
  for(let row = 1; row < m; row++) {
      for(let col = 1; col < n; col++) {
          arr[row][col] = arr[row - 1][col] + arr[row][col - 1];
      }
  }
  return arr[m - 1][n - 1];
};