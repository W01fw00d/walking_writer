const API_URL = 'https://api.noopschallenge.com/wordbot';

function init() {
  let verb;

  getAVerb()
    .then(data => {
      verb = JSON.parse(data).words[0];

      console.log(verb);
    })
    .catch(error => {
      console.log('API call failed', error);
    });

}

function getAVerb() {
  return callApi(API_URL + '?set=verbs');
}

function callApi(url) {
  let request = obj => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(obj.method || "GET", obj.url);
      if (obj.headers) {
          Object.keys(obj.headers).forEach(key => {
              xhr.setRequestHeader(key, obj.headers[key]);
          });
      }
      xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
              resolve(xhr.response);
          } else {
              reject(xhr.statusText);
          }
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(obj.body);
    });
  };

  return request({url: url});
}

window.onload = init;
