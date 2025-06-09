[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../62.%20Unique%20Paths/statement.md)
[Solution](143.%20Reorder%20List/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../19.%20Remove%20Nth%20Node%20From%20End%20of%20List/statement.md)

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
