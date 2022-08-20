/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
  let curr = head;
  let nodes = [];
  if (curr === null) {
      return null;
  } else if (k === 0 || head.next === null) {
      return head;
  }
  while (curr != null) {
      nodes.push(curr);
      curr = curr.next;
  }
  if (k % nodes.length === 0) {
      return head;
  }
  k = k % nodes.length;
  let index = nodes.length - k;
  for(let i = index; i < index + nodes.length; i++) {
      let currIndex = i % nodes.length;
      let nextIndex = (i + 1) % nodes.length;
      nodes[currIndex].next = nodes[nextIndex];
  }
  nodes[index - 1].next = null;
  return nodes[index];
};