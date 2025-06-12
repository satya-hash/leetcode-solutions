// * Definition for a binary tree node.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function helper(root) {
    if (!root) return 0;
    let lh = helper(root.left);
    let rh = helper(root.right);
    if (lh === -1) return -1;
    if (rh === -1) return -1;
    if (Math.abs(lh - rh) > 1) return -1;
    return Math.max(lh, rh) + 1;
  }
  return helper(root) === -1 ? false : true;
};
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.left.left = new TreeNode();
root.left.right = new TreeNode();
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(isBalanced(root));
// true
