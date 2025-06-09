[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../2239.%20Find%20Closest%20Number%20to%20Zero/statement.md)
[Solution](../1768.%20Merge%20Strings%20Alternately/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../108.%20Convert%20Sorted%20Array%20to%20BST/statement.md)

# 1768. Merge Strings Alternately

**Difficulty:** Easy <br>
**Topics:** String, Two Pointers

## Problem Statement

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

---

## Example 1:

**Input:**

```plaintext
word1 = "abc", word2 = "pqr"
```

**Output:**

```plaintext
"apbqcr"
```

**Explanation:**
The merged string will be merged as so:

```
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
```

---

## Example 2:

**Input:**

```plaintext
word1 = "ab", word2 = "pqrs"
```

**Output:**

```plaintext
"apbqrs"
```

**Explanation:**
Notice that as `word2` is longer, "rs" is appended to the end.

```
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s
```

---

## Example 3:

**Input:**

```plaintext
word1 = "abcd", word2 = "pq"
```

**Output:**

```plaintext
"apbqcd"
```

**Explanation:**
Notice that as `word1` is longer, "cd" is appended to the end.

```
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d
```

---

## Constraints:

- `1 <= word1.length, word2.length <= 100`
- `word1` and `word2` consist of lowercase English letters.
