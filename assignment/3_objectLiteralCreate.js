// Create books with object literal syntax
function threeBooks() {
  // Create 3 book objects with object literal syntax. Books should have properties for title, author, and pageCount.
  // Write code here:
  var bookOne = {
    title : 'Unstoppable',
    author : 'Bill Nye',
    pageCount : 352
  };
  var bookTwo = {
    title : 'Origins: Fourteen Billion Years of Cosmic Evolution',
    author : 'Neil DeGrasse Tyson',
    pageCount : 352
  };
  var bookThree = {
    title : 'The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution',
    author : 'Walter Isaacson',
    pageCount : 560
  };
  // Add a property of haveRead to each book object you created. This should be set to true or false.
  // Write code here:
  bookOne.haveRead = true;
  bookTwo.haveRead = true;
  bookThree.haveRead = true;
  // Store these objects in an array called books.
  // Write code here:
  var books = [bookOne, bookTwo, bookThree];
  // return this array
  return books;
}

// call threeBooks and console log the return
console.log(threeBooks());
