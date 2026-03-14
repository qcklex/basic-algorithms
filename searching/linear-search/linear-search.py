def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

nums = [3, 7, 2, 9, 5]
print(linear_search(nums, 9))