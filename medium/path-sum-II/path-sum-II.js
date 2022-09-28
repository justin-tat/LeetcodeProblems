/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
  if(root === null) return [];
  let results = [];
  let arr = [];
  dfs(root, arr, 0, targetSum, results);
  return results;
};

var dfs = (node, arr, sum, targetSum, results) => {
  if(node.left === null && node.right === null) {
      if(sum + node.val === targetSum) {
          let newArr = arr.slice();
          newArr.push(node.val);
          results.push(newArr);
      }
      return;
  }
  let newArr = [...arr];
  newArr.push(node.val);
  sum += node.val;
  if(node.left !== null) dfs(node.left, newArr, sum, targetSum, results);
  if(node.right !== null) dfs(node.right, newArr, sum, targetSum, results);
} 