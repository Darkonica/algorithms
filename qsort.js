function qsort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr.pop(); // argument mutation, phew >.<
  const lessPart = arr.filter(item => item <= pivot);
  const greaterPart = arr.filter(item => item > pivot);

  return qsort(lessPart)
    .concat(pivot)
    .concat(qsort(greaterPart));
}

const testArr = [1, 5, 3, 2, 9, 0, 1, 5, 3, 2, 9, 0, 1, 5, 3, 2, 9, 0];
const result = qsort(testArr);

console.log(result);
