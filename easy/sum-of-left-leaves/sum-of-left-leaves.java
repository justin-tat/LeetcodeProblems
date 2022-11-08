package easy.sum-of-left-leaves;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  public int sumOfLeftLeaves(TreeNode root) {
      Queue<TreeNode> nodes = new LinkedList<>();
      nodes.add(root);
      int sum = 0;
      while(nodes.size() != 0) {
          TreeNode node = nodes.poll();
          if(node.left != null) {
              nodes.add(node.left);
              //System.out.println(node.left.val);
              if(node.left.left == null && node.left.right == null) sum += node.left.val;
          }
          
          if(node.right != null) nodes.add(node.right);
      }
      return sum;
  }
  
}
