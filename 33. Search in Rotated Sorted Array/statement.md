[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../74.%20Search%20a%202D%20Matrix/statement.md)
[Solution](33.%20Search%20in%20Rotated%20Sorted%20Array/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../875.%20Koko%20Eating%20Bananas/statement.md)

# 33. Search in Rotated Sorted Array

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/search-in-rotated-sorted-array/)

---

## Description

There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k` (1 <= k < nums.length) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.

Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

---

## Examples

### Example 1:

**Input:**

```plaintext
nums = [4,5,6,7,0,1,2], target = 0
```

**Output:**

```plaintext
4
```

---

### Example 2:

**Input:**

```plaintext
nums = [4,5,6,7,0,1,2], target = 3
```

**Output:**

```plaintext
-1
```

---

### Example 3:

**Input:**

```plaintext
nums = [1], target = 0
```

**Output:**

```plaintext
-1
```

---

## Constraints

- `1 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- All values of `nums` are **unique**.
- `nums` is an ascending array that is possibly rotated.
- `-10^4 <= target <= 10^4`

---
