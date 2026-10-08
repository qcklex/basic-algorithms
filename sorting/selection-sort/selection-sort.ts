function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }

    return arr
}

console.log(selectionSort([5,3,8,4,2]))
