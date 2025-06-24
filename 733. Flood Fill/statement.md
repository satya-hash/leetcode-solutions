[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../200.%20Number%20of%20Islands/statement.md)
[Solution](../733.%20Flood%20Fill/solution.js)

[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../46.%20Permutations/statement.md)

# 733. Flood Fill

**Difficulty:** Easy

**Link:** [LeetCode Problem](https://leetcode.com/problems/flood-fill/)

---

## Description

An image is represented by an `m x n` integer grid `image` where `image[i][j]` represents the pixel value of the image.

You are also given three integers `sr`, `sc`, and `color`. You should perform a flood fill on the image starting from the pixel `image[sr][sc]`.

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally (up, down, left, right) to the starting pixel of the same color as the starting pixel, and change their color to `color`.

Return the modified image after performing the flood fill.

---

## Examples

### Example 1:

**Input:**

```plaintext
image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
```

**Output:**

```plaintext
[[2,2,2],[2,2,0],[2,0,1]]
```

**Explanation:**
From the center pixel (1, 1) with color 1, all 1's connected 4-directionally are colored with 2.

---

### Example 2:

**Input:**

```plaintext
image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
```

**Output:**

```plaintext
[[0,0,0],[0,0,0]]
```

**Explanation:**
The starting pixel is already colored 0, so no changes are made.

---

## Constraints

- `m == image.length`
- `n == image[i].length`
- `1 <= m, n <= 50`
- `0 <= image[i][j], color < 2^16`
- `0 <= sr < m`
- `0 <= sc < n`

---

## Follow-up

Could you solve it both using DFS and BFS approaches?
