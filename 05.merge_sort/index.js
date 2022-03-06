//merge sort

/**
  概念：
      1. It's a combination of two things - merging and sorting!
      2. Exploits th fact that arrays of 0 or 1 element are always sorted
      3. Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

  步驟：
    範例 array -- [5,6,2,1]
      分離：
        1. [5,6], [2,1]
        2. [5], [6], [2], [1]
      排序後合併：
        1. [5,6] , [1,2]
        2. [1,2,5,6]
    優點：
      1. There is a family of sorting algorithms that can imporve time complexity from O(n^2) to O(nlogn)
      2. there's a tradeoff between efficiency and simplicity
    缺點：


 */
// 要先有 merge 的功能
const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([5, 6, 2, 1]));
console.log(mergeSort([5, 6, 2, 1, 9, 0, 1, 4, 99, 24, 12, 45, 78]));
console.log(mergeSort([5, 1, 2, 1, 1]));
