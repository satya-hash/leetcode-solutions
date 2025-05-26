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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head === null) return;
  let slow = head,
    fast = head;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  if (fast === null) return head.next;

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};
let n = 2;
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
display(removeNthFromEnd(head, n));
