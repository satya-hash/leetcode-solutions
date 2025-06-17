[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../322.%20Coin%20Change/statement.md)
[Solution](../347.%20Top%20K%20Frequent%20Elements/solution.js)

<!-- [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../215.%20Kth%20Largest%20Element%20in%20an%20Array/statement.md) -->

# 347. Top K Frequent Elements

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/top-k-frequent-elements/)

---

## Description

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.

---

## Examples

### Example 1:

**Input:**

```plaintext
nums = [1,1,1,2,2,3], k = 2
```

**Output:**

```plaintext
[1,2]
```

**Explanation:**
The elements 1 and 2 are the two most frequent elements.

---

### Example 2:

**Input:**

```plaintext
nums = [1], k = 1
```

**Output:**

```plaintext
[1]
```

**Explanation:**
The only element is 1, so it is the most frequent.

---

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `k` is in the range `[1, the number of unique elements in nums]`
- It is guaranteed that the answer is unique.

---

## Follow-up

Can you solve the problem in `O(n)` time complexity?
