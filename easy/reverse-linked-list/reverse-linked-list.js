/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
  if (head === null) {
      return null;
  }
  let stack = [];
  while(head !== null) {
      stack.unshift(head);
      head = head.next;
  }
  stack[stack.length - 1].next = null;
  for(let i = 0; i < stack.length - 1; i++) {
      stack[i].next = stack[i + 1];
  }
  return stack[0];
};