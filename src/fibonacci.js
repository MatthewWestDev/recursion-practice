function fibLoop(n) {
  if (n == 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  let fibArr = [0, 1, 1];
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n - 1; i++) {
    let c = a + b;
    fibArr.push(c);
    a = b;
    b = c;
  }
  return fibArr;
}

console.log(fibLoop(8));

function fibRecur(n) {
  if (n == 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  let result = fibRecur(n - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
}
console.log(fibRecur(8));
