/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  var matrix = [];
  for(let i = 0; i < n; i++) {
      let row = [];
      for(let j = 0; j < n; j++) {
          row.push(0);
      }
      matrix.push(row);
  }
  recur(1, 0, n * n, matrix);
  return matrix;
  
};

var recur = (number, offset, n, matrix) => {
  //topRow
  for(let i = 0 + offset; i < matrix.length - offset; i++) {
      matrix[offset][i] = number;
      number++;
  }
  
  //right column
  for(let j = 1 + offset; j < matrix.length - offset; j++) {
      matrix[j][matrix.length - offset - 1] = number;
      number++;
  }
  //bottom row
  for(let k = matrix.length - 2 - offset; k > -1 + offset; k--) {
      matrix[matrix.length - 1 - offset][k] = number;
      number++;
  }
  //left column
  for(let l = matrix.length - 2 - offset; l > 0 + offset; l--) {
      matrix[l][offset] = number;
      number++;
  }
  if(number !== n + 1) {
      recur(number, offset + 1, n, matrix);
  }
}