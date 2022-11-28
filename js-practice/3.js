function nullsShift(arr) {
    let leftIndex = arr.length - 1;
    while (leftIndex > 0 && arr[leftIndex] === 0) leftIndex -= 1;


    for (let i = 0; i < leftIndex; i++) {
        if (arr[i] === 0) {
            [arr[i], arr[leftIndex]] = [arr[leftIndex], arr[i]];
            while (leftIndex > 0 && arr[leftIndex] === 0) leftIndex -= 1;
        }
    }
}

let a = [1, 0, 2, 0, 3, 0];
console.log(a);
nullsShift(a);
console.log(a);
