// var chai = require('chai');
// var objects = require('../assignment/objects.assignment');
// var sinon = require('sinon');

describe('basemode Testing Object Review', function() {

  describe('the threeBooks function', function() {
    it('should return 3 objects in an array', function() {
      var books = threeBooks();
      chai.expect(books).to.have.lengthOf(3);
    });

    it('should return book objects with 4 specific properties', function() {
      var books = threeBooks();
      chai.expect(books[0]).to.have.ownProperty('title');
      chai.expect(books[0]).to.have.ownProperty('author');
      chai.expect(books[0]).to.have.ownProperty('pageCount');
      chai.expect(books[0]).to.have.ownProperty('haveRead');
    });
    it('should have number value for pageCount property', function() {
      var books = threeBooks();
      chai.expect(books[0].pageCount).to.be.a('number');
    });
    it('should have boolean value for haveRead property', function() {
      var books = threeBooks();
      chai.expect(books[0].haveRead).to.be.a('boolean');
    });

  });

  describe('the fixLiteralSyntax function', function() {
    it('should return an object with 4 specific properties', function() {
      var movie = fixLiteralSyntax();
      chai.expect(movie).to.have.ownProperty('name');
      chai.expect(movie).to.have.ownProperty('runTime');
      chai.expect(movie).to.have.ownProperty('releaseYear');
      chai.expect(movie).to.have.ownProperty('director');
    });
    it('should have number and string types', function() {
      var movie = fixLiteralSyntax();
      chai.expect(movie.name).to.be.a('string');
      chai.expect(movie.director).to.be.a('string');
      chai.expect(movie.releaseYear).to.have.to.be.a('number');
    });
    it('NOT REQUIRED but change runTime from string to number', function() {
      var movie = fixLiteralSyntax();
      chai.expect(movie.runTime).to.be.a('number');

    });

  });

  describe('the Book constructor function', function() {
    it('should return an object with 4 specific properties', function() {
      var book = new Book('hp', 'jk rowling', 444, true);
      chai.expect(book).to.have.ownProperty('title');
      chai.expect(book).to.have.ownProperty('author');
      chai.expect(book).to.have.ownProperty('pageCount');
      chai.expect(book).to.have.ownProperty('haveRead');
    });

    it('should return an object with 4 values', function() {
      var book = new Book('hp', 'jk rowling', 444, true);
      chai.expect(book.title).to.equal('hp');
      chai.expect(book.author).to.equal('jk rowling');
      chai.expect(book.pageCount).to.equal(444);
      chai.expect(book.haveRead).to.equal(true);

      var nextBook = new Book(44, 'kris');
      chai.expect(nextBook.title).to.equal(44);
      chai.expect(nextBook.author).to.equal('kris');
      chai.expect(nextBook.pageCount).to.be.undefined;
      chai.expect(nextBook.haveRead).to.be.undefined;
    });
  });

  /**
    Set up a function spy using Sinon. This will count how many times the Book constructor is calledThrice
  **/
  // var constructorSpy;
  //
  // before('running constructor tests', function() {
  //   constructorSpy = sinon.spy(Book);
  //   // constructorSpy()
  // });
  //
  // after(function() {
  //   constructorSpy.restore();
  // });

  describe('the createBooksWithConstructor function', function() {
    //TODO:Get this test to work with spy. It worked before adding Karma.
    // it('should call the Book constructor 3 times', function() {
    //   var books = createBooksWithConstructor();
    //
    //   // sinon spy counts the number of times the constructor was called
    //   chai.expect(constructorSpy.calledThrice).to.be.true;
    // });

    it('should return 3 objects in an array', function() {
      var books = createBooksWithConstructor();
      chai.expect(books).to.have.lengthOf(3);
    });

    it('should return book objects with 4 specific properties', function() {
      var books = createBooksWithConstructor();
      chai.expect(books[0]).to.have.ownProperty('title');
      chai.expect(books[0]).to.have.ownProperty('author');
      chai.expect(books[0]).to.have.ownProperty('pageCount');
      chai.expect(books[0]).to.have.ownProperty('haveRead');
    });
    it('should have number value for pageCount property', function() {
      var books = createBooksWithConstructor();
      chai.expect(books[1].pageCount).to.be.a('number');
    });
    it('should have boolean value for haveRead property', function() {
      var books = threeBooks();
      chai.expect(books[1].haveRead).to.be.a('boolean');
    });
  });

});
