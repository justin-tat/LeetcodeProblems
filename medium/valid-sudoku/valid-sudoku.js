/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  //validate rows
  for(let row = 0; row < board.length; row++) {
      var seen = {};
      for(let col = 0; col < board.length; col++) {
          if(board[row][col] === "." || seen[board[row][col]] === undefined) seen[board[row][col]] = true;
          else return false;
      }
  }
  
  //validate columns
  for(let col = 0; col < board.length; col++) {
      var seen = {};
      for(let row = 0; row < board.length; row++) {
          if(board[row][col] === "." || seen[board[row][col]] === undefined) {
              seen[board[row][col]] = true;
          }
          else {
              return false;
          }
      }
  }
  
  for(let row = 0; row < board.length; row += 3) {
      for(let col = 0; col < board.length; col += 3) {
          let seen = {};
          for(let currRow = row; currRow < row + 3; currRow++) {
              for(let currCol = col; currCol < col + 3; currCol++) {
                  if(board[currRow][currCol] === "." || seen[board[currRow][currCol]] === undefined) seen[board[currRow][currCol]] = true;
                  else return false;
                  
              }
          }
      }
  }
  
  return true;
};