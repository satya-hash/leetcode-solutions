[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../33.%20Search%20in%20Rotated%20Sorted%20Array/statement.md)
[Solution](../875.%20Koko%20Eating%20Bananas/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../226.%20Invert%20Binary%20Tree/statement.md)

# 875. Koko Eating Bananas

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/koko-eating-bananas/)

---

## Description

Koko loves to eat bananas. There are `n` piles of bananas, the `i-th` pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during that hour.

Return the minimum integer `k` such that she can eat all the bananas within `h` hours.

---

## Examples

### Example 1:

**Input:**

```plaintext
piles = [3,6,7,11], h = 8
```

**Output:**

```plaintext
4
```

---

### Example 2:

**Input:**

```plaintext
piles = [30,11,23,4,20], h = 5
```

**Output:**

```plaintext
30
```

---

### Example 3:

**Input:**

```plaintext
piles = [30,11,23,4,20], h = 6
```

**Output:**

```plaintext
23
```

---

## Constraints

- `1 <= piles.length <= 10^4`
- `piles[i] <= 10^9`
- `1 <= h <= 10^9`

---

## Follow-up

Could you solve the problem using a binary search approach?
