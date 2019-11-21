// задачи для собесов

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6, 7];

function findDuplicates(a, b) {
  const obj = a.reduce((acc, item) => {
    acc[item] = true;
    return acc;
  }, {});

  console.log(obj);
  return b.filter(item => obj[item]);
}

console.log(findDuplicates(a, b));