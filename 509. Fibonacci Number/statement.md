# 509. Fibonacci Number

**Difficulty:** Easy

**Link:** [LeetCode Problem](https://leetcode.com/problems/fibonacci-number/)

---

## Description

The Fibonacci numbers, commonly denoted `F(n)`, form a sequence called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is:

- `F(0) = 0`, `F(1) = 1`
- `F(n) = F(n - 1) + F(n - 2)`, for `n > 1`.

Given `n`, calculate `F(n)`.

---

## Examples

### Example 1:

**Input:**

```plaintext
n = 2
```

**Output:**

```plaintext
1
```

**Explanation:**
`F(2) = F(1) + F(0) = 1 + 0 = 1`.

---

### Example 2:

**Input:**

```plaintext
n = 3
```

**Output:**

```plaintext
2
```

**Explanation:**
`F(3) = F(2) + F(1) = 1 + 1 = 2`.

---

### Example 3:

**Input:**

```plaintext
n = 4
```

**Output:**

```plaintext
3
```

**Explanation:**
`F(4) = F(3) + F(2) = 2 + 1 = 3`.

---

## Constraints

- `0 <= n <= 30`
