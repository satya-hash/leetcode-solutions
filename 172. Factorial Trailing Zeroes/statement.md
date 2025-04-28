# 172. Factorial Trailing Zeroes

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/factorial-trailing-zeroes/)

---

## Description

Given an integer `n`, return the number of trailing zeroes in `n!`.

Note that `n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1`.

---

## Examples

### Example 1:

**Input:**

```plaintext
n = 3
```

**Output:**

```plaintext
0
```

**Explanation:**
`3! = 6`, no trailing zero.

---

### Example 2:

**Input:**

```plaintext
n = 5
```

**Output:**

```plaintext
1
```

**Explanation:**
`5! = 120`, one trailing zero.

---

### Example 3:

**Input:**

```plaintext
n = 0
```

**Output:**

```plaintext
0
```

---

## Constraints

- `0 <= n <= 10^4`

---

## Follow-up

Could you write a solution that works in logarithmic time complexity?
