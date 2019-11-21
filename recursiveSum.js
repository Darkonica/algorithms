function recursiveSum(arr) {
  if (arr.length) {
    return arr[0] + recursiveSum(arr.slice(1));
  }
  return 0;
}

const testArray = [1, 4, 3, 2];
const result = recursiveSum(testArray);

console.log(result);
