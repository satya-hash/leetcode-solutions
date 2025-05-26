//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function display(head) {
  if (head === null) return;
  while (head !== null) {
    console.log(head.val);
    head = head.next;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next;
console.log(hasCycle(head));
