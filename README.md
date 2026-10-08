Here is a  **clear explanation of each algorithm and its complexity** , focusing on  **why the complexity occurs** . This is the kind of understanding expected in  **computer science courses and technical interviews** .

---

# 1. Linear Search — **O(n)**

### Idea

Check each element **one by one** until the target is found.

Example array:

```
[3, 7, 2, 9, 5]
```

Searching for `9`:

```
3 → 7 → 2 → 9
```

### Why complexity is O(n)

If the array has  **n elements** , in the worst case you must check  **every element** .

Worst case example:

```
[3,7,2,9,5]
search 5
```

You check  **all 5 elements** .

Operations grow **linearly** with the input size.

```
n elements → n comparisons
```

So:

```
T(n) = n
```

Therefore:

```
O(n)
```

---

# 2. Binary Search — **O(log n)**

### Idea

Works only on  **sorted arrays** .

Instead of checking every element, it  **cuts the search space in half each step** .

Example:

```
[1,2,3,4,5,6,7,8]
search 6
```

Step 1
Check middle:

```
[1 2 3 4 | 5 6 7 8]
        ^
```

Step 2
Search right half:

```
[5 6 | 7 8]
     ^
```

Step 3
Found.

### Why complexity is O(log n)

Each step divides the array by  **2** .

```
n
n/2
n/4
n/8
...
```

The number of times you can divide by 2 until reaching 1 is:

```
log₂(n)
```

Example:

```
n = 1024
log₂(1024) = 10
```

So you need only **10 comparisons** instead of  **1024** .

---

# 3. Bubble Sort — **O(n²)**

### Idea

Repeatedly compare **adjacent elements** and swap them.

Example:

```
[5,3,8,4]
```

Pass 1:

```
5 3 → swap
3 5 8 4

5 8 → ok
3 5 8 4

8 4 → swap
3 5 4 8
```

Repeat until sorted.

### Why complexity is O(n²)

Two nested loops:

```
for i in n
   for j in n
```

Comparisons roughly:

```
n × n
```

Example:

```
n = 1000
1000 × 1000 = 1,000,000 operations
```

So:

```
O(n²)
```

---

# 4. Insertion Sort — **O(n²)**

### Idea

Build the sorted list  **one element at a time** .

Example:

```
[5,3,8,4]
```

Step 1

```
[5]
```

Step 2

```
Insert 3
[3,5]
```

Step 3

```
Insert 8
[3,5,8]
```

Step 4

```
Insert 4
[3,4,5,8]
```

### Why complexity is O(n²)

Each insertion may require shifting many elements.

Worst case example:

```
[5,4,3,2,1]
```

Insert operations:

```
1 shift
2 shifts
3 shifts
4 shifts
```

Total operations:

```
1 + 2 + 3 + ... + n
```

Which equals:

```
n(n-1)/2
```

This grows as:

```
O(n²)
```

---

# 5. Merge Sort — **O(n log n)**

### Idea

Uses  **divide and conquer** .

Steps:

1. Split array in half
2. Recursively sort halves
3. Merge them

Example:

```
[8,3,5,2]

Split:
[8,3] [5,2]

Split again:
[8] [3] [5] [2]

Merge:
[3,8] [2,5]

Merge:
[2,3,5,8]
```

### Why complexity is O(n log n)

Two things happen:

### 1️⃣ Splitting depth

You divide the array until size 1.

Number of splits:

```
log₂(n)
```

### 2️⃣ Work per level

Each level merges  **n elements** .

So total work:

```
n + n + n + ... (log n levels)
```

Which gives:

```
n log n
```

---

# 6. Quick Sort — **O(n log n) average**

### Idea

Choose a  **pivot** , partition elements around it.

Example:

```
[5,3,8,4,2]

pivot = 5

left  = [3,4,2]
right = [8]
```

Sort recursively:

```
[2,3,4] + [5] + [8]
```

---

### Why complexity is O(n log n)

Like merge sort:

* Each level processes **n elements**
* Depth ≈ **log n**

So:

```
O(n log n)
```

---

### Worst case O(n²)

If pivot is always  **the smallest or largest element** .

