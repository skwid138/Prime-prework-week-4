/**
Object Constructors
**/
// Write a constructor function to create 'Book' objects with the same four properties as above.
// Write the constructor function here:
function Book(title, author, pageCount, haveRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}

// Create 3 new 'Book' objects using this constructor function. Store them in an array.
function createBooksWithConstructor() {

  var book1 = new Book("test", "someone", 200, true);
  var book2 = new Book("test2", "someone else", 300, true);
  var book3 = new Book("test3", "someone else again", 400, false);

  // In this function, create 3 new 'Book' objects by using the constructor function you wrote above.
  // Write code here:

  var books = [book1, book2, book3];

  // return our array of books
  return books;
}
