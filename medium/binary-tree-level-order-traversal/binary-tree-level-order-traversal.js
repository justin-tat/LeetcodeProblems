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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if(root === null) return [];
  let result = [];
  let stack = [[root, 0]];
  while(stack.length !== 0) {
      let curr = stack.shift();
      if(result.length === curr[1] ) {
          result.push([]);
      }
      result[curr[1]].push(curr[0].val);
      if(curr[0].left !== null) stack.push([curr[0].left, curr[1] + 1]);
      if(curr[0].right !== null) stack.push([curr[0].right, curr[1] + 1]);
  }
  return result;
};