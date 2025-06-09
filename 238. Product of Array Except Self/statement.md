[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../patterns/1.prefix_sum/560.%20Subarray%20Sum%20Equals%20K/statement.md)
[Solution](../238.%20Product%20of%20Array%20Except%20Self/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../56.%20Merge%20Intervals/statement.md)

# 238. Product of Array Except Self

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/product-of-array-except-self/)

## Description

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` **except** `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in **O(n)** time and **without using the division operation**.

---

## Examples

### Example 1:

**Input:**
`nums = [1,2,3,4]`

**Output:**
`[24,12,8,6]`

---

### Example 2:

**Input:**
`nums = [-1,1,0,-3,3]`

**Output:**
`[0,0,9,0,0]`

---

## Constraints

- `2 <= nums.length <= 10⁵`
- `-30 <= nums[i] <= 30`
- The input is generated such that `answer[i]` is guaranteed to fit in a 32-bit integer.

---

## Follow-up

Can you solve the problem in **O(1)** extra space complexity?
_(The output array **does not** count as extra space for space complexity analysis.)_
