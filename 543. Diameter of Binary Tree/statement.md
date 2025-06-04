# 543. Diameter of Binary Tree

**Difficulty:** Easy

**Link:** [LeetCode Problem](https://leetcode.com/problems/diameter-of-binary-tree/)

---

## Description

Given the `root` of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

---

## Examples

### Example 1:

**Input:**

```plaintext
root = [1,2,3,4,5]
```

**Output:**

```plaintext
3
```

**Explanation:** The longest path is [4,2,1,3] or [5,2,1,3], and its length is 3.

---

### Example 2:

**Input:**

```plaintext
root = [1,2]
```

**Output:**

```plaintext
1
```

---

## Constraints

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-100 <= Node.val <= 100`

---

## Follow-up

Can you find the diameter of the tree efficiently using depth-first search?
