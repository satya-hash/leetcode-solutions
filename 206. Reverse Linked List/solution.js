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
 * @return {ListNode}
 */
var reverseList = function (head) {
  /**
   * @iterative
   */
  // if (head === null) return null;
  // let cur = head,
  //   prev = null;
  // while (cur !== null) {
  //   let next = cur.next;
  //   cur.next = prev;
  //   prev = cur;
  //   cur = next;
  // }
  // return prev;

  /**
   * @recursive
   */

  if (!head || !head.next) {
    return head;
  }
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
// display(head);
display(reverseList(head));
