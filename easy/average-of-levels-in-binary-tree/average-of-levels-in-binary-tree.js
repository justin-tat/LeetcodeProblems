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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
  let averages = [];
  let totals = [];
  recur(root, totals, 0);
  for(let i = 0; i < totals.length; i++) {
      let obj = totals[i];
      averages.push(obj.value / obj.count);
  }
  return averages;
};

var recur = (node, arr, level) => {
  if(node === null) {
      return;
  }
  if(arr.length === level) {
      arr.push({
          value: 0,
          count: 0
      });
  }
  arr[level].value += node.val;
  arr[level].count += 1;
  recur(node.left, arr, level + 1);
  recur(node.right, arr, level + 1);
}

//Completed in 4:42