
function getAndPrintHTMLChunks () {
  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf-8');

    response.on('data', function(data) {
      console.log("Chunk ---> " + data + "\n")
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

console.log(getAndPrintHTMLChunks());