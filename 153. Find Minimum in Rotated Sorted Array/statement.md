[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../704.%20Binary%20Search/statement.md)
[Solution](153.%20Find%20Minimum%20in%20Rotated%20Sorted%20Array/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../35.%20Search%20Insert%20Position/statement.md)

# 153. Find Minimum in Rotated Sorted Array

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

---

## Description

Suppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

- `[4,5,6,7,0,1,2]` if it was rotated `4` times.
- `[0,1,2,4,5,6,7]` if it was rotated `7` times.

Given the rotated array `nums` of unique elements, return the minimum element of this array.

You must write an algorithm that runs in `O(log n)` time.

---

## Examples

### Example 1:

**Input:**

```plaintext
nums = [3,4,5,1,2]
```

**Output:**

```plaintext
1
```

---

### Example 2:

**Input:**

```plaintext
nums = [4,5,6,7,0,1,2]
```

**Output:**

```plaintext
0
```

---

### Example 3:

**Input:**

```plaintext
nums = [11,13,15,17]
```

**Output:**

```plaintext
11
```

---

## Constraints

- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- All the integers of `nums` are unique.
- `nums` is sorted and rotated between `1` and `n` times.

---
