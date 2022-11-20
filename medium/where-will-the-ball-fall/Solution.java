package medium.where-will-the-ball-fall;

class Solution {
  public int[] findBall(int[][] grid) {
      int[] answer = new int[grid[0].length];
      for(int col = 0; col < grid[0].length; col++) {
          int row = 0;
          int currCol = col;
          while(row <= grid.length - 1) {
              int direction = -1;
              int end = 0;
              if(grid[row][currCol] == 1) {
                  direction = 1;
                  end = grid[0].length - 1;
              }
              if(currCol == end || grid[row][currCol + direction] != grid[row][currCol] ) {
                  currCol = -1;
                  break;
              }
              else if(grid[row][currCol] == 1) {
                  currCol++;
              } else if(grid[row][currCol] == -1) {
                  currCol--;
              }
              row++;
          }
          answer[col] = currCol;
      }
      return answer;
  }
}
