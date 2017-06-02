function arrayReverser(arr) {
  // Copy items from the array called arr to a new array called reversedArray, reversing the order of elements
  // The last element on arr should become the first in reversedArray
  // Do not use Array.reverse()!

  // Write the code here
  var reversedArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  // return our reversed array
  return reversedArray;
}
