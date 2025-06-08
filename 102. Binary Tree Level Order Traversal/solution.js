//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return null;
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      level.push(node.val);
    }
    res.push(level);
  }
  return res;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);
console.log(levelOrder(root));
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
