const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    console.log(middle);
    const guessItem = arr[middle];

    if (item === guessItem) {
      return middle;
    }
    if (guessItem > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
};

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const searchItem = 6;

const searchResult = binarySearch(testArr, searchItem);
console.log("position:", searchResult);
