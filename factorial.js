function factorial(number) {
  if (number <= 0) {
    return "Error";
  }
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

const result = factorial(0);

console.log(result);
