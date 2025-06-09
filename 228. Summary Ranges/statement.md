[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../14.%20Longest%20Common%20Prefix/statement.md)
[Solution](../228.%20Summary%20Ranges/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../patterns/1.prefix_sum/560.%20Subarray%20Sum%20Equals%20K/statement.md)

# 228. Summary Ranges

**Difficulty:** Easy <br>
**Link:** [LeetCode Problem](https://leetcode.com/problems/summary-ranges/)

## Description

You are given a **sorted unique integer array** `nums`.

A **range [a, b]** is the set of all integers from `a` to `b` (inclusive).

Return the **smallest sorted list of ranges** that cover all the numbers in the array exactly. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range `[a, b]` in the list should be output as:

- `"a->b"` if `a != b`
- `"a"` if `a == b`

---

## Examples

### Example 1:

**Input:**
`nums = [0,1,2,4,5,7]`

**Output:**
`["0->2","4->5","7"]`

**Explanation:**
The ranges are:
`[0,2]` → `"0->2"`
`[4,5]` → `"4->5"`
`[7,7]` → `"7"`

---

### Example 2:

**Input:**
`nums = [0,2,3,4,6,8,9]`

**Output:**
`["0","2->4","6","8->9"]`

**Explanation:**
The ranges are:
`[0,0]` → `"0"`
`[2,4]` → `"2->4"`
`[6,6]` → `"6"`
`[8,9]` → `"8->9"`

---

## Constraints

- `0 <= nums.length <= 20,000`
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- All the values of `nums` are **unique**.
- `nums` is **sorted** in **ascending order**.
