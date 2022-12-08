/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
      ListNode curr = new ListNode();
      int carry = 0;
      ListNode ret = curr;
      while(l1 != null && l2 != null) {
          if(l1.val + l2.val + carry < 10) {
              curr.next = new ListNode(l1.val + l2.val + carry);
              carry = 0;
          } else {
              int nextNum = (l1.val + l2.val + carry) % 10;
              curr.next = new ListNode(nextNum);
              carry = 1;
          }
          l1 = l1.next;
          l2 = l2.next;
          curr = curr.next;
      }
      while(l1 != null) {
          if(l1.val + carry < 10) {
              curr.next = new ListNode(l1.val + carry);
              carry = 0;
          } else {
              int nextNum = (l1.val + carry) % 10;
              curr.next = new ListNode(nextNum);
              carry = 1;
          }
          l1 = l1.next;
          curr = curr.next;
      }
      while(l2 != null) {
          if(l2.val + carry < 10) {
              curr.next = new ListNode(l2.val + carry);
              carry = 0;
          } else {
              int nextNum = (l2.val + carry) % 10;
              curr.next = new ListNode(nextNum);
              carry = 1;
          }
          l2 = l2.next;
          curr = curr.next;
      }
      if(carry == 1) {
          curr.next = new ListNode(1);
      }
      return ret.next;
      
  }
}