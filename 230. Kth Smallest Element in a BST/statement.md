[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../322.%20Coin%20Change/statement.md)
[Solution](../230.%20Kth%20Smallest%20Element%20in%20a%20BST/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../494.%20Target%20Sum/statement.md)

# 230. Kth Smallest Element in a BST

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

---

## Description

Given the `root` of a binary search tree, and an integer `k`, return the `k`th smallest value (1-indexed) of all the values of the nodes in the tree.

---

## Examples

### Example 1:

**Input:**

```plaintext
root = [3,1,4,null,2], k = 1
```

**Output:**

```plaintext
1
```

**Explanation:**
The in-order traversal of the BST is [1,2,3,4]. The 1st smallest element is 1.

---

### Example 2:

**Input:**

```plaintext
root = [5,3,6,2,4,null,null,1], k = 3
```

**Output:**

```plaintext
3
```

**Explanation:**
The in-order traversal of the BST is [1,2,3,4,5,6]. The 3rd smallest element is 3.

---

## Constraints

- The number of nodes in the tree is `n`.
- `1 <= k <= n <= 10^4`
- `0 <= Node.val <= 10^4`

---

## Follow-up

If the BST is modified often (insert/delete operations) and you need to find the kth smallest frequently, how would you optimize?
