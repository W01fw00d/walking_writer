class PhraseTemplate {
  basic(w) {
    return this.firstUpperCase(w.nouns[0]) + ' ' + w.verbs[0];
  }

  firstUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
