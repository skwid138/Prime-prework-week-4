function fixLiteralSyntax() {
  // Fix the problems with our object literal

  hiddenFiguresMovie = {
      name : 'Hidden Figures', // put the string in '', removed semicolon, and added comma
      runtime : '127 mins', // put the string in '', removed semicolon, and added comma
      releaseYear : 2016, // removed =, added colon, removed semicolon and added comma
      director : "Theodore Melfi"  // removed '.' after the string and " from key
  }; // added semicolon


  // return corrected object
  return hiddenFiguresMovie;
}

// call fixLiteralSyntax and console log the return
console.log(fixLiteralSyntax());
