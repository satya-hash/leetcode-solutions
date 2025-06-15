[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../746.%20Min%20Cost%20Climbing%20Stairs/statement.md)
[Solution](../322.%20Coin%20Change/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../230.%20Kth%20Smallest%20Element%20in%20a%20BST/statement.md)

# 322. Coin Change

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/coin-change/)

---

## Description

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

---

## Examples

### Example 1:

**Input:**

```plaintext
coins = [1, 2, 5], amount = 11
```

**Output:**

```plaintext
3
```

**Explanation:**
11 = 5 + 5 + 1

---

### Example 2:

**Input:**

```plaintext
coins = [2], amount = 3
```

**Output:**

```plaintext
-1
```

**Explanation:**
It is not possible to make up the amount 3 with only coins of 2.

---

### Example 3:

**Input:**

```plaintext
coins = [1], amount = 0
```

**Output:**

```plaintext
0
```

**Explanation:**
No coins are needed to make up amount 0.

---

## Constraints

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2^31 - 1`
- `0 <= amount <= 10^4`

---
