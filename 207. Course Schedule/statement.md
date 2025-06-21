[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../200.%20Number%20of%20Islands/statement.md)
[Solution](../207.%20Course%20Schedule/solution.js)

[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../207.%20Course%20Schedule/statement.md)

# 207. Course Schedule

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/course-schedule/)

---

## Description

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a, b]` indicates that you must take course `b` before course `a`.

Return `true` if you can finish all courses. Otherwise, return `false`.

---

## Examples

### Example 1:

**Input:**

```plaintext
numCourses = 2
prerequisites = [[1,0]]
```

**Output:**

```plaintext
true
```

**Explanation:**
You can take course 0 first, then course 1.

---

### Example 2:

**Input:**

```plaintext
numCourses = 2
prerequisites = [[1,0],[0,1]]
```

**Output:**

```plaintext
false
```

**Explanation:**
There is a cycle, so it is impossible to finish all courses.

---

## Constraints

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= a, b < numCourses`
- All the pairs `[a, b]` are unique.

---

## Follow-up

Can you solve it using both BFS (Kahn's algorithm) and DFS approaches?
