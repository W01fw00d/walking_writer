const ARTICLES = ['the', 'this', 'that', 'your', 'my', 'his', 'her', 'their'];

class PhraseTemplate {
  basic(w) {
    return this.firstUpperCase(w.nouns[0]) + ' ' + w.verbs[0] + '.';
  }

  complete(w) {
    return this.firstUpperCase(this.getOne(ARTICLES)) + ' '
      + w.adjectives[0] + ' ' + w.nouns[0] + ' '
      + w.verbs[0] + ' ' + w.adverbs[0] + '.';
  }

  firstUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getOne(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
