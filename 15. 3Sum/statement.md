[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../167.%20Two%20Sum%20II%20-%20Input%20Array%20Is%20Sorted/statement.md)
[Solution](../15.%203Sum/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../283.%20Move%20Zeroes/statement.md)

# 15. 3Sum

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/3sum/)

## Description

Given an integer array `nums`, return **all the triplets** `[nums[i], nums[j], nums[k]]` such that:

- `i != j`, `i != k`, and `j != k`
- `nums[i] + nums[j] + nums[k] == 0`

**Note:**
The solution set must **not** contain duplicate triplets.

---

## Examples

### Example 1:

**Input:**
`nums = [-1,0,1,2,-1,-4]`

**Output:**
`[[-1,-1,2],[-1,0,1]]`

**Explanation:**

- `(-1) + 0 + 1 = 0`
- `(-1) + (-1) + 2 = 0`
  The distinct triplets are `[-1,0,1]` and `[-1,-1,2]`.
  Order of triplets and elements inside the triplet doesn't matter.

---

### Example 2:

**Input:**
`nums = [0,1,1]`

**Output:**
`[]`

**Explanation:**
No valid triplet sums to 0.

---

### Example 3:

**Input:**
`nums = [0,0,0]`

**Output:**
`[[0,0,0]]`

**Explanation:**
The only valid triplet is three zeros.

---

## Constraints

- `3 <= nums.length <= 3000`
- `-10⁵ <= nums[i] <= 10⁵`
