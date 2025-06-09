[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../283.%20Move%20Zeroes/statement.md)
[Solution](20.%20Valid%20Parentheses/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../739.%20Daily%20Temperatures/statement.md)

# 20. Valid Parentheses

**Difficulty:** Easy

**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-parentheses/)

## Description

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is **valid** if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every closing bracket has a corresponding open bracket of the same type.

---

## Examples

### Example 1:

**Input:**
`s = "()"`

**Output:**
`true`

---

### Example 2:

**Input:**
`s = "()[]{}"`

**Output:**
`true`

---

### Example 3:

**Input:**
`s = "(]"`

**Output:**
`false`

---

### Example 4:

**Input:**
`s = "([])"`

**Output:**
`true`

---

## Constraints

- `1 <= s.length <= 10⁴`
- `s` consists of only the characters `'()[]{}'`
