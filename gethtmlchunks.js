
function getAndPrintHTMLChunks () {
  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // Call the get method, pass the options needed to get the data and give the callback the response.
  https.get(requestOptions, function (response) {

    response.setEncoding('utf-8');

    // Show the chunks of data as they are STREAMING in.
    response.on('data', function(data) {
      console.log("Chunk ---> " + data + "\n")
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

console.log(getAndPrintHTMLChunks());