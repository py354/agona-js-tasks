// 1 задача
// (на mdn написано что Set сохраняет порядок)
function removeDuplicateElems(arr) {
    return Array.from(new Set(arr));
}

console.log(removeDuplicateElems([1, 2, 3, 2, 1]));


// 2 задача
function sumAll(arr) {
    return arr.reduce((prev, curr) => prev + curr);
}

console.log(sumAll([1, 2, 3]), sumAll(["1", "2", "3"]));


// 3 задача
function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let result = [];
    for (let elem1 of set1) {
        if (set2.has(elem1)) {
            result.push(elem1);
        }
    }
    return result;
}
console.log(intersection([1, 2, 3], [2, 3, 4]))


// 4 задача
function find(elem, arr, li=0, ri=arr.length-1) {
    // arr - отсортирован по возрастанию
    if (li === ri) {
        return arr[li] === elem;
    }

    let middleIndex = Math.floor((li + ri) / 2);
    let middleElement = arr[middleIndex];
    if (middleElement === elem) {
        return true;
    } else if (middleElement > elem) {
        return find(elem, arr, li, middleIndex - 1);
    } else {
        return find(elem, arr, middleIndex + 1, ri);
    }
}

console.log(find(1, [1, 2, 3, 5]))


// 5 задача
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let elemsInChunk = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, elemsInChunk);
    let arr2 = arr.slice(elemsInChunk);
    return merge(mergeSort(arr1), mergeSort(arr2))
}

// функция для слияния двух отсортированных массивов
function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i += 1;
        } else {
            result.push(arr2[j]);
            j += 1;
        }
    }

    if (i < arr1.length) {
        result.push(...arr1.slice(i));
    } else if (j < arr2.length) {
        result.push(...arr2.slice(j));
    }

    return result;
}

console.log(merge([1, 2, 4, 6], [2, 5, 6, 7]))
console.log(mergeSort([3, 2, 4, -1, 5]));