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
  public List<Integer> inorderTraversal(TreeNode root) {
      List<Integer> nums = new ArrayList<>();
      inorder(root, nums);
      return nums;
  }
  
  public void inorder(TreeNode node, List<Integer> nums) {
      if(node == null) {
          return;
      }
      inorder(node.left, nums);
      nums.add(node.val);
      inorder(node.right, nums);
  }
}