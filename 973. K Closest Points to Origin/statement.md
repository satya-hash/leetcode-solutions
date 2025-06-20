[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../347.%20Top%20K%20Frequent%20Elements/statement.md)
[Solution](../973.%20K%20Closest%20Points%20to%20Origin/solution.js)

[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../547.%20Number%20of%20Provinces/statement.md)

# 973. K Closest Points to Origin

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/k-closest-points-to-origin/)

---

## Description

Given an array of `points` where `points[i] = [xi, yi]` represents a point on the X-Y plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`.

The distance between two points on the X-Y plane is the Euclidean distance.

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

---

## Examples

### Example 1:

**Input:**

```plaintext
points = [[1,3],[-2,2]], k = 1
```

**Output:**

```plaintext
[[-2,2]]
```

**Explanation:**
The distance from (1, 3) to the origin is √10.
The distance from (-2, 2) to the origin is √8.
Since √8 < √10, (-2, 2) is closer.

---

### Example 2:

**Input:**

```plaintext
points = [[3,3],[5,-1],[-2,4]], k = 2
```

**Output:**

```plaintext
[[3,3],[-2,4]]
```

**Explanation:**
The two closest points are (3, 3) and (-2, 4).

---

## Constraints

- `1 <= k <= points.length <= 10^4`
- `-10^4 <= xi, yi <= 10^4`

---

## Follow-up

Can you solve the problem in `O(N)` time complexity?
