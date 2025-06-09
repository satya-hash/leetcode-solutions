[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../238.%20Product%20of%20Array%20Except%20Self/statement.md)
[Solution](../56.%20Merge%20Intervals/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../54.%20Spiral%20Matrix/statement.md)

# 56. Merge Intervals

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/merge-intervals/)

## Description

Given an array of intervals where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

---

## Examples

### Example 1:

**Input:**
`intervals = [[1,3],[2,6],[8,10],[15,18]]`

**Output:**
`[[1,6],[8,10],[15,18]]`
**Explanation:**
Since intervals `[1,3]` and `[2,6]` overlap, merge them into `[1,6]`.

---

### Example 2:

**Input:**
`intervals = [[1,4],[4,5]]`

**Output:**
`[[1,5]]`
**Explanation:**
Intervals `[1,4]` and `[4,5]` are considered overlapping.

---

## Constraints

- `1 <= intervals.length <= 10⁴`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10⁴`
