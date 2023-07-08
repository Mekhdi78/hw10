function flatten() {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...arr[i])
        } else {
            result.push(arr[i])
        }
    }
    return result
}
let arr = [2, [3], [43], 23, [['mekhdi']]]
console.log(
    flatten(arr)
);
