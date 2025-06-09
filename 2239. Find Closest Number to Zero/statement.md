
[Solution](2239.%20Find%20Closest%20Number%20to%20Zero/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../1768.%20Merge%20Strings%20Alternately/statement.md)

# 2239. Find Closest Number to Zero

**Difficulty:** Easy <br>
**Topics:** Array, Sorting

## Problem Statement

Given an integer array `nums` of size `n`, return the number with the value closest to `0` in `nums`. If there are multiple answers, return the number with the largest value.

---

## Example 1:

**Input:**

```plaintext
nums = [-4,-2,1,4,8]
```

**Output:**

```plaintext
1
```

**Explanation:**

- The distance from -4 to 0 is `|-4| = 4`.
- The distance from -2 to 0 is `|-2| = 2`.
- The distance from 1 to 0 is `|1| = 1`.
- The distance from 4 to 0 is `|4| = 4`.
- The distance from 8 to 0 is `|8| = 8`.

Thus, the closest number to 0 in the array is `1`.

---

## Example 2:

**Input:**

```plaintext
nums = [2,-1,1]
```

**Output:**

```plaintext
1
```

**Explanation:**
Both `1` and `-1` are the closest numbers to `0`, but since `1` is larger, it is returned.

---

## Constraints:

- `1 <= n <= 1000`
- `-10^5 <= nums[i] <= 10^5`
