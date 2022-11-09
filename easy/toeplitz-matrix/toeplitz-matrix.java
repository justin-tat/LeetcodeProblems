class Solution {
  public boolean isToeplitzMatrix(int[][] matrix) {
      //Move up the rows
      for(int row = matrix.length - 1; row >= 0; row--) {
          int currRow = row;
          int col = 0;
          while(currRow + 1 < matrix.length && col + 1 < matrix[0].length) {
              if(matrix[currRow][col] != matrix[currRow + 1][col + 1]) {
                  return false;
              }
              currRow++;
              col++;
              
          }
      }
      //Move across the columns
      for(int col = 0; col < matrix[0].length; col++) {
          int currCol = col;
          int row = 0;
          while(currCol + 1 < matrix[0].length && row + 1 < matrix.length) {
              if(matrix[row][currCol] != matrix[row + 1][currCol + 1]) {
                  return false;
              }
              row++;
              currCol++;
          }
      }
      return true;
      
  }
}