function arrayReverser(arr) {
  // Copy items from the array called arr to a new array called reversedArray, reversing the order of elements
  // The last element on arr should become the first in reversedArray
  // Do not use Array.reverse()!
  var reversedArray = [];
  // Write the code here
  for (var i = arr.length - 1; i >= 0; i --) {
    reversedArray.push(arr[i]);
  }
  // return our reversed array
  return reversedArray;
}

// call arrayReverser and console log the return
console.log(arrayReverser([1, 2, 3, 4]));

// console.log(arrayReverser(['he', 'she', 'they', 'muffin']));
