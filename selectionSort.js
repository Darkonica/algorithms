function findSmallest(arr) {
  console.log("!!arr", arr);
  return arr.indexOf(Math.min(...arr));
}

function selectionSort(arr) {
  const newArr = [];
  let initArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    const smallest = findSmallest(initArr);
    console.log(smallest);
    newArr.push(initArr[smallest]);
    initArr.splice(smallest, 1);
    console.log(initArr);
  }

  return newArr;
}

const testArray = [8, 9, 92, -45, 2, 91, 13, 0, 1, 2, 92];

const result = selectionSort(testArray);

console.log(result);
