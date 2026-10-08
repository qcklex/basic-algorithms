function heapify(arr: number[], n: number, i: number): void {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, n, largest)
    }
}

function heapSort(arr: number[]): number[] {
    const n = arr.length

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }

    for (let end = n - 1; end > 0; end--) {
        [arr[0], arr[end]] = [arr[end], arr[0]]
        heapify(arr, end, 0)
    }

    return arr
}

console.log(heapSort([5,3,8,4,2]))
