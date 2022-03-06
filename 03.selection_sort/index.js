//selection sort

/**
  概念：從 index 1 開始往後兩倆比對，較小的則被註記為 target value，直到陣列全部比對完成時，最後一個被選定的數值和第一個位置的數值交換位置
  步驟：
    範例 array -- [5,6,2,1]
    1. 5 < 6 -- target value = 5
    2. 5 > 2 -- target value = 2
    3. 2 > 1 -- target value = 1
    4. 1 和 5 交換位置
    5. 重複 1~4 步驟
    缺點：
    1. better than bubble sort O(n * n!) but also larger than others

 */

const selectionSort = (arr) => {
  let targetValueIndex;
  let currentStep = 0;

  while (currentStep + 1 !== arr.length) {
    targetValueIndex = currentStep;
    for (let i = currentStep; i < arr.length; i++) {
      if (arr[targetValueIndex] > arr[i + 1]) {
        targetValueIndex = i + 1;
      }
    }
    [arr[currentStep], arr[targetValueIndex]] = [
      arr[targetValueIndex],
      arr[currentStep],
    ];
    currentStep++;
  }
  return arr;
};

console.log(selectionSort([5, 6, 2, 1]));
console.log(selectionSort([5, 6, 2, 1, 9, 0, 1, 4, 99, 24, 12, 45, 78]));
console.log(selectionSort([5, 1]));
