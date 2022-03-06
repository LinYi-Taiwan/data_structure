//binary search

/**
  步驟：
    1. input: 已排序的陣列
    2. 找出第一個與最後一個 index，並算出中間值
    3. 如果目標數字比中間值來的大，則刪除中間值左列的數字; 反之亦然
    4. 重複上述步驟，直到中間值 === 目標數字
 */

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  let count = 0;

  let mid = arr[middle];
  while (mid !== target) {
    if (mid < target) {
      console.log(arr);

      arr = arr.slice(middle + 1, end + 1);
      end = arr.length - 1;
      middle = Math.floor((start + end) / 2);
      mid = arr[middle];
      count++;
    }
    if (mid > target) {
      console.log(arr);

      arr = arr.slice(start, middle);
      end = arr.length - 1;
      middle = Math.floor((start + end) / 2);
      mid = arr[middle];
      count++;
    }
    if (mid === target) {
      console.log("running count:", count);
      return;
    }
  }
};

// binarySearch([2, 5, 6, 9, 13, 44, 66], 13);
binarySearch([...Array(100).keys()], 59);
