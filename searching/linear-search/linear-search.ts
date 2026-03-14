function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([3,7,2,9,5], 9))