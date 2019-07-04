function init() {
  const api = new Wordbot();
  const template = new PhraseTemplate();

  api.getFullSet(5).then(words => {
    paintOnHtml([
      template.basic(words),
      template.complete(words)
    ]);
  });
}

function paintOnHtml(texts) {
  let htmlToInsert = '';

  texts.forEach((text) => {
    htmlToInsert += this.insertIntoDiv(text);
  })

  document.getElementById("text").innerHTML = htmlToInsert;
}

function insertIntoDiv(content) {
  return '<div class="phrase">' + content + '</div>';
}

window.onload = init;
