# 75. Sort Colors

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/sort-colors/)

---

## Description

Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

---

## Examples

### Example 1:

**Input:**

```plaintext
nums = [2,0,2,1,1,0]
```

**Output:**

```plaintext
[0,0,1,1,2,2]
```

---

### Example 2:

**Input:**

```plaintext
nums = [2,0,1]
```

**Output:**

```plaintext
[0,1,2]
```

---

## Constraints

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`.

---

## Follow-up

Could you come up with a one-pass algorithm using only constant extra space?
