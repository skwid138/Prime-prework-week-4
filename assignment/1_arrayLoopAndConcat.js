function concatArrayToString(array) {
  var conString = '';

  // concatentate all the values together using a loop
  // write code here
  for(var i = 0; i < array.length; i++) {
    conString += array[i];
  }

  // return concatentated values
  return conString;
}
