// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let counter = 0,
    small = [0];
  function inOrder(root) {
    if (root === null) return;
    inOrder(root.left);
    counter++;
    if (counter === k) {
      small[0] = root.val;
    }
    inOrder(root.right);
  }
  inOrder(root);
  return small[0];
};

//  root = [3,1,4,null,2], k = 1
// Output: 1
let root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);
console.log(kthSmallest(root, 1));
