/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  let arr = [];
  if (obstacleGrid[0][0] === 1 || obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1) return 0;
  for(let i = 0; i < obstacleGrid.length; i++) {
      let currRow = [];
      for(let j = 0; j < obstacleGrid[0].length; j++) {
          currRow.push(0);
      }
      arr.push(currRow);
  }
  
  //Fills in the leftmost column, but leaving places with obstacles unchanged. If there is an obstacle in any of the top row or column, then there is no way to reach subsequent cells in that top row or top column
  let blocked = false;
  for(let row = 0; row < arr.length; row++) {
      if(obstacleGrid[row][0] === 1) blocked = true;
      if(!blocked) {
          arr[row][0] = 1;
      }
  }
  blocked = false;
  for(let col = 0; col < arr[0].length; col++) {
      if(obstacleGrid[0][col] === 1) blocked = true;
      if(!blocked) arr[0][col] = 1;
  }
  for(let row = 1; row < arr.length; row++) {
      for(let col = 1; col < arr[0].length; col++) {
          if(obstacleGrid[row][col] !== 1) {
              arr[row][col] = arr[row - 1][col] + arr[row][col - 1];
          }
      }
  }
  return arr[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};