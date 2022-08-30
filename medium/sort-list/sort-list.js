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
 var sortList = function(head) {
  if (head === null || head.next === null) return head;
  let nodes = [];
  let curr = head;
  while (curr !== null) {
      nodes.push(curr);
      curr = curr.next;
      //nodes[nodes.length - 1].next = null;
  }
  nodes = split(nodes);
  
  for(let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
  }
  nodes[nodes.length - 1].next = null;
  return nodes[0];
};

var split = (arr) => {
  if (arr.length === 1) {
      return arr;
  }
  let mid = arr.length / 2;
  return merge(split(arr.splice(0, mid)), split(arr));
}

var merge = (first, second) => {
  let all = [];
  let i = 0;
  let j = 0;
  while (i < first.length && j < second.length) {
      if (first[i].val < second[j].val) {
          all.push(first[i]);
          i++;
      } else {
          all.push(second[j]);
          j++;
      }
  }
  while (i < first.length) {
      all.push(first[i]);
      i++;
  }
  while (j < second.length) {
      all.push(second[j]);
      j++;
  }
  return all;
}
//mergeSort for linked lists
var mergeNode = (n1, n2) => {
  let head1 = n1;
  let head2 = n2;
  let currHead = new ListNode();
  let currTail = currHead;
  while(n1 !== null && n2 !== null) {
      if(n1.val > n2.val) {
          currTail.next = n1;
          n1 = n1.next;
          currTail = currTail.next;
      } else {
          currTail.next = n2;
          n1 = n1.next;
          currTail = currTail.next;
      }
  }
  while (n1 != null) {
      currTail.next = n1;
      currTail = currTail.next;
  }
  while (n2 !== null) {
      currTail.next = n2;
      currTail = currTail.next;
  }
  return currhead.next;
}