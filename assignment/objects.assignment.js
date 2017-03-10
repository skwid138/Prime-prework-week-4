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
  hiddenFiguresMovie = {
      name : Hidden Figures;
      runtime : 127 mins;
      releaseYear = 2016;
      "Director" : "Theodore Melfi".
  }
  **/

  // write fixed code here
  var hiddenFiguresMovie = {
      name: Hidden Figures,
      runTime: 127,
      releaseYear: 2016,
      director: "Theodore Melfi"
  };

  // return corrected object
  return hiddenFiguresMovie;
}


/**
Object Constructors
**/


// Write a constructor function to create 'Book' objects with the same properties as above.
function Book(title, author, pageCount, haveRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}

// Write a constructor function to create 'Book' objects with the same four properties as above.
// Write the constructor function here:




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

// -- DON'T TOUCH CODE BELOW --
// module.exports = {
//   threeBooks: threeBooks,
//   fixLiteralSyntax: fixLiteralSyntax,
//   Book: Book,
//   createBooksWithConstructor: createBooksWithConstructor
// };
