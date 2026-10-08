function countingSort(arr: number[]): number[] {
    if (arr.length === 0) {
        return arr
    }

    const low = Math.min(...arr)
    const counts: number[] = new Array(Math.max(...arr) - low + 1).fill(0)

    for (const value of arr) {
        counts[value - low]++
    }

    let i = 0
    for (let offset = 0; offset < counts.length; offset++) {
        for (let c = 0; c < counts[offset]; c++) {
            arr[i] = offset + low
            i++
        }
    }

    return arr
}

console.log(countingSort([5,3,8,4,2]))
