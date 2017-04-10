
var https = require('https');

module.exports = function getHTML (options, callback) {

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

};