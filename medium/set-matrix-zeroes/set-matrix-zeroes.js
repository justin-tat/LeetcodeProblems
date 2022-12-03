/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
          if(Number.isInteger(matrix[i][j]) && matrix[i][j] === 0) {
              for(let row = 0; row < matrix.length; row++) {
                  if(matrix[row][j] !== 0) {
                      matrix[row][j] = "a";
                  }
              }
              for(let col = 0; col < matrix[i].length; col++) {
                  if(matrix[i][col] !== 0) {
                      matrix[i][col] = "a";
                  }
              }
          }
      }
  }
  for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
          if(!Number.isInteger(matrix[i][j])) {
              matrix[i][j] = 0;
          }
      }
  }
  
  //Alternative method would be to create a record of each 0 found during initial pass through, then iterate through records, setting all elements in row/column of record to 0.
};