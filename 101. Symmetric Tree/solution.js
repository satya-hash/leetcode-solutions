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
var isSymmetric = function (root) {
  if (root === null) return true;
  function isSame(p, q) {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    if (p.val !== q.val) return false;
    return isSame(p.left, q.right) && isSame(p.right, q.left);
  }
  return isSame(root.left, root.right);
};
// root = [1,2,2,3,4,4,3]

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));
// Output: true
function levelOrder(root) {
  let res = [];
  if (!root) {
    return res;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
    res.push(node.val);
  }
  return res;
}
