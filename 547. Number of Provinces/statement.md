[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../973.%20K%20Closest%20Points%20to%20Origin/statement.md)
[Solution](../547.%20Number%20of%20Provinces/solution.js)

[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../200.%20Number%20of%20Islands/statement.md)

# 547. Number of Provinces

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-provinces/)

---

## Description

There are `n` cities. Some of them are connected, while some are not. A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `i`th city and the `j`th city are directly connected, and `isConnected[i][j] = 0` otherwise.

Return the total number of provinces.

---

## Examples

### Example 1:

**Input:**

```plaintext
isConnected = [[1,1,0],[1,1,0],[0,0,1]]
```

**Output:**

```plaintext
2
```

**Explanation:**
There are 2 provinces: the first two cities are connected, and the third city is alone.

---

### Example 2:

**Input:**

```plaintext
isConnected = [[1,0,0],[0,1,0],[0,0,1]]
```

**Output:**

```plaintext
3
```

**Explanation:**
Each city is its own province.

---

## Constraints

- `1 <= n <= 200`
- `isConnected[i][j]` is `1` or `0`.
- `isConnected[i][i] == 1`
- `isConnected[i][j] == isConnected[j][i]`

---
