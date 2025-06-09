[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../198.%20House%20Robber/statement.md)
[Solution](98.%20Validate%20Binary%20Search%20Tree/solution.js)


# 98. Validate Binary Search Tree

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/validate-binary-search-tree/)

---

## Description

Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

---

## Examples

### Example 1:

**Input:**

```plaintext
root = [2,1,3]
```

**Output:**

```plaintext
true
```

---

### Example 2:

**Input:**

```plaintext
root = [5,1,4,null,null,3,6]
```

**Output:**

```plaintext
false
```

**Explanation:** The value 3 in the right subtree of 5 is less than 5.

---

## Constraints

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-2^31 <= Node.val <= 2^31 - 1`

---

## Follow-up

Can you solve it using only constant space (i.e., O(1) space)?
