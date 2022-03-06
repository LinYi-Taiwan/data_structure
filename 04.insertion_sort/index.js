//insertion sort

/**
  概念：從空陣列（稱 sortArr ）開始，將 index1 納入 sortArr，再將 index2 和 sortArr 的最後一項(或第一項)依序往前比較，安插在順序正確的位置
  步驟：
    範例 array -- [5,6,2,1]
      1. 產生一空陣列 []
      2. 將 5 放進空陣列，此時陣列為 [5]
      3. 將 6 和陣列中的數值做比較，得出陣列為[5,6]
      4. 將 2 和陣列中的數值做比較，2 < 6、2 < 5，所以 2 被安插在第一項，得出陣列 [2,5,6]
      5. 重複上述步驟
    缺點：


 */

const insertionSort = (arr) => {
  if (arr.lenght === 0) return arr;

  let sortArr = [];

  //這裡使用由前往後比對
  for (let [index, value] of arr.entries()) {
    for (let [sortIndex, sortValue] of sortArr.entries()) {
      if (value <= sortValue) {
        sortArr.splice(sortIndex, 0, value);
        break;
      }
      if (value > sortValue && sortIndex === sortArr.length - 1) {
        sortArr.splice(sortIndex + 1, 0, value);
        break;
      }
    }
    if (index === 0) {
      sortArr.push(arr[0]);
    }
  }
  return sortArr;
};

console.log(insertionSort([5, 6, 2, 1]));
console.log(insertionSort([5, 6, 2, 1, 9, 0, 1, 4, 99, 24, 12, 45, 78]));
console.log(insertionSort([5, 1, 2, 1, 1]));
