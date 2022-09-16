/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  //The only way to reach anything in the top row or the leftmost column is by going from the left or straight down
  for(let row = 1; row < grid.length; row++) {
      //Sets all the leftmost column to the only value it may be
      grid[row][0] = grid[row - 1][0] + grid[row][0];
  }
  for(let col = 1; col < grid[0].length; col++) {
      grid[0][col] = grid[0][col - 1] + grid[0][col];
  }
  
  //Cycle through the array and set the lowest possible number available
  for(let row = 1; row < grid.length; row++) {
      for (let col = 1; col < grid[row].length; col++) {
          let min = Math.min(grid[row - 1][col], grid[row][col - 1]);
          grid[row][col] = grid[row][col] + min;
      }
  }
  return grid[grid.length - 1][grid[0].length - 1];
  
};