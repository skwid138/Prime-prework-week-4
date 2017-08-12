function concatArrayToString(array) {
  var conString = '';
  // Write code here: Concatentate all of the values in array together using a loop
  // For example: if the array given is [1, 2, 3, 4] the conString should be '1234'

  for (var i = 0; i < array.length; i++) {
    conString += array[i];
  }

  // return concatentated values
  return conString;
}

// call concatArrayToString and console log the return
console.log(concatArrayToString([1, 2, 3, 4]));

// console.log(concatArrayToString(['he', 'she', 'they', 'muffin']));
