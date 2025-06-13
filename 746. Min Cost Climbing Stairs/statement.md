[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../55.%20Jump%20Game/statement.md)
[Solution](../746.%20Min%20Cost%20Climbing%20Stairs/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../322.%20Coin%20Change/statement.md)

# 746. Min Cost Climbing Stairs

**Difficulty:** Easy

**Link:** [LeetCode Problem](https://leetcode.com/problems/min-cost-climbing-stairs/)

---

## Description

You are given an integer array `cost` where `cost[i]` is the cost of `i`th step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

---

## Examples

### Example 1:

**Input:**

```plaintext
cost = [10, 15, 20]
```

**Output:**

```plaintext
15
```

**Explanation:**
You will start at index 1.

- Pay 15 and climb two steps to reach the top.
  The total cost is 15.

---

### Example 2:

**Input:**

```plaintext
cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
```

**Output:**

```plaintext
6
```

**Explanation:**
You will start at index 0.

- Pay 1, climb one step to index 1 (pay 100),
- climb two steps to index 3 (pay 1),
- climb one step to index 4 (pay 1),
- climb two steps to index 6 (pay 1),
- climb one step to index 7 (pay 1),
- climb two steps to reach the top.
  The total cost is 1 + 1 + 1 + 1 + 1 + 1 = 6.

---

## Constraints

- `2 <= cost.length <= 1000`
- `0 <= cost[i] <= 999`

---

## Follow-up

Can you solve it using only O(1) extra space?
