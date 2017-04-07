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
