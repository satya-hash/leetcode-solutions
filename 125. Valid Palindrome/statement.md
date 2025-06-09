[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../3.%20Longest%20Substring%20Without%20Repeating%20Characters/statement.md)
[Solution](125.%20Valid%20Palindrome/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../167.%20Two%20Sum%20II%20-%20Input%20Array%20Is%20Sorted/statement.md)

# 125. Valid Palindrome

**Difficulty:** Easy
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-palindrome/)

## Description

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

---

## Examples

### Example 1:

**Input:**
`s = "A man, a plan, a canal: Panama"`

**Output:**
`true`

**Explanation:** `"amanaplanacanalpanama"` is a palindrome.

---

### Example 2:

**Input:**
`s = "race a car"`

**Output:**
`false`

**Explanation:** `"raceacar"` is not a palindrome.

---

### Example 3:

**Input:**
`s = " "`

**Output:**
`true`

**Explanation:** `s` is an empty string `""` after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

---

## Constraints

- `1 <= s.length <= 2 * 10⁵`
- `s` consists only of printable ASCII characters.
