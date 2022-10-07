/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
  if (root === null) return [];
  let result = [];
  traverse(root, result);
  return result;
};

var traverse = function(node, arr) {
  arr.push(node.val);
  if(node.children.length === 0) return;
  for(let i = 0; i < node.children.length; i++) {
      traverse(node.children[i], arr);
  }
}