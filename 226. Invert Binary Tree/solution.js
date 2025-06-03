//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return null;
  let tmp = root.right;
  root.right = root.left;
  root.left = tmp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9);
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
      ans.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
  console.log(ans);
}

levelOrder(root);
invertTree(root);
levelOrder(root);
// let root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
