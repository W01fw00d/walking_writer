function init() {
  const api = new APIClient();
  const template = new PhraseTemplate();

  api.getFullSet(5).then(data => {
    paintOnHtml(
      template.basic(data)
    );
  });
}

function paintOnHtml(text) {
  document.getElementById("text").innerHTML = text;
}

window.onload = init;
