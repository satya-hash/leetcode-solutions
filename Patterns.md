## LeetCode was HARD until I Learned these 15 Patterns

**LeetCode is less about the number of problems you have solved and more about how many patterns you know.**

I’ll share when to use each pattern along with a sample problem and provide links to LeetCode problems you can practice to learn these patterns better.

## 1. Prefix Sum

**Use when:** Multiple sum queries or cumulative sum calculations.

**Sample Problem:**
Given `nums = [1, 2, 3, 4, 5, 6]`, find sum from index 1 to 3 → Output: `9`

**Technique:**
Precompute prefix array `P = [1, 3, 6, 10, 15, 21]`, then `P[j] - P[i-1]`

**LeetCode:**

- [Leetcode: 303](https://leetcode.com/problems/range-sum-query-immutable)
- [Leetcode: 525](https://leetcode.com/problems/contiguous-array)
- [Leetcode: 560](https://leetcode.com/problems/subarray-sum-equals-k)

## 2. Two Pointers

**Use when:** Sorted array/list and need pairs matching condition.

**Sample Problem:**
Find two numbers in sorted array that sum to target.

**Technique:**
Use left and right pointers, move inward based on sum.

**LeetCode:**

- [Leetcode: 167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted)
- [Leetcode: 15](https://leetcode.com/problems/3sum)
- [Leetcode: 11](https://leetcode.com/problems/container-with-most-water)

## 3. Sliding Window

**Use when:** Problems on subarrays/substrings.

**Sample Problem:**
Find max sum of subarray size `k` in `nums = [2, 1, 5, 1, 3, 2]` → Output: `9`

**Technique:**
Maintain window sum, slide one by one and track max.

**LeetCode:**

- [Leetcode: 643](https://leetcode.com/problems/maximum-average-subarray-i)
- [Leetcode: 3](https://leetcode.com/problems/longest-substring-without-repeating-characters)
- [Leetcode: 76](https://leetcode.com/problems/minimum-window-substring)

## 4. Fast & Slow Pointers

**Use when:** Cycle detection in linked structures.

**Sample Problem:**
Detect cycle in linked list.

**Technique:**
Slow = 1 step, Fast = 2 steps. If they meet → cycle.

**LeetCode:**

- [Leetcode: 141](https://leetcode.com/problems/linked-list-cycle)
- [Leetcode: 202](https://leetcode.com/problems/happy-number)
- [Leetcode: 287](https://leetcode.com/problems/find-the-duplicate-number)

## 5. LinkedList In-place Reversal

**Use when:** Reverse portion of linked list without extra space.

**Sample Problem:**
Reverse sublist between positions `m=2` and `n=4`.

**LeetCode:**

- [Leetcode: 206](https://leetcode.com/problems/reverse-linked-list)
- [Leetcode: 92](https://leetcode.com/problems/reverse-linked-list-ii)
- [Leetcode: 24](https://leetcode.com/problems/swap-nodes-in-pairs)

## 6. Monotonic Stack

**Use when:** Next greater/smaller element problems.

**Sample Problem:**
Next greater element in array `nums = [2, 1, 2, 4, 3]` → Output: `[4, 2, 4, -1, -1]`

**LeetCode:**

- [Leetcode: 496](https://leetcode.com/problems/next-greater-element-i)
- [Leetcode: 739](https://leetcode.com/problems/daily-temperatures)
- [Leetcode: 84](https://leetcode.com/problems/largest-rectangle-in-histogram)

## 7. Top ‘K’ Elements

**Use when:** Finding top k largest/smallest using heaps.

**Sample Problem:**
K-th largest in `nums = [3, 2, 1, 5, 6, 4]`, k = 2 → Output: `5`

**LeetCode:**

- [Leetcode: 215](https://leetcode.com/problems/kth-largest-element-in-an-array)
- [Leetcode: 347](https://leetcode.com/problems/top-k-frequent-elements)
- [Leetcode: 373](https://leetcode.com/problems/find-k-pairs-with-smallest-sums)

## 8. Overlapping Intervals

**Use when:** Merging or handling overlapping time intervals.

**Sample Problem:**
Merge `[[1, 3], [2, 6], [8, 10], [15, 18]]` → Output: `[[1, 6], [8, 10], [15, 18]]`

**LeetCode:**

- [Leetcode: 56](https://leetcode.com/problems/merge-intervals)
- [Leetcode: 57](https://leetcode.com/problems/insert-interval)
- [Leetcode: 435](https://leetcode.com/problems/non-overlapping-intervals)

## 9. Modified Binary Search

**Use when:** Search in rotated/special sorted arrays.

**Sample Problem:**
Search `0` in `nums = [4,5,6,7,0,1,2]` → Output: `4`

**LeetCode:**

- [Leetcode: 33](https://leetcode.com/problems/search-in-rotated-sorted-array)
- [Leetcode: 153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array)
- [Leetcode: 240](https://leetcode.com/problems/search-a-2d-matrix-ii)

## 10. Binary Tree Traversal

**Use when:** Tree traversal in InOrder, PreOrder, PostOrder.

**Sample Problem:**
InOrder of tree `[1, null, 2, 3]` → Output: `[1, 3, 2]`

**LeetCode:**

- [Leetcode: 257](https://leetcode.com/problems/binary-tree-paths)
- [Leetcode: 230](https://leetcode.com/problems/kth-smallest-element-in-a-bst)
- [Leetcode: 124](https://leetcode.com/problems/binary-tree-maximum-path-sum)

## 11. Depth-First Search (DFS)

**Use when:** Explore all paths deeply (trees/graphs).

**Sample Problem:**
All paths from root to leaf in `[1,2,3,null,5]` → Output: `["1->2->5", "1->3"]`

**LeetCode:**

- [Leetcode: 133](https://leetcode.com/problems/clone-graph)
- [Leetcode: 113](https://leetcode.com/problems/path-sum-ii)
- [Leetcode: 210](https://leetcode.com/problems/course-schedule-ii)

## 12. Breadth-First Search (BFS)

**Use when:** Level-order traversal or shortest path.

**Sample Problem:**
Level order of `[3, 9, 20, null, null, 15, 7]` → Output: `[[3], [9, 20], [15, 7]]`

**LeetCode:**

- [Leetcode: 102](https://leetcode.com/problems/binary-tree-level-order-traversal)
- [Leetcode: 994](https://leetcode.com/problems/rotting-oranges)
- [Leetcode: 127](https://leetcode.com/problems/word-ladder)

## 13. Matrix Traversal

**Use when:** Explore 2D grids in all directions.

**Sample Problem:**
Flood fill from (1,1) with newColor=2 on matrix → Output: updated grid

**LeetCode:**

- [Leetcode: 733](https://leetcode.com/problems/flood-fill)
- [Leetcode: 200](https://leetcode.com/problems/number-of-islands)
- [Leetcode: 130](https://leetcode.com/problems/surrounded-regions)

## 14. Backtracking

**Use when:** All possible solutions/combinations.

**Sample Problem:**
Permutations of `[1, 2, 3]` → Output: `[[1,2,3], [1,3,2], ...]`

**LeetCode:**

- [Leetcode: 46](https://leetcode.com/problems/permutations)
- [Leetcode: 78](https://leetcode.com/problems/subsets)
- [Leetcode: 51](https://leetcode.com/problems/n-queens)

## 15. Dynamic Programming Patterns

**Use when:** Overlapping subproblems, optimal substructure.

**DP Sub-patterns:**

- Fibonacci
- 0/1 Knapsack
- Longest Common Subsequence
- Longest Increasing Subsequence
- Subset Sum
- Matrix Chain Multiplication

**LeetCode:**

- [Leetcode: 70](https://leetcode.com/problems/climbing-stairs)
- [Leetcode: 198](https://leetcode.com/problems/house-robber)
- [Leetcode: 322](https://leetcode.com/problems/coin-change)
- [Leetcode: 1143](https://leetcode.com/problems/longest-common-subsequence)
- [Leetcode: 416](https://leetcode.com/problems/partition-equal-subset-sum)

---
