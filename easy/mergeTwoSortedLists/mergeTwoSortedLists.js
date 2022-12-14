/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  head = new ListNode(0);
  curr = head;
  while (list1 !== null && list2 !== null) {
      curr.next = list1.val < list2.val ? list1 : list2;
      list1.val < list2.val ? list1 = list1.next : list2 = list2.next;
      curr = curr.next;
  }
  if (list1 === null) {
      curr.next = list2;
  } else if (list2 == null) {
      curr.next = list1;
  }
  return head.next;
};