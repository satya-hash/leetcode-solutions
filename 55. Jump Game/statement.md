[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../110.%20Balanced%20Binary%20Tree/statement.md)
[Solution](../55.%20Jump%20Game/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../746.%20Min%20Cost%20Climbing%20Stairs/statement.md)

# 55. Jump Game

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/jump-game/)

---

## Description

Given an array of non-negative integers `nums`, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

---

## Examples

### Example 1:

**Input:**

```plaintext
nums = [2,3,1,1,4]
```

**Output:**

```plaintext
true
```

**Explanation:**
Jump 1 step from index 0 to 1, then 3 steps to the last index.

---

### Example 2:

**Input:**

```plaintext
nums = [3,2,1,0,4]
```

**Output:**

```plaintext
false
```

**Explanation:**
You will always arrive at index 3 with value 0. Its maximum jump length is 0, which means you cannot move further.

---

## Constraints

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 10^5`

---
