import math

def jump_search(arr, target):
    n = len(arr)
    step = int(math.sqrt(n))
    prev = 0

    while prev < n and arr[min(prev + step, n) - 1] < target:
        prev += step

    for i in range(prev, min(prev + step, n)):
        if arr[i] == target:
            return i

    return -1

nums = [1,2,3,4,5,6,7]
print(jump_search(nums, 5))
