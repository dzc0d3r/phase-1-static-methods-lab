class Formatter {
  constructor(word) {
    this.word = word
  }
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() +
      string.slice(1)
  }
  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(string) {
    const stopWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return string.split(" ").map((word, index) => {
      const lowerCaseWord = word.toLowerCase();
      if (stopWords.includes(lowerCaseWord) && index != 0) {
        return lowerCaseWord;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join(" ")
  }
}