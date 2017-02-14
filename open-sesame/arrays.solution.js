/**
Array Review
**/

function createArray() {
  // create an array with 6 elements (numbers and strings only)
  var myArray = [1, 3, 5, 5, 900, 8.8];

  // return this array
  return myArray;
}

function loopArray(array) {
  // set up our array
  // var myArray = createArray();
  var conString = '';

  // concatentate all the values together using a loop
  // @TODO Change to console.logs

  // write code here
  for(var i = 0; i < array.length; i++) {
    conString += array[i];
  }

  // return concatentated values
  return conString;
}

// implement array reverser function
function arrayReverser(arr) {
  // copy items from arr to revArray in reverse order.
  // write the code here
  var revArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArray.push(arr[i]);
  }

  // return our reversed array
  return revArray;
}

module.exports = {
  createArray: createArray,
  loopArray: loopArray,
  arrayReverser: arrayReverser
};
