# 525. Contiguous Array

**Difficulty:** Medium
**Link:** [LeetCode Problem](https://leetcode.com/problems/contiguous-array/)

## Description

Given a binary array `nums`, return the **maximum length** of a contiguous subarray with an equal number of `0` and `1`.

---

## Examples

### Example 1:

**Input:**
`nums = [0,1]`
**Output:**
`2`
**Explanation:**
`[0, 1]` is the longest contiguous subarray with an equal number of 0 and 1.

---

### Example 2:

**Input:**
`nums = [0,1,0]`
**Output:**
`2`
**Explanation:**
`[0, 1]` or `[1, 0]` are both valid longest contiguous subarrays with equal number of 0 and 1.

---

### Example 3:

**Input:**
`nums = [0,1,1,1,1,1,0,0,0]`
**Output:**
`6`
**Explanation:**
`[1, 1, 1, 0, 0, 0]` is the longest contiguous subarray with an equal number of 0 and 1.

---

## Constraints

- `1 <= nums.length <= 10⁵`
- `nums[i]` is either `0` or `1`.
