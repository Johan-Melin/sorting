//elementary algos: bubble, selection, insertion, n2
//bubble + selection sort
const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

// Optimized BubbleSort with noSwaps, N2 - nearly sorted data
function bubbleSort(arr){
    //let noSwaps;
    for(var i = arr.length; i > 0; i--){
      //noSwaps = true;
      for(var j = 0; j < i - 1; j++){
          console.log(i, j)
        if(arr[j] > arr[j+1]){
            swap(arr, j, j+1);
        }
      }
      //if(noSwaps) break;
    }
    return arr;
  }
  
//console.log(bubbleSort([8,1,2,3,4,5,6,7]));
//----------------------------------------------------------------------------
//selection sort
//optimization = only swap if index not same as began with
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
      if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
  }
  //console.log(selectionSort([8,1,2,3,4,5,6,7]));
  //----------------------------------------------------------------------------
//insertion sort sort
//select 2nd because first element already sorted
//explain loop
function insertionSort(arr){
	let currentVal;
    for(let i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])

