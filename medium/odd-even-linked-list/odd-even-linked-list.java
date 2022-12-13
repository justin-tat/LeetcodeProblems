package medium.odd-even-linked-list;

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
  public ListNode oddEvenList(ListNode head) {
      if(head == null || head.next == null) {
          return head;
      }
      ListNode evens = new ListNode();
      ListNode evensHead = evens;
      ListNode ret = head;
      while(head.next != null && head.next.next != null) {
          evens.next = head.next;
          evens = evens.next;
          head.next = head.next.next;
          head = head.next;

      }
      //Odd vs. even number of nodes
      if(head.next == null) {
          evens.next = null;
          head.next = evensHead.next;
      } else if(head.next.next == null) {
          evens.next = head.next;
          evens.next.next = null;
          head.next = evensHead.next;
      }
      
      return ret;
  }
}
