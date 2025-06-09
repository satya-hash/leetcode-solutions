[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../70.%20Climbing%20Stairs/statement.md)
[Solution](198.%20House%20Robber/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../98.%20Validate%20Binary%20Search%20Tree/statement.md)

# 198. House Robber

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/house-robber/)

---

## Description

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses are broken into on the same night.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

---

## Examples

### Example 1:

**Input:**

```plaintext
nums = [1,2,3,1]
```

**Output:**

```plaintext
4
```

**Explanation:** Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount = 1 + 3 = 4.

---

### Example 2:

**Input:**

```plaintext
nums = [2,7,9,3,1]
```

**Output:**

```plaintext
12
```

**Explanation:** Rob house 1 (money = 2), rob house 3 (money = 9), and rob house 5 (money = 1). Total amount = 2 + 9 + 1 = 12.

---

## Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

---

## Follow-up

Can you solve the problem in `O(n)` time and `O(1)` space?
