function swap(arr, idx1, idx2){
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    return arr;
}
module.exports = swap;

//my own sort
function dunnoSort(arr){
    for(let i = 0; i<arr.length-1; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<arr[i]){
                swap(arr, i, j);
            }
        }    
    }
    return arr;
}
//console.log(dunnoSort([6,7,8,9,10,1,2,3,4,5]));

//bubble sort
function bubbleSort(arr){
    for(let i = 0; i<arr.length-1; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<arr[i]){
                swap(arr, i, j);
            }
        }    
    }
    return arr;
}
//console.log(bubbleSort([6,7,8,9,10,1,2,3,4,5]));

//selection sort

//insertion sort

//merge sort
const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

const merge = (left, right) => {
    let arr = [];
    let l = 0;
    let r = 0;
    while(l < left.length && r < right.length){
        left[l] < right[r] ? arr.push(left[l++]) : arr.push(right[r++]);
    }
    while(l < left.length){
        arr.push(left[l++]);
    }
    while(r < right.length){
        arr.push(right[r++]);
    }
    return arr;
}
//console.log(mergeSort([6,7,8,9,10,1,2,3,4,5]));
//console.log(merge([6,7,8,9,10],[1,2,3,4,5]));

//quickSort
function pivot(arr, start=0, end=arr.length+1){
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start+1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx-1);
        quickSort(arr, pivotIdx+1, right);
    }
    return arr;
}
//console.log(quickSort([6,7,8,9,10,1,2,3,4,5]));

//radix sort
function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
function digitCount(num){
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(num){
    let max = 0;
    for(let i = 0; i<num.length; i++){
        if(digitCount(num[i]) > max){
            max = digitCount(num[i]);
        }
    }
    return max;
}
function radixSort(arr){
    let max = mostDigits(arr);
    for(let i = 0; i<max; i++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let j = 0; j<arr.length; j++){
            let n = getDigit(arr[j], i);
            digitBuckets[n].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
    }
    console.log(arr);
}
radixSort([142, 31, 434453, 4324, 53, -114, 0, 11]);
