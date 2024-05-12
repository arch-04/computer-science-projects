function mergeSort(unsortedArr){
    if(unsortedArr.length <= 1){
        return unsortedArr
    }
    let middle = Math.floor(unsortedArr.length / 2);
    let left = unsortedArr.slice(0, middle);
    let right = unsortedArr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let sortedArr = [];

    while(left.length && right.length){
        if (left[0] < right[0]){
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ...right];
}

const array1 = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(`Unsorted array: ${array1}`)
console.log(`Sorted array: ${mergeSort(array1)}`)

const array2 = [105, 79, 100, 110]
console.log(`Unsorted array: ${array2}`)
console.log(`Sorted array: ${mergeSort(array2)}`)