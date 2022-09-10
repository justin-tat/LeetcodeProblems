/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  numbers = [];
  stack = [root];
  stack = [{node: root, index: 0}];
  
  while(stack.length !== 0) {
      let curr = stack.shift();
      if (curr.node === null) continue;
      for(let i = 0; i < curr.node.children.length; i++) {
          stack.push({index: curr.index + 1, node: curr.node.children[i]});
      }
      if(numbers.length === curr.index) {
          numbers.push([curr.node.val]);
      } else {
          numbers[curr.index].push(curr.node.val);
      }
  }
  return numbers;
};