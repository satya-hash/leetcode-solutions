[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../153.%20Find%20Minimum%20in%20Rotated%20Sorted%20Array/statement.md)
[Solution](35.%20Search%20Insert%20Position/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../367.%20Valid%20Perfect%20Square/statement.md)

# 35. Search Insert Position

**Difficulty:** Easy

**Link:** [LeetCode Problem](https://leetcode.com/problems/search-insert-position/)

---

## Description

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

---

## Examples

### Example 1:

**Input:**

```plaintext
nums = [1,3,5,6], target = 5
```

**Output:**

```plaintext
2
```

---

### Example 2:

**Input:**

```plaintext
nums = [1,3,5,6], target = 2
```

**Output:**

```plaintext
1
```

---

### Example 3:

**Input:**

```plaintext
nums = [1,3,5,6], target = 7
```

**Output:**

```plaintext
4
```

---

### Example 4:

**Input:**

```plaintext
nums = [1,3,5,6], target = 0
```

**Output:**

```plaintext
0
```

---

### Example 5:

**Input:**

```plaintext
nums = [1], target = 0
```

**Output:**

```plaintext
0
```

---

## Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` contains distinct values sorted in ascending order.
- `-10^4 <= target <= 10^4`