Example:

```
[1,2,3,4,5]
pivot = 1
```

Partition becomes:

```
[] [2,3,4,5]
```

This behaves like:

```
n + (n-1) + (n-2) + ...
```

Which equals:

```
O(n²)
```

---

# 7. Selection Sort — **O(n²)**

### Idea

Repeatedly **find the smallest remaining element** and swap it into the next position.

Example:

```
[5, 3, 8, 4, 2]
```

Pass 1: smallest is 2 → swap with 5

```
[2, 3, 8, 4, 5]
```

Pass 2: smallest of the rest is 3 → already in place

```
[2, 3, 8, 4, 5]
```

Pass 3: smallest of the rest is 4 → swap with 8

```
[2, 3, 4, 8, 5]
```

Pass 4: smallest of the rest is 5 → swap with 8

```
[2, 3, 4, 5, 8]
```

### Why complexity is O(n²)

To find each minimum you scan **everything not yet sorted**:

```
(n-1) + (n-2) + ... + 1
```

Which equals:

```
n(n-1)/2 → O(n²)
```

Unlike insertion sort, this happens **even if the array is already sorted** — there is no best-case shortcut. It does at most **n − 1 swaps**, though, which is useful when writes are expensive.

---

# 8. Heap Sort — **O(n log n)**

### Idea

Turn the array into a **max-heap** (a binary tree stored in the array where every parent ≥ its children), then repeatedly move the root — the largest value — to the end.

For index `i`:

```
left child  = 2i + 1
right child = 2i + 2
```

Example:

```
[5, 3, 8, 4, 2]
```

Build max-heap:

```
[8, 4, 5, 3, 2]
```

Swap root to the end, shrink the heap, re-heapify:

```
[5, 4, 2, 3 | 8]
[4, 3, 2 | 5, 8]
[3, 2 | 4, 5, 8]
[2 | 3, 4, 5, 8]
```

### Why complexity is O(n log n)

The heap is a tree of height **log n**.

Each of the **n** removals pushes one element down at most **log n** levels:

```
n removals × log n steps → O(n log n)
```

Building the heap first costs only **O(n)**, so the total stays O(n log n) — in the **best, average and worst case**, unlike quick sort. It also sorts **in place** (O(1) extra memory), unlike merge sort.

---

# 9. Counting Sort — **O(n + k)**

### Idea

Don't compare elements at all. **Count how many times each value appears**, then write the values back out in order.

Works for **integers in a known, small range** (`k` = max − min + 1).

Example:

```
[5, 3, 8, 4, 2]
```

Range is 2..8, so count each value:

```
value:  2  3  4  5  6  7  8
count:  1  1  1  1  0  0  1
```

Walk the counts left to right:

```
[2, 3, 4, 5, 8]
```

### Why complexity is O(n + k)

```
count every element      → n steps
walk every possible value → k steps
```

No comparisons, so it beats the **O(n log n)** limit that comparison sorts can't go below. The catch: if the range is huge (e.g. `[1, 1000000]`), `k` dominates and it wastes time and memory.

---

# Final Intuition

| Algorithm      | Idea                        | Complexity         |
| -------------- | --------------------------- | ------------------ |
| Linear Search  | Check elements sequentially | O(n)               |
| Binary Search  | Halve the search space      | O(log n)           |
| Bubble Sort    | Repeated swapping           | O(n²)             |
| Insertion Sort | Insert into sorted portion  | O(n²)             |
| Merge Sort     | Divide and merge            | O(n log n)         |
| Quick Sort     | Partition around pivot      | O(n log n) average |
| Selection Sort | Select the minimum each pass | O(n²)             |
| Heap Sort      | Pull the max from a heap    | O(n log n)         |
| Counting Sort  | Count each value, no compares | O(n + k)         |

---

💡 **Key takeaway (important for CS students):**

Algorithms fall into three big efficiency groups:

```
Fast:
O(log n)

Medium:
O(n)

Efficient sorting:
O(n log n)

Slow:
O(n²)
```

---

If you'd like, I can also show you the **one visualization that makes all these algorithms instantly intuitive** (the diagram many algorithms textbooks use).
