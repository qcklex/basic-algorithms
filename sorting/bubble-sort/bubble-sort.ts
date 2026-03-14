function bubbleSort(arr: number[]): number[] {
    const n = arr.length

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }

    return arr
}

console.log(bubbleSort([5,3,8,4,2]))