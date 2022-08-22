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
 * @return {boolean}
 */
 var isValidBST = function(root) {
  let arr = [];
  dfs(root, arr);
  let sortedArr = arr.slice().sort((a, b) => a - b);
  for(let i = 1; i < arr.length; i++) {
      if (arr[i] !== sortedArr[i] || arr[i] <= arr[i - 1]) return false;
  }
  return true;
};

var dfs = (root, arr) => {
  if (root === null) {
      return;
  }
  dfs(root.left, arr)
  arr.push(root.val);
  dfs(root.right, arr);
}