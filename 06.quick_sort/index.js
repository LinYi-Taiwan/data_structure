//merge sort

/**
  概念：
      1. 將選取的數字跟陣列中的所有數字進行比對，比選取的數字小則交換位置
      2. 最後的數字跟一開始選取的數字進行位置交換
 */

// 要先有 pivot function
const pivot = (arr, start = 0, end = arr.length) => {
  let pivotPoint = arr[start];
  let swapIndex = start;

  const swap = (arr, targetInd1, targetInd2) => {
    [arr[targetInd1], arr[targetInd2]] = [arr[targetInd2], arr[targetInd1]];
  };

  for (let i = start + 1; i < arr.length; i++) {
    if (pivotPoint > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([5, 6, 2, 1]));
console.log(quickSort([5, 6, 2, 1, 9, 0, 1, 4, 99, 24, 12, 45, 78]));
console.log(quickSort([5, 1, 2, 1, 1]));
