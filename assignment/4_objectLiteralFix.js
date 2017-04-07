function fixLiteralSyntax() {
  // Fix the problems with our object literal
  /**
  hiddenFiguresMovie = {
      name : Hidden Figures;
      runtime : 127 mins;
      releaseYear = 2016;
      "director" : "Theodore Melfi".
  }
  **/

  // write fixed code here
  var hiddenFiguresMovie = {
      name: "Hidden Figures",
      runtime: 127,
      releaseYear: 2016,
      director: "Theodore Melfi"
  };

  // return corrected object
  return hiddenFiguresMovie;
}
