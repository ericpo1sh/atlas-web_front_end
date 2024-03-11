function createElement(data) {
  var paragraphElement = document.createElement('p');
  paragraphElement.textContent = data;
  document.body.appendChild(paragraphElement);
}

function queryWikipedia(callback) {
  var request = new XMLHttpRequest();
  const method = "GET";
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
  request.open(method, url);
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      const status = request.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        callback(JSON.parse(request.responseText).query.pages[21721040].extract)
      } else {
        console.error(`Couldn't fetch, Status Code: ${status}`);
      }
    }
  };
  request.send();
}

queryWikipedia(createElement);
