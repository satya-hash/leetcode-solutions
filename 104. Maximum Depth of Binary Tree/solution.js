//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  function helper(root) {
    if (!root) return 0;
    let lh = helper(root.left);
    let rh = helper(root.right);
    return Math.max(lh, rh) + 1;
  }
  return helper(root);
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.left.left = new TreeNode();
root.left.right = new TreeNode();
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
function levelOrder(root) {
  if (root === null) return [];
  let queue = [],
    ans = [];
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.val === 0) ans.push(null);
      else ans.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
  console.log(ans);
}

levelOrder(root);
console.log(maxDepth(root));
//  root = [3,9,20,null,null,15,7]
// Output: 3
