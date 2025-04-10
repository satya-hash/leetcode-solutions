# 108. Convert Sorted Array to Binary Search Tree

**Difficulty:** Easy <br>
**Topics:** Binary Search Tree, Recursion, Divide and Conquer

## Problem Statement

Given an integer array `nums` where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary search tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

---

## Example 1:

**Input:**

```plaintext
nums = [-10,-3,0,5,9]
```

**Output: the output is in level order traversal**

```plaintext
[0,-3,9,-10,null,5]
```

**Explanation:**
The resulting BST can have multiple valid representations. One valid BST is:

```
        0
       / \
     -3   9
     /   /
   -10   5
```

Another valid BST representation:

```
        0
       / \
    -10   5
       \    \
       -3    9
```

Both are height-balanced BSTs.

---

## Example 2:

**Input:**

```plaintext
nums = [1,3]
```

**Output:**

```plaintext
[3,1]
```

**Explanation:**
Both `[1,null,3]` and `[3,1]` are valid height-balanced BSTs.

```
    3
   /
  1
```

OR

```
    1
     \
      3
```

---

## Constraints:

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in a strictly increasing order.
