//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function helper(root, min, max) {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max))
      return false;
    return (
      helper(root.left, min, root.val) && helper(root.right, root.val, max)
    );
  }

  return helper(root, null, null);
};

let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
// root.left.left = new TreeNode(1);
// root.right.left = new TreeNode(6);
// root.left.right = new TreeNode(3);
// root.right.right = new TreeNode(9);

console.log(isValidBST(root));
// Input: root = [2,1,3]
// Output: true
