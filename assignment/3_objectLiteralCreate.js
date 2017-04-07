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
