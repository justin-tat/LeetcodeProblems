/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  //Edge case for empty linked list
  if (head == null) {
      return null;
  }
  let arr = [];
  //iterate through linked list and add them to an array
  while (head != null) {
      arr.push(head);
      head = head.next;
  }
  //Swap array indices to reorder linked list
  for (let i = 0; i < arr.length - 1; i+=2) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
  }
  //Connect indices in order
  for (let i = 0; i < arr.length; i++) {
      arr[i].next = arr.length - 1 >= i + 1 ? arr[i + 1] : null;
  }
  return arr[0];
};