/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  // let stack = [];
  // let visited = [];
  let letters = {};
  let wordLetters = {};
  for(let row = 0; row < board.length; row++) {
      for(let column = 0; column < board[0].length; column++) {
          if(letters[ board[row][column] ] === undefined) {
              letters[board[row][column]] = 1;
          } else {
              letters[board[row][column]]++;
          }
      }
  }
  for(let i = 0; i < word.length; i++) {
      if(wordLetters[word[i]] === undefined) {
          wordLetters[word[i]] = 1;
      } else {
          wordLetters[word[i]]++;
      }
  }
  for(key in wordLetters) {
      if (letters[key] === undefined || wordLetters[key] > letters[key] ) {
          return false;
      }
  }
  for(let row = 0; row < board.length; row++) {
      for(let column = 0; column < board[0].length; column++) {
          //Found the first letter and start bfs
          if(board[row][column] === word[0]) {
              let obj = {};
              obj[ [row, column] ] = true;
              if (backtrack(row, column, board, word, board[row][column], obj)) return true;
          }
      }
  }
  return false;
};

var backtrack = (row, column, board, word, currString, obj) => {
  if(currString === word) return true;
  if(row + 1 < board.length && board[row + 1][column] === word[currString.length] && obj[ [row + 1, column] ] === undefined) {
      obj[ [row + 1, column] ] = true;
      if(backtrack(row + 1, column, board, word, currString + board[row + 1][column], obj)) {
          return true;
      }
      delete obj[ [row + 1, column] ]
  }
  if(row - 1 >= 0 && board[row - 1][column] === word[currString.length] && obj[ [row - 1, column] ] === undefined) {
      //let copy = {...obj};
      //copy[ [row - 1, column] ] = true;
      obj[ [row - 1, column] ] = true;
      if(backtrack(row - 1, column, board, word, currString + board[row - 1][column], obj)) {
          return true;
      }
      delete obj[ [row - 1, column] ];
  }
  if(column + 1 < board[0].length && board[row][column + 1] === word[currString.length] && obj[ [row, column + 1] ] === undefined) {
      obj[ [row, column + 1] ] = true;
      if(backtrack(row, column + 1, board, word, currString + board[row][column + 1], obj)) {
          return true;
      }
      delete obj[ [row, column + 1] ];
  }
  if(column - 1 >= 0 && board[row][column - 1] === word[currString.length] && obj[ [row, column - 1] ] === undefined) {
      obj[ [row, column - 1] ] = true;
      if(backtrack(row, column - 1, board, word, currString + board[row][column - 1], obj)) {
          return true;
      }
      delete obj[ [row, column - 1] ];
  }
}