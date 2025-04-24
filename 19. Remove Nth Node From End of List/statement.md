# 19. Remove Nth Node From End of List

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

---

## Description

Given the head of a linked list, remove the nth node from the end of the list and return its head.

---

## Examples

### Example 1:

**Input:**

```plaintext
head = [1,2,3,4,5], n = 2
```

**Output:**

```plaintext
[1,2,3,5]
```

### Example 2:

**Input:**

```plaintext
head = [1], n = 1
```

**Output:**

```plaintext
[]
```

### Example 3:

**Input:**

```plaintext
head = [1,2], n = 1
```

**Output:**

```plaintext
[1]
```

---

## Constraints

- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

---

## Follow-up

Could you do this in one pass?

---

## Topics

- Linked List
- Two Pointers

---

## Companies

- Amazon
- Microsoft
- Google

---

## Hint

Use two pointers to find the nth node from the end in one pass.
