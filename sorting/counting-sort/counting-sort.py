def counting_sort(arr):
    if not arr:
        return arr

    low = min(arr)
    counts = [0] * (max(arr) - low + 1)

    for value in arr:
        counts[value - low] += 1

    i = 0
    for offset, count in enumerate(counts):
        for _ in range(count):
            arr[i] = offset + low
            i += 1

    return arr

print(counting_sort([5,3,8,4,2]))
