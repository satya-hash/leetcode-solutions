# 143. Reorder List

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/reorder-list/)

---

## Description

You are given the head of a singly linked list. The list can be represented as:

`L0 → L1 → … → Ln - 1 → Ln`

Reorder the list to be in the following form:

`L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …`

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

---

## Examples

### Example 1:

**Input:**

```plaintext
head = [1,2,3,4]
```

**Output:**

```plaintext
[1,4,2,3]
```

### Example 2:

**Input:**

```plaintext
head = [1,2,3,4,5]
```

**Output:**

```plaintext
[1,5,2,4,3]
```

---

## Constraints

- The number of nodes in the list is in the range `[1, 5 * 10^4]`.
- `1 <= Node.val <= 1000`.

---
