/**
Object Literals
**/
function threeBooks() {
  // Create 3 book objects with object literal syntax. Books should have properties for title, author, and pageCount
  var hp = {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J K Rowling",
    pageCount: 357
  };

  var cubaLibre = {
    title: "Cuba Libre",
    author: "Elmore Leonard",
    pageCount: 300
  };

  var snowCrash = {
    title: "Snow Crash",
    author: "Neal Stephenson",
    pageCount: 390
  };

  // Add a property of haveRead to each book object you created. This should be set to true or false
  hp.haveRead = true;
  cubaLibre.haveRead = false;
  snowCrash.haveRead = true;

  // Store these objects in an array
  var books = [hp, cubaLibre, snowCrash];

  // return this array
  return books;
}

function fixLiteralSyntax() {
  // Fix the problems with our object literal
  /**
  avengersMovie = {
      name : Avengers;
      runtime : 143 mins;
      releaseYear = 2012;
      "Director" : "Joss Whedon".
  }
  **/

  // write fixed code here
  var avengersMovie = {
      name: "Avengers",
      runTime: 143,
      releaseYear: "2012",
      director: "Joss Whedon"
  };

  // return corrected object
  return avengersMovie;
}


/**
Object Constructors
**/

// Write a constructor function to create Book objects with the same properties as above.
function Book(title, author, pageCount, haveRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}

// Create 3 new books using this constructor function. Store them in an array.
function createBooksWithConstructor() {
  var book1 = new Book("test", "someone", 200, true);
  var book2 = new Book("test2", "someone else", 300, true);
  var book3 = new Book("test3", "someone else again", 400, false);

  var books = [book1, book2, book3];

  // return our array of books
  return books;
}

// -- DON'T TOUCH CODE BELOW --
module.exports = {
  threeBooks: threeBooks,
  fixLiteralSyntax: fixLiteralSyntax,
  Book: Book,
  createBooksWithConstructor: createBooksWithConstructor
};
