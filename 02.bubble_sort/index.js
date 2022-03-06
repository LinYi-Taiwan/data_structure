//bubble sort

/**
  概念：將 index 與 index + 1 數值兩兩比對，將比較大的數字放在後者，然後重複比對
  步驟：
    範例 array -- [5,6,2,1]
    1. index1 和 index2 互相比較，5 < 6 所以不交換位置
    2. index2 和 index3 互相比較，6 > 2 所以交換位置，新的陣列為 -- [5,2,6,1]
    3. index3 和 index4 互相比較，6 > 1 所以交換位置，新的陣列為 -- [5,2,1,6]
    4. 固定最後一個 index 不再比對
    5. 重複 1~4 步驟
  缺點：
    1. O(n^2)
    2. memory store consumption
 */

const bubbleSort = (arr) => {
  let oldArr = arr;
  let finalArr = [];

  while (oldArr.length !== 0) {
    for (let [index, value] of oldArr.entries()) {
      let pre = index;
      let post = index + 1;

      //判斷是否超出陣列長度

      if (index + 1 === oldArr.length) {
        finalArr.unshift(oldArr.pop());
      }

      if (oldArr[pre] > oldArr[post]) {
        // 位置交換
        [oldArr[pre], oldArr[post]] = [oldArr[post], oldArr[pre]];
      }
    }
  }
  return finalArr;
};

console.log(bubbleSort([5, 6, 2, 1]));
console.log(bubbleSort([5, 6, 2, 1, 9, 7, 7, 11, 144, 23, 4, 67, 12, 16, 26]));
