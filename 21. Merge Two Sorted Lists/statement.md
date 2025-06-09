[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../876.%20Middle%20of%20the%20Linked%20List/statement.md)
[Solution](21.%20Merge%20Two%20Sorted%20Lists/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../206.%20Reverse%20Linked%20List/statement.md)

# 21. Merge Two Sorted Lists

**Difficulty:** Easy

**Link:** [LeetCode Problem](https://leetcode.com/problems/merge-two-sorted-lists/)

---

## Description

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

---

## Examples

### Example 1:

**Input:**

```plaintext
list1 = [1,2,4], list2 = [1,3,4]
```

**Output:**

```plaintext
[1,1,2,3,4,4]
```

### Example 2:

**Input:**

```plaintext
list1 = [], list2 = []
```

**Output:**

```plaintext
[]
```

### Example 3:

**Input:**

```plaintext
list1 = [], list2 = [0]
```

**Output:**

```plaintext
[0]
```

---

## Constraints

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`.
- Both `list1` and `list2` are sorted in non-decreasing order.
