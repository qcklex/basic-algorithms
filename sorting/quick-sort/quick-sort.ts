function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr

    const pivot = arr[Math.floor(arr.length / 2)]

    const left = arr.filter(x => x < pivot)
    const middle = arr.filter(x => x === pivot)
    const right = arr.filter(x => x > pivot)

    return [...quickSort(left), ...middle, ...quickSort(right)]
}

console.log(quickSort([5,3,8,4,2]))