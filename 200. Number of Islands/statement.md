[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../547.%20Number%20of%20Provinces/statement.md)
[Solution](../200.%20Number%20of%20Islands/solution.js)

[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../733.%20Flood%20Fill/statement.md)

# 200. Number of Islands

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-islands/)

---

## Description

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

---

## Examples

### Example 1:

**Input:**

```plaintext
grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
```

**Output:**

```plaintext
1
```

**Explanation:**
There is only one island in the given grid.

---

### Example 2:

**Input:**

```plaintext
grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]
```

**Output:**

```plaintext
3
```

**Explanation:**
There are three separate islands in the grid.

---

## Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j]` is `'0'` or `'1'`.

---

## Follow-up

Can you solve it using both DFS and BFS approaches?
