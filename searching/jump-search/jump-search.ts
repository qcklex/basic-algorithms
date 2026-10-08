function jumpSearch(arr: number[], target: number): number {
    const n = arr.length
    const step = Math.floor(Math.sqrt(n))
    let prev = 0

    while (prev < n && arr[Math.min(prev + step, n) - 1] < target) {
        prev += step
    }

    for (let i = prev; i < Math.min(prev + step, n); i++) {
        if (arr[i] === target) {
            return i
        }
    }

    return -1
}

const nums = [1,2,3,4,5,6,7]
console.log(jumpSearch(nums, 5))
