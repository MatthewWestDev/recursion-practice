function mergeSort(array) {
  console.log("array: ", array);
  // if (only one number) quit
  if (array.length <= 1) {
    return array;
  }
  // split the array in half
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  console.log("left: ", left, " right: ", right);
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
      console.log("left< shift & push to result: ", result);
    } else {
      result.push(right.shift());
      console.log("right< shift & push to result: ", result);
    }
  }
  while (left.length) {
    result.push(left.shift());
    console.log("left push to result: ", result);
  }

  while (right.length) {
    result.push(right.shift());
    console.log("right push to result: ", result);
  }
  return result;
};
// sort the left half of the array

// sort the right half of the array
// merge the two arrays together

// console.log(mergeSort([5, 3]));
console.log("result: ", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("result: ", mergeSort([105, 79, 100, 110]));
