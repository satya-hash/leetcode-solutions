//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function display(head) {
  if (head === null) return;
  while (head !== null) {
    console.log(head.val);
    head = head.next;
  }
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let tmp = new ListNode(-1);
  let dummy = tmp;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    dummy = dummy.next;
  }
  if (list1 !== null) dummy.next = list1;
  if (list2 !== null) dummy.next = list2;
  return tmp.next;
};
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);
// list1.next.next.next = new ListNode(6);
// list1.next.next.next.next = new ListNode(9);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);
// list2.next.next.next = new ListNode(8);
// list2.next.next.next.next = new ListNode(5);

display(mergeTwoLists(list1, list2));
