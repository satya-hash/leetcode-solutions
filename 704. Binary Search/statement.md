[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../509.%20Fibonacci%20Number/statement.md)
[Solution](../704.%20Binary%20Search/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../153.%20Find%20Minimum%20in%20Rotated%20Sorted%20Array/statement.md)

# 704. Binary Search

**Difficulty:** Easy

**Link:** [LeetCode Problem](https://leetcode.com/problems/binary-search/)

---

## Description

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

---

## Examples

### Example 1:

**Input:**

```plaintext
nums = [-1,0,3,5,9,12], target = 9
```

**Output:**

```plaintext
4
```

**Explanation:**
`9` exists in `nums` and its index is `4`.

---

### Example 2:

**Input:**

```plaintext
nums = [-1,0,3,5,9,12], target = 2
```

**Output:**

```plaintext
-1
```

**Explanation:**
`2` does not exist in `nums`, so return `-1`.

---

## Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 < nums[i], target < 10^4`
- All the integers in `nums` are unique.
- `nums` is sorted in ascending order.
