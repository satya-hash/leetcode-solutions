[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../733.%20Flood%20Fill/statement.md)
[Solution](../39.%20Combination%20Sum/solution.js)

[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../40.%20Combination%20Sum%20II/statement.md)

# 39. Combination Sum

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/combination-sum/)

---

## Description

Given an array of **distinct** integers `candidates` and a target integer `target`, return _a list of all unique combinations of_ `candidates` _where the chosen numbers sum to_ `target`. You may return the combinations in **any order**.

The **same** number may be chosen from `candidates` **an unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

---

## Examples

### Example 1:

**Input:**

```plaintext
candidates = [2,3,6,7], target = 7
```

**Output:**

```plaintext
[[2,2,3],[7]]
```

---

### Example 2:

**Input:**

```plaintext
candidates = [2,3,5], target = 8
```

**Output:**

```plaintext
[[2,2,2,2],[2,3,3],[3,5]]
```

---

### Example 3:

**Input:**

```plaintext
candidates = [2], target = 1
```

**Output:**

```plaintext
[]
```

---

## Constraints

- `1 <= candidates.length <= 30`
- `2 <= candidates[i] <= 40`
- All elements of `candidates` are **distinct**.
- `1 <= target <= 40`

---
