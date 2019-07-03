const API_URL = 'https://api.noopschallenge.com/wordbot';
const API_URL_COUNT = 'https://api.noopschallenge.com/wordbot?count=';

const ERROR_MSG = 'API call failed';

class APIClient {
  getFullSet(n) {
    let words = {};

    const promise = new Promise((resolve, reject) => {

    this.getNouns(n)
      .then(data => {
        words.nouns = JSON.parse(data).words;

        this.getVerbs(n).then(data => {
          words.verbs = JSON.parse(data).words;

          this.getAdjectives(n).then(data => {
            words.verbs = JSON.parse(data).words;

            this.getAdjectives(n).then(data => {
              words.adjectives = JSON.parse(data).words;

              this.getAdverbs(n).then(data => {
                words.adverbs = JSON.parse(data).words;

                this.getAdverbs(n).then(data => {
                  words.adverbs = JSON.parse(data).words;

                  this.getPrepositions(n).then(data => {
                    words.adverbs = JSON.parse(data).words;

                    resolve(words);
                  })
                })
              })
            })
          })
        })
      }).catch(error => {console.log(ERROR_MSG, error);});

    });

    return promise;
  }

  getNouns(n) {
    return this.callApi(API_URL_COUNT + n + '&set=nouns');
  }

  getVerbs(n) {
    return this.callApi(API_URL_COUNT + n + '&set=verbs');
  }

  getAdjectives(n) {
    return this.callApi(API_URL_COUNT + n + '&set=adjectives');
  }

  getAdverbs(n) {
    return this.callApi(API_URL_COUNT + n + '&set=adverbs');
  }

  getPrepositions(n) {
    return this.callApi(API_URL_COUNT + n + '&set=prepositions');
  }

  callApi(url) {
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
}
