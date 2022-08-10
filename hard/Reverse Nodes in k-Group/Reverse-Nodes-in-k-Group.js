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
 var reverseKGroup = function(head, k) {
  /*
  Outputs: head of LL
  Inputs: head of linked list with size less than k where k is the interval to swap nodes
  Constraints: k is less than or equal to 
  */
  separatedNodes = [];
  while(head != null) {
      let currentSet = [];
      for(let i = 0; i < k && head != null; i++) {
          currentSet.push(head);
          head = head.next;
      }
      separatedNodes.push(currentSet)
  }
  let totalHead = new ListNode();
  let totalTraverser = totalHead;
  for(let i = 0; i < separatedNodes.length; i++) {
      if (separatedNodes[i].length === k) {
          for(let j = separatedNodes[i].length - 1; j >= 0; j--) {
              totalTraverser.next = separatedNodes[i][j];
              totalTraverser = totalTraverser.next;
          }
      } else {
          for(let j = 0; j < separatedNodes[i].length; j++) {
              totalTraverser.next = separatedNodes[i][j];
              totalTraverser = totalTraverser.next;
          }
      }
      totalTraverser.next = null;
  }
  totalHead = totalHead.next;
  return totalHead;
};