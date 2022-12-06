package easy.symmetric-tree;

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
    
  public boolean isSymmetric(TreeNode root) {
      Queue<TreeNode> queue = new LinkedList<>();
      ArrayList<Integer> left = new ArrayList<>();
      ArrayList<Integer> right = new ArrayList<>();
      if(root.left != null) {
          queue.add(root.left);
          left.add(root.left.val);
      }
      while(queue.peek() != null) {
          TreeNode curr = queue.poll();
          
          if(curr.left != null) {
              queue.add(curr.left);
              left.add(curr.left.val);
          } else {
              left.add(null);
          }
          if(curr.right != null) {
              queue.add(curr.right);
              left.add(curr.right.val);
          } else {
              left.add(null);
          }
      }
      
      //Create right, then iterate through both simultaneously from opposite sides
      
      if(root.right != null) {
          queue.add(root.right);
          right.add(root.right.val);
      }
      while(queue.peek() != null) {
          TreeNode curr = queue.poll();
          
          if(curr.right != null) {
              queue.add(curr.right);
              right.add(curr.right.val);
          } else {
              right.add(null);
          }
          if(curr.left != null) {
              queue.add(curr.left);
              right.add(curr.left.val);
          } else {
              right.add(null);
          }
          
      }
      if(left.size() != right.size()) return false;
      for(int i = 0; i < left.size(); i++) {
          if(left.get(i) != right.get(i)) return false;
      }
      return true;
  }
  
  
}
