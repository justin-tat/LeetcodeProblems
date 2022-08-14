/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let nodeArr = [];
  let temp = head;
  while (temp != null) {
      nodeArr.push(temp);
      temp = temp.next;
  }
  let precursorIndex = nodeArr.length - n - 1;
  if (precursorIndex < 0) {
      return nodeArr[precursorIndex + 1].next;
  }
  nodeArr[precursorIndex].next = nodeArr[precursorIndex + 1].next;
  return head;
};