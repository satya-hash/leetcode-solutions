[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../367.%20Valid%20Perfect%20Square/statement.md)
[Solution](74.%20Search%20a%202D%20Matrix/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../33.%20Search%20in%20Rotated%20Sorted%20Array/statement.md)

# 74. Search a 2D Matrix

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/search-a-2d-matrix/)

---

## Description

Write an efficient algorithm that searches for a value in an `m x n` matrix. This matrix has the following properties:

1. Integers in each row are sorted from left to right.
2. The first integer of each row is greater than the last integer of the previous row.

---

## Examples

### Example 1:

**Input:**

```plaintext
matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
]
target = 3
```

**Output:**

```plaintext
true
```

---

### Example 2:

**Input:**

```plaintext
matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
]
target = 13
```

**Output:**

```plaintext
false
```

---

## Constraints

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-10^4 <= matrix[i][j], target <= 10^4`

---

## Follow-up

Could you devise a solution using only `O(log(m * n))` time complexity?
