[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../20.%20Valid%20Parentheses/statement.md)
[Solution](../739.%20Daily%20Temperatures/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../155.%20Min%20Stack/statement.md)

# 739. Daily Temperatures

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/daily-temperatures/)

## Description

Given an array of integers `temperatures` representing the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`-th day to get a warmer temperature.
If there is no future day for which this is possible, keep `answer[i] == 0`.

---

## Examples

### Example 1:

**Input:**
`temperatures = [73,74,75,71,69,72,76,73]`

**Output:**
`[1,1,4,2,1,1,0,0]`

---

### Example 2:

**Input:**
`temperatures = [30,40,50,60]`

**Output:**
`[1,1,1,0]`

---

### Example 3:

**Input:**
`temperatures = [30,60,90]`

**Output:**
`[1,1,0]`

---

## Constraints

- `1 <= temperatures.length <= 10⁵`
- `30 <= temperatures[i] <= 100`
