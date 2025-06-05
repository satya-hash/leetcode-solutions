# 102. Binary Tree Level Order Traversal

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/binary-tree-level-order-traversal/)

---

## Description

Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

---

## Examples

### Example 1:

**Input:**

```plaintext
root = [3,9,20,null,null,15,7]
```

**Output:**

```plaintext
[[3],[9,20],[15,7]]
```

---

### Example 2:

**Input:**

```plaintext
root = [1]
```

**Output:**

```plaintext
[[1]]
```

---

### Example 3:

**Input:**

```plaintext
root = []
```

**Output:**

```plaintext
[]
```

---

## Constraints

- The number of nodes in the tree is in the range `[0, 2000]`.
- `-1000 <= Node.val <= 1000`

---

## Follow-up

Try to solve the problem both iteratively (using a queue) and recursively.
