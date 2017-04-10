
function getHTML (options, callback) {

  var https = require('https');
  var receivedData = "";

  // Call the get method, pass the options needed to get the data and give the callback the response.
  https.get(options, function (response) {

    response.setEncoding('utf-8');

    // Show the chunks of data as they are STREAMING in.
    response.on('data', function(data) {
      receivedData += data;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      // Call the callback function
      callback(receivedData);

    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

console.log(getHTML(requestOptions, printHTML));
