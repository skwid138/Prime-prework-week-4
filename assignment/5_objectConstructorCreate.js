//Create books again, this time with object constructor syntax
// Write a constructor function to create 'Book' objects with the same four properties as above.
// Write the constructor function here:
function Book(title, author, pageCount, haveRead) {
  // Write code here
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}

function createBooksWithConstructor() {
  // In this function, create 3 new 'Book' objects by using the constructor function you wrote above.
  // Write code here:
  // for (let i = 0; i < 3; i ++) {
  //   var book = 'book';
  //   book += i.toString();
  //   book = new Book('Unstoppable','Bill Nye', 352, true)
  //   }
 var bookOne = new Book('Unstoppable','Bill Nye', 352, true);
 var bookTwo = new Book('Origins: Fourteen Billion Years of Cosmic Evolution', 'Neil DeGrasse Tyson', 352, true);
 var bookThree = new Book('The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution', 'Walter Isaacson', 560, true);
  // Store these new books in an array called books.
  // Write code here
  var books = [
    bookOne,
    bookTwo,
    bookThree
  ];
  // return our array of books
  return books;
}

// call createBooksWithConstructor and console log the return
console.log(createBooksWithConstructor());
